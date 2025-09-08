<script>
  // Tu peux remplacer par de vrais logos (static/partners/*.svg)
  const items = ['Hôtel Lux', 'ResaPro', 'ChauffeurVIP', 'Chef@Home', 'Pressing+'];
</script>

<section class="container my-5">
  <h2 class="h6 text-uppercase text-body-secondary mb-3">Ils nous font confiance</h2>
  <div class="d-flex flex-wrap gap-3 align-items-center">
    {#each items as name}
      <div class="px-3 py-2 border rounded-3 text-body-secondary">
        {name}
      </div>
    {/each}
  </div>
</section>
