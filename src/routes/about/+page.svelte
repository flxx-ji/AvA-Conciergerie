<section class="about">

  <!-- 🔥 HERO -->
  <div class="hero">
    <h1>À propos</h1>
    <p>
      Une gestion complète et professionnelle de votre bien, pensée pour optimiser vos revenus et simplifier votre quotidien.
    </p>
  </div>

  <!-- 🔥 IMAGE + TEXTE -->
  <div class="about-content">

    <div class="image">
      <img src="/images/kashculture-clean-about.jpg" alt="Intérieur logement Airbnb" />
    </div>

    <div class="text">
      <h2>Notre mission</h2>

      <p>
        Animée par une véritable passion pour le voyage et les standards d’excellence en matière d’accueil, AvA Conciergerie accompagne les propriétaires dans la gestion et la valorisation de leur bien en location courte durée.
      </p>

      <p>
        De la stratégie tarifaire adaptée aux saisons à la gestion des réservations, en passant par la communication avec les voyageurs et la coordination des prestations, chaque aspect est pris en charge avec rigueur et professionnalisme.
      </p>

      <p>
        Même à ses débuts, AvA Conciergerie repose sur une vision claire : proposer un service structuré, fiable et orienté résultats, avec une attention constante portée à l’expérience client.
      </p>

      <p class="highlight">
        Confier son bien, c’est avant tout une question de confiance. Notre rôle est de la construire et de la mériter à chaque étape.
      </p>

    </div>

  </div>

  <!-- 🔥 VALEURS -->
  <div class="values">

    <h2>Nos valeurs</h2>

    <div class="cards">

      <div class="card">
        <h3>Discrétion</h3>
        <p>Une gestion fiable et professionnelle, dans le respect total de votre bien.</p>
      </div>

      <div class="card">
        <h3>Proactivité</h3>
        <p>Anticiper, optimiser et réagir rapidement pour maximiser vos performances.</p>
      </div>

      <div class="card">
        <h3>Exigence</h3>
        <p>Chaque détail est pensé pour offrir une expérience premium aux voyageurs.</p>
      </div>

    </div>

  </div>

</section>

<style>

/* 🔥 GLOBAL */
.about {
  padding: 80px 20px;
  max-width: 1100px;
  margin: auto;
}

/* 🔥 HERO */
.hero {
  text-align: center;
  margin-bottom: 60px;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.hero p {
  color: var(--text-soft);
  margin-top: 10px;
  max-width: 600px;
  margin-inline: auto;
}

/* 🔥 CONTENT */
.about-content {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.image {
  flex: 1;
}

.image img {
  width: 100%;
  border-radius: 16px;
}

.text {
  flex: 1;
}

.text h2 {
  margin-bottom: 15px;
  color: var(--text-dark);
}

.text p {
  color: var(--text-soft);
  margin-bottom: 12px;
  line-height: 1.6;
}

/* 🔥 TEXTE IMPORTANT */
.highlight {
  font-weight: 600;
  color: var(--text-dark);
  margin-top: 15px;
}

/* 🔥 VALUES */
.values {
  text-align: center;
}

.values h2 {
  color: var(--text-dark);
}

.cards {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: var(--beige-main);
  padding: 25px;
  border-radius: 16px;
  max-width: 250px;
  border: 1px solid var(--beige-dark);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* 🔥 UX PREMIUM */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.card h3 {
  margin-bottom: 10px;
  color: var(--text-dark);
}

.card p {
  color: var(--text-soft);
}

/* 📱 MOBILE */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
}

</style>