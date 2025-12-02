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
          <h1 className="section-title">Your Cart</h1>
          <p className="section-sub">
            Review demo items before (imaginary) checkout.
          </p>
        </div>
      </div>

      {!hasItems && (
        <motion.p
          className="text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Your cart is empty. Add something cute 🧸
        </motion.p>
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
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-thumb"
                />

                <div className="cart-info">
                  <div className="cart-title">{item.name}</div>

                  <div className="cart-meta">
                    ₹{item.price} x {item.quantity} = ₹
                    {item.price * item.quantity}
                  </div>

                  <div className="cart-qty mt-sm">
                    <button
                      className="qty-btn"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>

                    <span className="text-sm">{item.quantity}</span>

                    <button
                      className="qty-btn"
                      type="button"
                      onClick={() => addToCart(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={{ marginTop: "1rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="price">
              Total: ₹{cartTotal} <span>(demo only)</span>
            </div>

            <p className="text-sm text-muted mt-sm">
              This is a demo cart to showcase frontend logic, state management,
              and UI. Checkout flow is intentionally not implemented.
            </p>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
