import Computer from "./Computer";
import Player from "./Player";

function Board() {
  //use table for cells
  let boardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const setWinner = () => {
    const checkWinner = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
          console.log("winner");
          break;
        }
      }
    };
    switch (boardState) {
      case checkWinner(boardState.slice(0, 3)):
        return console.log("you won");
      case checkWinner(boardState.slice(3, 3)):
        return console.log("you won");
      case checkWinner(boardState.slice(6, 3)):
        return console.log("you won");
    }
  };
  const compTurn = (num) => {
    const computerTurnId = document.getElementById(num);
    console.log("?? :", computerTurnId);
    setWinner();

    computerTurnId.className = "checkCPU";
    boardState[num] = "B";
    console.log("computerTurn :", num);

    console.log("id? :", boardState);
  };
  const eventHandler = (e) => {
    boardState[e.target.id] = "A";
    e.target.className = "checkPlayer";

    function getRandomInt() {
      let temp = Math.floor(Math.random() * 9);
      console.log("inside getRandom", temp);

      if (
        boardState[temp].className ||
        boardState[temp] === "A" ||
        boardState[temp] === "B"
      ) {
        console.log("tried to change taken cell", temp);
        getRandomInt();
      }
      return temp;
    }

    // === "checkPlayer" ||
    // boardState[temp].className === "checkCPU"
    //const computerTurn = getRandomInt();

    //console.log("expected?", computerTurn);

    setTimeout(() => {
      compTurn(getRandomInt());
    }, 3000);

    // if (boardState[computerTurn] === "A" || boardState[computerTurn] === "B") {
    //   console.log("tried to change taken cell", computerTurn);
    //   getRandomInt();
    // }
    // const computerTurnId = document.getElementById(computerTurn);
    // console.log("?? :", computerTurnId);

    // computerTurnId.className = "checkCPU";
    // boardState[computerTurn] = "B";
    // console.log("computerTurn :", computerTurn);

    // console.log("id? :", boardState);
  };
  return (
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
  );
}

export default Board;
