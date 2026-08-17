import { useEffect, useState } from "react";
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
  const getStoredAccount = () => {
    if (typeof window === "undefined") return null;

    const saved = window.localStorage.getItem("shopio-account");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }

    return null;
  };

  const [account, setAccount] = useState(() => getStoredAccount());

  const [cart, setCart] = useState(() => {
    if (typeof window === "undefined") return [];

    const saved = window.localStorage.getItem("shopio-cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [pendingAction, setPendingAction] = useState(null);

  const persistAccount = (nextAccount) => {
    const storedUsers = JSON.parse(window.localStorage.getItem("shopio-users") || "[]");
    const exists = storedUsers.some((user) => user.phone === nextAccount.phone);

    if (!exists) {
      storedUsers.push({ ...nextAccount, createdAt: Date.now() });
      window.localStorage.setItem("shopio-users", JSON.stringify(storedUsers));
    }
  };

  useEffect(() => {
    window.localStorage.setItem("shopio-cart", JSON.stringify(cart));
  }, [cart]);

  const openAccountModal = (action = null) => {
    setPendingAction(action);
    setIsAccountModalOpen(true);
  };

  const handleAccountSuccess = (nextAccount) => {
    persistAccount(nextAccount);
    setAccount(nextAccount);
    setIsAccountModalOpen(false);
    setSuccessMessage("Compte prêt. Vous pouvez continuer votre achat.");

    if (pendingAction) {
      const action = pendingAction;
      setPendingAction(null);
      action(nextAccount);
    }
  };

  const addToCart = (product, currentAccount = account) => {
    const activeAccount = currentAccount || getStoredAccount();

    if (!activeAccount) {
      openAccountModal((createdAccount) => addToCart(product, createdAccount));
      return;
    }

    setAccount(activeAccount);
    setCart((prev) => {
      const nextCart = [...prev, { ...product, addedAt: Date.now() }];
      window.localStorage.setItem("shopio-cart", JSON.stringify(nextCart));
      return nextCart;
    });
    setSuccessMessage(`${product.name} a été ajouté à votre panier.`);
  };

  const buyNow = (product, currentAccount = account) => {
    const activeAccount = currentAccount || getStoredAccount();

    if (!activeAccount) {
      openAccountModal((createdAccount) => buyNow(product, createdAccount));
      return;
    }

    setAccount(activeAccount);
    setCart((prev) => {
      const nextCart = [...prev, { ...product, addedAt: Date.now() }];
      window.localStorage.setItem("shopio-cart", JSON.stringify(nextCart));
      return nextCart;
    });
    setSuccessMessage(`${product.name} a été ajouté au panier. Vous pouvez finaliser votre commande.`);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const checkout = async () => {
    const activeAccount = account || getStoredAccount();

    if (!activeAccount) {
      openAccountModal();
      return;
    }

    if (cart.length === 0) {
      setSuccessMessage("Votre panier est vide. Ajoutez un produit avant de commander.");
      return;
    }

    setAccount(activeAccount);

    const reference = Date.now().toString().slice(-6);
    const total = cart.reduce((sum, item) => {
      const value = Number(String(item.price).replace(/[^\d.]/g, ""));
      return sum + (Number.isFinite(value) ? value : 0);
    }, 0);

    const purchase = {
      client: activeAccount.phone,
      reference,
      total,
      items: cart.map((item) => item.name),
    };

    try {
      await saveOrder(purchase);
    } catch (error) {
      console.error("Erreur d'enregistrement de commande", error);
    }

    const storedPurchases = JSON.parse(window.localStorage.getItem("shopio-purchases") || "[]");
    storedPurchases.push({
      id: reference,
      phone: activeAccount.phone,
      reference,
      total,
      items: purchase.items,
      purchasedAt: Date.now(),
    });

    window.localStorage.setItem("shopio-purchases", JSON.stringify(storedPurchases));
    setSuccessMessage(`Commande confirmée ! Référence ${reference}. Un SMS de confirmation vous a été envoyé.`);
    setCart([]);
    navigate("/thank-you");
  };

  return (
    <>
      <Navbar cartCount={cart.length} account={account} onOpenAccount={() => openAccountModal()} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToCart={addToCart}
              onBuyNow={buyNow}
              message={successMessage}
              clearMessage={() => setSuccessMessage("")}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              onAddToCart={addToCart}
              onBuyNow={buyNow}
              message={successMessage}
              clearMessage={() => setSuccessMessage("")}
            />
          }
        />

        <Route path="/categories" element={<Categories />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/account/orders"
          element={<AccountOrders account={account} />}
        />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              account={account}
              onRemove={removeFromCart}
              onCheckout={checkout}
              message={successMessage}
              clearMessage={() => setSuccessMessage("")}
            />
          }
        />
      </Routes>

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