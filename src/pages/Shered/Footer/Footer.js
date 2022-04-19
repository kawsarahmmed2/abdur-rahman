import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="container">
      <img src="" alt="" />
      {/* <div className="hr"></div> */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <p className="text-center">
            Copyright &copy; {year} Travo by Abdus. All Rights{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
