import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectionWrapper = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const token = JSON.parse(localStorage?.getItem("user"))?.token;
  let { pathname } = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    console.log({ user });
    if (pathname.includes("/dashboard") && !token) {
      navigate("/login");
    }
    if (pathname.includes("/login") && token) {
      navigate("/dashboard");
    }
    if (pathname.includes("/register") && token) {
      navigate("/dashboard");
    }
  }, []);
  return children;
};

export default ProtectionWrapper;
