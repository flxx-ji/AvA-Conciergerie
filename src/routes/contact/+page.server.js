
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';


// 👉 on initialise resend avec ta clé
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Actions = handlers des <form method="POST"> de *cette* page.
 * Le résultat est accessible dans la page via la prop `form`.
 *
 * - `return { success: true }`  -> succès (ex: pour afficher une alerte verte)
 * - `return fail(status, data)` -> échec contrôlé + renvoi de `data` à la page
 */
/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
  /**
   * Handler par défaut appelé au submit du formulaire.
   * @param {import('@sveltejs/kit').RequestEvent} param0
   *   `request`  -> accès au body / formData
   *   `fetch`    -> fetch côté serveur (utile pour appeler une API tierce)
   *   `locals`   -> état serveur (sessions, user, etc.) si tu en ajoutes plus tard
   */
  default: async ({ request /*, fetch, locals */ }) => {
    // -- Récupération et normalisation des champs du form
    const form = await request.formData();
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    // -- Honeypot anti-spam : champ caché "website" dans la page.
    // Si un bot le remplit, on ignore silencieusement (pas d’info aux robots).
    const honeypot = String(form.get('website') ?? '').trim();
    if (honeypot) return { success: true };

    // -- Validation minimale côté serveur (toujours valider côté serveur)
    // Tu peux renforcer ici (longueurs max, pattern d’e-mail, rate limiting, etc.)
    if (!name || !email || !message) {
      return fail(400, {
        error: 'Tous les champs sont obligatoires.',
        // On renvoie les valeurs pour re-préremplir les inputs côté page
        values: { name, email, message }
      });
    }

    // -- Traitement métier (à externaliser rapidement dans un "service")
    // Exemple d’architecture propre :
    //   src/lib/server/services/contact.service.js
    //   -> export async function sendContactMessage({ name, email, message, fetch }) { ... }
    //
    // Puis ici :
    //   import { sendContactMessage } from '$lib/server/services/contact.service.js';
    //   const { ok, error } = await sendContactMessage({ name, email, message, fetch });
    //   if (!ok) return fail(500, { error, values: { name, email, message } });

    // Pour l’instant : log serveur pour vérifier la réception.
    try {
  await resend.emails.send({
    from: 'AvA Conciergerie <contact@avaconciergerie.fr>',
    to: 'contact@avaconciergerie.fr',
    subject: `Nouveau message de ${name}`,
    html: `
      <h2>Nouveau message</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong></p>
      <p>${message}</p>
    `
  });

  return { success: true };

} catch (error) {
  console.error(error);

  return fail(500, {
    error: "Erreur lors de l'envoi du message.",
    values: { name, email, message }
  });
}
  }
};
