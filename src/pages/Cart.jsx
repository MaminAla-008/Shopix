import { Link } from "react-router-dom";
import "./Pages.scss";
import "../styles/Cart.scss";

const Cart = ({ cart, account, onRemove, onCheckout, message, clearMessage }) => {
  const subtotal = cart.reduce((sum, item) => {
    const value = Number(String(item.price).replace(/[^\d.]/g, ""));
    return sum + (Number.isFinite(value) ? value : 0);
  }, 0);
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  return (
    <section className="page cart-page">
      <div className="page-header">
        <span className="eyebrow">Panier</span>
        <h1>Votre commande</h1>
        <p>
          {account
            ? `Compte connecté : ${account.phone}`
            : "Connectez-vous pour finaliser votre achat."}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Votre panier est vide.</p>
          <Link to="/shop">Retourner à la boutique</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id + item.addedAt}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <strong>{item.price}</strong>
                </div>
                <button type="button" onClick={() => onRemove(item.id)}>
                  Retirer
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-badges">
              <span>⚡ Livraison express</span>
              <span>🔒 Paiement sécurisé</span>
            </div>
            <h2>Résumé de votre commande</h2>
            <div className="summary-lines">
              <span>Sous-total</span>
              <strong>{subtotal.toFixed(0)} $</strong>
            </div>
            <div className="summary-lines">
              <span>Livraison</span>
              <strong>{shipping.toFixed(2)} $</strong>
            </div>
            <div className="summary-lines total-line">
              <span>Total</span>
              <strong>{total.toFixed(2)} $</strong>
            </div>
            <p className="summary-note">Commande rapide, suivi en temps réel et garantie premium.</p>
            <button type="button" onClick={onCheckout}>
              Confirmer la commande
            </button>
          </div>
        </div>
      )}

      {message && (
        <div className="checkout-success" onClick={clearMessage}>
          <strong>Commande validée</strong>
          <p>{message}</p>
        </div>
      )}
    </section>
  );
};

export default Cart;