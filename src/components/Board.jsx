function Board() {
  //use table for cells
  let boardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const setWinner = () => {
    const checkWinner = (arr) => {
      if (arr[0] === arr[1] && arr[0] === arr[2]) {
        console.log("you won");
        return true;
      } else return false;
    };

    switch (boardState) {
      case checkWinner(boardState.slice(0, 3)):
        return console.log("you won");
      case checkWinner(boardState.slice(3, 6)):
        return console.log("you won");
      case checkWinner(boardState.slice(6, 9)):
        return console.log("you won");
    }
  };
  const compTurn = (num) => {
    const computerTurnId = document.getElementById(num);
    setWinner();

    computerTurnId.className = "checkCPU";
    boardState[num] = "B";
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
      compTurn(getRandomInt());
    }, 3000);
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
