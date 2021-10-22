function Overall() {
  return (
    <div className="overall">
      <div className="twoPlayers">
        <p
          style={{
            border: "2px solid black",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Player 1
        </p>
        <p
          style={{
            border: "2px solid black",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Player 2
        </p>
      </div>
      <h1 className="score">0</h1>
      <p>Round score: 0</p>
    </div>
  );
}

export default Overall;
