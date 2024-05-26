import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ element }) => {
  const { userLoggedIn } = useContext(AuthContext);
  return userLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
