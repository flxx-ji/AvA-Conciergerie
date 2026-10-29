
<script lang="ts">
  import { enhance } from '$app/forms';
  import { onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { contacts } from '$lib/config/app.js';

  // ==============================
  // RETOUR VISUEL DU FORMULAIRE
  // ==============================

  // Mémorise le résultat de l'envoi :
  // succès, erreur ou aucun message.
  let feedback: 'success' | 'error' | null = null;
  let showMessage = false;

  // Minuteur pour masquer le message après 15 secondes.
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  // Affiche le message correspondant au résultat.
  function displayFeedback(type: 'success' | 'error') {
    if (timeoutId) clearTimeout(timeoutId);

    feedback = type;
    showMessage = true;

    // Le message disparaît automatiquement.
    timeoutId = setTimeout(() => {
      showMessage = false;
    }, 15000);
  }

  // Nettoyage du minuteur quand on quitte la page.
  onDestroy(() => {
    if (timeoutId) clearTimeout(timeoutId);
  });

  // ==============================
  // ÉTAT DU BOUTON PENDANT L'ENVOI
  // ==============================
  const loading = writable(false);

  // ==============================
  // CONTACT DYNAMIQUE
  // ==============================
  const telHref = `tel:${contacts.phoneRaw}`;

  const waHref =
    `https://wa.me/${contacts.whatsapp}?text=Bonjour,%20je%20souhaite%20un%20devis`;

  // ==============================
  // ENVOI SVELTEKIT SANS RECHARGEMENT
  // ==============================
  function handleEnhance(formElement: HTMLFormElement) {
    return enhance(formElement, () => {
      loading.set(true);

      // Masque l'ancien message pendant un nouvel envoi.
      showMessage = false;

      return async ({ result, update }) => {
        try {
          // Met à jour les données de SvelteKit
          // sans réinitialiser automatiquement le formulaire.
          await update({ reset: false });

          if (result.type === 'success') {
            // Le serveur a accepté l'envoi.
            displayFeedback('success');

            // Vide les champs uniquement après un succès.
            formElement.reset();

          } else if (
            result.type === 'failure' ||
            result.type === 'error'
          ) {
            // En cas d'échec, les champs restent remplis.
            displayFeedback('error');
          }

        } finally {
          // Réactive toujours le bouton après la réponse.
          loading.set(false);
        }
      };
    });
  }
</script>

<svelte:head>
  <title>
    Conciergerie Airbnb à Caen | Gestion & Revenus optimisés | AvA
  </title>

  <meta
    name="description"
    content="Conciergerie Airbnb à Caen et en Normandie. Gestion complète, optimisation des revenus, service personnalisé."
  />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="AvA Conciergerie Caen" />

  <meta
    property="og:description"
    content="Gestion Airbnb complète à Caen et Normandie"
  />

  <meta property="og:image" content="/images/cotenormande.jpg" />
  <meta property="og:type" content="website" />
</svelte:head>

<!-- ================= HERO ================= -->
<section
  class="hero"
  id="hero"
  aria-label="Présentation de la conciergerie"
>
  <!-- Overlay décoratif -->
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

    <!-- Preuves sociales -->
    <div class="badges">
      <span>✔ Réponse rapide</span>
      <span>✔ Service personnalisé</span>
      <span>✔ Intervention locale</span>
    </div>

    <!-- CTA principaux -->
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

  <!-- Indicateur de défilement -->
  <div class="scroll-indicator" aria-hidden="true">↓</div>
</section>

<!-- ================= PATCHWORK ================= -->
<section
  class="patchwork"
  aria-label="Zones couvertes en Normandie"
>
  <!-- Texte décoratif -->
  <div class="background-text" aria-hidden="true">AVA</div>

  <div class="patchwork-grid">

    <div class="patch-card">
      <img
        src="/images/montstmichel.jpg"
        alt="Vue du Mont-Saint-Michel en Normandie"
      />
      <span>Mont-Saint-Michel</span>
    </div>

    <div class="patch-card">
      <img
        src="/images/deauvilleplage.jpg"
        alt="Plage de Deauville en Normandie"
      />
      <span>Deauville</span>
    </div>

    <div class="patch-card">
      <img
        src="/images/cotenormande.jpg"
        alt="Paysage de la côte normande"
      />
      <span>Côte Normande</span>
    </div>

    <div class="patch-card">
      <img
        src="/images/maisonscolombages.jpg"
        alt="Maisons à colombages typiques de Normandie"
      />
      <span>Architecture Normande</span>
    </div>

  </div>
</section>

<!-- ================= SERVICES ================= -->
<section
  class="services"
  id="services"
  aria-labelledby="services-title"
>
  <div class="services-header">
    <h2 id="services-title">Nos services</h2>

    <p>
      Une gestion complète et professionnelle pour optimiser vos revenus Airbnb
      tout en vous libérant des contraintes du quotidien.
    </p>
  </div>

  <div class="services-container">

    <div class="services-image">
      <img
        src="/images/apartments-living-room.jpg"
        alt="Appartement Airbnb moderne et lumineux"
      />
    </div>

    <div class="services-content">
      <h3>
        Confiez votre bien,<br />
        <span>nous nous occupons de tout</span>
      </h3>

      <p class="intro">
        Une gestion complète pour maximiser vos revenus Airbnb.
      </p>

      <!-- Gestion des voyageurs -->
      <div class="bloc">
        <h4>Gestion des voyageurs</h4>

        <ul>
          <li>Réponses rapides 7j/7</li>
          <li>Check-in / Check-out optimisés</li>
          <li>Gestion des imprévus</li>
        </ul>
      </div>

      <!-- Entretien du logement -->
      <div class="bloc">
        <h4>Entretien du logement</h4>

        <ul>
          <li>Ménage professionnel</li>
          <li>Interventions techniques</li>
          <li>Contrôle qualité</li>
        </ul>
      </div>

      <!-- Optimisation des revenus -->
      <div class="bloc">
        <h4>Optimisation des revenus</h4>

        <ul>
          <li>Analyse du marché</li>
          <li>Tarification dynamique</li>
          <li>Taux d’occupation optimisé</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="services-cta">
        <a href="#contact" class="cta-main">
          Demander un devis
        </a>

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
<section
  class="about"
  id="about"
  aria-labelledby="about-title"
>
  <div class="about-header">
    <h2 id="about-title">À propos</h2>

    <p>
      Une gestion complète et professionnelle de votre bien,
      pensée pour optimiser vos revenus et simplifier votre quotidien.
    </p>
  </div>

  <div class="about-content">

    <!-- Image de présentation -->
    <div class="about-image">
      <img
        src="/images/kashculture-clean-about.jpg"
        alt="Chambre Airbnb lumineuse et soignée"
      />
    </div>

    <!-- Texte de présentation -->
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

  <!-- Valeurs de la conciergerie -->
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

<!-- ================= CONTACT ================= -->
<section
  class="contact"
  id="contact"
  aria-labelledby="contact-title"
>
  <div class="contact-header">
    <h2 id="contact-title">Contact</h2>

    <p class="contact-sub">
      Parlons de votre bien et trouvons la meilleure solution pour maximiser vos revenus.
    </p>
  </div>

  <!-- Image de contact -->
  <div class="contact-visual">
    <img
      src="/images/pexels-achraf-borkadi-salon-34086242.jpg"
      alt="Salon moderne prêt pour location Airbnb"
    />
  </div>

  <div class="contact-container">

    <h3>Parlons de votre bien</h3>

    <p class="contact-sub">
      Confiez-nous votre logement et maximisez vos revenus sans effort.
    </p>

    <!-- ============================== -->
    <!-- FORMULAIRE DE CONTACT -->
    <!-- ============================== -->
    <form
      method="POST"
      use:handleEnhance
      aria-describedby="contact-desc"
    >

<!--
  HONEYPOT ANTI-SPAM

  Ce champ est invisible pour les visiteurs.
  Il ne doit jamais être rempli.

  Certains robots remplissent automatiquement
  tous les champs qu'ils trouvent.
-->
<div class="honeypot" aria-hidden="true">
  <label for="website">Site internet</label>

  <input
    type="text"
    id="website"
    name="website"
    tabindex="-1"
    autocomplete="off"
  />
</div>

      <p id="contact-desc" class="visually-hidden">
        Formulaire pour demander un devis de conciergerie Airbnb
      </p>

      <div class="grid">
        <input
          name="name"
          placeholder="Votre nom"
          required
          aria-label="Nom"
        />

        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          aria-label="Email"
        />
      </div>

      <textarea
        name="message"
        placeholder="Expliquez votre besoin..."
        required
        aria-label="Message"
      ></textarea>

      <!-- Bouton désactivé pendant l'envoi -->
      <button
        type="submit"
        disabled={$loading}
        class="cta-main"
        aria-busy={$loading}
      >
        {#if $loading}
          Envoi en cours...
        {:else}
          Demander mon devis gratuit
        {/if}
      </button>
    </form>

    <!-- ============================== -->
    <!-- CONFIRMATION ANIMÉE -->
    <!-- ============================== -->

    {#if showMessage && feedback === 'success'}
      <!-- Message affiché après un envoi réussi -->
      <div
        class="form-feedback form-feedback-success"
        role="status"
        aria-live="polite"
      >
        <span class="feedback-icon" aria-hidden="true">✓</span>

        <div>
          <h4>Votre demande a bien été envoyée !</h4>

          <p>
            Merci pour votre confiance. L'équipe AvA Conciergerie
            reviendra vers vous dans les meilleurs délais.
          </p>
        </div>
      </div>

    {:else if showMessage && feedback === 'error'}
      <!-- Message affiché si l'envoi échoue -->
      <div
        class="form-feedback form-feedback-error"
        role="alert"
      >
        <span class="feedback-icon" aria-hidden="true">!</span>

        <div>
          <h4>Votre message n'a pas pu être envoyé.</h4>

          <p>
            Veuillez réessayer dans quelques instants
            ou nous contacter par téléphone.
          </p>
        </div>
      </div>
    {/if}

    <!-- Contact secondaire par téléphone -->
    <div class="contact-alt">
      <a
        href={telHref}
        class="cta-secondary"
        aria-label="Appeler la conciergerie"
      >
        📞 Appeler
      </a>
    </div>

  </div>
</section>

<style>
  /* ==============================
     CONFIRMATION FORMULAIRE AVA
     Styles isolés : aucune autre section touchée
     ============================== */

  .form-feedback {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 22px;
    margin-top: 24px;
    border-radius: 16px;
    text-align: left;

    /* Apparition douce */
    animation: feedback-appear 0.5s ease-out both;
  }

  /* Couleurs du message de succès */
  .form-feedback-success {
    background: #edf8f0;
    border: 1px solid #b8e4c5;
    color: #225c38;
  }

  /* Couleurs du message d'erreur */
  .form-feedback-error {
    background: #fff0ee;
    border: 1px solid #f0c5be;
    color: #8c3028;
  }

  /* Coche animée */
  .feedback-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: #25a660;
    color: white;
    font-size: 26px;
    font-weight: 700;
    animation: feedback-pop 0.5s ease-out both;
  }

  /* Icône rouge en cas d'erreur */
  .form-feedback-error .feedback-icon {
    background: #c94c40;
  }

  .form-feedback h4 {
    font-size: 17px;
    font-weight: 700;
    margin: 0 0 6px;
  }

  .form-feedback p {
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
  }

  /* Apparition du message */
  @keyframes feedback-appear {
    from {
      opacity: 0;
      transform: translateY(15px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Animation de la coche */
  @keyframes feedback-pop {
    from {
      opacity: 0;
      transform: scale(0.5);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Respect des préférences d'accessibilité */
  @media (prefers-reduced-motion: reduce) {
    .form-feedback,
    .feedback-icon {
      animation: none;
    }
  }

  /* Adaptation mobile */
  @media (max-width: 480px) {
    .form-feedback {
      padding: 18px;
      gap: 12px;
    }

    .feedback-icon {
      width: 38px;
      height: 38px;
      font-size: 22px;
    }
  }


  /* ==============================
     HONEYPOT ANTI-SPAM
     ============================== */

  /*
    Le champ reste présent dans le HTML
    pour les robots, mais il est invisible
    et inaccessible à la souris.
  */
  .honeypot {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

</style>
