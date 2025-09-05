<script>
  import { enhance } from '$app/forms';
  export let form; // SvelteKit y mettra { success, error, values } renvoyés par l'action
</script>

<section class="container py-5">
  <h1 class="h3 mb-4">Contact</h1>

  <!-- 
    use:enhance => progressive enhancement (AJAX) sans rechargement complet.
    Si JS est coupé, ça marche quand même (POST classique).
  -->
  <form method="POST" class="row g-3" use:enhance>
    <div class="col-md-6">
      <label class="form-label">Nom</label>
      <input name="name" class="form-control" required
        value={form?.values?.name ?? ''} />
    </div>

    <div class="col-md-6">
      <label class="form-label">Email</label>
      <input type="email" name="email" class="form-control" required
        value={form?.values?.email ?? ''} />
    </div>

    <div class="col-12">
      <label class="form-label">Message</label>
      <textarea name="message" rows="5" class="form-control" required>
{form?.values?.message ?? ''}</textarea>
    </div>

    <div class="col-12">
      <button class="btn btn-primary">Envoyer</button>
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
