import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling.css";
import Projects from "./Projects";

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
          <Link to="/projects">
            <h4>
              "Emotional Storryboard", 21,0 cm x 29,7 cm, selection, 2019.
            </h4>
          </Link>
          <Link to="/projects">
            <h4>"The Room", 30cm x20 cm, 2019.</h4>
          </Link>
          <Link to="/projects">
            <h4>
              "Emotional Storryboard", 21,0 cm x 29,7 cm, selection, since 2017.
            </h4>
          </Link>
          <Link to="/projects">
            <h4>"city", 12 com x 14 cm, 2019.</h4>
          </Link>
          <Link to="/projects">
            <h4>"abstract I", 21,0 cm x 29,7 cm, selection, 2019.</h4>
          </Link>
          <Link to="/projects">
            <h4>"abstract II" , 42,0 cm x 59,4 cm, 2019.</h4>
          </Link>
          <Link to="/projects">
            <h4>"abstract III" , 21,0 cm x 29,7 cm, 2019. </h4>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
