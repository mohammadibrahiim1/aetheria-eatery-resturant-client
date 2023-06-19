import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "@mantine/core";
// import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
// import { toast } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader color="red" variant="dots" size="xl" />;
  }
  if (user) {
    return children;
  } else {
    // alert("please log in with google icon in the navbar");
    toast.error("log in with google for booking a table");
  }

  return (
    <div>
      <Navigate to="/" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default PrivateRoute;
