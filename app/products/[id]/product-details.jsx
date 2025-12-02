"use client";

import { useCart } from "../../../components/CartContext";
import { motion } from "framer-motion";

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDE — BIG IMAGE CARD */}
        <motion.div
          className="card-img-wrap"
          style={{
            borderRadius: "1.2rem",
            overflow: "hidden",
            boxShadow: "0 12px 30px rgba(236,72,153,0.25)",
            background: "#fff",
          }}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="card-img"
            style={{
              height: "360px",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </motion.div>

        {/* RIGHT SIDE — PRODUCT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1
            className="section-title"
            style={{
              fontSize: "1.8rem",
              fontWeight: "800",
              marginBottom: "0.6rem",
              color: "#111827",
            }}
          >
            {product.name}
          </h1>

          <p className="text-muted" style={{ fontSize: "0.95rem" }}>
            {product.description}
          </p>

          {/* CATEGORY + AGE */}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "#fee2e2",
                color: "#b91c1c",
                padding: "4px 10px",
                borderRadius: "999px",
                fontSize: "0.8rem",
              }}
            >
              {product.category}
            </span>

            <span
              style={{
                background: "#e0f2fe",
                color: "#0369a1",
                padding: "4px 10px",
                borderRadius: "999px",
                fontSize: "0.8rem",
              }}
            >
              Age: {product.age}
            </span>
          </div>

          {/* PRICE */}
          <div
            style={{
              marginTop: "1.2rem",
              fontSize: "1.8rem",
              fontWeight: "800",
              color: "#ec4899",
            }}
          >
            ₹{product.price}
            <span
              style={{
                fontSize: "0.8rem",
                color: "#6b7280",
                marginLeft: "6px",
              }}
            >
              / piece
            </span>
          </div>

          {/* BUTTON */}
          <div style={{ marginTop: "1.4rem", display: "flex", gap: 10 }}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => addToCart(product.id)}
              style={{
                padding: "0.6rem 1.4rem",
                fontSize: "0.9rem",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #ec4899, #f97316)",
                color: "white",
                boxShadow: "0 7px 22px rgba(236,72,153,0.45)",
                transition: "all 0.25s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.06) translateY(-3px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              🛒 Add to Cart
            </button>
          </div>

          {/* DETAILS NOTE */}
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.85rem",
              color: "#6b7280",
              lineHeight: "1.4",
            }}
          >
            This is a demo assignment project created for DiGiLABS internship.
            No real checkout, order, or payment functionality is included.
          </p>
        </motion.div>
      </div>

      {/* EXTRA FEATURES SECTION */}
      <motion.div
        style={{ marginTop: "2.5rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#111827",
          }}
        >
          Why parents love this ❤
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 25px rgba(236,72,153,0.2)",
            }}
          >
            ⭐ Soft and safe for babies
          </div>

          <div
            style={{
              background: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 25px rgba(236,72,153,0.2)",
            }}
          >
            🧼 Hypoallergenic materials
          </div>

          <div
            style={{
              background: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 25px rgba(236,72,153,0.2)",
            }}
          >
            🎀 Premium-quality fabric
          </div>

          <div
            style={{
              background: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 25px rgba(236,72,153,0.2)",
            }}
          >
            💧 Easy to clean and maintain
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
