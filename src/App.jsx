import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  useEffect(() => {
    //check if stuff in localstorage
    const textFromStorage = localStorage.getItem("ttt-scores");
    if (textFromStorage) {
      console.log(textFromStorage);
    }
    //localStorage.getItem('ttt-scores', );
  }, []);
  return (
    <>
      <main>
        <Board />
      </main>
    </>
  );
}

export default App;
