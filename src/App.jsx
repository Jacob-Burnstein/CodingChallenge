import "./App.css";
import { useState, useEffect } from "react";
import dummyAPI from "./dummyAPI";

function App() {
  return (
    <>
      <h1>The Interface</h1>
      {dummyAPI.map((nft, index) => {
        return (
          <div key={index}>
            <h2>{nft.collection.name}</h2>
            <h2>{nft.token.inscriptionNumber}</h2>
            <img src={nft.token.contentURI} />
          </div>
        );
      })}
    </>
  );
}

export default App;
