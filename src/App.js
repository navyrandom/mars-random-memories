import "./App.css";
import Home from "./Home/Home";
import Background from "./main/Background";
import GameGrid from "./main/Game/GameGrid";
import Dialog from "./main/Dialog";
import Audio from "./main/Audio";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react";

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
    </div>
  );
}

export default App;
