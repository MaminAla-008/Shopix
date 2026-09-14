import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../styles/Shop.scss";
import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy A15",
    price: "$199",
    description:
      'Écran 6,5" AMOLED, 128 Go, batterie 5000 mAh, triple caméra.',
    category: "phones",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    rating: 5,
  },
  {
    id: 2,
    name: "iPhone 15",
    price: "$899",
    description:
      "Puce A16 Bionic, appareil photo 48 MP, Dynamic Island.",
    category: "phones",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    rating: 5,
  },
  {
    id: 3,
    name: "Tecno Spark 20",
    price: "$129",
    description:
      'Double SIM, 256 Go, batterie longue durée, écran 6,6".',
    category: "phones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    rating: 4,
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 13",
    price: "$249",
    description:
      "Écran 120 Hz, 8 Go RAM, charge rapide 33 W, caméra 108 MP.",
    category: "phones",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    rating: 5,
  },
  {
    id: 5,
    name: "Casque Bluetooth JBL",
    price: "$79",
    description:
      "Son puissant, réduction de bruit, autonomie 30 heures.",
    category: "headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: 5,
  },
  {
    id: 6,
    name: "Sony WF-1000XM5",
    price: "$279",
    description:
      "Écouteurs Bluetooth avec réduction de bruit et étui de charge.",
    category: "earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    rating: 4,
  },
  {
    id: 7,
    name: "Écouteurs sans fil AirPods",
    price: "$149",
    description:
      "Audio spatial, étui de charge, connectivité instantanée.",
    category: "earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    rating: 5,
  },
  {
    id: 8,
    name: "Casque gaming avec micro",
    price: "$59",
    description:
      "Son surround 7.1, micro antibruit, confort longue session.",
    category: "headphones",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440",
    rating: 4,
  },
  {
    id: 9,
    name: "Apple AirPods Pro",
    price: "$249",
    description:
      "Écouteurs sans fil avec audio spatial et réduction de bruit active.",
    category: "earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    rating: 4,
  },
];

const categories = [
  {
    slug: "phones",
    name: "Téléphone portable",
    image:
      "https://images.unsplash.com/photo-1510552776732-01aa75f1e7ce",
  },
  {
    slug: "headphones",
    name: "Casque Bluetooth",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
  },
  {
    slug: "earbuds",
    name: "Écouteurs sans fil",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
  },
];

export default function Shop({
  onAddToCart,
  onBuyNow,
  message,
  clearMessage,
}) {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterMessage("Veuillez saisir votre adresse email.");
      return;
    }

    setNewsletterMessage("Merci, votre inscription est confirmée.");
    setNewsletterEmail("");
  };

  const activeCategory = categories.find(
    (category) => category.slug === selectedCategory
  );
  const visibleProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory.slug)
    : products;

  return (
    <div className="shop-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="hero">

 <div className="hero-content">

  <span className="hero-badge">
    <FaBolt />
    Collection exclusive 2026
  </span>

  <h1>
    L’excellence à portée de clic.
    <span> Découvrez nos produits premium.</span>
  </h1>

  <p>
    Profitez d’une sélection soigneusement choisie, de prix
    attractifs et d’une expérience shopping rapide, simple
    et sécurisée.
  </p>

  <div className="hero-actions">

    <button
      type="button"
      className="shop-primary-btn"
      onClick={() => onBuyNow?.(products[0])}
    >
      <FaBolt />
      Acheter maintenant
    </button>

    <button
      type="button"
      className="shop-secondary-btn"
      onClick={() =>
        document
          .getElementById("products")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Explorer la boutique
      <FaArrowRight />
    </button>

  </div>

  <div className="hero-features">

    <div className="hero-feature">
      <div className="feature-icon">
        <FaTruck />
      </div>
      <div>
        <strong>Livraison rapide</strong>
        <span>Partout à Madagascar</span>
      </div>
    </div>

    <div className="hero-feature">
      <div className="feature-icon">
        <FaShieldAlt />
      </div>
      <div>
        <strong>Paiement sécurisé</strong>
        <span>Transactions protégées</span>
      </div>
    </div>

    <div className="hero-feature">
      <div className="feature-icon">
        <FaHeadset />
      </div>
      <div>
        <strong>Support disponible</strong>
        <span>Une équipe à votre écoute</span>
      </div>
    </div>

  </div>

</div>

        <div className="hero-image">

          <div className="hero-glow"></div>

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Smartphone premium"
          />

        </div>

      </section>


      {/* =========================
          PRODUCTS
      ========================= */}
      <section
        className="products"
        id="products"
      >

        <div className="title">

          <span>NOTRE SÉLECTION</span>

          <h2>
            {activeCategory ? activeCategory.name : "Produits populaires"}
          </h2>

          <p>
            Les meilleures ventes sélectionnées pour vous.
          </p>

        </div>


        <div className="product-grid">

          {visibleProducts.map((item) => (

            <article
              className="card"
              key={item.id}
            >

              <div className="image">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <span className="product-badge">
                  Populaire
                </span>

              </div>


              <div className="card-content">

                <div className="stars">

                  {[...Array(5)].map((_, index) => (

                    <FaStar
                      key={index}
                      className={
                        index < item.rating
                          ? "active"
                          : "inactive"
                      }
                    />

                  ))}

                  <span>
                    ({item.rating}.0)
                  </span>

                </div>


                <h3>{item.name}</h3>

                <p className="product-description">
                  {item.description}
                </p>


                <div className="product-bottom">

                  <h4>{item.price}</h4>

                  <button
                    type="button"
                    className="quick-cart"
                    onClick={() =>
                      onAddToCart?.(item)
                    }
                    aria-label={`Ajouter ${item.name} au panier`}
                  >
                    <FaShoppingCart />
                  </button>

                </div>


                <div className="card-actions">

                  <button
                    type="button"
                    onClick={() =>
                      onAddToCart?.(item)
                    }
                  >
                    Ajouter au panier
                  </button>

                  <button
                    type="button"
                    className="buy-button"
                    onClick={() =>
                      onBuyNow?.(item)
                    }
                  >
                    Acheter
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        {visibleProducts.length === 0 && (
          <p className="account-message">
            Aucun produit disponible dans cette catégorie.
          </p>
        )}

      </section>


      {/* =========================
          CATEGORIES
      ========================= */}
      <section className="categories">

        <div className="title">

          <span>EXPLOREZ</span>

          <h2>Parcourir les catégories</h2>

          <p>
            Explorez nos collections les plus prisées.
          </p>

        </div>


        <div className="category-grid">

          {categories.map((category) => (

            <Link
              className="category-card"
              key={category.name}
              to={`/shop?category=${category.slug}`}
            >

              <img
                src={category.image}
                alt={category.name}
              />

              <div className="category-overlay">

                <h3>{category.name}</h3>

                <span>
                  Explorer
                  <FaArrowRight />
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =========================
          DEALS
      ========================= */}
      <section className="deals">

        <div className="deal-content">

          <span className="deal-badge">
            Offre limitée
          </span>

          <h2>
            Jusqu’à
            <span> 50%</span>
            <br />
            de réduction
          </h2>

          <p>
            Ne manquez pas nos meilleures promotions
            du moment.
          </p>

          <button
            type="button"
            onClick={() =>
              onBuyNow?.(products[0])
            }
            className="shop-primary-btn"
          >
            Profiter de l’offre
            <FaArrowRight />
          </button>

        </div>


        <div className="deal-image">

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Offres promotionnelles"
          />

        </div>

      </section>


      {/* =========================
          NEWSLETTER
      ========================= */}
      <section className="newsletter">

        <span>RESTEZ INFORMÉ</span>

        <h2>
          Abonnez-vous à notre newsletter
        </h2>

        <p>
          Recevez des offres exclusives et les nouveautés
          chaque semaine.
        </p>


        <form
          className="newsletter-box"
          onSubmit={handleNewsletterSubmit}
        >

          <input
            type="email"
            placeholder="Entrez votre email"
            aria-label="Votre adresse email"
            value={newsletterEmail}
            onChange={(event) => setNewsletterEmail(event.target.value)}
          />

          <button type="submit">
            S’abonner
          </button>

        </form>

        {newsletterMessage && (
          <p className="account-message">{newsletterMessage}</p>
        )}

      </section>


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


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="footer">

        <div className="footer-logo">

          <h2>
            Shop<span>io</span>
          </h2>

          <p>
            Votre destination shopping premium.
          </p>

        </div>


        <div className="footer-links">

          <div>

            <h4>Boutique</h4>

            <a href="/">
              Accueil
            </a>

            <a href="/categories">
              Catégories
            </a>

            <a href="/deals">
              Deals
            </a>

          </div>


          <div>

            <h4>Support</h4>

            <a href="/pages">
              Contact
            </a>

            <a href="/pages">
              FAQ
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}