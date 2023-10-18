import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectionWrapper = ({ children }) => {
  let location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  const checkUserStatus = () => {
    const token = JSON.parse(localStorage?.getItem("user"))?.token;
    if (location.pathname.includes("dashboard") || !token) {
      setLoggedIn(false);
      return <Navigate to={"/login"} state={{ from: location }} replace />;
    }
    setLoggedIn(true);
    if (loggedIn || location.pathname.includes("login")) {
      return <Navigate to={"/dashboard"} state={{ from: location }} replace />;
    }
  };
  useEffect(() => {
    checkUserStatus();
  }, [loggedIn]);

  return children;
};

export default ProtectionWrapper;
