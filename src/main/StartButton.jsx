import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import GameGrid from "./Game/GameGrid";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  dial: {
    color: "white",
    textAlign: "justify",
    margin: "100px 50px 0px 50px",
  },
  button: {
    color: "white",
    display: "flex",
    flex: "column",
    alignItems: "center",
    margin: "auto",
    padding: "auto",
    fontSize: "40px",
    textAlign: "center",
    backgroundColor: "#f7a440",
    fontFamily: "Fascinate",
    marginTop: "50px",
    marginBottom: "0"
  },
}));

function StartButton
() {
  const classes = useStyles();
  const [showGame, setShowGame] = useState(false);
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setShowGame(true);
    setDisplay(!display);
  };

  return (
    <div>
      <Link to="/start" style={{ textDecoration: "none" }}>
      <button onClick={handleClick} className={classes.button}>
        Start Game
      </button>
      {showGame ? <GameGrid /> : null}
      </Link>
    </div>
  );
}

export default StartButton
;
