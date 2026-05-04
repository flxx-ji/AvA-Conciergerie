<script lang="ts">
  import { enhance } from '$app/forms';
  import { writable } from 'svelte/store';
  import { contacts } from '$lib/config/app.js';

  let showMessage = false;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  export let form;

  $: if (form) {
    if (form.success || form.error) {
      showMessage = true;

      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        showMessage = false;
      }, 15000);
    }
  }

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

<!-- ================= SEO ================= -->
<svelte:head>
  <title>Conciergerie Airbnb Caen | AvA Conciergerie</title>

  <meta name="description" content="Conciergerie Airbnb à Caen et en Normandie. Gestion complète, optimisation des revenus, service personnalisé." />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="AvA Conciergerie Caen" />
  <meta property="og:description" content="Gestion Airbnb complète à Caen et Normandie" />
  <meta property="og:type" content="website" />
</svelte:head>

<!-- ================= HERO ================= -->
<section class="hero" id="hero" aria-labelledby="hero-title">

  <div class="overlay" aria-hidden="true"></div>

  <div class="content">
    <h1 id="hero-title">
      Confiez votre bien,<br />
      on s’occupe de tout
    </h1>

    <p class="subtitle">
      Vous gagnez du temps, on optimise vos revenus
    </p>

    <p class="location">
      Conciergerie Airbnb à Caen et en Normandie
    </p>

    <div class="badges" aria-label="Avantages du service">
      <span>✔ Réponse rapide</span>
      <span>✔ Service personnalisé</span>
      <span>✔ Intervention locale</span>
    </div>

    <div class="buttons">
      <a href="#contact" class="cta-main-hero">
        Demander un devis
      </a>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        class="cta-whatsapp"
        aria-label="Contacter via WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  </div>

  <div class="scroll-indicator" aria-hidden="true">↓</div>

</section>

<!-- ================= PATCHWORK ================= -->
<section class="patchwork" aria-labelledby="zones-title">

  <h2 id="zones-title" class="visually-hidden">
    Zones couvertes en Normandie
  </h2>

  <div class="background-text" aria-hidden="true">AVA</div>

  <div class="patchwork-grid">

    <div class="patch-card">
      <img src="/images/montstmichel.jpg" alt="Vue du Mont-Saint-Michel en Normandie" />
      <span>Mont-Saint-Michel</span>
    </div>

    <div class="patch-card">
      <img src="/images/deauvilleplage.jpg" alt="Plage de Deauville en Normandie" />
      <span>Deauville</span>
    </div>

    <div class="patch-card">
      <img src="/images/cotenormande.jpg" alt="Paysage de la côte normande" />
      <span>Côte Normande</span>
    </div>

    <div class="patch-card">
      <img src="/images/maisonscolombages.jpg" alt="Maisons à colombages typiques de Normandie" />
      <span>Architecture Normande</span>
    </div>

  </div>
</section>

<!-- ================= SERVICES ================= -->
<section class="services" id="services" aria-labelledby="services-title">

  <div class="services-container">

    <div class="services-image">
      <img src="/images/apartments-living-room.jpg" alt="Appartement Airbnb moderne et lumineux" />
    </div>

    <div class="services-content">

      <h2 id="services-title">
        Confiez votre bien,<br />
        <span>nous nous occupons de tout</span>
      </h2>

      <p class="intro">
        Une gestion complète pour maximiser vos revenus Airbnb.
      </p>

      <div class="bloc">
        <h3>Gestion des voyageurs</h3>
      </div>

      <div class="bloc">
        <h3>Entretien du logement</h3>
      </div>

      <div class="bloc">
        <h3>Optimisation des revenus</h3>
      </div>

      <div class="services-cta">
        <a href="#contact" class="cta-main">Demander un devis</a>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          class="cta-whatsapp"
          aria-label="Contacter via WhatsApp"
        >
          WhatsApp
        </a>
      </div>

    </div>
  </div>
</section>

<!-- ================= ABOUT ================= -->
<section class="about" id="about" aria-labelledby="about-title">

  <div class="about-header">
    <h2 id="about-title">À propos</h2>
  </div>

</section>

<!-- ================= CONTACT ================= -->
<section class="contact" id="contact" aria-labelledby="contact-title">

  <div class="contact-container">

    <h2 id="contact-title">Parlons de votre bien</h2>

    <form method="POST" use:handleEnhance aria-describedby="contact-desc">

      <p id="contact-desc" class="visually-hidden">
        Formulaire de contact pour demander un devis
      </p>

      <div class="grid">

        <input name="name" placeholder="Votre nom" required aria-label="Nom" />
        <input type="email" name="email" placeholder="Votre email" required aria-label="Email" />

      </div>

      <textarea name="message" placeholder="Expliquez votre besoin..." required aria-label="Message"></textarea>

      <button type="submit" disabled={$loading} class="cta-main" aria-busy={$loading}>
        {#if $loading}
          Envoi en cours...
        {:else}
          Demander mon devis gratuit
        {/if}
      </button>

    </form>

    <div class="contact-alt">
      <a href={telHref} class="cta-secondary" aria-label="Appeler la conciergerie">
        📞 Appeler
      </a>
    </div>

  </div>

</section>