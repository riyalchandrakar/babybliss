"use client";

import Image from "next/image";
import { useCart } from "../../../components/CartContext";

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="section">
      <div className="product-grid">
        
        {/* LEFT IMAGE */}
        <div className="product-image-card">
          <Image
            src={product.image}
            alt={product.name}
            className="product-image"
            width={600}
            height={750}
            priority
          />
        </div>

        {/* RIGHT SIDE INFO */}
        <div>
          <h1 className="pd-title">{product.name}</h1>

          <p className="pd-desc">{product.description}</p>

          <div className="pd-tags">
            <span className="pd-tag pink">{product.category}</span>
            <span className="pd-tag blue">Age: {product.age}</span>
          </div>

          <div className="pd-price">
            ₹{product.price}
            <span>/ piece</span>
          </div>

          <button
            className="btn btn-primary pd-btn"
            onClick={() => addToCart(product.id)}
          >
            🛒 Add to Cart
          </button>

          <p className="pd-note">
            This is a demo assignment project created for DiGiLABS internship.
            No real checkout, order, or payment functionality is included.
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="pd-features">
        <h3 className="pd-feature-title">Why parents love this ❤</h3>

        <div className="pd-feature-grid">
          <div className="pd-feature-card">⭐ Soft and safe for babies</div>
          <div className="pd-feature-card">🧼 Hypoallergenic materials</div>
          <div className="pd-feature-card">🎀 Premium-quality fabric</div>
          <div className="pd-feature-card">💧 Easy to clean & maintain</div>
        </div>
      </div>
    </div>
  );
}
