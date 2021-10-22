import "./App.css";
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState([0, 0]);
  const [randomScore, setRandomScore] = useState(0);
  const [currentScores, setCurrentScores] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const update = () => {
    let newDiceScore = Math.floor(Math.random() * 6) + 1;
    if (newDiceScore === 1) {
      const newCurrentPlayer = currentPlayer === 0 ? 1 : 0;
      setCurrentScores(newCurrentPlayer);
      setRandomScore(0);
    } else {
      setCurrentScores((CurrRoundScores) => CurrRoundScores + newDiceScore);
    }
    setRandomScore(newDiceScore);
  };

  const newGame = () => {
    setCurrentScores(0);
    setRandomScore(0);
    setPlayer([0, 0]);
    setCurrentPlayer(0);
  };

  const keep = () => {
    // const newPlayerScore = { ...player }; //1st solution
    // newPlayerScore[currentPlayer] = newPlayerScore[currentPlayer] + randomScore;
    const newPlayerScore = player.map((curr, index) =>
      currentPlayer === index ? item + randomScore : item
    );
    setPlayer(newPlayerScore);
    setRandomScore(0);
    setCurrentPlayer(0);
  };

  return (
    <div className="App">
      <div className="header" style={{ marginBottom: "3%", marginTop: "1%" }}>
        <button onClick={newGame}>New Game</button>
      </div>
      <div
        className="Body"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center ",
          fontSize: "28px",
        }}
      >
        <div
          className="player1"
          style={{ border: "5px solid red", width: "30%" }}
        >
          <h1>Player 1</h1>
          <h1>Score: {player[0]}</h1>
        </div>
        <div
          className="diceCounting"
          style={{ border: "5px solid red", width: "30%" }}
        >
          <button onClick={update}>Roll</button>
          <button>Keep</button>
          <h1>{randomScore}</h1>
          <h1>Scores: {currentScores}</h1>
        </div>
        <div
          className="player2"
          style={{ border: "5px solid red", width: "30%" }}
        >
          <h1>Player 2</h1>
          <h1>Score: {player[1]}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
