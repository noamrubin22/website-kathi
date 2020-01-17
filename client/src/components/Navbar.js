import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling.css";

const Navbar = () => {
  const [workState, setWorkState] = useState(false);

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
      {workState && (
        <div className="project-titles">
          <Link to="">
            <h5>project1</h5>
          </Link>
          <Link to="">
            <h5>project2</h5>
          </Link>
          <Link to="">
            <h5>project3</h5>
          </Link>
          <Link to="">
            <h5>project4</h5>
          </Link>
          <Link to="">
            <h5>project5</h5>
          </Link>
          <Link to="">
            <h5>project6</h5>
          </Link>
          <Link to="">
            <h5>project7</h5>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
