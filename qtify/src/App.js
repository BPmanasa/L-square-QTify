import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import axios from "axios";
import Section from "./Components/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const endPoint = `https://qtify-backend-labs.crio.do`;

  useEffect(() => {
    axios.get(`${endPoint}/albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${endPoint}/albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
    </div>
  );
}

export default App;
