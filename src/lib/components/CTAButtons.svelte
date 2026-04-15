<!-- src/lib/components/CTAButtons.svelte -->
<script>
  import { contacts } from '$lib/config/app.js';
 
  const telHref = `tel:${contacts.phoneRaw}`;
  const waHref  = `https://wa.me/${contacts.whatsapp}?text=${encodeURIComponent('Bonjour, j’aimerais des infos 🙂')}`;

  // mini tracking console (facultatif)
  const track = (label) => console.log('[CTA]', label);
</script>

<div class="d-flex gap-2 flex-wrap">
  <!-- Lien interne -->
  <a href="/contact" class="btn btn-primary" on:click={() => track('ContactForm')}>
    Demander un devis
  </a>

  <!-- Tel : VRAI lien tel: ; rel="external" pour éviter toute interception -->
  <a
    class="btn btn-outline-secondary"
    href={telHref}
    rel="external"
    target="_self"
    title={`Appeler ${contacts.phoneDisplay}`}
    on:click={() => track('Call')}
  >
    Appeler {contacts.phoneDisplay}
  </a>

  <!-- WhatsApp : VRAI lien wa.me ; rel externe + target blank -->
  <a
    class="btn btn-outline-success"
    href={waHref}
    rel="noopener external"
    target="_blank"
    title="WhatsApp"
    on:click={() => track('WhatsApp')}
  >
    WhatsApp
  </a>

  
</div>
