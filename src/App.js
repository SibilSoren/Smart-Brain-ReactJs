import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navigation />
        <Logo />
        <Rank />
        <h2 className="mt-5">{`This Magic Brain will detect faces in your pictures, Give it a try`}</h2>
        <ImageLinkForm />
      </div>

      {/*
      
      
      <FaceRecognition/>*/}
    </div>
  );
}

export default App;
