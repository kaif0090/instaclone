// pages/protected/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = document.cookie.includes("token");

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
