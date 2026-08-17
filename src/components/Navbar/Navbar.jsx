import "./Navbar.scss";

import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = ({ cartCount, account, onOpenAccount }) => {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="promo">✨ Soldes Black Friday 22% de réduction ✨</div>

          <div className="links">
            <Link to="/shipping">Livraison</Link>
            <Link to="/returns">Retours</Link>
            <Link to="/warranty">Garantie</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container nav-content">
          <Link to="/" className="logo">
            Shopix
          </Link>

          <ul className="menu">
            <li>
              <Link to="/">Accueil</Link>
            </li>

            <li>
              <Link to="/shop">Boutique</Link>
            </li>

            <li>
              <Link to="/categories">Catégories</Link>
            </li>

            <li>
              <Link to="/deals">Offres</Link>
            </li>

            <li>
              <Link to="/pages">Infos</Link>
            </li>

            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>

          <div className="search">
            <input type="text" placeholder="Rechercher un produit..." />
            <FaSearch />
          </div>

          <div className="icons">
            <Link to="/wishlist">
              <FaHeart />
            </Link>

            <Link to="/cart" className="cart-link">
              <FaShoppingCart />
              {cartCount > 0 && <span>{cartCount}</span>}
            </Link>

            <button type="button" className="profile-button" onClick={onOpenAccount}>
              <FaUser />
              {account ? <span>Compte</span> : <span>Connexion</span>}
            </button>
            {account && (
              <Link to="/account/orders" className="orders-link" title="Mes commandes">
                
                <span>Mes commandes</span>
              </Link>
            )}
        
            <FaBars className="mobile" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;