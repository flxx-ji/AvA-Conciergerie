<!-- src/lib/components/CTAButtons.svelte -->

<script>
  import { contacts } from '$lib/config/app.js';

  // ==============================
  // 🔗 LIENS DYNAMIQUES
  // ==============================

  // 📞 lien téléphone (ouvre directement l'appel sur mobile)
  const telHref = `tel:${contacts.phoneRaw}`;

  // 💬 lien WhatsApp avec message pré-rempli
  const waHref = `https://wa.me/${contacts.whatsapp}?text=${encodeURIComponent(
    'Bonjour, j’aimerais des infos 🙂'
  )}`;

  // ==============================
  // 📊 TRACKING (DEBUG / ANALYTICS)
  // ==============================
  const track = (label) => {
    console.log('[CTA]', label);
  };
</script>

<!-- ================= CTA BUTTONS ================= -->
<div
  class="d-flex gap-2 flex-wrap"
  role="navigation"
  aria-label="Actions de contact"
>

  <!-- ================= CONTACT (INTERNE) ================= -->
  <a
    href="#contact"
    class="btn btn-primary"
    on:click={() => track('ContactForm')}
    aria-label="Aller au formulaire de contact"
  >
    Demander un devis
  </a>

  <!-- ================= APPEL TELEPHONE ================= -->
  <a
    class="btn btn-outline-secondary"
    href={telHref}
    rel="external"
    target="_self"
    title={`Appeler ${contacts.phoneDisplay}`}
    aria-label={`Appeler ${contacts.phoneDisplay}`}
    on:click={() => track('Call')}
  >
    <!-- aria-hidden = évite lecture double -->
    <span aria-hidden="true">📞</span>
    Appeler {contacts.phoneDisplay}
  </a>

  <!-- ================= WHATSAPP ================= -->
  <a
    class="btn btn-outline-success"
    href={waHref}
    rel="noopener external"
    target="_blank"
    title="Contacter via WhatsApp"
    aria-label="Contacter via WhatsApp"
    on:click={() => track('WhatsApp')}
  >
    <span aria-hidden="true">💬</span>
    WhatsApp
  </a>

</div>