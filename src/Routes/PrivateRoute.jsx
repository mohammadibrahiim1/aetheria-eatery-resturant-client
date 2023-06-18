import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "@mantine/core";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader color="red" variant="dots" size="xl" />;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default PrivateRoute;
