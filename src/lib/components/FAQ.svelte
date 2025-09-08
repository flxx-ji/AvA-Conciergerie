<script>
  const items = [
    { q: 'Zones desservies ?',   a: 'Paris & petite couronne. Autres zones sur devis.' },
    { q: 'Délais de réponse ?',  a: 'Première réponse sous 2h ouvrées.' },
    { q: 'Urgences ?',           a: 'Oui, selon disponibilité du réseau (tarification spécifique).' },
    { q: 'Types de services ?',  a: 'Accueil VIP, réservations, intendance, dépannage…' },
    { q: 'Tarifs ?',             a: 'Au forfait ou à la mission selon la demande.' },
    { q: 'Confidentialité ?',    a: 'NDA/accord de confidentialité possible.' }
  ];
</script>

<section class="container my-5">
  <h2 class="h4 mb-3">FAQ</h2>
  <div class="accordion" id="faq">
    {#each items as item, i}
      <div class="accordion-item">
        <h2 class="accordion-header" id={"h"+i}>
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#c"+i}>
            {item.q}
          </button>
        </h2>
        <div id={"c"+i} class="accordion-collapse collapse" data-bs-parent="#faq">
          <div class="accordion-body">{item.a}</div>
        </div>
      </div>
    {/each}
  </div>
</section>
