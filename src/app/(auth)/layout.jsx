import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default AuthLayout;
