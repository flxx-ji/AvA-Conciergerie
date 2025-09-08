<script>
  const avis = [
    { author: 'M. D., Paris 8e', text: 'Hyper réactifs et discrets. Le séjour de nos invités s’est déroulé sans accroc.' },
    { author: 'S. L., Neuilly',  text: 'Réservation complexe gérée en 2h. Service impeccable.' },
    { author: 'A. R., Boulogne', text: 'Communication fluide, réseau de prestataires sérieux.' }
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
