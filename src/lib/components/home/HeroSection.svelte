<script>
  // Images (remplace par tes images locales)
  const images = [
    "/images/cotenormande.jpg",
    "/images/maisonscolombages.jpg",
    "/images/Montstmichel.jpg"
  ];
</script>


<section class="relative min-h-screen flex items-center overflow-hidden">

  <!-- Patchwork -->
  <div class="absolute inset-0 grid grid-cols-3">
    {#each images as img, i (i)}
      <div class="overflow-hidden">
        <img src={img} alt="" class="w-full h-full object-cover scale-105" />
      </div>
    {/each}
  </div>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-white/80"></div>

  <!-- Content -->
  <div class="relative max-w-6xl mx-auto px-6 w-full">
    <div class="max-w-xl">

      <!-- Badge -->
      <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-6">
        Conciergerie en Normandie
      </span>

      <!-- Title -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        Confiez votre bien,
        <span class="text-primary"> on s’occupe</span>
        du reste
      </h1>

      <!-- Description -->
      <p class="mt-6 text-lg text-gray-600 max-w-md">
        Un service simple, réactif et adapté à vos besoins.
        Vous profitez, on gère tout.
      </p>

      <!-- Buttons -->
      <div class="mt-8 flex gap-4 flex-wrap">

        <a
          href="/contact"
          class="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition"
        >
          Demander un devis
        </a>

        <a
          href="/services"
          class="px-6 py-3 border rounded-full hover:bg-gray-100 transition"
        >
          Voir nos services
        </a>

      </div> <!-- ✅ IMPORTANT : fermeture manquante -->

      <!-- Points -->
      <ul class="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
        <li>✔ Réponse en moins de 2h</li>
        <li>✔ Devis gratuit</li>
        <li>✔ Disponible 7j/7</li>
      </ul>

    </div>
  </div>

</section>