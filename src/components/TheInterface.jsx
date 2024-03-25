import React from "react";
import { useNavigate } from "react-router-dom";

const TheInterface = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>theInterface</h1>
      <h5 className="link" onClick={() => navigate("/ordinalMaxiBiz")}>
        Ordinal Maxi Biz
      </h5>
      <h5 className="link" onClick={() => navigate("/quantumCats")}>
        Quantum Cats
      </h5>
    </>
  );
};

export default TheInterface;
