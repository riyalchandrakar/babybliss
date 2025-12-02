"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import NotificationButton from "./NotificationButton";
import InstallAppButton from "./InstallAppButton";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
    pathname === path ? { background: "#fee2e2" } : {};

  return (
    <header className="navbar">
      <div className="nav-inner">

        {/* LEFT — LOGO + TITLE */}
        <div className="nav-left">
          <div className="logo-badge">BB</div>
          <div className="brand">
            <span className="brand-title">BabyBliss</span>
            <span className="brand-sub">Inspired by FirstCry • Demo PWA</span>
          </div>
        </div>

        {/* HAMBURGER */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* MOBILE + DESKTOP MENU */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <nav className="nav-links">
            <Link href="/" className="nav-link" style={isActive("/")}>
              Home
            </Link>
            <Link
              href="/products"
              className="nav-link"
              style={isActive("/products")}
            >
              Products
            </Link>
            <Link href="/cart" className="nav-link" style={isActive("/cart")}>
              Cart ({cartCount})
            </Link>
          </nav>

          <div className="nav-actions">
            <span className="badge-pill">PWA Enabled</span>
            <InstallAppButton />
            <NotificationButton />
          </div>
        </div>
      </div>
    </header>
  );
}
