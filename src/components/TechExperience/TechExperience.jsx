
import { Link } from "react-router-dom";
import "./TechExperience.scss";

const TechExperience = ({ categories }) => {
  return (
    <section className="tech-experience">

      {/* =========================
          FOND ANIMÉ
      ========================= */}
      <div className="tech-background">

        <span className="tech-orb tech-orb-1"></span>
        <span className="tech-orb tech-orb-2"></span>
        <span className="tech-orb tech-orb-3"></span>

        <span className="tech-particle tech-particle-1"></span>
        <span className="tech-particle tech-particle-2"></span>
        <span className="tech-particle tech-particle-3"></span>
        <span className="tech-particle tech-particle-4"></span>
        <span className="tech-particle tech-particle-5"></span>
        <span className="tech-particle tech-particle-6"></span>
        <span className="tech-particle tech-particle-7"></span>
        <span className="tech-particle tech-particle-8"></span>

        <div className="tech-light-line tech-line-1"></div>
        <div className="tech-light-line tech-line-2"></div>

      </div>

      {/* =========================
          CONTENU
      ========================= */}
      <div className="tech-content">

        <div className="tech-heading">
          <span className="tech-eyebrow">
            CATÉGORIES PRINCIPALES
          </span>

          <h2>
            Explorez nos <span>univers</span>
          </h2>

          <p>
            Découvrez notre sélection de téléphones, casques et
            écouteurs pensée pour une expérience technologique premium.
          </p>
        </div>

        {/* =========================
            3 PRODUITS
        ========================= */}
        <div className="tech-products">

          {/* TELEPHONE */}
          <Link
            to={categories[0].href}
            className="tech-product"
          >
            <div className="tech-image">
              <img
                src={categories[0].image}
                alt={categories[0].title}
              />
            </div>

            <div className="tech-product-info">
              <span>EXPLORER L'UNIVERS</span>

              <h3>
                {categories[0].title}
              </h3>

              <p>
                {categories[0].text}
              </p>
            </div>
          </Link>

          {/* CASQUE */}
          <Link
            to={categories[1].href}
            className="tech-product"
          >
            <div className="tech-image">
              <img
                src={categories[1].image}
                alt={categories[1].title}
              />
            </div>

            <div className="tech-product-info">
              <span>EXPLORER L'UNIVERS</span>

              <h3>
                {categories[1].title}
              </h3>

              <p>
                {categories[1].text}
              </p>
            </div>
          </Link>

          {/* ECOUTEURS */}
          <Link
            to={categories[2].href}
            className="tech-product"
          >
            <div className="tech-image">
              <img
                src={categories[2].image}
                alt={categories[2].title}
              />
            </div>

            <div className="tech-product-info">
              <span>EXPLORER L'UNIVERS</span>

              <h3>
                {categories[2].title}
              </h3>

              <p>
                {categories[2].text}
              </p>
            </div>
          </Link>

        </div>

        {/* INDICATEURS */}
        <div className="tech-indicators">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </section>
  );
};

export default TechExperience;