import Hero from "../components/Hero/Hero";
import { Link } from "react-router-dom";
import "../styles/pages.scss";
import "../styles/Home.scss";

const categoryShowcase = [
  {
    title: "Téléphones premium",
    text: "iPhone, Samsung, Pixel, Xiaomi et les grandes gammes Android.",
    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-1.jpg",
    href: "/shop?category=phones",
  },
  {
    title: "Casques immersifs",
    text: "Des formats studio, gaming et nomades pour chaque ambiance.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    href: "/shop?category=headphones",
  },
  {
    title: "Écouteurs sans fil",
    text: "Une présentation claire des modèles compacts et audio premium.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    href: "/shop?category=earbuds",
  },
];

const styleShowcase = [
  ["Minimal", "Des lignes sobres et une interface facile à parcourir."],
  ["Performance", "Une sélection pensée pour les usages rapides et exigeants."],
  ["Studio", "Une atmosphère claire pour mieux comparer les univers audio."],
];

const Home = () => {
  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================= */}
      <Hero />

      <section className="home-showcase" aria-labelledby="home-showcase-title">
        <div className="home-section-heading">
          <span className="eyebrow">Univers Shopix</span>
          <h2 id="home-showcase-title">Des catégories pensées par usage</h2>
          <p>Une démonstration visuelle de notre style et de nos univers, sans catalogue de vente sur l’accueil.</p>
        </div>

        <div className="home-category-showcase">
          {categoryShowcase.map((category) => (
            <Link className="home-category-tile" to={category.href} key={category.title}>
              <img src={category.image} alt={category.title} />
              <div className="home-category-tile-content">
                <span>Explorer l’univers</span>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-style-showcase" aria-labelledby="home-style-title">
        <div className="home-section-heading">
          <span className="eyebrow">Direction artistique</span>
          <h2 id="home-style-title">Un style clair, moderne et technologique</h2>
        </div>
        <div className="home-style-list">
          {styleShowcase.map(([title, text], index) => (
            <article className="home-style-item" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Home;