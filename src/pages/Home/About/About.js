import React from "react";
import arif from "../../../images/arif.png";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 text-center">
          <img className="w-50" src={arif} alt="" />
        </div>
        <div className="col-lg-6">
          <h2>Ariful Islam</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
