"use client";

import { useCart } from "../../components/CartContext";
import { motion } from "framer-motion";

export default function CartPage() {
  const { itemsDetailed, cartTotal, addToCart, removeFromCart } = useCart();
  const hasItems = itemsDetailed.length > 0;

  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-header">
        <div>
          <h1 className="section-title">🛒 Your Cart</h1>
          <p className="section-sub">Review items before checkout (demo).</p>
        </div>
      </div>

      {!hasItems && (
        <motion.div
          style={{
            marginTop: "2rem",
            background: "white",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "3rem" }}>🧸</div>
          <h2 style={{ marginTop: "0.5rem", fontSize: "1.2rem" }}>
            Your cart is empty
          </h2>
          <p style={{ color: "#6b7280", marginTop: "0.3rem" }}>
            Add something cute for the baby!
          </p>
        </motion.div>
      )}

      {hasItems && (
        <>
          <div className="cart-list">
            {itemsDetailed.map((item) => (
              <motion.div
                className="cart-item"
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <img src={item.image} alt={item.name} className="cart-thumb" />

                <div className="cart-info">
                  <div className="cart-title">{item.name}</div>

                  <div className="cart-meta">
                    ₹{item.price} × {item.quantity}
                  </div>

                  <div className="cart-qty">
                    <button
                      className="qty-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>

                    <span style={{ fontSize: "1rem", fontWeight: "600" }}>
                      {item.quantity}
                    </span>

                    <button
                      className="qty-btn increment"
                      onClick={() => addToCart(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-price">
                  ₹{item.price * item.quantity}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-total">Total: ₹{cartTotal}</div>

            <p className="cart-summary-note">
              This is a demo cart — checkout is not implemented.
            </p>

            <button className="checkout-btn" disabled>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
