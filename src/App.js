import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";
import Signin from "./components/SignIn/Signin";

const app = new Clarifai.App({
  apiKey: "513366b794d240b590d899434f9b91f3",
});
function App() {
  const [input, setInput] = useState();
  const [imageURL, setImageURL] = useState();
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("signin");

  const calculateFaceLocation = (data) => {
    const faceData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftcol: faceData.left_col * width,
      rightcol: width - faceData.right_col * width,
      bottomrow: height - faceData.bottom_row * height,
      toprow: faceData.top_row * height,
    };
  };

  useEffect(() => {
    console.log("Updated");
  });

  const displayFaceBox = (boxData) => {
    setBox(boxData);
  };

  const onInputChange = (e) => {
    setInput(e.target.value, input);
    console.log(input);
  };

  const onRouteChange = () => {
    setRoute("home");
  };

  const onSubmit = () => {
    if (input) {
      console.log(`Clicked! ${input} is passed`);
      setImageURL(input);
      console.log(imageURL);
      app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
        function (response) {
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
          displayFaceBox(calculateFaceLocation(response));
        },
        function (err) {}
      );
    } else {
      console.log(`Please enter a URL`);
    }
  };
  return (
    <div className="App">
      <div className="container d-block justify-content-center align-items-start">
        <Navigation route={setRoute} />
        {route === "signin" ? (
          <Signin onRouteChange={onRouteChange} />
        ) : (
          <div>
            <Logo />
            <Rank />
            <h2 className="mt-5">{`This Magic Brain will detect faces in your pictures, Give it a try`}</h2>
            <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
            <FaceRecognition imgUrl={imageURL} boxFace={box} />
          </div>
        )}
      </div>

      {/*
      
      
      */}
    </div>
  );
}

export default App;
