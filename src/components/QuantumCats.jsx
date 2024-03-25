import React from "react";
import catsAPI from "../catsAPI";
import { useNavigate } from "react-router-dom";

const QuantumCats = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h5 className="link" onClick={() => navigate("/ordinalMaxiBiz")}>
        Ordinal Maxi Biz
      </h5>
      <h1>Quantum Cats</h1>
      {catsAPI.map((nft, index) => {
        return (
          <div key={index}>
            <h2>{nft.meta.name}</h2>
            <h2>{nft.inscriptionNumber}</h2>
            <p>Unable to render images due to Third-party Cookies</p>
            <img src={nft.contentURI} />
            <h4>Timestamp: {nft.listedAt}</h4>
            <h4>Listed Price: {nft.listedPrice}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default QuantumCats;
