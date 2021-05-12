import "./App.css";
import Home from "./Home/Home";
import Background from "./main/Background";
import GameGrid from "./main/Game/GameGrid";
import Dialog from "./main/Dialog";
import Audio from "./main/Audio";
import Game from "./main/Morpion/Game";

function App() {
  return (
    <div>
      <div>
        <Background />
        {/* <GameGrid />  */}
        {/* <Home /> */}
        <Dialog />
        <Game />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: "O",
        }}
      >
        <Audio />
      </div>
    </div>
  );
}

export default App;
