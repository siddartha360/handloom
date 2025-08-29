// Page: Cart
// What it does: Shows items added to cart, supports + / - quantity, remove, and checkout
// Where it navigates: Checkout -> clears cart and returns to Home; Continue shopping -> Home
// Extra: Uses global CartContext to read and update cart state
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // If cart is empty, show a message
  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <h2>Your Cart 🛒</h2>
        <p>Your cart is empty 😔</p>
        <button
          style={{
            marginTop: "1rem",
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          🛍️ Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Your Cart 🛒</h2>
      <div style={{ marginTop: "1rem" }}>
        {cartItems.map((item) => (
          <div
            key={item._id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "80px", height: "80px", borderRadius: "8px" }}
              />
              <div>
                <h3>{item.name}</h3>
                <p>₹ {item.price.toLocaleString()}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <button
                    style={{ padding: "4px 8px" }}
                    onClick={() => removeFromCart(item._id)}
                  >
                    -
                  </button>
                  <span>Qty: {item.quantity}</span>
                  <button
                    style={{ padding: "4px 8px" }}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              style={{
                padding: "6px 12px",
                backgroundColor: "#ef4444",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => removeFromCart(item._id)}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          borderTop: "2px solid #ccc",
          textAlign: "right",
        }}
      >
        <h3>Total: ₹ {totalPrice.toLocaleString()}</h3>
        <button
          style={{
            marginTop: "1rem",
            padding: "10px 20px",
            backgroundColor: "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => {
            alert("✅ Order placed successfully!");
            clearCart();
            navigate("/");
          }}
        >
          ✅ Checkout
        </button>
      </div>
    </div>
  );
}
