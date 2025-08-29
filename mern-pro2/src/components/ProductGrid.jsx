export default function ProductGrid({ children }) {
  return (
    <div
      className="product-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {children}
    </div>
  );
}
