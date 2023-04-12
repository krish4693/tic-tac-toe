import React from 'react';
import { useState } from 'react';
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";



function Square({ value, onSquareClick }) {
  return <button className='square' onClick={onSquareClick}>{value}</button>
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null))


  function handleClick() {
    const nextSquare = square.slice();
    nextSquare[0] = "X";
    setSquare(nextSquare);
  }

  return (
    <div>
      <div className='board-row'>
        <Square value={square[0]} onSquareClick={handleClick} />
        <Square value={square[1]} onSquareClick={handleClick} />
        <Square value={square[2]} onSquareClick={handleClick} />

      </div>
      <div className='board-row'>
        <Square value={square[3]} />
        <Square value={square[4]} />
        <Square value={square[5]} />
      </div>
      <div className='board-row'>
        <Square value={square[6]} />
        <Square value={square[7]} />
        <Square value={square[8]} />
      </div>
    </div>
  );
}