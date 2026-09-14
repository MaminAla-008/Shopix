import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchOrders } from "../services/api";
import "../styles/pages.scss";
import "../styles/AccountOrders.scss";

const AccountOrders = ({ account }) => {
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const load = async () => {
      setError("");
      try {
        const allOrders = await fetchOrders();
        // On ne garde que les commandes du compte connecté (le client = téléphone du compte).
        const myOrders = allOrders.filter(
          (order) => order.client === account?.phone
        );
        if (active) setOrders(myOrders);
      } catch (err) {
        if (active) {
          setError(
            "Impossible de charger vos commandes. Vérifiez que le serveur est démarré."
          );
        }
      }
    };

    if (account) load();

    return () => {
      active = false;
    };
  }, [account]);

  // Aucun compte connecté : inviter à se connecter.
  if (!account) {
    return (
      <section className="page account-orders-page">
        <div className="page-header">
          <span className="eyebrow">Mes commandes</span>
          <h1>Connectez-vous pour voir vos commandes</h1>
          <p>Veuillez vous connecter à votre compte pour consulter l'historique de vos achats.</p>
        </div>
        <div className="orders-empty">
          <p>Vous n'êtes pas connecté.</p>
          <Link to="/cart">Aller à la connexion</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page account-orders-page">
      <div className="page-header">
        <span className="eyebrow">Mes commandes</span>
        <h1>Vos achats</h1>
        <p>Compte connecté : {account.phone}</p>
      </div>

      {error && <div className="admin-error">{error}</div>}

      {orders === null ? (
        <div className="orders-empty">
          <p>Chargement de vos commandes…</p>
        </div>
      ) : orders.length === 0 ? (
        <div className="orders-empty">
          <p>Aucun achat enregistré pour ce compte.</p>
          <Link to="/shop">Découvrir la boutique</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-head">
                <strong>Réf. {order.reference}</strong>
                <span>{new Date(order.created_at).toLocaleString("fr-FR")}</span>
              </div>
              <div className="order-total">
                <span>Total</span>
                <strong>{order.total.toFixed(2)} $</strong>
              </div>
              <ul className="order-items">
                {Array.isArray(order.items) &&
                  order.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <Link to="/" className="back-link">Retour à l'accueil</Link>
    </section>
  );
};

export default AccountOrders;

