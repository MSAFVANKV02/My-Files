import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated} from "./authMiddleware";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isProtected?: boolean;
  isHomeLogin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isProtected,
}) => {
  const isLogged = isAuthenticated();

  // If logged in and trying to access a protected route that's not KYC, redirect to KYC

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  if(location.pathname === "/login" && isLogged){
    return <Navigate to="/" />;
  }





  

  // Allow authenticated users to access protected routes
  return <>{children}</>;
};

export default ProtectedRoute;
