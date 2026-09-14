import { Link } from "react-router-dom";
import "../styles/Profile.scss";

const Profile = ({ account, onOpenAccount, onDisconnect }) => {
  if (!account) {
    return (
      <section className="page profile-page">
        <div className="profile-card profile-empty">
          <span className="eyebrow">Espace personnel</span>
          <h1>Votre profil</h1>
          <p>Connectez-vous pour gérer votre compte, vos commandes et votre sécurité.</p>
          <button type="button" className="profile-primary" onClick={onOpenAccount}>
            Se connecter
          </button>
        </div>
      </section>
    );
  }

  const accountLabel = account.phone || account.email || account.username || "Client Shopix";

  return (
    <section className="page profile-page">
      <div className="profile-header">
        <span className="eyebrow">Espace personnel</span>
        <h1>Mon profil</h1>
        <p>Gérez vos informations et retrouvez vos achats en un seul endroit.</p>
      </div>

      <div className="profile-layout">
        <article className="profile-card profile-identity">
          <div className="profile-avatar" aria-hidden="true">{accountLabel.charAt(0).toUpperCase()}</div>
          <span className="profile-status">Compte connecté</span>
          <h2>{accountLabel}</h2>
          <p>Client Shopix</p>
          <button type="button" className="profile-danger" onClick={onDisconnect}>
            Se déconnecter
          </button>
        </article>

        <article className="profile-card">
          <span className="profile-section-label">Informations du compte</span>
          <div className="profile-details">
            <div><span>Téléphone</span><strong>{account.phone || "Non renseigné"}</strong></div>
            <div><span>Email</span><strong>{account.card || account.email || "Non renseigné"}</strong></div>
            <div><span>Statut</span><strong className="profile-connected">Actif</strong></div>
          </div>
          <div className="profile-actions">
            <Link to="/account/orders" className="profile-primary">Mes commandes</Link>
            <Link to="/shop" className="profile-secondary">Continuer mes achats</Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Profile;
