import "./App.css";
import { Route, Routes } from "react-router-dom";
import TheInterface from "./components/TheInterface.jsx";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ThePuzzle from "./components/ThePuzzle";
import Footer from "./components/Footer";
import TheDatabase from "./components/TheDatabase";
import OrdinalMaxiBiz from "./components/OrdinalMaxiBiz";
import QuantumCats from "./components/QuantumCats";

function App() {
  return (
    <>
      <Nav />
      <h1>Jacob Burnstein's Coding Interview Solution</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thePuzzle" element={<ThePuzzle />} />
        <Route path="/theInterface" element={<TheInterface />} />
        <Route path="/quantumCats" element={<QuantumCats />} />
        <Route path="/ordinalMaxiBiz" element={<OrdinalMaxiBiz />} />
        <Route path="/theDatabase" element={<TheDatabase />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
