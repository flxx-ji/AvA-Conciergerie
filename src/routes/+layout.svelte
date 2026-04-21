<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import 'bootstrap/dist/css/bootstrap.min.css';

  // 🔥 IMPORT CONFIG CONTACT (IMPORTANT)
  import { contacts } from '$lib/config/app.js';

  // 👉 JS Bootstrap uniquement côté client
  onMount(async () => {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });

  // 🔥 liens dynamiques (PLUS DE HARDCODE)
  const telHref = `tel:${contacts.phoneRaw}`;
  const waHref = `https://wa.me/${contacts.whatsapp}`;
</script>

<svelte:head>
  <title>AvA Conciergerie — Conciergerie à Caen (Calvados)</title>
  <meta name="description" content="Conciergerie privée à Caen et en Normandie : réservations, intendance, accueil VIP." />

  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

  <!-- OpenGraph -->
  <meta property="og:title" content="AvA Conciergerie · Caen" />
  <meta property="og:description" content="Conciergerie sur-mesure en Normandie." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://avaconciergerie.fr" />
</svelte:head>

<div class="d-flex flex-column min-vh-100">

  <!-- ====== HEADER ====== -->
  <nav class="navbar navbar-expand-md navbar-light bg-white border-bottom shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">
        AvA <span class="brand-accent">Conciergerie</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-center gap-2">

          <li class="nav-item">
            <a class="nav-link {($page.url.pathname === '/') ? 'active' : ''}" href="/">Accueil</a>
          </li>

          <li class="nav-item">
            <a class="nav-link {($page.url.pathname.startsWith('/services')) ? 'active' : ''}" href="/services">Services</a>
          </li>

          <li class="nav-item">
            <a class="nav-link {($page.url.pathname.startsWith('/about')) ? 'active' : ''}" href="/about">À propos</a>
          </li>

          <li class="nav-item">
            <a class="btn btn-primary" href="/contact">Contact</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <!-- ====== CONTENU ====== -->
  <main class="flex-grow-1">
    <slot />
  </main>

  <!-- ====== CTA MOBILE ====== -->
  <div class="sticky-cta py-2 d-md-none">
    <div class="container d-flex gap-2">

      <a href="/contact" class="btn btn-primary w-100">
        Devis
      </a>

      <!-- 🔥 NUMERO DYNAMIQUE -->
      <a href={telHref} class="btn btn-outline-secondary w-100">
        Appeler
      </a>

      <!-- 🔥 WHATSAPP DYNAMIQUE -->
      <a href={waHref} target="_blank" rel="noopener" class="btn btn-success w-100">
        WhatsApp
      </a>

    </div>
  </div>

  <!-- ====== FOOTER ====== -->
  <footer class="border-top py-4 mt-auto">
    <div class="container d-flex flex-column flex-md-row justify-content-between gap-3">

      <small class="text-muted">
        © {new Date().getFullYear()} AvA Conciergerie — Tous droits réservés
      </small>

      <div class="d-flex gap-3">
        <a class="text-muted" href="https://www.instagram.com/"><i class="bi bi-instagram fs-5"></i></a>
        <a class="text-muted" href="https://fr-fr.facebook.com/"><i class="bi bi-facebook fs-5"></i></a>
        <a class="text-muted" href="https://x.com/"><i class="bi bi-twitter-x fs-5"></i></a>

        <!-- 🔥 WHATSAPP FIX -->
        <a class="text-muted" href={waHref} target="_blank">
          <i class="bi bi-whatsapp fs-5"></i>
        </a>
      </div>

    </div>
  </footer>
</div>

<style>
  @media (max-width: 768px){
    .sticky-cta {
      position: sticky;
      bottom: 0;
      z-index: 1030;
      background: rgba(255,255,255,.9);
      backdrop-filter: blur(6px);
      border-top: 1px solid rgba(0,0,0,.06);
    }
  }
</style>