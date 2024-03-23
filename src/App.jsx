import "./App.css";
import { Route, Routes } from "react-router-dom";
import TheInterface from "./components/TheInterface.jsx";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ThePuzzle from "./components/ThePuzzle";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <h1>Jacob Burnstein's Coding Interview Solution</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thePuzzle" element={<ThePuzzle />} />
        <Route path="/theInterface" element={<TheInterface />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
