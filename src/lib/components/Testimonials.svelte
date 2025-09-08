<script>
  const avis = [
    { author: 'M. D., Caen Centre', text: 'Hyper réactifs et discrets. Organisation parfaite.' },
    { author: 'S. L., Mondeville',  text: 'Réservation complexe gérée en 2h. Impeccable.' },
    { author: 'A. R., Hérouville',  text: 'Communication fluide, prestataires sérieux.' }
  ];
</script>


<section class="container my-5">
  <h2 class="h4 mb-3">Avis clients</h2>
  <div class="row g-3">
    {#each avis as a}
      <div class="col-12 col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <p class="mb-2">“{a.text}”</p>
            <div class="text-body-secondary small">— {a.author}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
