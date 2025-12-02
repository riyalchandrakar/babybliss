"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { products } from "../data/products";
import Toast from "./Toast";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2000);
  };

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));

    showToast("Added to Cart");
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;

      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] <= 0) delete updated[id];
      return updated;
    });
        showToast("Removed from Cart");

  };

  const itemsDetailed = useMemo(() => {
    return Object.entries(cart).map(([id, qty]) => {
      const product = products.find((p) => String(p.id) === String(id));
      return { ...product, quantity: qty };
    });
  }, [cart]);

  const cartCount = itemsDetailed.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = itemsDetailed.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const value = {
    cart,
    addToCart,
    removeFromCart,
    itemsDetailed,
    cartCount,
    cartTotal,
    toastMsg,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <Toast message={toastMsg} show={toastMsg !== ""} />
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
