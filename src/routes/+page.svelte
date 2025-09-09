<!-- src/routes/+page.svelte (version propre, sans doublons) -->
<script>
  // On utilise les composants réutilisables pour éviter les répétitions
  import CTAButtons from '$lib/components/CTAButtons.svelte';
  import Process3Steps from '$lib/components/Process3Steps.svelte';
  import Partners from '$lib/components/Partners.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<!-- HERO (Caen / Normandie) -->
<section class="bg-light border-bottom">
  <div class="container py-5">
    <div class="row align-items-center g-4">
      <div class="col-lg-7">
        <h1 class="display-5 fw-bold mb-3">
          Conciergerie <span class="text-primary">sur-mesure</span> à Caen (Calvados)
        </h1>
        <p class="lead mb-4">
          Réservations, intendance, accueil VIP… AvA Conciergerie opère à Caen et en Normandie.
        </p>
        <CTAButtons />
      </div>
      <div class="col-lg-5">
  <!--
    Image responsive avec formats modernes.
    Fichiers attendus :
      /images/hero/caen-1280.webp
      /images/hero/caen-800.webp
      /images/hero/caen-1280.jpg  (fallback)
    -> Place-les dans: static/images/hero/…
  -->
  <div class="ratio ratio-16x9 rounded shadow-sm overflow-hidden">
    <picture>
      <!-- Desktop d’abord (large) -->
      <source
        srcset="/images/hero/caen-1280.webp"
        type="image/webp"
        media="(min-width: 992px)"
      />
      <!-- Mobile (plus léger) -->
      <source
        srcset="/images/hero/caen-800.webp"
        type="image/webp"
        media="(max-width: 991px)"
      />
      <!-- Fallback JPG -->
      <img
        src="/images/hero/caen-1280.jpg"
        alt="Église Saint-Pierre, Caen — AvA Conciergerie"
        class="w-100 h-100 object-fit-cover"
        loading="lazy"
        decoding="async"
      />
    </picture>
  </div>
</div>

</section>

<!-- Process (3 étapes) -->
<Process3Steps />

<!-- USP / Pourquoi nous choisir ? (ta section d’origine) -->
<section class="container py-5">
  <h2 class="h4 mb-4">Pourquoi nous choisir ?</h2>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="h6">Réactivité</h3>
          <p class="mb-0">Réponse rapide et prise en charge immédiate de vos demandes.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="h6">Discrétion</h3>
          <p class="mb-0">Confidentialité totale, service haut de gamme.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="h6">Réseau</h3>
          <p class="mb-0">Partenaires fiables pour des prestations irréprochables.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Partenaires (placeholder texte pour l’instant) -->
<Partners />

<!-- Avis -->
<Testimonials />

<!-- FAQ -->
<FAQ />

<!-- CTA de fin -->
<section class="container my-5">
  <CTAButtons />
</section>
