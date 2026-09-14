import Hero from "../components/Hero/Hero";
import ProductCard from "../components/ProductCard/ProductCard";
import "../styles/pages.scss";
import "../styles/Home.scss";

const Home = ({
  onAddToCart,
  onBuyNow,
  message,
  clearMessage,
}) => {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy A15",
      price: "199$",
      description:
        'Écran 6,5" AMOLED, 128 Go, batterie 5000 mAh, triple caméra.',
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    },
    {
      id: 2,
      name: "iPhone 15",
      price: "899$",
      description:
        "Puce A16 Bionic, appareil photo 48 MP, Dynamic Island.",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    },
    {
      id: 3,
      name: "Casque Bluetooth JBL",
      price: "79$",
      description:
        "Son puissant, réduction de bruit, autonomie 30 heures.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 4,
      name: "Chargeur rapide 65W",
      price: "29$",
      description:
        "Chargeur USB-C 65 W compatible smartphone, tablette et PC.",
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330b94",
    },
    {
      id: 5,
      name: "Écouteurs sans fil AirPods",
      price: "149$",
      description:
        "Audio spatial, étui de charge, connectivité instantanée.",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    },
    {
      id: 6,
      name: "Tecno Spark 20",
      price: "129$",
      description:
        'Double SIM, 256 Go, batterie longue durée, écran 6,6".',
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
  ];

  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================= */}

      <Hero />


      {/* =========================
          PRODUITS
      ========================= */}

      <section className="page home-products">

        <div className="page-header">

          <span className="eyebrow">
            Sélection du mois
          </span>

          <h1>
            Produits populaires
            <span> et tendances 2026</span>
          </h1>

          <p>
            Découvrez les articles les plus recherchés,
            alliant design, qualité et performance pour
            une expérience shopping premium.
          </p>

        </div>


        <div className="cards">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onBuyNow={onBuyNow}
            />

          ))}

        </div>


        {/* =========================
            PROMOTION
        ========================= */}

        <div className="home-promo">

          <div className="promo-content">

            <span className="eyebrow">
              Offre spéciale
            </span>

            <h2>
              Livraison rapide et
              <span> garanties premium</span>
            </h2>

            <p>
              Profitez d’une expérience shopping fluide,
              sécurisée et pensée pour vous faire gagner
              du temps.
            </p>

            <div className="promo-features">

              <span>✓ Livraison rapide</span>

              <span>✓ Paiement sécurisé</span>

              <span>✓ Support client</span>

            </div>

          </div>


          <button
            type="button"
            onClick={() => onBuyNow?.(products[0])}
          >
            Acheter maintenant
          </button>

        </div>


        {/* =========================
            MESSAGE
        ========================= */}

        {message && (

          <p
            className="account-message"
            onClick={clearMessage}
          >
            {message}
          </p>

        )}

      </section>


      {/* =========================
          CALL TO ACTION
      ========================= */}

      <section className="home-cta">

        <div className="home-cta-content">

          <span className="eyebrow">
            SHOPIO
          </span>

          <h2>
            Votre shopping,
            <span> simplifié.</span>
          </h2>

          <p>
            Trouvez vos produits préférés au meilleur prix
            et profitez d'une expérience moderne,
            rapide et sécurisée.
          </p>

          <button
            type="button"
            onClick={() => onBuyNow?.(products[1])}
          >
            Découvrir nos produits
          </button>

        </div>

      </section>

    </main>
  );
};

export default Home;