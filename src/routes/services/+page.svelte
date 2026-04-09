<script>
  import CTAButtons from '$lib/components/CTAButtons.svelte';
</script>

<section class="services">

  <!-- 🔥 TITRE -->
  <h1>
    Nos services de conciergerie Airbnb
  </h1>

  <p class="intro">
    Une gestion complète de votre logement à Caen et ses alentours.
  </p>

  <!-- 🔥 CARDS -->
  <div class="cards">

    <div class="card">
      <h2>Gestion complète</h2>
      <p>
        Création, optimisation et gestion de votre annonce Airbnb de A à Z.
      </p>
    </div>

    <div class="card">
      <h2>Communication voyageurs</h2>
      <p>
        Réponse rapide aux voyageurs et assistance pendant leur séjour.
      </p>
    </div>

    <div class="card">
      <h2>Ménage professionnel</h2>
      <p>
        Nettoyage complet entre chaque réservation pour une expérience optimale.
      </p>
    </div>

    <div class="card">
      <h2>Optimisation des revenus</h2>
      <p>
        Ajustement des prix pour maximiser votre rentabilité.
      </p>
    </div>

  </div>



   <!-- fin des cards -->

<!-- 🔥 PHRASE QUI VEND -->
<p class="trust">
  Gagnez du temps, augmentez vos revenus, on s’occupe de tout.
</p>


  <!-- 💰 PRICING -->
  <div class="pricing">
    <p>À partir de</p>
    <h2>20%</h2>
    <p class="small">de commission sur vos revenus</p>
  </div>

  <!-- 🔥 CTA -->
  <div class="cta">
    <CTAButtons />
  </div>

</section>

<style>

/* 🔥 SECTION */
.services {
  padding: 100px 20px;
  text-align: center;
  background: #fafafa;
}

/* 🔥 TITRE */
.services h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

/* 🔥 INTRO */
.intro {
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 50px;
}

/* 🔥 GRID */
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: auto;
   margin-top: 40px;
}

/* 🔥 CARD */
.card {
  padding: 30px;
  border-radius: 16px;
  background: white;
  border: 1px solid rgba(0,0,0,0.05);
  border: none;
  text-align: left;
  transition: all 0.3s ease;
}

/* ✨ HOVER PREMIUM */
.card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* 🔥 TITRE CARD */
.card h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

/* 🔥 TEXTE */
.card p {
  color: #666;
  font-size: 0.95rem;
}

/* 🔥 PHRASE TRUST */
.trust {
  margin-top: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

/* 💰 PRICING */
.pricing {
  margin: 50px auto;
  padding: 30px;
  max-width: 400px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.pricing h2 {
  font-size: 4rem;
  font-weight: 700;
  color: #0d6efd; /* couleur principale */
  letter-spacing: -1px;
}

/* petit texte */
.small {
  opacity: 0.6;
}

/* 🔥 CTA */
.cta {
  margin-top: 40px;
}

:global(.cta a) {
  font-size: 1.1rem;
}

/* 📱 MOBILE */
@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .services h1 {
    font-size: 2rem;
  }

  .pricing h2 {
    font-size: 2.8rem;
  }
}
</style>