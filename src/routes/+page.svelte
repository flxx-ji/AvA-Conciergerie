<script>
  import CTAButtons from '$lib/components/CTAButtons.svelte';
  import Process3Steps from '$lib/components/Process3Steps.svelte';
  import Partners from '$lib/components/Partners.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import FAQ from '$lib/components/FAQ.svelte';

  import caen1280webp from '$lib/assets/hero/caen-1280.webp';
  import caen800webp from '$lib/assets/hero/caen-800.webp';
  import caen1280jpg from '$lib/assets/hero/caen-1280.jpg';
</script>

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
        <div class="ratio ratio-16x9 rounded shadow-sm overflow-hidden">
          <picture>
            <source srcset={caen1280webp} type="image/webp" media="(min-width: 992px)" />
            <source srcset={caen800webp}  type="image/webp" media="(max-width: 991px)" />
            <img
              src={caen1280jpg}
              alt="Église Saint-Pierre, Caen — AvA Conciergerie"
              class="w-100 h-100 object-fit-cover"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</section>

<Process3Steps />
<Partners />
<Testimonials />
<FAQ />

<section class="container my-5">
  <CTAButtons />
</section>
