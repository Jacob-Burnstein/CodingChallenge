import "./App.css";
import { Route, Routes } from "react-router-dom";
import TheInterface from "./components/TheInterface.jsx";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ThePuzzle from "./components/ThePuzzle";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thePuzzle" element={<ThePuzzle />} />
        <Route path="/theInterface" element={<TheInterface />} />
      </Routes>
    </>
  );
}

export default App;
