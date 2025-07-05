// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token"); // or use a context

  return isAuthenticated ? children : <Navigate to="/" replace />;
}
