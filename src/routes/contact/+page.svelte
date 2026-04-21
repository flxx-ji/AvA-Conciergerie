<script>
  import { enhance } from '$app/forms';
  import { writable } from 'svelte/store';
  import { contacts } from '$lib/config/app.js';

  export let form;

  const loading = writable(false);

  const telHref = `tel:${contacts.phoneRaw}`;
  const waHref = `https://wa.me/${contacts.whatsapp}?text=Bonjour,%20je%20souhaite%20un%20devis`;

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
      Confiez-nous votre logement et maximisez vos revenus sans effort.
    </p>
  </div>

  <!-- 🖼 IMAGE -->
  <div class="contact-visual">
    <img src="/images/pexels-achraf-borkadi-salon-34086242.jpg" alt="Appartement Airbnb">
  </div>

  <!-- 🔥 CTA -->
  <div class="quick-contact">

    <a href={waHref}
       target="_blank"
       class="contact-main">
      💬 Obtenir un devis sur WhatsApp
      <span>Réponse rapide</span>
    </a>

    <div class="secondary">
      <a href={telHref}>📞 Appeler</a>
      <a href={`mailto:${contacts.email}`}>✉️ Email</a>
    </div>

  </div>

  <!-- 💡 POURQUOI -->
  <div class="why-contact">
    <h2>Pourquoi nous contacter ?</h2>

    <div class="why-grid">
      <div>
        <h3>Gain de temps</h3>
        <p>On s’occupe de tout, de A à Z.</p>
      </div>

      <div>
        <h3>Plus de revenus</h3>
        <p>Optimisation des prix et du taux d’occupation.</p>
      </div>

      <div>
        <h3>Sérénité totale</h3>
        <p>Gestion complète sans stress.</p>
      </div>
    </div>
  </div>

  <!-- 🔥 FORM -->
  <form method="POST" action="?/default" use:handleEnhance class="contact-form">

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

    <!-- 🔒 HONEYPOT -->
    <div class="honeypot">
      <input type="text" name="website" tabindex="-1" autocomplete="off" />
    </div>

    <button type="submit" disabled={$loading}>
      {#if $loading}
        Envoi en cours...
      {:else}
        Demander mon devis gratuit
      {/if}
    </button>

    <p class="hint">⏱ Réponse en moins de 24h</p>

    {#if form?.error}
      <p class="error">{form.error}</p>
    {/if}

    {#if form?.success}
      <p class="success">
        ✅ Votre message a bien été envoyé.
      </p>
    {/if}

  </form>

  <!-- 🔥 TRUST -->
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
  margin-bottom: 30px;
}

.hero-contact h1 {
  font-size: 2.5rem;
  color: var(--text-dark);
}

.hero-contact p {
  color: var(--text-soft);
}

/* 🖼 IMAGE */
.contact-visual {
  text-align: center;
  margin: 30px 0;
}

.contact-visual img {
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
}

/* 🔥 CTA */
.quick-contact {
  text-align: center;
  margin-bottom: 40px;
}

.contact-main {
  display: inline-block;
  background: #25D366;
  color: white;
  padding: 18px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
}

.secondary {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* 🔥 WHY */
.why-contact {
  text-align: center;
  margin-bottom: 40px;
}

.why-contact h2 {
  color: var(--text-dark);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.why-grid div {
  background: var(--white);
  border: 1px solid var(--beige-main);
  padding: 20px;
  border-radius: 12px;
}

/* 🔥 FORM */
.contact-form {
  background: var(--beige-soft);
  padding: 30px;
  border-radius: 16px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.field {
  display: flex;
  flex-direction: column;
}

input, textarea {
  padding: 14px;
  border-radius: 10px;
  border: 1px solid var(--beige-dark);
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--text-dark);
}

/* 🔥 BUTTON */
button {
  margin-top: 20px;
  background: var(--text-dark);
  color: white;
  padding: 16px;
  border-radius: 50px;
}

/* 🔥 TEXT */
.hint {
  font-size: 0.8rem;
  opacity: 0.6;
  text-align: center;
}

.error {
  color: red;
}

.success {
  color: green;
}

/* 🔥 TRUST */
.trust {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.honeypot {
  position: absolute;
  left: -9999px;
}

/* 📱 MOBILE */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }
}

</style>