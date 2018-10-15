import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        Array(9).fill(null),
        [null, null, null, null, null, null, null, null, "X"],
        [null, null, null, null, null, "O", null, null, "X"]
      ],
      stepNumber: 2,
      isGameOver: false
    };

    /* bind functions that mutate the state */
    this.addSquare = this.addSquare.bind(this);
    this.handleClick = this.handleClick.bind(this); //this function is modifying the state
  }

  renderHistory(historyArray) {
    return historyArray.map((value, index) => {
      return (
        <li key={index}>
          <button>
            Go to move #$
            {index}
          </button>
        </li>
      );
    });
  }

  addSquare(newSquare) {
    const newHistory = this.state.history.slice();
    newHistory.push(newSquare);
    // console.log("newSquare", newSquare);
    // console.log("newHistory: ", newHistory);
    // debugger;
    this.setState({ history: newHistory });
  }

  handleClick(event) {
    //
    const className = event.target.className;
    const i = className.slice(className.indexOf("squareID-") + 9);
    //
    const squares = this.state.history[this.state.stepNumber].slice();
    console.log(squares);
    debugger;
    /* determine if the square was already filled */
    if (this.state.isGameOver) {
      alert("Game over");
    } else if (squares[i] === null) {
      /* determine who is next */
      squares[i] = this.state.xIsNext ? "X" : "O";
      /* determine who is the winner if there is one */
      const winner = determineWinner(squares);

      this.setState({
        squares,
        xIsNext: !this.state.xIsNext,
        isGameOver: Boolean(winner)
      });
    } else {
      alert("this spot was filled already");
    }
    // console.log("state squares: " + this.state.squares);
    console.log("current squares: ", squares);
    // // console.log("GameOver?: " + Boolean());
    this.props.addSquare(squares);
  }

  jumpBack() {}

  render() {
    const squareToRender = this.state.history[this.state.history.length - 1];
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squareToRender={squareToRender}
            addSquare={this.addSquare}
            onClick={this.handleClick}
          />
        </div>
        <div className="game-info">
          <div>history</div>
          <ol>{this.renderHistory(this.state.history)}</ol>
        </div>
      </div>
    );
  }
}

/*********************************************/

/* determine winner */
function determineWinner(squares) {
  const winMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // get X's array
  const xArray = [];
  squares.map((value, index) => {
    if (value === "X") {
      xArray.push(index);
    }
    return 0;
  });
  // console.log("xArray: " + xArray);
  /* get O's array */
  const oArray = [];
  squares.map((value, index) => {
    if (value === "O") {
      oArray.push(index);
    }
    return 0;
  });
  // console.log("oArray: " + oArray);
  /* determine if X wins */
  const resultX = winMatrix.find(subArray => {
    return subArray.every(i => {
      return xArray.includes(i);
    });
  });
  if (resultX) {
    // alert("X win! " + resultX);
    return "X";
  }
  // determine if O wins
  const resultO = winMatrix.find(subArray => {
    return subArray.every(i => {
      return oArray.includes(i);
    });
  });
  if (resultO) {
    // alert("X win! " + resultX);
    return "O";
  }
  return null;
}
