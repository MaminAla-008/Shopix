import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { adminLogin, fetchOrders, fetchUsers } from "../services/api";
import "../styles/pages.scss";
import "../styles/Admin.scss";

const ADMIN_CREDENTIALS = {
  phone: "admin",
  password: "admin123",
};

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({ phone: "", password: "" });
  const [users, setUsers] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [loadError, setLoadError] = useState("");

  const normalizeUsers = (list) =>
    Array.isArray(list)
      ? list.map((user) => ({
          id: user.id || user.backendId || user.createdAt,
          phone: user.username || user.phone || user.email || "Inconnu",
          email: user.email || user.card || "-",
          createdAt: user.createdAt || null,
        }))
      : [];

  const loadData = async () => {
    setLoadError("");
    try {
      // On lit uniquement depuis la base de données (backend) pour que
      // les comptes soient les mêmes dans tous les navigateurs.
      const backendUsers = await fetchUsers();
      const backendOrders = await fetchOrders();
      setUsers(normalizeUsers(backendUsers));
      setPurchases(backendOrders);
    } catch (error) {
      setLoadError(
        "Impossible de charger les données depuis le serveur. Vérifiez que le backend (SQLite) est démarré. Les comptes sont stockés dans la base de données et sont partagés entre tous les navigateurs."
      );
      setUsers([]);
      setPurchases([]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await adminLogin({
        username: form.phone,
        password: form.password,
      });

      setIsLoggedIn(true);
      loadData();
    } catch (error) {
      window.alert(error.message || "Identifiants administrateur incorrects.");
    }
  };

  const stats = useMemo(() => ({
    accounts: users.length,
    purchases: purchases.length,
    totalRevenue: purchases.reduce((sum, purchase) => sum + purchase.total, 0),
  }), [purchases, users.length]);

  if (!isLoggedIn) {
    return (
      <section className="page admin-page">
        <div className="page-header">
          <span className="eyebrow">Administration</span>
          <h1>Connexion administrateur</h1>
          <p>Accédez au suivi des comptes créés et des offres achetées.</p>
        </div>

        <div className="admin-card">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Téléphone administrateur"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit">Se connecter</button>
          </form>
          {/* Identifiants par défaut : admin / admin123 */}
        </div>
      </section>
    );
  }

  return (
    <section className="page admin-page">
      <div className="page-header">
        <span className="eyebrow">Administration</span>
        <h1>Tableau de bord</h1>
        <p>Surveillez les comptes créés et les achats de vos offres.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.accounts}</h3>
          <p>Comptes créés</p>
        </div>
        <div className="stat-card">
          <h3>{stats.purchases}</h3>
          <p>Achats enregistrés</p>
        </div>
        <div className="stat-card">
          <h3>{stats.totalRevenue.toFixed(0)} $</h3>
          <p>Chiffre cumulé</p>
        </div>
      </div>

      {loadError && <div className="admin-error">{loadError}</div>}

      <div className="admin-panel">
        <div className="admin-section">
          <h2>Comptes créés</h2>
          {users.length === 0 ? (
            <p>Aucun compte enregistré pour le moment.</p>
          ) : (
            <div className="admin-table">
              <div className="table-head">
                <span>Téléphone</span>
                <span>Email</span>
                <span>Créé le</span>
              </div>
              {users.map((user) => (
                <div className="table-row" key={`${user.id}-${user.phone}`}>
                  <span>{user.phone}</span>
                  <span>{user.email}</span>
                  <span>{user.createdAt ? new Date(user.createdAt).toLocaleString("fr-FR") : `#${user.id}`}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="admin-section">
          <h2>Offres achetées</h2>
          {purchases.length === 0 ? (
            <p>Aucune commande enregistrée pour le moment.</p>
          ) : (
            <div className="admin-table">
              <div className="table-head">
                <span>Client</span>
                <span>Réf.</span>
                <span>Total</span>
              </div>
              {purchases.map((purchase) => (
                <div className="table-row" key={purchase.id}>
                  <span>{purchase.phone}</span>
                  <span>{purchase.reference}</span>
                  <span>{purchase.total.toFixed(0)} $</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link to="/" className="back-link">Retour au site</Link>
    </section>
  );
};

export default Admin;