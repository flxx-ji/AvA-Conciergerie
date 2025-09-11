<script>
  import CTAButtons from '$lib/components/CTAButtons.svelte';

  // On importe les images depuis src/lib/assets
  import vip1200 from '$lib/assets/services/vip-1200.webp';
  import vip800 from '$lib/assets/services/vip-800.webp';
  import vip1280 from '$lib/assets/services/vip-1280.jpg';

  import intendance1200 from '$lib/assets/services/intendance-1200.webp';
  import intendance800 from '$lib/assets/services/intendance-800.webp';
  import intendance1280 from '$lib/assets/services/intendance-1280.jpg';

  import event1200 from '$lib/assets/services/event-1200.webp';
  import event800 from '$lib/assets/services/event-800.webp';
  import event1280 from '$lib/assets/services/event-1280.jpg';
</script>

<section class="container py-5">
  <h1 class="h3 mb-4">Nos services</h1>

  <div class="row g-4">
    <!-- Accueil VIP -->
    <div class="col-md-4">
      <div class="card h-100">
        <picture>
          <source type="image/webp" srcset={`${vip1200} 1200w, ${vip800} 800w`} sizes="(max-width: 768px) 100vw, 33vw" />
          <img src={vip1280} class="card-img-top" loading="lazy" decoding="async"
            alt="Accueil VIP : transferts, check-in, réservations personnalisées" />
        </picture>
        <div class="card-body">
          <h2 class="h5">Accueil VIP</h2>
          <p class="mb-0">Transferts, check-in, réservations personnalisées.</p>
        </div>
      </div>
    </div>

    <!-- Intendance -->
    <div class="col-md-4">
      <div class="card h-100">
        <picture>
          <source type="image/webp" srcset={`${intendance1200} 1200w, ${intendance800} 800w`} sizes="(max-width: 768px) 100vw, 33vw" />
          <img src={intendance1280} class="card-img-top" loading="lazy" decoding="async"
            alt="Intendance : linge, ménage, pressing, maintenance" />
        </picture>
        <div class="card-body">
          <h2 class="h5">Intendance</h2>
          <p class="mb-0">Courses, ménage, pressing, maintenance.</p>
        </div>
      </div>
    </div>

    <!-- Événementiel -->
    <div class="col-md-4">
      <div class="card h-100">
        <picture>
          <source type="image/webp" srcset={`${event1200} 1200w, ${event800} 800w`} sizes="(max-width: 768px) 100vw, 33vw" />
          <img src={event1280} class="card-img-top" loading="lazy" decoding="async"
            alt="Événementiel : organisation clé en main, invitations, logistique" />
        </picture>
        <div class="card-body">
          <h2 class="h5">Événementiel</h2>
          <p class="mb-0">Organisation clé en main, invitations, logistique.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-5">
    <CTAButtons />
  </div>
</section>

<style>
  .card-img-top { aspect-ratio: 3 / 2; object-fit: cover; }
</style>
