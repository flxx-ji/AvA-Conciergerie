<script>
  import { enhance } from '$app/forms';
  import { writable } from 'svelte/store';

  export let form;

  const loading = writable(false);

  function handleEnhance(formElement) {
    return enhance(formElement, () => {
      loading.set(true);

      return async ({ update }) => {
        await update();
        loading.set(false);
      };
    });
  }
</script>
<section class="contact">

  <!-- 🔥 HERO -->
  <div class="hero-contact">
    <h1>Parlons de votre bien</h1>
    <p>
      Une gestion simple, efficace et rentable.
    </p>
  </div>

  <!-- 🔥 CTA PRIORITAIRE -->
  <div class="quick-contact">

    <a href="https://wa.me/33766665848?text=Bonjour,%20je%20souhaite%20un%20devis"
       target="_blank"
       class="contact-main">
      💬 Discuter sur WhatsApp
      <span>Réponse rapide</span>
    </a>

    <div class="secondary">
      <a href="tel:+33766665848">📞 Appeler</a>
      <a href="mailto:contact@ava-conciergerie.fr">✉️ Email</a>
    </div>

  </div>

  <!-- 🔥 FORM -->
  <form method="POST" use:handleEnhance class="contact-form">

    <div class="grid">
      <div class="field">
        <label for="name">Nom</label>
        <input
          id="name"
          name="name"
          placeholder="Votre nom"
          required
          value={form?.values?.name ?? ''} />
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Votre email"
          required
          value={form?.values?.email ?? ''} />
      </div>
    </div>

    <div class="field">
      <label for="message">Décrivez votre besoin</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Expliquez votre besoin..."
        required>{form?.values?.message ?? ''}</textarea>
    </div>

    <!-- 🔥 HONEYPOT -->
    <div class="honeypot" aria-hidden="true">
      <label for="website">Ne pas remplir</label>
      <input
        id="website"
        type="text"
        name="website"
        tabindex="-1"
        autocomplete="off" />
    </div>

    <button type="submit" disabled={$loading}>
      {#if $loading}
        Envoi en cours...
      {:else}
        Demander un devis
      {/if}
    </button>

    {#if form?.error}
      <p class="error">{form.error}</p>
    {/if}

    {#if form?.success}
      <p class="success">
        ✅ Votre message a bien été envoyé. Nous vous répondons rapidement.
      </p>
    {/if}

  </form>

  <!-- 🔥 RASSURANCE -->
  <div class="trust">
    <p>✔ Réponse rapide</p>
    <p>✔ Service personnalisé</p>
    <p>✔ Intervention à Caen + 10km</p>
  </div>

</section>

<style>

/* 🔥 GLOBAL */
.contact {
  padding: 80px 20px;
  max-width: 900px;
  margin: auto;
}

/* 🔥 HERO */
.hero-contact {
  text-align: center;
  margin-bottom: 40px;
}

.hero-contact h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.hero-contact p {
  color: #666;
  margin-top: 10px;
}

/* 🔥 QUICK CONTACT */
.quick-contact {
  text-align: center;
  margin-bottom: 50px;
}

.contact-main {
  display: inline-block;
  background: #25D366;
  color: white;
  padding: 18px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: 0.3s;
}

.contact-main span {
  display: block;
  font-size: 0.8rem;
  opacity: 0.9;
}

.contact-main:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.secondary {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.secondary a {
  color: #444;
  text-decoration: none;
  font-size: 0.9rem;
}

/* 🔥 FORM */
.contact-form {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grid {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.field {
  flex: 1;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #555;
}

input, textarea {
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #041D80;
  box-shadow: 0 0 0 2px rgba(4, 29, 128, 0.1);
}

/* 🔥 BOUTON */
button {
  background: black;
  color: white;
  padding: 16px;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: translateY(-2px);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 🔥 HONEYPOT */
.honeypot {
  position: absolute;
  left: -9999px;
}

/* 🔥 TRUST */
.trust {
  margin-top: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.trust p {
  font-size: 0.9rem;
  color: #555;
}

/* 🔥 FEEDBACK */
.error {
  color: red;
}

.success {
  color: green;
  font-weight: 500;
}

/* 📱 MOBILE */
@media (max-width: 768px) {
  .grid {
    flex-direction: column;
  }
}

</style>