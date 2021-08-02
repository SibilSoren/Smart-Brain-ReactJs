import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ imgUrl }) => {
  return (
    <div className="container mt-3 mb-3">
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default FaceRecognition;
