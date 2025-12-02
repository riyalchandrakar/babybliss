"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import NotificationButton from "./NotificationButton";
import InstallAppButton from "./InstallAppButton";

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart();

  const isActive = (path) => (pathname === path ? "background: #fee2e2;" : "");

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <div className="logo-badge">BB</div>
          <div className="brand">
            <span className="brand-title">BabyBliss</span>
            <span className="brand-sub">Inspired by FirstCry • Demo PWA</span>
          </div>
        </div>

        <nav className="nav-links">
          <Link
            href="/"
            className="nav-link"
            style={{ ...(isActive("/") && { background: "#fee2e2" }) }}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="nav-link"
            style={{ ...(isActive("/products") && { background: "#fee2e2" }) }}
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="nav-link"
            style={{ ...(isActive("/cart") && { background: "#fee2e2" }) }}
          >
            Cart ({cartCount})
          </Link>
        </nav>

        <div className="nav-actions">
          <span className="badge-pill">PWA Enabled</span>
          <InstallAppButton />
          <NotificationButton />
        </div>
      </div>
    </header>
  );
}
