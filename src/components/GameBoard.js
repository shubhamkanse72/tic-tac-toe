import { useState } from "react";
const initialValues = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({onSelectSquares,activePlayerSymbol}) {
    const [gameBoard,setGameBoard]= useState(initialValues);

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard];
            updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
            return updatedBoard;    
        });
        onSelectSquares();
    }
  return (
    <ol id="game-board">
    {gameBoard.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
  );
}
