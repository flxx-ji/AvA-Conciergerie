<script>
  // rien à importer ici
</script>

<!-- ================= HEADER ================= -->
<nav class="navbar navbar-expand-md bg-white border-bottom shadow-sm">

  <!-- ⚠️ container-fluid = évite de casser ton layout -->
  <div class="container-fluid px-4">

    <!-- ================= LOGO ================= -->
    <a
      class="navbar-brand fw-bold"
      href="#hero"
      aria-label="Retour en haut de la page"
    >
      AvA <span class="brand-accent">Conciergerie</span>
    </a>

    <!-- ================= BURGER ================= -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNav"
      aria-controls="mainNav"
      aria-expanded="false"
      aria-label="Ouvrir le menu de navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- ================= NAV ================= -->
    <div id="mainNav" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto align-items-center gap-2">

        <!-- SERVICES -->
        <li class="nav-item">
          <a class="nav-link" href="#services">
            Services
          </a>
        </li>

        <!-- ABOUT -->
        <li class="nav-item">
          <a class="nav-link" href="#about">
            À propos
          </a>
        </li>

        <!-- CONTACT -->
        <li class="nav-item">
          <a
            class="btn btn-primary"
            href="#contact"
            aria-label="Accéder au formulaire de contact"
          >
            Contact
          </a>
        </li>

      </ul>
    </div>

  </div>
</nav>