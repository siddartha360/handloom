import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/CartProvider"; // ✅ Import CartProvider

// Get root element from index.html
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Render App
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Router wraps the whole app */}
      <CartProvider> {/* ✅ Cart context available globally */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
