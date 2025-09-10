<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores'; // pour savoir sur quelle route on est (lien actif)

  // 👉 CSS global (chargé côté serveur et client)
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';

  // 👉 JS Bootstrap (uniquement côté client, sinon "window is not defined")
  onMount(async () => {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js'); // bundle = Bootstrap + Popper
  });
</script>

<svelte:head>
  <title>AvA Conciergerie — Conciergerie à Caen (Calvados)</title>
  <meta name="description" content="Conciergerie privée à Caen et en Normandie : réservations, intendance, accueil VIP. Réponse sous 2h ouvrées." />
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

  <!-- SEO basique -->
  <title>AvA Conciergerie · Conciergerie privée à Caen (Calvados)</title>
  <meta name="description" content="Conciergerie privée à Caen : réservations, intendance, accueil VIP. Service discret et réactif en Normandie." />

  <!-- OpenGraph / partage -->
  <meta property="og:title" content="AvA Conciergerie · Caen" />
  <meta property="og:description" content="Conciergerie sur-mesure en Normandie : réactivité, discrétion, réseau premium." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ton-domaine.net" />
  <meta property="og:image" content="/og-cover.jpg" /> <!-- optionnel -->
</svelte:head>



<!-- 
  d-flex + min-vh-100 : pour coller le footer en bas (page pleine hauteur)
-->
<div class="d-flex flex-column min-vh-100">

  <!-- ====== HEADER / NAVBAR ====== -->
  <nav class="navbar navbar-expand-md navbar-light bg-light border-bottom">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/" data-sveltekit-preload-data="hover">
        AvA <span class="text-primary">Conciergerie</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
        aria-controls="mainNav" aria-expanded="false" aria-label="Ouvrir le menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-center gap-2">
          <!-- 
            Lien actif : si l’URL actuelle ($page.url.pathname) commence par la route,
            on ajoute la classe 'active' de Bootstrap pour souligner l’onglet courant.
          -->
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

  <!-- ====== CONTENU DES PAGES ====== -->
  <main class="flex-grow-1">
    <slot />
  </main>


  <style>
  @media (max-width: 768px){
    .sticky-cta {
      position: sticky; bottom: 0; z-index: 1030;
      background: rgba(255,255,255,.9); backdrop-filter: blur(6px);
      border-top: 1px solid rgba(0,0,0,.06);
    }
  }
</style>

<div class="sticky-cta py-2 d-md-none">
  <div class="container d-flex gap-2">
    <a href="/contact" class="btn btn-primary w-100">Devis</a>
    <a href="tel:+33766665848" class="btn btn-outline-secondary w-100">Appeler</a>
    <a href="https://wa.me/33766665848" target="_blank" rel="noopener" class="btn btn-success w-100">WhatsApp</a>
  </div>
</div>

  <!-- ====== FOOTER ====== -->
  <footer class="border-top py-4 mt-auto">
    <div class="container d-flex flex-column flex-md-row justify-content-between gap-3">
      <small class="text-muted">© {new Date().getFullYear()} AvA Conciergerie — Tous droits réservés</small>
      <div class="d-flex gap-3">
        <a class="text-muted" href="https://www.instagram.com/" aria-label="Instagram"><i class="bi bi-instagram fs-5"></i></a>
        <a class="text-muted" href="https://fr-fr.facebook.com/" aria-label="Facebook"><i class="bi bi-facebook fs-5"></i></a>
        <a class="text-muted" href="https://x.com/" aria-label="X"><i class="bi bi-twitter-x fs-5"></i></a>
      </div>
    </div>
  </footer>
</div>
