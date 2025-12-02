"use client";

import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero">
        {/* LEFT SECTION (TEXT) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
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
            <span className="hero-note">No real checkout • UI demo only</span>
          </div>
        </motion.div>

        {/* RIGHT SECTION (CUTE BABY CARD) */}
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
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

        {/* Fade-in Grid Animation */}
        <motion.div
          className="grid grid-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
