import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../styling.css";

const Home = props => {
  const [workState, setWorkState] = useState(true);

  useEffect(() => {}, [workState]);

  const handleClick = () => {
    setWorkState(!workState);
  };

  return (
    <div className="homepage">
      <div className="homepage-info">
        <h7>katharina michalsky</h7>
        <Navbar />
        {workState && (
          <div className="project-titles">
            <Link to="/projects">
              <span>
                "Emotional Storryboard", 21,0 cm x 29,7 cm, selection, 2019.
              </span>
            </Link>
            <Link to="/projects">
              <span>"The Room", 30cm x20 cm, 2019.</span>
            </Link>
            <Link to="/projects">
              <span>
                "Emotional Storryboard", 21,0 cm x 29,7 cm, selection, since
                2017.
              </span>
            </Link>
            <Link to="/projects">
              <span>"city", 12 cm x 14 cm, 2019.</span>
            </Link>
            <Link to="/projects">
              <span>"abstract I", 21,0 cm x 29,7 cm, selection, 2019.</span>
            </Link>
            <Link to="/projects">
              <span>"abstract II" , 42,0 cm x 59,4 cm, 2019.</span>
            </Link>
            <Link to="/projects">
              <span>"abstract III" , 21,0 cm x 29,7 cm, 2019. </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
