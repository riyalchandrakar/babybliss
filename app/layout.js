import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "../components/CartContext";
import RegisterSW from "../components/RegisterSW";

export const metadata = {
  title: "BabyBliss - Baby Store",
  description: "BabyBliss - Demo mini e-commerce store for baby products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body className="app-body">
        <CartProvider>
          <Navbar />
          <main className="app-main">{children}</main>
        </CartProvider>

        <RegisterSW />
      </body>
    </html>
  );
}
