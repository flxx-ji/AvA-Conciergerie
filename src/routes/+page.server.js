import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

export const prerender = false;

export const actions = {
  default: async ({ request }) => {

    console.log('FORM SUBMITTED 🔥');

    const resend = new Resend(RESEND_API_KEY);

    const form = await request.formData();

    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    const honeypot = String(form.get('website') ?? '').trim();
    if (honeypot) return { success: true };

    if (!name || !email || !message) {
      return fail(400, {
        error: 'Tous les champs sont obligatoires.',
        values: { name, email, message }
      });
    }

    try {
      const result = await resend.emails.send({
        from: 'contact@avaconciergerie.fr',
        to: ['contact@avaconciergerie.fr'],
        subject: `Nouveau message de ${name}`,
        replyTo: email,
        html: `
          <h2>Nouveau message</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p>${message}</p>
        `
      });

      console.log('RESEND RESULT:', result);

      return { success: true }; // ✅ IMPORTANT

    } catch (error) {
      console.error('ERREUR RESEND:', error);

      return fail(500, {
        error: "Erreur lors de l'envoi",
        values: { name, email, message }
      });
    }
  }
};

 

// import { fail } from '@sveltejs/kit';

// export const prerender = false;

// export const actions = {
//   default: async ({ request }) => {

//     console.log('FORM SUBMITTED 🔥');

//     const form = await request.formData();

//     const name = String(form.get('name') ?? '').trim();
//     const email = String(form.get('email') ?? '').trim();
//     const message = String(form.get('message') ?? '').trim();

//     const honeypot = String(form.get('website') ?? '').trim();
//     if (honeypot) return { success: true };

//     if (!name || !email || !message) {
//       return fail(400, {
//         error: 'Tous les champs sont obligatoires.',
//         values: { name, email, message }
//       });
//     }

//     try {

//       // 🔥 FAKE RESEND (remplacement temporaire)
//       const result = {
//         fake: true,
//         message: 'Simulation envoi OK'
//       };

//       console.log('FAKE RESULT:', result);

//       return { success: true }; // ✅ IMPORTANT

//     } catch (error) {
//       console.error('ERREUR TEST:', error);

//       return fail(500, {
//         error: "Erreur lors du test",
//         values: { name, email, message }
//       });
//     }
//   }
// };