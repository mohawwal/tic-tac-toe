import { useState } from "react";
import Board from "./Board";
import {GiMoon} from 'react-icons/gi'
import {BsSun} from 'react-icons/bs'

export default function Game({ toggleMode, isDark }) {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }


    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = '#' +  move + " move";
        } else {
          description= 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
    });

  return (
    <div className="game">
        <div className="mode-icons" onClick={toggleMode}>{isDark ? <GiMoon /> : <BsSun />}</div>
        <div className="game-board">
            <Board 
                onPlay={handlePlay}
                xIsNext={xIsNext}
                squares={currentSquares}
                isDark={isDark}
            />
        </div>
        <div className="game-info">
            <ol className={isDark ? "list" : "dark"}>{moves}</ol>
        </div>
    </div>
  );
}
