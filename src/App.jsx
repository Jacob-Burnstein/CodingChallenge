import "./App.css";
import { Route, Routes } from "react-router-dom";
import TheInterface from "./components/TheInterface.jsx";
import Home from "./components/Home";

function App() {
  return (
    <>
      {/* navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/thePuzzle" element={<ThePuzzle />} /> */}
        <Route path="/theInterface" element={<TheInterface />} />
      </Routes>
    </>
  );
}

export default App;
