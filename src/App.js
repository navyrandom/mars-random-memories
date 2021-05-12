import "./App.css";
import Home from "./Home/Home";
import Background from "./main/Background";
import GameGrid from "./main/Game/GameGrid";
import Dialog from "./main/Dialog";
import Audio from "./main/Audio";
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
=======
import Game from "./main/Morpion/Game";
>>>>>>> dev

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Background />
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Fragment>
                <Dialog />
                <Home />
              </Fragment>
            )}
          />
          <Route
            path="/start"
            exact
            render={() => (
              <Fragment>
                <GameGrid />
                <Audio />
              </Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
      {/* <Audio /> */}
=======
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
>>>>>>> dev
    </div>
  );
}

export default App;
