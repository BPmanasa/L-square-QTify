import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import CardComponent from "./Components/CardComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CardComponent />
    </div>
  );
}

export default App;
