<section class="hero">
  <!-- 🔥 Overlay sombre -->
  <div class="overlay"></div>

  <!-- 🔥 Contenu -->
  <div class="content">
    <h1>
      Confiez votre bien,<br />
      on s’occupe de tout
    </h1>

    <p class="subtitle">
      Vous gagnez du temps, on optimise vos revenus
    </p>

    <p class="location">
      Conciergerie Airbnb à Caen et en Normandie
    </p>

    <!-- 🔥 RASSURANCE -->
    <div class="badges">
      <span>✔ Réponse rapide</span>
      <span>✔ Service personnalisé</span>
      <span>✔ Intervention locale</span>
    </div>

    <div class="buttons">
      <a href="/contact" class="btn-primary">
        Demander un devis
      </a>

      <a href="https://wa.me/+33777324144" target="_blank" class="btn-secondary">
        WhatsApp
      </a>
    </div>
  </div>

  <!-- 🔥 Scroll hint -->
  <div class="scroll-indicator">↓</div>
</section>

<!-- 🔥 PATCHWORK -->
<section class="patchwork">

  <!-- texte fond -->
  <div class="background-text">AVA</div>

  <!-- grid images -->
  <div class="grid">

  <div class="card">
    <img src="/images/montstmichel.jpg" alt="Mont Saint Michel" />
    <span>Mont-Saint-Michel</span>
  </div>

  <div class="card">
    <img src="/images/deauvilleplage.jpg" alt="Deauville" />
    <span>Deauville</span>
  </div>

  <div class="card">
    <img src="/images/cotenormande.jpg" alt="Côte Normande" />
    <span>Côte Normande</span>
  </div>

  <div class="card">
    <img src="/images/maisonscolombages.jpg" alt="Maisons normandes" />
    <span>Architecture Normande</span>
  </div>

</div>

</section>

<style>

/* 🔥 HERO */
.hero {
  position: relative;
  min-height: 100vh;

  background-image: url('/images/cotenormande.jpg');
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* 🔥 overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.65),
    rgba(0,0,0,0.4)
  );
  backdrop-filter: blur(2px);
}

/* 🔥 contenu */
.content {
  position: relative;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 20px;

  animation: fadeUp 1s ease forwards;
}

/* 🔥 titre */
.content h1 {
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 4px 20px rgba(0,0,0,0.6);
}

/* 🔥 sous titre */
.subtitle {
  font-size: 1.6rem;
  margin: 20px 0 10px;
  font-weight: 500;
}

/* 🔥 localisation */
.location {
  font-size: 1rem;
  opacity: 0.85;
  margin-bottom: 20px;
}

/* 🔥 badges */
.badges {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 25px;
}

.badges span {
  font-size: 0.9rem;
  background: rgba(255,255,255,0.15);
  padding: 6px 12px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

/* 🔥 boutons */
.buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: white;
  color: black;
  padding: 14px 28px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
}

.btn-secondary {
  border: 1px solid white;
  color: white;
  padding: 14px 28px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: white;
  color: black;
}

.btn-primary:hover,
.btn-secondary:hover {
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* 🔥 scroll hint */
.scroll-indicator {
  position: absolute;
  bottom: 20px;
  font-size: 1.5rem;
  color: white;
  opacity: 0.7;
  animation: bounce 2s infinite;
}

/* 🔥 PATCHWORK */
.patchwork {
  position: relative;
  padding: 120px 20px;
  overflow: hidden;
  background: #f8f8f8;
}

/* overlay blanc */
.patchwork::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.6);
  z-index: 0;
}

/* texte fond */
.background-text {
  position: absolute;
  font-size: 60vw;
  font-weight: 900;
  letter-spacing: 10px;

  background: linear-gradient(
    to right,
    rgba(0,0,0,0.015),
    rgba(0,0,0,0.08),
    rgba(0,0,0,0.015)
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  user-select: none;
  pointer-events: none;
  z-index: 1;
}

/* grid */
.grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: auto;
  z-index: 2;
}

.grid img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.grid img:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

/* 🔥 animations */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

/* 📱 responsive */
@media (max-width: 768px) {
  .content h1 {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1.3rem;
  }

  .location {
    font-size: 0.9rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .grid img {
    height: 200px;
  }

  .background-text {
    font-size: 30vw;
  }
}


/*Patchwork*/
.card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: 0.4s ease;
}

/* 🔥 overlay gris */
.card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6); /* 🔥 plus sombre */
  opacity: 0;
  transition: 0.3s ease;
}

/* 🔥 texte */
.card span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;
  font-weight: 700; /* 🔥 plus impact */
  font-size: 1.6rem; /* 🔥 plus lisible */
  text-align: center;

  padding: 10px 20px;
  border-radius: 30px;

  opacity: 0;
  transition: 0.3s ease;

  /* 🔥 lisibilité MAX */
  text-shadow: 0 4px 20px rgba(0,0,0,0.9),
               0 2px 10px rgba(0,0,0,0.6);
}
/* 🔥 hover */
.card:hover img {
  transform: scale(1.05);
  filter: brightness(0.9);
}

.card:hover::after {
  opacity: 1;
}

.card:hover span {
  opacity: 1;
  transform: translateY(0);
}
</style>