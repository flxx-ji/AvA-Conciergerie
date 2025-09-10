<script>
  import { enhance } from '$app/forms';
  export let form; // { success, error, values } renvoyés par l'action
</script>

<section class="container py-5">
  <h1 class="h3 mb-4">Contact</h1>

  <!-- use:enhance => POST sans reload complet (progressive enhancement) -->
  <form method="POST" class="row g-3" use:enhance>
    <div class="col-md-6">
      <!-- Associe label ↔ input via for/id -->
      <label class="form-label" for="name">Nom</label>
      <input
        id="name"
        name="name"
        class="form-control"
        required
        autocomplete="name"
        value={form?.values?.name ?? ''} />
    </div>

    <div class="col-md-6">
      <label class="form-label" for="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        class="form-control"
        required
        autocomplete="email"
        value={form?.values?.email ?? ''} />
    </div>

    <div class="col-12">
      <label class="form-label" for="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        class="form-control"
        required>{form?.values?.message ?? ''}</textarea>
    </div>

    <!-- Honeypot anti-spam (caché) : correspond au champ lu côté serveur -->
    <input type="text" name="website" class="d-none" tabindex="-1" autocomplete="off" />

    <div class="col-12">
      <button class="btn btn-primary" type="submit">Envoyer</button>
    </div>

    {#if form?.error}
      <div class="col-12">
        <div class="alert alert-danger mt-2">{form.error}</div>
      </div>
    {/if}

    {#if form?.success}
      <div class="col-12">
        <div class="alert alert-success mt-2">Merci ! On te répond très vite.</div>
      </div>
    {/if}
  </form>
</section>
