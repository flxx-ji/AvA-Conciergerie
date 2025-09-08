<!-- src/routes/services/+page.svelte -->
<script>
  import CTAButtons from '$lib/components/CTAButtons.svelte';
</script>

<svelte:head>
  <title>Services · AvA Conciergerie (Caen)</title>
  <meta name="description" content="Services de conciergerie à Caen : accueil VIP, intendance, événementiel." />
</svelte:head>

<section class="container py-5">
  <h1 class="h3 mb-4">Nos services</h1>

  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="h5">Accueil VIP</h2>
          <p class="mb-0">Transferts, check-in, réservations personnalisées.</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="h5">Intendance</h2>
          <p class="mb-0">Courses, ménage, pressing, maintenance.</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100">
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
