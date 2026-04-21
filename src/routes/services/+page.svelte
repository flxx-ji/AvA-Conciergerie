<script>
  import CTAButtons from '$lib/components/CTAButtons.svelte';
</script>

<section class="services">

  <div class="container">

    <!-- 🔥 IMAGE -->
    <div class="image">
      <img src="/images/apartments-living-room.jpg" alt="Salon Airbnb moderne" />
    </div>

    <!-- 🔥 TEXTE -->
    <div class="content">

      <h1>
  Confiez votre bien, <span>nous nous occupons de tout</span>
</h1>

<p class="intro">
  Une gestion complète, professionnelle et optimisée pour maximiser vos revenus Airbnb à Caen et ses alentours.
</p>

      <!-- 🔥 BLOC 1 -->
      <div class="bloc">
       <h3>Gestion des voyageurs</h3>
<ul>
  <li>Réponses rapides et professionnelles 7j/7</li>
  <li>Check-in et check-out optimisés</li>
  <li>Gestion complète des imprévus</li>
</ul>
      </div>

      <!-- 🔥 BLOC 2 -->
      <div class="bloc">
        <h3>Entretien et suivi du logement</h3>
<ul>
  <li>Ménage professionnel après chaque séjour</li>
  <li>Coordination des interventions techniques</li>
  <li>Contrôle qualité systématique</li>
</ul>
      </div>

      <!-- 🔥 BLOC 3 -->
      <div class="bloc">
        <h3>Optimisation des performances</h3>
<ul>
  <li>Analyse du marché local</li>
  <li>Tarification dynamique selon les saisons</li>
  <li>Maximisation du taux d’occupation</li>
</ul>
      </div>

      <div class="why">
  <h2>Pourquoi choisir AvA Conciergerie ?</h2>
  <p>
    Une gestion rigoureuse, un suivi personnalisé et une approche orientée résultats pour valoriser votre bien dès les premiers mois.
  </p>
</div>

      <!-- 🔥 CTA -->
      <div class="cta">
        <CTAButtons />
      </div>

    </div>

  </div>

</section>

<style>

/* 🔥 SECTION */
.services {
  padding: 100px 20px;
  background: #fafafa;
}

/* 🔥 LAYOUT */
.container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* 🔥 IMAGE */
.image img {
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

/* 🔥 TEXTE */
.content h1 {
  font-size: 2.8rem;
  font-weight:  800;
  line-height: 1.2;
  margin-bottom: 15px;
}

.content h1 span {
  color: #0d6efd;
  display: block;
}

.intro {
  opacity: 0.7;
  margin-bottom: 30px;
}

/* 🔥 BLOCS */
.bloc {
  margin-bottom: 25px;
  padding: 15px;
  border-radius: 12px;
  transition: 0.3s;
}

.bloc h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.bloc:hover {
  background: rgba(0,0,0,0.03);
}

/* 🔥 LISTE */
.bloc ul {
  list-style: none;
  padding: 0;
}

.bloc li {
  margin-bottom: 6px;
  position: relative;
  padding-left: 20px;
}

/* ✔ check */
.bloc li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #0d6efd;
  font-size: 1rem;
  font-weight: bold;
}

/* 🔥 CTA */
.cta {
  margin-top: 30px;
}

/* 📱 RESPONSIVE */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }

  .content h1 {
    font-size: 2rem;
  }
}

.why {
  margin-top: 40px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.why h2 {
  margin-bottom: 10px;
}

.why p {
  opacity: 0.8;
}

</style>