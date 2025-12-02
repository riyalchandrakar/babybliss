"use client";

import { useState } from "react";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      (category === "All" || p.category === category)
    );
  });

  return (
    <section className="section">
      <h1 className="section-title">All Baby Products</h1>
      <p className="section-sub">
        Search, filter & explore baby care essentials 💖
      </p>

      <input
        type="text"
        placeholder="🔍 Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #fecaca",
          marginTop: "10px",
          marginBottom: "14px",
          fontSize: "0.9rem",
        }}
      />

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className="btn btn-ghost"
            style={{
              background: category === cat ? "#fee2e2" : "white",
              border: "1px solid #fecaca",
            }}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-3" style={{ marginTop: "1rem" }}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted" style={{ marginTop: "1rem" }}>
          No products found 😔
        </p>
      )}
    </section>
  );
}
