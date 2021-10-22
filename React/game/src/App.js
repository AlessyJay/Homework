// import "./App.css";
import "./index.css";
import Header from "./components/header";
import Player1 from "./components/player1";
import Overall from "./components/overall";
import Player2 from "./components/player2";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Player1 />
        <Overall />
        <Player2 />
      </div>
    </div>
  );
}

export default App;
