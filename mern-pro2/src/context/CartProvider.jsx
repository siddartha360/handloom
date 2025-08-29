import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("mini_amazon_cart");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Error loading cart from localStorage:", err);
      return [];
    }
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item._id === product._id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    try {
      localStorage.setItem("mini_amazon_cart", JSON.stringify(cartItems));
    } catch (err) {
      console.error("Error saving cart to localStorage:", err);
    }
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

