import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game"
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true)

  function toggleMode() {
    setIsDark(!isDark)
  }
  return (
    <div className={isDark ? "App" : "App dark"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Game" element={<Game toggleMode={toggleMode} isDark={isDark} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
