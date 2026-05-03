<script>
  import { contacts } from '$lib/config/app.js';

  // ==============================
  // 🔗 LIENS DYNAMIQUES
  // ==============================
  const waHref = `https://wa.me/${contacts.whatsapp}`;
</script>

<!-- ================= FOOTER ================= -->
<footer
  class="border-top py-4 mt-auto"
  role="contentinfo"
  aria-label="Pied de page"
>
  <div class="container d-flex flex-column flex-md-row justify-content-between gap-3">

    <!-- ================= COPYRIGHT ================= -->
    <small class="text-muted">
      © {new Date().getFullYear()} AvA Conciergerie — Tous droits réservés
    </small>

    <!-- ================= SOCIAL LINKS ================= -->
    <nav aria-label="Réseaux sociaux">
      <div class="d-flex gap-3">

        <!-- Instagram -->
        <a
          class="text-muted"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir notre Instagram"
        >
          <i class="bi bi-instagram fs-5" aria-hidden="true"></i>
        </a>

        <!-- Facebook -->
        <a
          class="text-muted"
          href="https://fr-fr.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir notre Facebook"
        >
          <i class="bi bi-facebook fs-5" aria-hidden="true"></i>
        </a>

        <!-- X / Twitter -->
        <a
          class="text-muted"
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir notre profil X"
        >
          <i class="bi bi-twitter-x fs-5" aria-hidden="true"></i>
        </a>

        <!-- WhatsApp -->
        <a
          class="text-muted"
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter via WhatsApp"
        >
          <i class="bi bi-whatsapp fs-5" aria-hidden="true"></i>
        </a>

      </div>
    </nav>

  </div>
</footer>