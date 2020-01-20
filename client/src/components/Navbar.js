import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling.css";
// import Projects from "./Projects";

const Navbar = props => {
  const [workState, setWorkState] = useState(props.workState);
  console.log(props);
  useEffect(() => {}, [workState]);

  const handleClick = () => {
    setWorkState(!workState);
  };

  return (
    <div className="menu">
      <Link onClick={handleClick} to="/">
        work{" "}
      </Link>
      <Link to="/contact">contact</Link>
    </div>
  );
};

export default Navbar;
