import "./App.css";
import Home from "./Home/Home";
import Background from "./main/Background";
import GameGrid from "./main/Game/GameGrid";
import StartButton from "./main/StartButton";
import Audio from "./main/Audio";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import Game from "./main/Morpion/Game";

function App() {
  return (
    <div>
      <Background />
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Fragment>
                <StartButton />
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
          <Route path="/morpion" exact render={() => <Game />} />
        </Switch>
        {/* <Game /> */}
      </BrowserRouter>
      {/* <Audio /> */}
    </div>
  );
}

export default App;
