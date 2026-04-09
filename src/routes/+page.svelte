<section class="hero">
  <!-- 🔥 Overlay sombre + dégradé -->
  <div class="overlay"></div>

  <!-- 🔥 Contenu -->
  <div class="content">
    <h1>
      Confiez-nous votre bien
    </h1>

    <p class="subtitle">
      Nous nous occupons du reste
    </p>

    <p class="location">
      Gestion de location courte durée en Normandie
    </p>

    <div class="buttons">
      <a href="/contact" class="btn-primary">
        Demander un devis
      </a>

      <a href="https://wa.me/+33777324144" target="_blank" class="btn-secondary">
        WhatsApp
      </a>
    </div>
  </div>
</section>

<section class="patchwork">

  <!-- 🔥 Texte géant en fond -->
  <div class="background-text">AVA</div>

  <!-- 🔥 Grid images -->
  <div class="grid">

    <img src="/images/montstmichel.jpg" alt="Mont Saint Michel" />
    <img src="/images/deauvilleplage.jpg" alt="Deauville" />
    <img src="/images/cotenormande.jpg" alt="Côte Normande" />
    <img src="/images/maisonscolombages.jpg" alt="Maisons normandes" />

  </div>

</section>
<style>
/* 🔥 HERO plein écran */
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

/* 🔥 overlay premium */
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

/* 🔥 sous-titre */
.subtitle {
  font-size: 1.6rem;
  margin: 20px 0 10px;
  font-weight: 500;
}

/* 🔥 localisation */
.location {
  font-size: 1rem;
  opacity: 0.85;
  margin-bottom: 30px;
}

/* 🔥 boutons */
.buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

/* bouton principal */
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

/* bouton secondaire */
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

.patchwork {
  position: relative;
  padding: 120px 20px;
  overflow: hidden;
  background: #f8f8f8;
}

/* 🔥 AVA en fond */
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

  .patchwork::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.6);
  z-index: 0;
}
}




/* 🔥 GRID */
.grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: auto;
  z-index: 2;
}

/* 🔥 images */
.grid img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.4s ease, filter 0.4s ease;
}

/* 🔥 effet hover (pro) */
.grid img:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
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
}

/* 🔥 animation */
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


@media (max-width: 768px) {
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

</style>