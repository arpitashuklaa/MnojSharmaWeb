import "./App.css";
import Navbar from "./components/Navbar";
import AboutAuthor from "./components/AboutAuthor";
import AboutBooks from "./components/AboutBooks";
import Content from "./components/Content";
import AwardsRecognition from "./components/AwardsRecognition";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="body-container">
        <AboutAuthor />
        <AboutBooks/>
        <Content/>
        <AwardsRecognition />
      </div>
    </div>
  );
}

export default App;
