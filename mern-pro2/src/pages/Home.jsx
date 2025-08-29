import "./Home.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState(products.slice(0, 8)); // default: featured

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedUser) navigate("/login");
  }, [navigate]);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  // 🟡 Button click handler
  const handleFilter = (label) => {
    if (label === "Trending") {
      // Show products that are on deal
      setFilteredProducts(products.filter((p) => p.deal));
    } else if (["ikat", "silk", "cotton"].includes(label)) {
      // Show products by category
      setFilteredProducts(products.filter((p) => p.category === label));
    } else {
      // Default case (show featured)
      setFilteredProducts(products.slice(0, 8));
    }
  };

  return (
    <div className="home">
      <div
        style={{
          background: "#f56663",
          color: "white",
          padding: "2rem",
          borderRadius: 12,
          marginBottom: "1.5rem",
        }}
      >
        <h2>Labor Day Sale: Up to 40% off</h2>
        <p>Shop top categories and save big today.</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          marginBottom: "1.25rem",
          overflowX: "auto",
        }}
      >
        {["Trending", "ikat", "silk", "cotton"].map((label) => (
          <button
            key={label}
            onClick={() => handleFilter(label)}
            style={{
              padding: "8px 12px",
              background: "#e3e6e6",
              border: "1px solid #c7c7c7",
              borderRadius: 999,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <h2>Featured Products 🛍️</h2>
      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}         // <-- updated here
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </ProductGrid>
    </div>
  );
}
