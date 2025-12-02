"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-img-wrap">
        <img src={product.image} alt={product.name} className="card-img" />
        {product.badge && <span className="card-chip">{product.badge}</span>}
      </div>

      <div>
        <div className="card-title">{product.name}</div>
        <div className="card-meta">
          {product.category} • {product.age}
        </div>
      </div>

      <div className="card-footer">
        <div className="price">
          ₹{product.price}
          <span>/piece</span>
        </div>

        <div style={{ display: "flex", gap: 6 }}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => addToCart(product.id)}
          >
            Add
          </button>

          <Link href={`/products/${product.id}`} className="btn btn-ghost">
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
