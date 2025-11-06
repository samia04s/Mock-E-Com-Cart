import { useState } from "react";
import api from "./api/apiClient";

export default function CheckoutPage({ onBack }) {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await api.post("/checkout");
      setOrder(res.data.order);
      setLoading(false);
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
      alert("Checkout failed. Try again.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>💳 Checkout</h1>

      {!order ? (
        <>
          <p>Click below to complete your mock payment and generate your order.</p>
          <button style={styles.btn} onClick={handleCheckout} disabled={loading}>
            {loading ? "Processing..." : "Complete Payment"}
          </button>
          <button style={styles.backBtn} onClick={onBack}>
            ← Back to Cart
          </button>
        </>
      ) : (
        <div style={styles.summary}>
          <h2>✅ Payment Successful</h2>
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Total Paid:</strong> ₹{order.total}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  btn: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    marginRight: "10px",
    cursor: "pointer",
  },
  backBtn: {
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  summary: {
    marginTop: "1.5rem",
    border: "1px solid #ccc",
    padding: "1.5rem",
    borderRadius: "10px",
    background: "#f9f9f9",
  },
};
