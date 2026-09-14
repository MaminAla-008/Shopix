import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">Nouvelle expérience shopping</span>
        <h1>
          Découvrez les meilleurs produits
          <br />
          pour votre style de vie
        </h1>
        <p>
          Explorez une sélection premium d’électronique, de mode et d’accessoires
          pensée pour vous offrir qualité, confort et élégance.
        </p>

        <div className="hero-actions">
          <button>Voir la boutique</button>
          <a href="/categories">Voir les catégories</a>
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