import { useState, useEffect } from "react";
import api from "./api/apiClient";
import ProductCard from "./components/ProductCard";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";

export default function App() {
  const [view, setView] = useState("products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  const handleAddToCart = async (product) => {
    try {
      await api.post("/cart", { productId: product.id, quantity: 1 });
      alert(`${product.name} added to cart!`);
    } catch {
      alert("Failed to add item.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <nav style={styles.nav}>
        <button onClick={() => setView("products")}>🛍 Products</button>
        <button onClick={() => setView("cart")}>🛒 Cart</button>
      </nav>

      {view === "products" && (
        <>
          <h1>🛍 Products</h1>
          <div style={styles.grid}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
            ))}
          </div>
        </>
      )}

      {view === "cart" && (
        <CartPage onCheckout={() => setView("checkout")} />
      )}

      {view === "checkout" && (
        <CheckoutPage onBack={() => setView("cart")} />
      )}
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
  },
};
