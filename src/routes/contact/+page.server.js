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
      console.log('API KEY:', RESEND_API_KEY);

      const result = await resend.emails.send({
        from: 'onboarding@resend.dev', // ⚠️ TEST ONLY
        to: ['delivered@resend.dev'], // 🔥 inbox test Resend
        subject: 'TEST AVA',
        html: `
          <h2>TEST OK</h2>
          <p>Nom: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `
      });

      console.log('RESEND RESULT:', result); // 🔥 ULTRA IMPORTANT

      return { success: true };

    } catch (error) {
      console.error('ERREUR RESEND:', error);

      return fail(500, {
        error: "Erreur envoi test",
        values: { name, email, message }
      });
    }
  }
};