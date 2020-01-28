import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../styling.css";

const Home = props => {
  return (
    <div className="homepage">
      <div className="homepage-info">
        <h7>katharina michalsky</h7>
        <Navbar />
      </div>
      <div className="project-titles">
        <Link to="/projects">
          <span>
            "Emotional Storryboard"
            <p id="project-description">21,0 cm x 29,7 cm, selection, 2019.</p>
          </span>
        </Link>
        <Link to="/projects">
          <span>
            "The Room" <p id="project-description">30cm x20 cm, 2019.</p>
          </span>
        </Link>
        <Link to="/projects">
          <span>
            "Emotional Storryboard"{" "}
            <p id="project-description">
              21,0 cm x 29,7 cm, selection, since 2017.
            </p>
          </span>
        </Link>
        <Link to="/projects">
          <span>
            "city" <p id="project-description">2 12 cm x 14 cm, 2019. </p>
          </span>
        </Link>
        <Link to="/projects">
          <span>
            "abstract I"{" "}
            <p id="project-description"> 21,0 cm x 29,7 cm, selection, 2019.</p>
          </span>
        </Link>
        <Link to="/projects">
          <span>
            "abstract II"{" "}
            <p id="project-description">42,0 cm x 59,4 cm, 2019.</p>
          </span>
        </Link>
        <Link to="/projects">
          <span>
            "abstract III"{" "}
            <p id="project-description">4 21,0 cm x 29,7 cm, 2019.</p>{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
