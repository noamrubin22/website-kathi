import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling.css";
// import Projects from "./Projects";

const Navbar = props => {
  return (
    <div className="menu">
      <Link to="/">work </Link>
      <Link to="/contact">contact</Link>
    </div>
  );
};

export default Navbar;
