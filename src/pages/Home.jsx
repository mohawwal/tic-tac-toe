import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>TIC TAC TOE</h1>
      <img src="/images/tic-tac-toe-img.jpg" alt="" />
      <Link to="/Game" >
        <button>CLICK TO PLAY</button>
      </Link>
    </div>
  );
}
