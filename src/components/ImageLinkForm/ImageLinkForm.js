import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageLinkForm.css";
const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="d-flex justify-content-center align-items-center pt-2 mt-3">
      <input
        type="text"
        className="col-6 inputField"
        onChange={onInputChange}
      />
      <button className="btn btn-primary col-2 col-md-1" onClick={onSubmit}>
        Detect
      </button>
    </div>
  );
};

export default ImageLinkForm;
