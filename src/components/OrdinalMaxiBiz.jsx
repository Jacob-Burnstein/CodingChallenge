import React from "react";
import ombAPI from "../ombAPI";
import { useNavigate } from "react-router-dom";

const OrdinalMaxiBiz = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h5 className="link" onClick={() => navigate("/quantumCats")}>
        Quantum Cats
      </h5>
      <h1>ordinalMaxiBiz</h1>
      {ombAPI.map((nft, index) => {
        return (
          <div key={index}>
            <h2>{nft.collection.name}</h2>
            <h2>{nft.token.inscriptionNumber}</h2>
            <img src={nft.token.contentURI} />
            <h4>Timestamp: {nft.createdAt}</h4>
            <h4>Listed Price: {nft.listedPrice}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default OrdinalMaxiBiz;
