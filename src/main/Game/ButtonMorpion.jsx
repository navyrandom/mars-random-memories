import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Game from "../Morpion/Game";

const useStyles = makeStyles(() => ({
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
    marginTop: "500px",
    marginLeft: "auto",
    marginRight:"auto",
    position: "absolute"
  },
}));

function ButtonMorpion() {
  const classes = useStyles();
  const [showGame, setShowGame] = useState(false);
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setShowGame(true);
    setDisplay(!display);
  };

  return (
    <div>
      <Link to="/morpion" style={{ textDecoration: "none" }}>
      <button onClick={handleClick} className={classes.button}>
        More game
      </button>
      {showGame ? <Game /> : null}
      </Link>
    </div>
  );
}

export default ButtonMorpion;
