import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
// import useAdmin from "../Hooks/UseAdmin";
import { Loader } from "@mantine/core";
import UseAdmin from "../Hooks/UseAdmin";
import { toast } from "react-hot-toast";
// import useAdmin from "../Hooks/useAdmin";
// import { AuthContext } from "../../contexts/AuthProvider";
// import useAdmin from "../../hooks/useAdmin";
// import Loading from "../../Pages/Shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader color="red" variant="dots" size="xl" />;
  }

  if (user && isAdmin) {
    return children;
  } else {
    toast.error("only usable for admin");
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
