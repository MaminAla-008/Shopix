import "./TechExperience.scss";

const TechExperience = () => {
  return (
    <section className="tech-experience">

      {/* Arrière-plan animé */}
      <div className="tech-bg">
        <span className="tech-orb tech-orb-1"></span>
        <span className="tech-orb tech-orb-2"></span>

        <span className="tech-particle particle-1"></span>
        <span className="tech-particle particle-2"></span>
        <span className="tech-particle particle-3"></span>
        <span className="tech-particle particle-4"></span>
        <span className="tech-particle particle-5"></span>
      </div>

      {/* Texte */}
      <div className="tech-content">

        <span className="tech-label">
          SHOPIX
        </span>

        <h2>
          La technologie
          <span> autrement.</span>
        </h2>

        <p>
          Une expérience pensée pour ceux qui aiment
          la technologie, le design et l’innovation.
        </p>

        <button className="tech-button">
          Découvrir Shopix
          <span>→</span>
        </button>

        <div className="tech-features">
          <div>
            <strong>✦</strong>
            <span>Qualité premium</span>
          </div>

          <div>
            <strong>ϟ</strong>
            <span>Innovation</span>
          </div>

          <div>
            <strong>☆</strong>
            <span>Votre style</span>
          </div>
        </div>

      </div>

      {/* Zone visuelle */}
      <div className="tech-visual">

        <div className="tech-ring ring-1"></div>
        <div className="tech-ring ring-2"></div>

        <div className="tech-glow"></div>

        {/* Image principale */}
        <div className="tech-image">
          <img
            src="/images/shopix-tech.png"
            alt="Smartphone, casque et écouteurs"
          />
        </div>

        <span className="visual-particle vp-1"></span>
        <span className="visual-particle vp-2"></span>
        <span className="visual-particle vp-3"></span>

      </div>

    </section>
  );
};

export default TechExperience;