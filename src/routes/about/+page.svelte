<section class="about">

  <!-- 🔥 HERO -->
  <div class="hero">
    <h1>À propos</h1>
    <p>
      AvA Conciergerie accompagne les propriétaires Airbnb avec un service fiable,
      discret et orienté résultats.
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
        Libérer votre temps et maximiser vos revenus en prenant en charge
        l’ensemble de la gestion de votre logement.
      </p>

      <p>
        De la communication voyageurs au ménage, en passant par l’optimisation
        des prix, nous assurons une gestion complète, rigoureuse et sans stress.
      </p>
    </div>

  </div>

  <!-- 🔥 VALEURS -->
  <div class="values">

    <h2>Nos valeurs</h2>

    <div class="cards">

      <div class="card">
        <h3>Discrétion</h3>
        <p>Un service fiable et professionnel, en toute confiance.</p>
      </div>

      <div class="card">
        <h3>Proactivité</h3>
        <p>Nous anticipons les besoins pour éviter les problèmes.</p>
      </div>

      <div class="card">
        <h3>Qualité</h3>
        <p>Chaque détail compte pour offrir une expérience premium.</p>
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
}

.hero p {
  color: #666;
  margin-top: 10px;
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
}

.text p {
  color: #555;
  margin-bottom: 10px;
}

/* 🔥 VALUES */
.values {
  text-align: center;
}

.cards {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 16px;
  max-width: 250px;
}

.card h3 {
  margin-bottom: 10px;
}

/* 📱 MOBILE */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
}

</style>