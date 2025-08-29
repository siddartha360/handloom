import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const discount = product.deal && product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: "1rem",
        textAlign: "center",
        background: "#fff",
      }}
    >
      {/* Image */}
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: 200,
            objectFit: "contain",
            borderRadius: 6,
            marginBottom: 8,
          }}
        />
      </Link>

      {/* Name */}
      <Link
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3 style={{ fontSize: 16, margin: "8px 0" }}>{product.name}</h3>
      </Link>

      {/* Price */}
      <div style={{ marginBottom: 4 }}>
        {discount ? (
          <>
            <span
              style={{
                textDecoration: "line-through",
                color: "#777",
                marginRight: 6,
                fontSize: 14,
              }}
            >
              ₹{product.mrp.toLocaleString()}
            </span>
            <span style={{ fontWeight: 700, fontSize: 16 }}>
              ₹{product.price.toLocaleString()}
            </span>
            <span
              style={{
                color: "#059669",
                marginLeft: 6,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {discount}% off
            </span>
          </>
        ) : (
          <span style={{ fontWeight: 700, fontSize: 16 }}>
            ₹{product.price.toLocaleString()}
          </span>
        )}
      </div>

      {/* Rating */}
      <p style={{ color: "#f59e0b", margin: "4px 0" }}>
        ★ {product.rating.toFixed(1)}
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          marginTop: 8,
        }}
      >
        <button
          onClick={() => {
            addToCart(product);
            navigate("/cart");
          }}
          style={{
            background: "#ffd814",
            border: "1px solid #fcd200",
            padding: "0.4rem 0.8rem",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Add to Cart 🛒
        </button>

        <Link to={`/product/${product._id}`}>
          <button
            style={{
              background: "#e3e6e6",
              border: "1px solid #c7c7c7",
              padding: "0.4rem 0.8rem",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}
