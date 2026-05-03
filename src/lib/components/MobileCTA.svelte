<script>
  import { contacts } from '$lib/config/app.js';

  // ==============================
  // 🔗 LIENS DYNAMIQUES
  // ==============================

  // 📞 lien téléphone (ouvre directement l'appel)
  const telHref = `tel:${contacts.phoneRaw}`;

  // 💬 lien WhatsApp (sans message ici pour version rapide mobile)
  const waHref = `https://wa.me/${contacts.whatsapp}`;
</script>

<!-- ================= CTA MOBILE ================= -->
<!-- 
  🧠 Bandeau sticky uniquement mobile
  → permet conversion rapide sans scroller
-->
<div
  class="sticky-cta py-2 d-md-none"
  role="navigation"
  aria-label="Actions rapides de contact"
>

  <div class="container d-flex gap-2">

    <!-- ================= DEVIS (scroll interne) ================= -->
    <a
      href="#contact"
      class="btn btn-primary w-100"
      aria-label="Aller au formulaire de demande de devis"
    >
      📄 Devis
    </a>

    <!-- ================= APPEL ================= -->
    <a
      href={telHref}
      class="btn btn-outline-secondary w-100"
      rel="external"
      aria-label={`Appeler ${contacts.phoneDisplay}`}
      title={`Appeler ${contacts.phoneDisplay}`}
    >
      📞 Appeler
    </a>

    <!-- ================= WHATSAPP ================= -->
    <a
      href={waHref}
      target="_blank"
      rel="noopener external"
      class="btn btn-success w-100"
      aria-label="Contacter via WhatsApp"
      title="Contacter via WhatsApp"
    >
      💬 WhatsApp
    </a>

  </div>
</div>

<style>
/* ================= CTA MOBILE ================= */

/* 
  📱 visible uniquement mobile
  → fixé en bas de l'écran
*/
@media (max-width: 768px) {

  .sticky-cta {
    position: sticky;
    bottom: 0;
    z-index: 1030;

    /* effet verre premium */
    background: rgba(255,255,255,.9);
    backdrop-filter: blur(6px);

    border-top: 1px solid rgba(0,0,0,.06);
  }

}
</style>