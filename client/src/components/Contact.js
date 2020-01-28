import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Contact = props => {
  return (
    <div className="contact-page">
      <div className="homepage-info">
        <h7>katharina michalsky</h7>
        <Navbar />
      </div>
      <div className="contact-info">
        <Link to="mailto:michalskykatharina@gmail.com">
          <span>michalskykatharina@gmail.com</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
