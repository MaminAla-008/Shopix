import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { saveOrder } from "./services/api";

import Navbar from "./components/Navbar/Navbar";
import AccountModal from "./components/AccountModal/AccountModal";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import Deals from "./pages/Deals";
import Pages from "./pages/Pages";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import ThankYou from "./pages/ThankYou";
import AccountOrders from "./pages/AccountOrders";

function App() {
  const navigate = useNavigate();

  // ==========================================
  // RÉCUPÉRER LE COMPTE CONNECTÉ
  // ==========================================

  const getStoredAccount = () => {
    if (typeof window === "undefined") {
      return null;
    }

    const saved = window.localStorage.getItem("shopio-account");

    if (!saved) {
      return null;
    }

    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  };

  const [account, setAccount] = useState(() => getStoredAccount());

  // ==========================================
  // PANIER
  // Le panier reste local au navigateur
  // ==========================================

  const [cart, setCart] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const saved = window.localStorage.getItem("shopio-cart");

    if (!saved) {
      return [];
    }

    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  });

  // ==========================================
  // ÉTATS
  // ==========================================

  const [isAccountModalOpen, setIsAccountModalOpen] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [pendingAction, setPendingAction] =
    useState(null);

  const handleDisconnect = () => {
    setAccount(null);
    window.localStorage.removeItem("shopio-account");
    setSuccessMessage("Compte déconnecté.");
  };

  // ==========================================
  // SAUVEGARDER LE COMPTE ACTUEL
  // ==========================================

  const persistAccount = (nextAccount) => {
    if (!nextAccount) {
      return;
    }

    window.localStorage.setItem(
      "shopio-account",
      JSON.stringify(nextAccount)
    );
  };

  // ==========================================
  // OUVRIR LE MODAL DE COMPTE
  // ==========================================

  const openAccountModal = (action = null) => {
    setPendingAction(() => action);
    setIsAccountModalOpen(true);
  };

  // ==========================================
  // CONNEXION / INSCRIPTION RÉUSSIE
  // ==========================================

  const handleAccountSuccess = (nextAccount) => {
    if (!nextAccount) {
      return;
    }

    // On conserve uniquement le compte actuellement
    // connecté dans le navigateur.
    persistAccount(nextAccount);

    setAccount(nextAccount);

    setIsAccountModalOpen(false);

    setSuccessMessage(
      "Compte connecté. Vous pouvez continuer votre achat."
    );

    if (pendingAction) {
      const action = pendingAction;

      setPendingAction(null);

      action(nextAccount);
    }
  };

  // ==========================================
  // AJOUTER UN PRODUIT AU PANIER
  // ==========================================

  const addToCart = (
    product,
    currentAccount = account
  ) => {
    const activeAccount =
      currentAccount || getStoredAccount();

    if (!activeAccount) {
      openAccountModal((createdAccount) => {
        addToCart(product, createdAccount);
      });

      return;
    }

    setAccount(activeAccount);

    persistAccount(activeAccount);

    setCart((prev) => {
      const nextCart = [
        ...prev,
        {
          ...product,
          addedAt: Date.now(),
        },
      ];

      window.localStorage.setItem(
        "shopio-cart",
        JSON.stringify(nextCart)
      );

      return nextCart;
    });

    setSuccessMessage(
      `${product.name} a été ajouté à votre panier.`
    );
  };

  // ==========================================
  // ACHETER MAINTENANT
  // ==========================================

  const buyNow = (
    product,
    currentAccount = account
  ) => {
    const activeAccount =
      currentAccount || getStoredAccount();

    if (!activeAccount) {
      openAccountModal((createdAccount) => {
        buyNow(product, createdAccount);
      });

      return;
    }

    setAccount(activeAccount);

    persistAccount(activeAccount);

    setCart((prev) => {
      const nextCart = [
        ...prev,
        {
          ...product,
          addedAt: Date.now(),
        },
      ];

      window.localStorage.setItem(
        "shopio-cart",
        JSON.stringify(nextCart)
      );

      return nextCart;
    });

    setSuccessMessage(
      `${product.name} a été ajouté au panier. Vous pouvez finaliser votre commande.`
    );
  };

  // ==========================================
  // SUPPRIMER DU PANIER
  // ==========================================

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const nextCart = prev.filter(
        (item) => item.id !== productId
      );

      window.localStorage.setItem(
        "shopio-cart",
        JSON.stringify(nextCart)
      );

      return nextCart;
    });
  };

  // ==========================================
  // FINALISER LA COMMANDE
  // ==========================================

  const checkout = async () => {
    const activeAccount =
      account || getStoredAccount();

    // ------------------------------------------
    // Vérification du compte
    // ------------------------------------------

    if (!activeAccount) {
      openAccountModal();
      return;
    }

    // ------------------------------------------
    // Vérification du panier
    // ------------------------------------------

    if (cart.length === 0) {
      setSuccessMessage(
        "Votre panier est vide. Ajoutez un produit avant de commander."
      );

      return;
    }

    setAccount(activeAccount);

    persistAccount(activeAccount);

    // ------------------------------------------
    // Référence de commande
    // ------------------------------------------

    const reference = Date.now()
      .toString()
      .slice(-6);

    // ------------------------------------------
    // Calcul du total
    // ------------------------------------------

    const total = cart.reduce((sum, item) => {
      const value = Number(
        String(item.price).replace(/[^\d.]/g, "")
      );

      return (
        sum +
        (Number.isFinite(value) ? value : 0)
      );
    }, 0);

    // ------------------------------------------
    // Données de commande
    // ------------------------------------------

    const purchase = {
      client: activeAccount.phone,
      reference,
      total,
      items: cart.map((item) => item.name),
    };

    // ------------------------------------------
    // ENVOI AU BACKEND / SQLITE
    // ------------------------------------------

    try {
      await saveOrder(purchase);

      console.log(
        "Commande enregistrée avec succès :",
        purchase
      );

      setSuccessMessage(
        `Commande confirmée ! Référence ${reference}.`
      );

      // Vider le panier seulement si SQLite
      // a accepté la commande.
      setCart([]);

      window.localStorage.setItem(
        "shopio-cart",
        JSON.stringify([])
      );

      navigate("/thank-you");
    } catch (error) {
      console.error(
        "Erreur d'enregistrement de commande :",
        error
      );

      setSuccessMessage(
        "Impossible d'enregistrer la commande sur le serveur. Vérifiez que le backend est disponible."
      );

      // IMPORTANT :
      // On ne vide PAS le panier si la commande
      // n'a pas été enregistrée.
    }
  };

  // ==========================================
  // AFFICHAGE
  // ==========================================

  return (
    <>
      <Navbar
        cartCount={cart.length}
        account={account}
        onOpenAccount={() =>
          openAccountModal()
        }
        onDisconnect={handleDisconnect}
      />

      <Routes>

        {/* ======================================
            ACCUEIL
        ====================================== */}

        <Route
          path="/"
          element={
            <Home
              onAddToCart={addToCart}
              onBuyNow={buyNow}
              message={successMessage}
              clearMessage={() =>
                setSuccessMessage("")
              }
            />
          }
        />

        {/* ======================================
            BOUTIQUE
        ====================================== */}

        <Route
          path="/shop"
          element={
            <Shop
              onAddToCart={addToCart}
              onBuyNow={buyNow}
              message={successMessage}
              clearMessage={() =>
                setSuccessMessage("")
              }
            />
          }
        />

        {/* ======================================
            CATÉGORIES
        ====================================== */}

        <Route
          path="/categories"
          element={<Categories />}
        />

        {/* ======================================
            PROMOTIONS
        ====================================== */}

        <Route
          path="/deals"
          element={<Deals />}
        />

        {/* ======================================
            PAGES
        ====================================== */}

        <Route
          path="/pages"
          element={<Pages />}
        />

        {/* ======================================
            ADMIN
        ====================================== */}

        <Route
          path="/admin"
          element={<Admin />}
        />

        {/* ======================================
            MES COMMANDES
        ====================================== */}

        <Route
          path="/account/orders"
          element={
            <AccountOrders
              account={account}
            />
          }
        />

        {/* ======================================
            CONFIRMATION
        ====================================== */}

        <Route
          path="/thank-you"
          element={<ThankYou />}
        />

        {/* ======================================
            PANIER
        ====================================== */}

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              account={account}
              onRemove={removeFromCart}
              onCheckout={checkout}
              message={successMessage}
              clearMessage={() =>
                setSuccessMessage("")
              }
            />
          }
        />

      </Routes>

      {/* ========================================
          MODAL COMPTE
      ======================================== */}

      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => {
          setIsAccountModalOpen(false);
          setPendingAction(null);
        }}
        onSuccess={handleAccountSuccess}
      />
    </>
  );
}

export default App;