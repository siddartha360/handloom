// Global State: CartContext
// What it does: Stores cart items (array) and exposes add/remove/clear actions
// Where it's used: Wrapped in main.jsx, used via useContext(CartContext)
// Extra: Persists cart in localStorage so refresh keeps your items

import React, { createContext } from "react";

// Create the CartContext
export const CartContext = createContext();
