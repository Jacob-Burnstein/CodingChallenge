import "./App.css";
import ombAPI from "./ombAPI";

function App() {
  return (
    <>
      <h1>The Interface</h1>
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
    </>
  );
}

export default App;
