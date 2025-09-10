import { fail } from "@sveltejs/kit";
const actions = {
  /**
   * Handler par défaut appelé au submit du formulaire.
   * @param {import('@sveltejs/kit').RequestEvent} param0
   *   `request`  -> accès au body / formData
   *   `fetch`    -> fetch côté serveur (utile pour appeler une API tierce)
   *   `locals`   -> état serveur (sessions, user, etc.) si tu en ajoutes plus tard
   */
  default: async ({
    request
    /*, fetch, locals */
  }) => {
    const form = await request.formData();
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const honeypot = String(form.get("website") ?? "").trim();
    if (honeypot) return { success: true };
    if (!name || !email || !message) {
      return fail(400, {
        error: "Tous les champs sont obligatoires.",
        // On renvoie les valeurs pour re-préremplir les inputs côté page
        values: { name, email, message }
      });
    }
    console.log("[contact] received", { name, email, message });
    return { success: true };
  }
};
export {
  actions
};
