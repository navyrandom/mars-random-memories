import React, { useState } from "react";
import "./style.css";
import Box from "./Box/Box";

const board = [[], [], []];

function Game(props) {
  const [turn, setTurn] = useState("X");
  const [winningtext, setWinningtext] = useState("");

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
      <div className="winning-text">{winningtext}</div>
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
    </div>
  );
}

export default Game;