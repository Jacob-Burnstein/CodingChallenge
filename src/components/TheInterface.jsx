import React from "react";
import ombAPI from "../ombAPI";
import catsAPI from "../catsAPI";

const TheInterface = () => {
  return (
    <>
      <h1>The Interface</h1>
      <h1>OMB</h1>
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
    </>
  );
};

export default TheInterface;
