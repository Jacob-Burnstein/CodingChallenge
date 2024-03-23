import React, { useState } from "react";
import mulliganProbability from "./mulliganProbability";

const ThePuzzle = () => {
  const [hand, setHand] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage(mulliganProbability(hand.toLowerCase()));
  }

  return (
    <div>
      <h1>thePuzzle</h1>
      <h3>Please enter your type of hand from the list below.</h3>
      <ul>
        <li>royal flush</li>
        <li> straight</li>
        <li>straight flush</li>
        <li>full house</li>
        <li>flush</li>
        <li>four of a kind</li>
        <li>two pair</li>
        <li>three of a kind</li>
        <li>pair</li>
        <li>four sequence</li>
        <li>four suit</li>
        <li>sequence (3)</li>
        <li>suit (3)</li>
        <li>nada</li>
      </ul>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Enter hand: </label>
        <input
          type="text"
          placeholder="example: two pair"
          onChange={(e) => setHand(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ThePuzzle;
