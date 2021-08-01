import React from "react";
import Tilty from "react-tilty";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="container d-flex justify-content-center justify-content-md-start">
      <Tilty>
        <div className="logo"></div>
      </Tilty>
    </div>
  );
};

export default Logo;
