<script>
  const steps = [
    { title: 'Demande', desc: 'Tu nous expliques le besoin (formulaire ou appel).' },
    { title: 'Devis',   desc: 'On répond vite avec un devis clair et sans surprise.' },
    { title: 'Exécution', desc: 'On s’occupe de tout, en toute discrétion.' }
  ];
</script>

<section class="container my-5">
  <h2 class="h4 mb-3">Comment ça marche ?</h2>
  <div class="row g-3">
    {#each steps as s, i}
      <div class="col-12 col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="badge bg-primary-subtle text-primary mb-2">{i + 1}</div>
            <h3 class="h5">{s.title}</h3>
            <p class="mb-0 text-body-secondary">{s.desc}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
