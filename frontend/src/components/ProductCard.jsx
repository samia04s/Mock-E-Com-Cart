export default function ProductCard({ product, onAdd }) {
  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <button style={styles.button} onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    margin: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
