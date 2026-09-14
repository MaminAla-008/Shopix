import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">

      {/* Arrière-plan animé */}
      <div className="hero-background">
        <span className="orb orb-1"></span>
        <span className="orb orb-2"></span>
        <span className="orb orb-3"></span>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>
        <span className="particle particle-5"></span>
        <span className="particle particle-6"></span>
        <span className="particle particle-7"></span>
        <span className="particle particle-8"></span>

        <div className="light-line line-1"></div>
        <div className="light-line line-2"></div>
      </div>

      <div className="hero-content">
        <span className="eyebrow">Nouvelle expérience shopping</span>

        <h1>
          Découvrez les meilleurs produits
          <br />
          pour votre style de vie
        </h1>

        <p>
          Explorez une sélection premium d’électronique, de mode et
          d’accessoires pensée pour vous offrir qualité, confort et élégance.
        </p>

        <div className="hero-actions">
          <Link to="/shop" className="hero-shop-link">
            Voir la boutique
          </Link>

          <Link to="/categories">
            Voir les catégories
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-card">
          <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
            alt="iPhone 15"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;