<script>
  import { onMount } from 'svelte';

  // ✅ CSS Bootstrap + icônes chargés côté client ET serveur (pas de souci)
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';

  // ✅ JS Bootstrap uniquement côté client (sinon "window is not defined")
  onMount(async () => {
    // bundle = bootstrap + Popper (propre et simple)
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });
</script>

<!-- Tu ajouteras header/footer ici ensuite -->
<slot />
