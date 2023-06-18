import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Main;
