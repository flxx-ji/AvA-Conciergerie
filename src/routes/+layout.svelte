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
  <!-- SEO de base, tu pourras personnaliser -->
  <title>AvA Conciergerie</title>
  <meta name="description" content="Conciergerie privée — services sur-mesure." />
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

  <!-- ====== FOOTER ====== -->
  <footer class="border-top py-4 mt-auto">
    <div class="container d-flex flex-column flex-md-row justify-content-between gap-3">
      <small class="text-muted">© {new Date().getFullYear()} AvA Conciergerie — Tous droits réservés</small>
      <div class="d-flex gap-3">
        <a class="text-muted" href="#" aria-label="Instagram"><i class="bi bi-instagram fs-5"></i></a>
        <a class="text-muted" href="#" aria-label="Facebook"><i class="bi bi-facebook fs-5"></i></a>
        <a class="text-muted" href="#" aria-label="X"><i class="bi bi-twitter-x fs-5"></i></a>
      </div>
    </div>
  </footer>
</div>
