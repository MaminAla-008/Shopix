import Hero from "../components/Hero/Hero";
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
      name: "Samsung Galaxy A55 5G",
      price: "$449",
      description:
        "Écran AMOLED 120 Hz, appareil photo polyvalent et grande autonomie.",
      category: "phones",
      image:
        "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-1.jpg",
      backImage:
        "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-2.jpg",
    },
    {
      id: 2,
      name: "iPhone 15",
      price: "$899",
      description:
        "Puce A16 Bionic, appareil photo 48 MP et port USB-C.",
      category: "phones",
      image:
        "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
      backImage:
        "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-2.jpg",
    },
    {
      id: 3,
      name: "Casque Bluetooth JBL",
      price: "$79",
      description:
        "Son puissant, réduction de bruit, autonomie 30 heures.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 4,
      name: "Redmi Note 13 Pro",
      price: "$299",
      description:
        "Écran 120 Hz, 8 Go RAM, charge rapide 33 W, caméra 108 MP.",
      category: "phones",
      image:
        "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-1.jpg",
      backImage:
        "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-2.jpg",
    },
    {
      id: 5,
      name: "Écouteurs sans fil AirPods",
      price: "$149",
      description:
        "Audio spatial, étui de charge, connectivité instantanée.",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
      category: "earbuds",
    },
    {
      id: 6,
      name: "Sony WH-1000XM5",
      price: "$349",
      description:
        "Casque Bluetooth avec réduction de bruit et son haute résolution.",
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440",
      category: "headphones",
    },
  ];

  return (
    <main className="home-page">

      {/* =========================
          HERO
      {/* =========================
          PROMOTION
      ========================= */}
      <section className="page home-products">
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