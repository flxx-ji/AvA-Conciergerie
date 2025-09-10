<script>
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
        <!-- image responsive -->
        <div class="ratio ratio-16x9 rounded shadow-sm overflow-hidden">
          <picture>
            <source srcset="/images/hero/caen-1280.webp" type="image/webp" media="(min-width: 992px)" />
            <source srcset="/images/hero/caen-800.webp"  type="image/webp" media="(max-width: 991px)" />
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
    </div>  <!-- ← /row -->
  </div>    <!-- ← /container -->
</section>

<!-- Process (3 étapes) -->
<Process3Steps />

<!-- USP -->
<section class="container py-5">
  <!-- … ton contenu … -->
</section>

<Partners />
<Testimonials />
<FAQ />

<section class="container my-5">
  <CTAButtons />
</section>
