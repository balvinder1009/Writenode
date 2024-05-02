import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRoutes = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth") || false);
  return isAuth ? children : <Navigate to="/" />;
};
