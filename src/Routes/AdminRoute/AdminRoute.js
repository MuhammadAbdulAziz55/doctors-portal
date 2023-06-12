import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
