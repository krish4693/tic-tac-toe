import React from 'react';
import { useState } from 'react';
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

function Square({ value, onSquareClick }) {
  return <button className='square' onClick={onSquareClick}>{value}</button>
}




//board function
function Board({isNext,square,onPlay}) {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNext,setIsNext]=useState(true)
  const winner = calculateWinner(square)
  let status;
  if (winner) {
    status = "Winner:" + winner;
  }
  else {
    status = "Next player:" + (isNext ? "X" : "O");
  }


  //handleClick function
  function handleClick(i) {
    if (square[i] || calculateWinner()) {
      return;
    }
    const nextSquare = square.slice();
    console.log(nextSquare)
    if (isNext) {
      nextSquare[i] = "X";
    }
    else {
      nextSquare[i] = "O"
    }
    onPlay(nextSquare)
  }


  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (square[a] === square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
  
    }
    return null;
  
  }

  return (
    <div>
      <div className='header'><h1>Tic-Tac-Toe</h1></div>
      <div className='game-wrapper'>
        <div>
          <div className='status' style={{ margin: "40px" }}>{status}</div>
          <div className='board-row'>



            <Square value={square[0]} onSquareClick={() => { handleClick(0) }} />
            <Square value={square[1]} onSquareClick={() => { handleClick(1) }} />
            <Square value={square[2]} onSquareClick={() => { handleClick(2) }} />

          </div>
          <div className='board-row'>
            <Square value={square[3]} onSquareClick={() => { handleClick(3) }} />
            <Square value={square[4]} onSquareClick={() => { handleClick(4) }} />
            <Square value={square[5]} onSquareClick={() => { handleClick(5) }} />
          </div>
          <div className='board-row'>
            <Square value={square[6]} onSquareClick={() => { handleClick(6) }} />
            <Square value={square[7]} onSquareClick={() => { handleClick(7) }} />
            <Square value={square[8]} onSquareClick={() => { handleClick(8) }} />
          </div>
        </div>

      </div>

    </div>
  );
}


//Game function

export default function Game() {
  const [isNext,setIsNext]=useState(true)
  const [history,setHistory]=useState(Array(9).fill(null))
  const currentSquare=history[history.length-1]

  //handlePlay function
  function handlePlay(nextSquare){

  }


  return (
    <div className='game'>
      <div className='game-board'>
        <Board isNext/>
      </div>
      <div className='game-info'>
        <ol>{/*TODO*/}</ol>
      </div>

    </div>
  );
}