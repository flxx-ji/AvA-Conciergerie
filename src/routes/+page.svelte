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
        <div class="ratio ratio-16x9 bg-white rounded shadow-sm d-flex align-items-center justify-content-center">
          <span class="text-muted">Image / vidéo de présentation</span>
        </div>
      </div>
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
