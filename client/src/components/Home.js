import React from "react";
import Navbar from "./Navbar";
import "../styling.css";

const Home = props => {
  return (
    <div className="homepage">
      <div className="homepage-info">
        <h1>katharina michalsky</h1>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
