import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectionWrapper = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const token = JSON.parse(localStorage?.getItem("user"))?.token;
  let location = useLocation();
  useEffect(() => {
    console.log({ user });
    // (!user || location.pathname.includes("dashboard")) && (
    //   <Navigate to={"/login"} state={{ from: location }} replace />
    // );

    // (user || location.pathname.includes("login")) && (
    //   <Navigate to={"/dashboard"} state={{ from: location }} replace />
    // );
  }, [user]);
  return children;
};

export default ProtectionWrapper;
