"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      {/* IMAGE */}
      <div className="card-img-wrap">
        <Image
          src={product.image}
          alt={product.name}
          className="card-img"
          width={400}
          height={300}
          priority={product.id === "1"} // First image -> Improve LCP
        />
        {product.badge && <span className="card-chip">{product.badge}</span>}
      </div>

      {/* TITLE + CATEGORY */}
      <div>
        <div className="card-title">{product.name}</div>
        <div className="card-meta">
          {product.category} • {product.age}
        </div>
      </div>

      {/* FOOTER */}
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
    </div>
  );
}

export default React.memo(ProductCard);
