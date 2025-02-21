import React from "react";
import Navbar from "./Componets/Navbar"; // Import Navbar
import { Outlet } from "react-router-dom"; // Outlet renders nested routes

const Layout = () => {
  return (
    <div className=" h-full w-full ">
      <Navbar />  {/* Navbar stays fixed */}
      <div style={{ padding: "5px" }}>
        <Outlet /> {/* This renders the current page */}
      </div>
    </div>
  );
};

export default Layout;
