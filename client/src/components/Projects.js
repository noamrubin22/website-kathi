import React from "react";
import Navbar from "./Navbar";

const Projects = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="series1">
        <div className="row1">
          <img src="/3inARow/1.jpg" height="222px" />
          <img src="/3inARow/2.jpg" height="222px" />
          <img src="/3inARow/3.jpg" height="222px" />
        </div>
        <div className="row2">
          <img src="/3inARow/4.jpg" height="222px" />
          <img src="/3inARow/5.jpg" height="222px" />
          <img src="/3inARow/6.jpg" height="222px" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
