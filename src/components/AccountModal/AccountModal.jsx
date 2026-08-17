import { useEffect, useState } from "react";
import { loginUser, registerUser } from "../../services/api";
import "./AccountModal.scss";

const AccountModal = ({ isOpen, onClose, onSuccess }) => {
  const [mode, setMode] = useState("create");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [card, setCard] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setMode("create");
      setPhone("");
      setPassword("");
      setCard("");
      setError("");
      return;
    }

    const savedAccount = JSON.parse(window.localStorage.getItem("shopio-account") || "null");

    if (savedAccount) {
      setMode("login");
      setPhone(savedAccount.phone || "");
      setPassword("");
    } else {
      setMode("create");
      setPhone("");
      setPassword("");
    }

    setCard("");
    setError("");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone.trim() || !password.trim()) {
      setError("Veuillez remplir votre téléphone et votre mot de passe.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      if (mode === "login") {
        const response = await loginUser({
          identifier: phone.trim(),
          password: password.trim(),
        });

        const nextAccount = {
          phone: response.user?.username || phone.trim(),
          password: password.trim(),
          card: response.user?.email || "",
          backendId: response.user?.id,
        };

        window.localStorage.setItem("shopio-account", JSON.stringify(nextAccount));
        onSuccess?.(nextAccount);
        return;
      }

      if (!card.trim()) {
        setError("Veuillez renseigner votre carte bancaire pour créer votre compte.");
        setIsSubmitting(false);
        return;
      }

      const response = await registerUser({
        username: phone.trim(),
        email: card.trim(),
        password: password.trim(),
      });

      const nextAccount = {
        phone: phone.trim(),
        password: password.trim(),
        card: card.trim(),
        backendId: response.id,
      };

      window.localStorage.setItem("shopio-account", JSON.stringify(nextAccount));
      onSuccess?.(nextAccount);
    } catch (err) {
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="account-modal-backdrop" onClick={onClose}>
      <div className="account-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-toggle">
          <button type="button" className={mode === "create" ? "active" : ""} onClick={() => setMode("create")}>
            Créer un compte
          </button>
          <button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>
            Se connecter
          </button>
        </div>

        <h3>{mode === "create" ? "Créer un compte" : "Connexion"}</h3>
        <p>
          {mode === "create"
            ? "Créez votre compte avec votre numéro de téléphone pour acheter et profiter des offres."
            : "Connectez-vous pour poursuivre votre achat et consultez votre panier."}
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Votre numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder={mode === "create" ? "Créer un mot de passe" : "Votre mot de passe"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {mode === "create" && (
            <input
              type="text"
              placeholder="Numéro de carte bancaire"
              value={card}
              onChange={(e) => setCard(e.target.value)}
            />
          )}

          {error && <span className="error-text">{error}</span>}

          <div className="modal-actions">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Traitement..." : mode === "create" ? "Créer mon compte" : "Se connecter"}
            </button>
            <button type="button" className="secondary" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountModal;
