<script lang="ts">
  import { enhance } from '$app/forms';
  import { writable } from 'svelte/store';
  import { contacts } from '$lib/config/app.js';

  // ==============================
  // 🔥 STATE FEEDBACK (message success/error)
  // ==============================
  let showMessage = false;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  export let form;

  // 👉 affichage message pendant 15s
  $: if (form) {
    if (form.success || form.error) {
      showMessage = true;

      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        showMessage = false;
      }, 15000);
    }
  }

  // ==============================
  // 🔄 LOADING STATE
  // ==============================
  const loading = writable(false);

  // ==============================
  // 📞 CONTACT DYNAMIQUE
  // ==============================
  const telHref = `tel:${contacts.phoneRaw}`;
  const waHref = `https://wa.me/${contacts.whatsapp}?text=Bonjour,%20je%20souhaite%20un%20devis`;

  // ==============================
  // 🚀 FORM ENHANCE (SvelteKit)
  // ==============================
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

<!-- ================= HERO ================= -->
<section class="hero" id="hero" aria-label="Présentation de la conciergerie">

  <!-- overlay décoratif -->
  <div class="overlay" aria-hidden="true"></div>

  <div class="content">
    <h1>
      Confiez votre bien,<br />
      on s’occupe de tout
    </h1>

    <p class="subtitle">
      Vous gagnez du temps, on optimise vos revenus
    </p>

    <p class="location">
      Conciergerie Airbnb à Caen et en Normandie
    </p>

    <!-- ✔ preuves sociales -->
    <div class="badges">
      <span>✔ Réponse rapide</span>
      <span>✔ Service personnalisé</span>
      <span>✔ Intervention locale</span>
    </div>

    <!-- 🔥 CTA principaux -->
    <div class="buttons">
      <a href="#contact" class="cta-main-hero">
        Demander un devis
      </a>

      <!-- ⚠️ sécurité + accessibilité -->
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

  <!-- scroll décoratif -->
  <div class="scroll-indicator" aria-hidden="true">↓</div>

</section>

<!-- ================= PATCHWORK ================= -->
<section class="patchwork" aria-label="Zones couvertes en Normandie">

  <!-- texte décoratif -->
  <div class="background-text" aria-hidden="true">AVA</div>

  <!-- 🔥 IMPORTANT : grid renommé -->
  <div class="patchwork-grid">

    <!-- carte -->
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

      <!-- 🔹 blocs services -->
      <div class="bloc">
        <h3>Gestion des voyageurs</h3>
        <ul>
          <li>Réponses rapides 7j/7</li>
          <li>Check-in / Check-out optimisés</li>
          <li>Gestion des imprévus</li>
        </ul>
      </div>

      <div class="bloc">
        <h3>Entretien du logement</h3>
        <ul>
          <li>Ménage professionnel</li>
          <li>Interventions techniques</li>
          <li>Contrôle qualité</li>
        </ul>
      </div>

      <div class="bloc">
        <h3>Optimisation des revenus</h3>
        <ul>
          <li>Analyse du marché</li>
          <li>Tarification dynamique</li>
          <li>Taux d’occupation optimisé</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="services-cta">
        <a href="#contact" class="cta-main">Demander un devis</a>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          class="cta-whatsapp"
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
    <p>
      Une gestion complète et professionnelle de votre bien,
      pensée pour optimiser vos revenus et simplifier votre quotidien.
    </p>
  </div>

  <div class="about-content">

    <!-- image -->
    <div class="about-image">
      <img src="/images/kashculture-clean-about.jpg"
           alt="Chambre Airbnb lumineuse et soignée" />
    </div>

    <!-- texte -->
    <div class="about-text">
      <h3>Notre mission</h3>

      <p>
        Animée par une véritable passion pour le voyage et les standards d’excellence,
        AvA Conciergerie accompagne les propriétaires dans la gestion et la valorisation
        de leur bien en location courte durée.
      </p>

      <p>
        De la stratégie tarifaire à la communication voyageurs, chaque détail est pris en
        charge avec rigueur et professionnalisme.
      </p>

      <p class="highlight">
        Confier son bien, c’est avant tout une question de confiance.
      </p>

    </div>

  </div>

  <!-- valeurs -->
  <div class="values">

    <h3>Nos valeurs</h3>

    <div class="values-grid">

      <div class="value-card">
        <h4>Discrétion</h4>
        <p>Une gestion fiable et professionnelle.</p>
      </div>

      <div class="value-card">
        <h4>Proactivité</h4>
        <p>Anticiper et optimiser chaque situation.</p>
      </div>

      <div class="value-card">
        <h4>Exigence</h4>
        <p>Une qualité constante pour vos voyageurs.</p>
      </div>

    </div>

  </div>

</section>
<section class="contact" id="contact">

  <!-- IMAGE -->
  <div class="contact-visual">
    <img src="/images/pexels-achraf-borkadi-salon-34086242.jpg" alt="Salon moderne" />
  </div>

  <!-- CONTENU -->
  <div class="contact-container">

    <h2>Parlons de votre bien</h2>
    <p class="contact-sub">
      Confiez-nous votre logement et maximisez vos revenus sans effort.
    </p>

    <!-- FORM -->
    <form method="POST" use:handleEnhance>

      <div class="grid">

        <input name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />

      </div>

      <textarea name="message" placeholder="Expliquez votre besoin..." required></textarea>

      <button type="submit" disabled={$loading} class="cta-main">
        {#if $loading}
          Envoi en cours...
        {:else}
          Demander mon devis gratuit
        {/if}
      </button>

    </form>

    <!-- CONTACT SECONDAIRE -->
    <div class="contact-alt">
      <a href={telHref} class="cta-secondary">📞 Appeler</a>
    </div>

  </div>

</section>