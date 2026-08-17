import { Link } from "react-router-dom";
import "./Pages.scss";

const ThankYou = () => {
  return (
    <section className="page thank-you-page">
      <div className="thank-you-card">
        <span className="eyebrow">Commande confirmée</span>
        <h1>Merci pour votre achat !</h1>
        <p>Votre commande a bien été enregistrée et vous recevrez bientôt une confirmation détaillée.</p>
        <div className="thank-you-actions">
          <Link to="/" className="primary-btn">Retour à l’accueil</Link>
          <Link to="/shop" className="secondary-btn">Continuer les achats</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
