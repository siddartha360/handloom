// src/pages/Admin/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true"; // ✅ check properly

  return isAdmin ? children : <Navigate to="/admin/login" replace />;
}

export default PrivateRoute;
