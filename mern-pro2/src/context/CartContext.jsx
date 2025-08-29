// Global State: CartContext
// What it does: Stores cart items (array) and exposes add/remove/clear actions
// Where it's used: Wrapped in main.jsx, used via useContext(CartContext)
// Extra: Persists cart in localStorage so refresh keeps your items

import React, { createContext, useEffect, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

// CartProvider wraps your entire app and provides cart data/actions
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("mini_amazon_cart");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Error loading cart from localStorage:", err);
      return [];
    }
  });

  // ✅ Add item to cart (or increase quantity if already in cart)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item._id === product._id // ✅ Use _id for matching
      );

      if (existingItem) {
        // Increase quantity if already in cart
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // ❌ Remove item from cart completely
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  // 🧹 Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // 💾 Persist cart to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem("mini_amazon_cart", JSON.stringify(cartItems));
    } catch (err) {
      console.error("Error saving cart to localStorage:", err);
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
