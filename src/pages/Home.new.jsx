import Hero from "../components/Hero/Hero";
import ProductCard from "../components/ProductCard/ProductCard";
import "../styles/pages.scss";
import "../styles/new.scss";


const Home = ({
  onAddToCart,
  onBuyNow,
  message,
  clearMessage,
}) => {
  const products = [
    {
      id: 1,
      name: "Ordinateur portable gaming",
      price: "999$",
      description:
        "Puissance et confort pour les jeux, le travail et le streaming.",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      id: 2,
      name: "Smartphone Pro",
      price: "599$",
      description:
        "Écran immersif, batterie longue durée et appareil photo premium.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 3,
      name: "Casque sans fil",
      price: "120$",
      description:
        "Son immersif, confort au quotidien et réduction de bruit.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
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
            une expérience premium.
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

          <div className="promo-text">

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

            <div className="promo-items">

              <span>✓ Livraison rapide</span>

              <span>✓ Paiement sécurisé</span>

              <span>✓ Produits garantis</span>

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
          SECTION AVANTAGES
      ========================= */}

      <section className="home-benefits">

        <div className="home-benefits-header">

          <span className="eyebrow">
            POURQUOI SHOPIO ?
          </span>

          <h2>
            Une expérience shopping
            <span> différente</span>
          </h2>

          <p>
            Tout ce dont vous avez besoin pour acheter
            simplement, rapidement et en toute sécurité.
          </p>

        </div>


        <div className="benefits-grid">

          <div className="benefit-card">

            <div className="benefit-icon">
              🚚
            </div>

            <h3>
              Livraison rapide
            </h3>

            <p>
              Recevez vos commandes rapidement
              directement chez vous.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              🔒
            </div>

            <h3>
              Paiement sécurisé
            </h3>

            <p>
              Vos informations sont protégées
              lors de chaque transaction.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              ⭐
            </div>

            <h3>
              Qualité premium
            </h3>

            <p>
              Une sélection de produits choisis
              pour leur qualité et leur performance.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              💬
            </div>

            <h3>
              Support client
            </h3>

            <p>
              Une équipe disponible pour répondre
              à toutes vos questions.
            </p>

          </div>

        </div>

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
            Prêt à découvrir
            <span> votre prochain produit ?</span>
          </h2>

          <p>
            Explorez notre sélection et trouvez les
            produits qui correspondent parfaitement
            à vos besoins.
          </p>

          <button
            type="button"
            onClick={() => onBuyNow?.(products[1])}
          >
            Commencer mes achats
          </button>

        </div>

      </section>

    </main>
  );
};

export default Home;