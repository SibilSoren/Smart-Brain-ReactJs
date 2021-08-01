import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageLinkForm.css";
const ImageLinkForm = () => {
  return (
    <div className="d-flex justify-content-center align-items-center pt-2 mt-3">
      <input type="text" className="col-6 inputField" />
      <button className="btn btn-primary col-2 col-md-1">Detect</button>
    </div>
  );
};

export default ImageLinkForm;
