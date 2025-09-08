<!-- src/routes/+page.svelte
     Page d'accueil (home). 
     On garde ton hero + USP, puis on ajoute : Process 3 étapes, Partenaires, Avis, FAQ, et un CTA final.
-->
<script>
  // ⚠️ Ces composants viennent des fichiers que je t’ai donnés:
  // - src/lib/components/CTAButtons.svelte
  // - src/lib/components/Process3Steps.svelte
  // - src/lib/components/Partners.svelte
  // - src/lib/components/Testimonials.svelte
  // - src/lib/components/FAQ.svelte
  // Si tu ne les as pas encore créés, fais-le avant (copier/coller les snippets).
  import CTAButtons from '$lib/components/CTAButtons.svelte';
  import Process3Steps from '$lib/components/Process3Steps.svelte';
  import Partners from '$lib/components/Partners.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<!-- ===================== HERO =====================
     “Hero” = grande intro en haut de page avec titre, sous-titre et CTA.
     Ici on remplace simplement tes 2 boutons par le composant CTA réutilisable.
-->
<section class="bg-light border-bottom">
  <div class="container py-5">
    <div class="row align-items-center g-4">
      <div class="col-lg-7">
        <h1 class="display-5 fw-bold mb-3">
          Concierge <span class="text-primary">sur-mesure</span> pour un quotidien fluide
        </h1>
        <p class="lead mb-4">
          Accueil VIP, réservations, intendance… AvA Conciergerie s’occupe de tout.
        </p>

        <!-- CTA réutilisable : /contact + (tel/WhatsApp en mode démo désactivés) -->
        <CTAButtons />
      </div>

      <!-- Visuel à droite (placeholder pour l’instant) -->
      <div class="col-lg-5">
        <div class="ratio ratio-16x9 bg-white rounded shadow-sm d-flex align-items-center justify-content-center">
          <span class="text-muted">Image / vidéo de présentation</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== USP / POURQUOI NOUS CHOISIR =====================
     Tu gardes ta section : 3 cartes simples, bootstrap.
-->
<section class="container py-5">
  <h2 class="h4 mb-4">Pourquoi nous choisir ?</h2>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="h6">Réactivité</h3>
          <p class="mb-0">Réponse rapide et prise en charge immédiate de vos demandes.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="h6">Discrétion</h3>
          <p class="mb-0">Confidentialité totale, service haut de gamme.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="h6">Réseau</h3>
          <p class="mb-0">Partenaires fiables pour des prestations irréprochables.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== PROCESS (3 ÉTAPES) =====================
     Objectif: rassurer en expliquant le parcours client simplement.
-->
<Process3Steps />

<!-- ===================== PARTENAIRES =====================
     Logos/nom de partenaires (mock). Remplacer par de vrais logos quand tu veux.
-->
<Partners />

<!-- ===================== AVIS CLIENTS =====================
     3 avis courts (mock). Tu pourras brancher des vrais plus tard.
-->
<Testimonials />

<!-- ===================== FAQ =====================
     6 questions/réponses courtes pour lever les objections.
-->
<FAQ />

<!-- ===================== CTA FINAL =====================
     On répète volontairement le CTA en bas de page pour convertir les lecteurs “scrollers”.
-->
<section class="container my-5">
  <CTAButtons />
</section>
