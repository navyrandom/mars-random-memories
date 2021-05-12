import React, { useState } from "react";
import "./style.css";
import Box from "./Box/Box";
import { makeStyles } from "@material-ui/core";
import Explosion from "./Explosion";
import { Link } from "react-router-dom";

const board = [[], [], []];

const useStyle = makeStyles({
  youWin: {
    color: "white",
    fontSize: "40px",
    textAlign: "center",
    backgroundColor: "#f7a440",
    fontFamily: "Fascinate",
    marginBottom: "30px",
  },
});

function Game(props) {
  const classes = useStyle();
  const [turn, setTurn] = useState("X");
  const [winningtext, setWinningtext] = useState("");
  const [showApocalypse, setShowApocalypse] = useState(false);

  const handleApocalypse = () => {
    setShowApocalypse(!showApocalypse);
  };

  const handleClick = () => {
    setTurn();
  };

  function changeTurn(row, col) {
    board[row][col] = turn;

    setTurn((turn) => (turn === "X" ? "O" : "X"));

    // console.log(board);
    const winner = checkWin();

    if (!winner) {
      //nothing
    } else {
      setWinningtext(winner + ";*!/5-#& Gagné en martien");
    }
  }

  function checkWin() {
    // test sur row
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      if (row[0] === row[1] && row[1] === row[2] && row[0]) {
        return row[0];
      }
    }

    // test sur column
    for (let i = 0; i < board.length; i++) {
      const el1 = board[0][i];
      const el2 = board[1][i];
      const el3 = board[2][i];

      if (el1 === el2 && el2 === el3 && el1) {
        return el1;
      }
    }

    //test diagonale
    const d1 = board[0][0];
    const d2 = board[1][1];
    const d3 = board[2][2];

    if (d1 === d2 && d2 === d3 && d1) {
      return d1;
    }

    const p1 = board[0][2];
    const p2 = board[1][2];
    const p3 = board[2][0];

    if (p1 === p2 && p2 === p3 && p1) {
      return p1;
    }
    return false;
  }

  return (
    <div id="game">
      <div className={classes.youWin}>{winningtext}</div>
      <div className="row">
        <Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div>
        <button className="btn1" onClick={handleClick}>
          Reset
        </button>
        <Link to="/destruction">
        <button className="btn2" onClick={handleApocalypse}>
          Mars destruction
        </button>
        {showApocalypse ? <Explosion /> : null}
        </Link>
      </div>
    </div>
  );
}

export default Game;
