<script>
  import '../app.css';
  import { onMount } from 'svelte';

  // ❌ IMPORTANT : ON NE CHARGE PLUS bootstrap ici
  // import 'bootstrap/dist/css/bootstrap.min.css';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import MobileCTA from '$lib/components/MobileCTA.svelte';

  // 👉 JS Bootstrap (UNIQUEMENT JS, PAS LE CSS)
  onMount(async () => {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });
</script>

<svelte:head>
  <title>AvA Conciergerie — Conciergerie à Caen</title>
  <meta name="description" content="Conciergerie privée à Caen et en Normandie" />
</svelte:head>

<!-- 🔥 STRUCTURE GLOBALE -->
<div class="d-flex flex-column min-vh-100">

  <!-- ================= HEADER ================= -->
  <Header />

  <!-- ================= CONTENU PAGE ================= -->
  <main class="flex-grow-1">
    <slot />
  </main>

  <!-- ================= CTA MOBILE ================= -->
  <MobileCTA />

  <!-- ================= FOOTER ================= -->
  <Footer />

</div>