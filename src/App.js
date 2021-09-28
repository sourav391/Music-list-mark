import { useState } from "react";
import "./styles.css";

const Rock = {
  "Back in black ": "ACDC ",
  "Rating for acdc": "[5/10]",
  "The Outside  ": "Twenty one pilots",
  "Rating for twenty one pilots": "[7/10]",
  "The end of the game": "Weezer",
  "Rating for weezer": "[9/10]"
};

const Jazz = {
  "Blue in green": "Miles Davis",
  "Rating for Miles Davis": "[6/10]",
  "Body and soul": "Tony Bennett",
  "Rating for Tony Bennett": "[8/10]",
  Fever: "Peggy Lee",
  "Rating for Peggy lee": "[8/10]"
};

const Instrumental = {
  "Electric Worm": "The mix-up",
  "Rating for electric worm": "[6/10]",
  Eruption: "van halen",
  "Rating for van halen": "[7/10]",
  Peaches: "Hot rats",
  "Rating for Hot rats": "[5/10]"
};

export default function App() {
  const [genre, setGenre] = useState({});

  function rockHandler() {
    setGenre(Rock);
  }

  function jazzHandler() {
    setGenre(Jazz);
  }

  function instruHandler() {
    setGenre(Instrumental);
  }

  return (
    <div className="App">
      <h1>All you need about music</h1>
      <section className="container">
        <hr />

        <p>Music genre</p>
        <button onClick={rockHandler} className="btn">
          Rock
        </button>
        <button onClick={jazzHandler} className="btn">
          Jazz
        </button>
        <button onClick={instruHandler} className="btn">
          Instrumental
        </button>

        {Object.entries(genre).map((item) => {
          return (
            <p key={item}>
              {item[0]} ~ {item[1]}
            </p>
          );
        })}
      </section>
    </div>
  );
}
