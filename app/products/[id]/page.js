import { notFound } from "next/navigation";
import { products } from "../../../data/products";
import ProductDetails from "./product-details";

// 👉 params now needs to be awaited because it's a Promise
export default async function ProductDetailPage({ params }) {
  const { id } = await params; // 👈 important line

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return notFound();
  }

  return <ProductDetails product={product} />;
}
