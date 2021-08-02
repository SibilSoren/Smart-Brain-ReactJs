import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "513366b794d240b590d899434f9b91f3",
});
function App() {
  const [input, setInput] = useState();
  const [imageURL, setImageURL] = useState();

  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const onSubmit = () => {
    if (input) {
      console.log(`Clicked! ${input} is passed`);
      setImageURL(input);
      console.log(imageURL);
      app.models.predict(Clarifai.FACE_DETECT_MODEL, imageURL).then(
        function (response) {
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
        },
        function (err) {}
      );
    } else {
      console.log(`Please enter a URL`);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <Navigation />
        <Logo />
        <Rank />
        <h2 className="mt-5">{`This Magic Brain will detect faces in your pictures, Give it a try`}</h2>
        <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
        <FaceRecognition imgUrl={imageURL} />
      </div>

      {/*
      
      
      */}
    </div>
  );
}

export default App;
