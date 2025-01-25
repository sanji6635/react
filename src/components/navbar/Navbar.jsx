import React from "react";
import "./navbar.css";
import { toast } from "react-hot-toast";

const Navbar = () => {
  return (
    <div
      className="navbar"
      onClick={() => {
        toast.error("hello there");
      }}
    >
      Navbar
    </div>
  );
};

export default Navbar;
