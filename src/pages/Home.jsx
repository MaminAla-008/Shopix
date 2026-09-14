
import Hero from "../components/Hero/Hero";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/pages.scss";
import "../styles/Home.scss";
import TechExperience from "../components/TechExperience/TechExperience";

const categoryShowcase = [
  {
    title: "Téléphones premium",
    text: "iPhone, Samsung, Pixel, Xiaomi et les grandes gammes Android.",
    href: "/shop?category=phones",
  },
  {
    title: "Casques immersifs",
    text: "Des formats studio, gaming et nomades pour chaque ambiance.",
    href: "/shop?category=headphones",
  },
  {
    title: "Écouteurs sans fil",
    text: "Une présentation claire des modèles compacts et audio premium.",
    href: "/shop?category=earbuds",
  },
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCategory(
        (current) => (current + 1) % categoryShowcase.length
      );
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================= */}
      <Hero />

      <section
        className="home-showcase"
        aria-labelledby="home-showcase-title"
      >
        <div className="home-section-heading">
          <span className="eyebrow">Catégories principales</span>

          <h2 id="home-showcase-title">
            Explorez nos univers
          </h2>

          <p>
            Accédez rapidement aux téléphones, casques et écouteurs
            depuis une présentation claire et professionnelle.
          </p>
        </div>

        {/* =========================
            ANIMATION PRODUITS
        ========================= */}
        <div className="home-category-showcase">

          {categoryShowcase.map((category, index) => (
            <Link
              className={`home-category-tile home-category-${index} ${
                index === activeCategory ? "is-active" : ""
              }`}
              to={category.href}
              key={category.title}
              onMouseEnter={() => setActiveCategory(index)}
            >
              <div className="home-category-tile-content">
                <span>Explorer l’univers</span>

                <h3>{category.title}</h3>

                <p>{category.text}</p>
              </div>
            </Link>
          ))}

        </div>

        {/* =========================
            CONTROLES
        ========================= */}
        <div
          className="home-showcase-controls"
          aria-label="Choisir une catégorie"
        >
          {categoryShowcase.map((category, index) => (
            <button
              type="button"
              className={index === activeCategory ? "is-active" : ""}
              onClick={() => setActiveCategory(index)}
              key={category.title}
              aria-label={`Afficher ${category.title}`}
            >
              <span />
            </button>
          ))}
        </div>
      </section>

          <TechExperience categories={categoryShowcase} />
    </main>
  );
};

export default Home;