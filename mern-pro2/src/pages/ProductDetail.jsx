import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams(); // Read :id from URL
  const product = products.find((p) => String(p.id) === id);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!product)
    return (
      <p style={{ padding: "1rem", fontSize: "1.2rem", color: "#555" }}>
        Product not found.
      </p>
    );

  const discountPercentage =
    product.deal && product.mrp
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {/* Left: Product Image */}
      <div
        style={{
          background: "#fff",
          padding: "1rem",
          borderRadius: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "contain",
            borderRadius: 8,
          }}
        />
      </div>

      {/* Right: Product Info */}
      <div>
        <h2 style={{ marginBottom: 8 }}>{product.name}</h2>
        <p style={{ color: "#f59e0b", fontWeight: "bold", margin: "4px 0" }}>
          ★ {product.rating.toFixed(1)}
        </p>

        <div style={{ fontSize: 24, margin: "12px 0" }}>
          {product.deal && product.mrp ? (
            <>
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#777",
                  marginRight: 10,
                  fontSize: 18,
                }}
              >
                ₹{product.mrp.toLocaleString()}
              </span>
              <span>₹{product.price.toLocaleString()}</span>
              <span
                style={{ color: "#059669", marginLeft: 10, fontSize: 18 }}
              >
                {discountPercentage}% off
              </span>
            </>
          ) : (
            <span>₹{product.price.toLocaleString()}</span>
          )}
        </div>

        <p style={{ marginTop: 12, lineHeight: 1.6 }}>{product.description}</p>

        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <button
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
            style={{
              background: "#ffd814",
              border: "1px solid #fcd200",
              padding: "0.5rem 1.2rem",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>

          <button
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
            style={{
              background: "#ffa41c",
              border: "1px solid #ff8f00",
              padding: "0.5rem 1.2rem",
              borderRadius: 6,
              cursor: "pointer",
              color: "#fff",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
