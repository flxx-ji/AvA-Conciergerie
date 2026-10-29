
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

// La page utilise une action serveur : pas de prérendu statique.
export const prerender = false;

// ==============================
// SÉCURITÉ : ÉCHAPPEMENT HTML
// ==============================

// Empêche le contenu saisi dans le formulaire
// d'être interprété comme du HTML dans l'email.
function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    return replacements[character];
  });
}

// ==============================
// ACTION DU FORMULAIRE
// ==============================

export const actions = {
  default: async ({ request }) => {

    // Récupération des données envoyées.
    const form = await request.formData();

    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    // ==============================
    // 1. HONEYPOT ANTI-ROBOT
    // ==============================

    // Ce champ doit rester vide.
    // Un robot qui le remplit est ignoré.
    const honeypot = String(form.get('website') ?? '').trim();

    if (honeypot) {
      // On simule une réussite pour ne pas informer le robot.
      return { success: true };
    }

    // ==============================
    // 2. VALIDATION DES CHAMPS
    // ==============================

    if (!name || !email || !message) {
      return fail(400, {
        error: 'Tous les champs sont obligatoires.'
      });
    }

    // Vérification simple du format email côté serveur.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return fail(400, {
        error: 'Veuillez saisir une adresse email valide.'
      });
    }

    // Limites pour éviter les contenus excessivement longs.
    if (
      name.length > 100 ||
      email.length > 254 ||
      message.length > 5000
    ) {
      return fail(400, {
        error: 'Un ou plusieurs champs dépassent la longueur autorisée.'
      });
    }

    // ==============================
    // 3. PROTECTION DU CONTENU HTML
    // ==============================

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message)
      .replace(/\r\n|\r|\n/g, '<br />');

    // ==============================
    // 4. ENVOI VIA RESEND
    // ==============================

    try {
      const resend = new Resend(RESEND_API_KEY);

      const result = await resend.emails.send({
        from: 'contact@avaconciergerie.fr',
        to: ['contact@avaconciergerie.fr'],

        // Le nom est utilisé comme texte dans le sujet.
        subject: `Nouveau message de ${name}`,

        // Permet de répondre directement au visiteur.
        replyTo: email,

        html: `
          <h2>Nouvelle demande de devis</h2>

          <p>
            <strong>Nom :</strong> ${safeName}
          </p>

          <p>
            <strong>Email :</strong> ${safeEmail}
          </p>

          <p>
            <strong>Message :</strong>
          </p>

          <p>${safeMessage}</p>
        `
      });

      // Resend peut retourner une erreur sans lancer d'exception.
      if (result.error) {
        console.error('ERREUR RESEND:', result.error);

        return fail(500, {
          error: "Le message n'a pas pu être envoyé. Veuillez réessayer."
        });
      }

      // L'API a accepté le message.
      return { success: true };

    } catch (error) {
      console.error('ERREUR ENVOI:', error);

      return fail(500, {
        error: "Une erreur est survenue lors de l'envoi."
      });
    }
  }
};
