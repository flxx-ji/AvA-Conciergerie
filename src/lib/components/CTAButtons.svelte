<script>
  import { demo, contacts } from '$lib/config/app.js';

  // HREFs calculés une fois
  const telHref = `tel:${contacts.phoneRaw}`;
  const waHref = `https://wa.me/${contacts.whatsapp}?text=${encodeURIComponent('Bonjour AvA, j’aimerais des infos 🙂')}`;
</script>

<div class="d-flex gap-2 flex-wrap">
  <!-- CTA principal -->
  <a href="/contact" class="btn btn-primary">Demander un devis</a>

  <!-- Tel & WhatsApp : disabled visuellement en mode démo -->
  {#if demo}
    <button class="btn btn-outline-secondary" type="button" disabled title="Démo — inactif">
      Appeler {contacts.phoneDisplay}
    </button>
    <button class="btn btn-outline-success" type="button" disabled title="Démo — inactif">
      WhatsApp
    </button>
  {:else}
    <a class="btn btn-outline-secondary" href={telHref}>Appeler {contacts.phoneDisplay}</a>
    <a class="btn btn-outline-success" href={waHref} target="_blank" rel="noopener">WhatsApp</a>
  {/if}
</div>
