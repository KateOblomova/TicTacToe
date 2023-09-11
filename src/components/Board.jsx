import { useEffect, useState } from "react";
import Turn from "./Turn";
import Winner from "./Winner";

function Board() {
  const [turn, setTurn] = useState(0); // 0 = player, 1 = CPU
 //const [gameOver, setGameOver] = useState(0); // 0 = no winner, 1 = player, 2 = cpu
const gameOver=0;
//const setGameOver=0



  
  let boardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const setWinner = () => {
    const checkWinner = (arr) => {
      console.log(arr);
      if (arr[0] === arr[1] && arr[0] === arr[2]) {
        console.log("you won");
        const s=prompt("you wi congrats")
        gameOver=1;
       //setGameOver(2)
        arr[0] === "B" ? setGameOver(2) : setGameOver(1);
        
      } else return false;
    };
  
    switch (boardState) {
      case checkWinner(boardState.slice(0, 3)):
        console.log("you won");
        break;
      case checkWinner(boardState.slice(3, 6)):
        console.log("you won");
        break;
      case checkWinner(boardState.slice(6, 9)):
        console.log("you won");
        break;
      case checkWinner([boardState[0], boardState[3], boardState[6]]):
        console.log("you won");
        break;
      case checkWinner([boardState[1], boardState[4], boardState[7]]):
        console.log("you won");
        break;
      case checkWinner([boardState[2], boardState[5], boardState[8]]):
        console.log("you won");
        break;
      case checkWinner([boardState[0], boardState[4], boardState[8]]):
        console.log("you won");
        break;
      case checkWinner([boardState[2], boardState[4], boardState[6]]):
        console.log("you won");
        break;
    }
  };
  const compTurn = (num) => {
    const computerTurnId = document.getElementById(num);
    computerTurnId.className = "checkCPU";
    boardState[num] = "B";
    setWinner();
  };
  const eventHandler = (e) => {
    boardState[e.target.id] = "A";
    e.target.className = "checkPlayer";
    setWinner();

    function getRandomInt() {
      let temp = Math.floor(Math.random() * 8);
      console.log("inside getRandom", temp);

      if (
        boardState[temp].className ||
        boardState[temp] === "A" ||
        boardState[temp] === "B"
      ) {
        console.log("tried to change taken cell", temp);
        return getRandomInt();
      }
      return temp;
    }

    setTimeout(() => {
      if (gameOver == 0) {
        compTurn(getRandomInt());
      }
      else return console.log("you win ")
    }, 3000);
  };
  return (
    <>
      <Turn turn={turn} />
      <Winner gameOver={gameOver} />
      <table>
        <tr>
          <td onClick={eventHandler} id={boardState[0]}></td>
          <td onClick={eventHandler} id={boardState[1]}></td>
          <td onClick={eventHandler} id={boardState[2]}></td>
        </tr>
        <tr>
          <td onClick={eventHandler} id={boardState[3]}></td>
          <td onClick={eventHandler} id={boardState[4]}></td>
          <td onClick={eventHandler} id={boardState[5]}></td>
        </tr>
        <tr>
          <td onClick={eventHandler} id={boardState[6]}></td>
          <td onClick={eventHandler} id={boardState[7]}></td>
          <td onClick={eventHandler} id={boardState[8]}></td>
        </tr>
      </table>
    </>
  );
}

export default Board;
