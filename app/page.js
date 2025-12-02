"use client";

import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div>
      <section className="hero">
        <div>
          <h1 className="hero-main-title">
            Baby care made{" "}
            <span className="hero-highlight">simple & adorable.</span>
          </h1>
          <p className="hero-text">
            BabyBliss is a demo mini e-commerce site for baby products,
            thoughtfully crafted for the DiGiLABS assignment. Fully responsive,
            PWA-ready, and notification-enabled.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">PWA Setup ✅</span>
            <span className="hero-tag">Push Notification Demo 🔔</span>
            <span className="hero-tag">Mobile-first UI 📱</span>
          </div>
          <div className="hero-actions">
            <Link href="/products" className="btn btn-primary">
              Browse Baby Products
            </Link>
            <span className="hero-note">
              No real checkout • UI demo only
            </span>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-baby">🍼</div>
          <div className="hero-mini-row">
            <div className="hero-pill">
              <div className="text-sm">Safe for Newborns</div>
              <div className="text-muted" style={{ fontSize: "0.7rem" }}>
                Hypoallergenic, soft & verified.
              </div>
            </div>
            <div className="hero-pill">
              <div className="text-sm">Inspired by FirstCry</div>
              <div className="text-muted" style={{ fontSize: "0.7rem" }}>
                Category-based, clean UI.
              </div>
            </div>
          </div>
          <div className="hero-mini-row">
            <div>
              <div className="text-sm">Installable as App</div>
              <div className="text-muted" style={{ fontSize: "0.7rem" }}>
                Try "Add to Home Screen" in browser.
              </div>
            </div>
            <div>
              <div className="text-sm">Push Demo</div>
              <div className="text-muted" style={{ fontSize: "0.7rem" }}>
                Click "Send Notification" in the navbar.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured for Tiny Humans</h2>
            <p className="section-sub">
              Handpicked baby essentials from clothes to toys.
            </p>
          </div>
          <Link href="/products" className="btn btn-ghost">
            View all products →
          </Link>
        </div>
        <div className="grid grid-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
