import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TechExperience from "../components/TechExperience/TechExperience";
import "../styles/category.scss";

const categories = [
  {
    id: 1,
    slug: "phones",
    name: "Téléphone portable",
    image: "https://images.unsplash.com/photo-1510552776732-01aa75f1e7ce?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    slug: "headphones",
    name: "Casque Bluetooth",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    slug: "earbuds",
    name: "Écouteurs sans fil",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
  },
];

const animationCategories = [
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
    text: "Une sélection de modèles compacts et audio premium.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    href: "/shop?category=earbuds",
  },
];

function Categories() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const visibleCategories = categories.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="category-page">
      <section className="category-hero">
        <div className="hero-content">
          <span className="eyebrow">Collections premium</span>
          <h1>Découvrez les catégories qui font la différence</h1>
          <p>
            Parcourez notre sélection d’équipements, de gadgets et d’accessoires
            choisis pour allier élégance, performance et confort.
          </p>

          <div className="hero-actions">
            <div className="search-box">
              <input
                type="search"
                placeholder="Rechercher une catégorie..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Rechercher une catégorie"
              />
            </div>
            <button
              type="button"
              className="ghost-btn"
              onClick={() => navigate("/shop")}
            >
              Explorer
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <strong>120+</strong>
            <span>produits premium</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>livraison rapide</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>clients satisfaits</span>
          </div>
        </div>
      </section>

      <section className="category-grid">
        {visibleCategories.map((item) => (
          <article className="category-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="overlay">
              <h2>{item.name}</h2>
              <p>Équipements tendance</p>
              <button
                type="button"
                onClick={() => navigate(`/shop?category=${item.slug}`)}
              >
                Voir la sélection
              </button>
            </div>
          </article>
        ))}
        {visibleCategories.length === 0 && (
          <p className="category-empty">Aucune catégorie ne correspond à votre recherche.</p>
        )}
      </section>

      <TechExperience categories={animationCategories} />
    </div>
  );
}

export default Categories;