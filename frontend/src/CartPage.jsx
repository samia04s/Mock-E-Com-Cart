import { useEffect, useState } from "react";
import api from "./api/apiClient";

export default function CartPage({ onCheckout }) {
  const [cart, setCart] = useState({ items: [], total: 0 });

  // Fetch cart
  const fetchCart = async () => {
    try {
      const res = await api.get("/cart");
      setCart(res.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div style={styles.container}>
      <h1>🛒 Your Cart</h1>

      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.product.id}>
                  <td>{item.product.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.product.price}</td>
                  <td>₹{item.product.price * item.quantity}</td>
                  <td>
                    <button
                      style={styles.removeBtn}
                      onClick={() => handleRemove(item.product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ textAlign: "right", marginTop: "1rem" }}>
            Total: ₹{cart.total}
          </h3>

          <div style={{ textAlign: "right", marginTop: "1rem" }}>
            <button style={styles.checkoutBtn} onClick={onCheckout}>
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "2rem" },
  table: { width: "100%", borderCollapse: "collapse" },
  removeBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  checkoutBtn: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};
