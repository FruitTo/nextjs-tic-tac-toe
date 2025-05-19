"use client";
import "../globals.css";
import Board from "./Board";
import Reset from "./Reset";
import { useState, useEffect } from "react";

const playerX: string = "X";
const playerO: string = "O";

const TicTacToe = () => {
  const [tiles, setTile] = useState(Array(9).fill(null)); // [varname, functionUpdate]
  const [turn, setTurn] = useState(playerX);

  const [winer, setWiner] = useState("");
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const reset = () => {
    const newTile = Array(9).fill(null);
    setTile(newTile);
    setTurn(playerX);
    setLine(["", "", "", "", ""]);
    setWiner("");
  };

  const [line, setLine] = useState(["", "", "", "", ""]);

  const strikeLine = (winCon:number[]) => {
    if (winCon.join() == win[0].join()) {
      setLine(["1", "full", "2/12", "0", "0"]);
    } else if (winCon.join() == win[1].join()) {
      setLine(["1", "full", "6/12", "0", "0"]);
    } else if (winCon.join() == win[2].join()) {
      setLine(["1", "full", "10/12", "0", "0"]);
    } else if (winCon.join() == win[3].join()) {
      setLine(["full", "1", "0", "2/12", "0"]);
    } else if (winCon.join() == win[4].join()) {
      setLine(["full", "1", "0", "6/12", "0"]);
    } else if (winCon.join() == win[5].join()) {
      setLine(["full", "1", "0", "10/12", "0"]);
    } else if (winCon.join() == win[6].join()) {
      setLine(["1", "[525px]", "[190px]", "[-70px]", "45"]);
    } else if (winCon.join() == win[7].join()) {
      setLine(["1", "[525px]", "[190px]", "[-70px]", "135"]);
    }
  };

  const checkWiner = (newTile:string[]) => {
    for (let i = 0; i < win.length; i++) {
      if (
        newTile[win[i][0]] == playerX &&
        newTile[win[i][1]] == playerX &&
        newTile[win[i][2]] == playerX
      ) {
        setWiner("X");
          strikeLine(win[i]);
        return;
      } else if (
        newTile[win[i][0]] == playerO &&
        newTile[win[i][1]] == playerO &&
        newTile[win[i][2]] == playerO
      ) {
        setWiner("O");
        strikeLine(win[i]);
        return;
      }
    }
    if (tiles.every((e) => e != null)) {
      if (winer == "") {
        alert("Draw");
        reset();
      }
    }
  };

  const click = (index: number) => {
    if (tiles[index] != null) {
      return;
    }
    if (winer === "") {
      const newTiles = [...tiles];
      newTiles[index] = turn;
      setTile(newTiles);

      if (turn === playerX) {
        setTurn(playerO);
      } else {
        setTurn(playerX);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      checkWiner(tiles);
    }, 100);
  }, [tiles]);

  return (
    <div className="h-3/4 w-1/4">
      <h1 className="text-6xl text-center mb-5">Tic Tac Toe</h1>
      <Board tiles={tiles} click={click} line={line} />
      <Reset reset={reset} />
    </div>
  );
};

export default TicTacToe;
