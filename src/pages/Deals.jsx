import "../styles/deals.scss";

const deals = [
  {
    id: 1,
    badge: "Flash sale",
    title: "Jusqu’à -50%",
    description: "Profitez d’offres limitées sur les meilleurs produits technologiques.",
    features: ["Livraison gratuite", "Retour sous 30 jours", "Garantie premium"],
    cta: "Acheter maintenant",
  },
  {
    id: 2,
    badge: "Nouveau",
    title: "Offres du week-end",
    description: "Découvrez nos collections les plus demandées à prix cassés.",
    features: ["Paiement sécurisé", "Assistance 24/7", "Promo en cours"],
    cta: "Voir les promos",
  },
  {
    id: 3,
    badge: "Exclusif",
    title: "Pack premium",
    description: "Combinaison idéale d’accessoires, d’électronique et de confort.",
    features: ["Produit sélectionné", "Prix réduit", "Disponible en stock"],
    cta: "Découvrir l’offre",
  },
];

const Deals = () => {
  return (
    <section className="deals-page">
      <div className="deals-intro">
        <span className="eyebrow">Offres du moment</span>
        <h1>Profitez de promotions exceptionnelles</h1>
        <p>
          Réductions, avantages exclusifs et cadeaux surprise vous attendent sur
          toute la boutique.
        </p>
      </div>

      <div className="deal-grid">
        {deals.map((deal) => (
          <article className="deal-card" key={deal.id}>
            <div className="deal-badge">{deal.badge}</div>
            <h2>{deal.title}</h2>
            <p>{deal.description}</p>
            <ul>
              {deal.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button>{deal.cta}</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Deals;