import "../styles/category.scss";

const categories = [
  {
    id: 1,
    name: "Téléphone portable",
    image: "https://images.unsplash.com/photo-1510552776732-01aa75f1e7ce?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Casque Bluetooth",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Écouteurs sans fil",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
  },
];

function Categories() {
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
              <input type="text" placeholder="Rechercher une catégorie..." />
            </div>
            <button className="ghost-btn">Explorer</button>
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
        {categories.map((item) => (
          <article className="category-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="overlay">
              <h2>{item.name}</h2>
              <p>Équipements tendance</p>
              <button>Voir la sélection</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Categories;