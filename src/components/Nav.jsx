import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="nav">
        <li onClick={() => navigate("/thePuzzle")}>thePuzzle</li>
        <li onClick={() => navigate("/theInterface")}>theInterface</li>
        <li onClick={() => navigate("/theDatabase")}>theDatabase</li>
      </ul>
    </div>
  );
};

export default Nav;
