<script>
  const benefits = [
    {
      title: "Gain de temps",
      desc: "Fini les allers-retours. On s’occupe de tout."
    },
    {
      title: "Réactivité",
      desc: "Réponse rapide en moins de 2h."
    },
    {
      title: "Tranquillité",
      desc: "Dormez tranquille, on gère les imprévus."
    },
    {
      title: "Service personnalisé",
      desc: "On s’adapte à vos besoins."
    }
  ];
</script>

<section class="py-20 bg-white">

  <div class="max-w-6xl mx-auto px-6">

    <!-- Title -->
    <div class="text-center mb-12">
      <p class="text-xs uppercase text-primary mb-2">
        Pourquoi AvA ?
      </p>
      <h2 class="text-3xl font-bold">
        Ce qu’on vous apporte
      </h2>
    </div>

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {#each benefits as b, i (i)}
        <div class="p-6 rounded-xl border hover:shadow-md transition">

          <h3 class="font-bold mb-2">{b.title}</h3>
          <p class="text-sm text-gray-600">{b.desc}</p>

        </div>
      {/each}

    </div>

  </div>

</section>