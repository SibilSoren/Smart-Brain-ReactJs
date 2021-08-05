import React from "react";
import "./Navigation.css";
const Navigation = ({ route, isSignedIn }) => {
  return (
    <nav className="container d-flex justify-content-end pt-3">
      <p
        onClick={() => {
          route("signin");
        }}
        className="btn btn-warning"
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
