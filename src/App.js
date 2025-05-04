import "./App.css";
import Navbar from "./components/Navbar";
import AboutBooks from "./components/AboutBooks";
import Content from "./components/Content";
import AwardsRecognition from "./components/AwardsRecognition";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="body-container">
        <HeroSection />
        <AboutBooks/>
        <Content/>
        <AwardsRecognition />
      </div>
    </div>
  );
}

export default App;
