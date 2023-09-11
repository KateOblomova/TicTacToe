import React from "react";

function Winner({ gameOver }) {
  let prompt;
  if (gameOver === 1) {
    prompt = "YOU WON!";
  }
  if (gameOver === 2) {
    prompt = "YOU LOST!";
  }
  return <div>{prompt}</div>;
}

export default Winner;
