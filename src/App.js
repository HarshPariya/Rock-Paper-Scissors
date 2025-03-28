import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/score").then((res) => setScore(res.data));
  }, []);

  useEffect(() => {
    axios.post("http://localhost:5000/api/score", { value: score });
  }, [score]);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route path="/game" element={<Game myChoice={myChoice} score={score} setScore={setScore} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
