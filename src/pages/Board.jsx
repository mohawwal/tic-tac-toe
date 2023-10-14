

export default function Board({ squares, xIsNext, onPlay, isDark }) {

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div>
        <div className={isDark ? "board-row" : "board-row dark"}>
          <button className={isDark ? "btn right-bottom" : "btn"} onClick={() => handleClick(0)}>
            {squares[0]}
          </button>
          <button className={isDark ? "btn bottom" : "btn"} onClick={() => handleClick(1)}>
            {squares[1]}
          </button>
          <button className={isDark ? "btn left-bottom" : "btn"} onClick={() => handleClick(2)}>
            {squares[2]}
          </button>
        </div>
        <div className={isDark ? "board-row" : "board-row dark"}>
          <button className={isDark ? "btn right-bottom" : "btn"} onClick={() => handleClick(3)}>
            {squares[3]}
          </button>
          <button className={isDark ? "btn bottom" : "btn"} onClick={() => handleClick(4)}>
            {squares[4]}
          </button>
          <button className={isDark ? "btn left-bottom" : "btn"} onClick={() => handleClick(5)}>
            {squares[5]}
          </button>
        </div>
        <div className={isDark ? "board-row" : "board-row dark"}>
          <button className={isDark ? "btn right" : "btn"} onClick={() => handleClick(6)}>
            {squares[6]}
          </button>
          <button className={isDark ? "btn" : "btn"} onClick={() => handleClick(7)}>
            {squares[7]}
          </button>
          <button className={isDark ? "btn left" : "btn"} onClick={() => handleClick(8)}>
            {squares[8]}
          </button>
        </div>
      </div>
    </div>
  );
}
