import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ imgUrl, boxFace }) => {
  console.log(boxFace.leftcol);
  return (
    <div className="container mt-3 mb-3 d-flex justify-content-center">
      <div style={{ position: "absolute" }}>
        <img id="inputImage" src={imgUrl} alt="" />
        <div
          className="bounding-box"
          style={{
            top: boxFace.toprow,
            right: boxFace.rightcol,
            left: boxFace.leftcol,
            bottom: boxFace.bottomrow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
