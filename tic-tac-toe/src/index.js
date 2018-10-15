import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends Component {
  render() {
    return (
      <button
        className={"square squareID-" + this.props.squareId}
        // onClick={() => {
        //   this.props.onClick();
        // }}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

class Board extends Component {
  constructor(props) {
    super(props);
    const currentSquare = this.props.squareToRender;
    console.log(currentSquare);
    this.state = {
      squares: currentSquare,
      xIsNext: true,
      isGameOver: false
    };
    this.handleClick = this.handleClick.bind(this); //this function is modifying the state
  }

  handleClick(event) {
    //
    const className = event.target.className;
    const i = className.slice(className.indexOf("squareID-") + 9);
    //
    const squares = this.state.squares.slice();
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
    console.log("current squares: " + squares);
    // // console.log("GameOver?: " + Boolean());
  }

  renderSquare(i) {
    return (
      <Square
        squareId={i}
        value={this.state.squares[i]}
        // onClick={this.handleClick}
        // onClick={() => {
        //   this.handleClick(i);
        // }} // every time
        onClick={this.handleClick}
      />
    );
  }

  render() {
    const next = this.state.xIsNext ? "X" : "O";
    let status = "Next player: " + next;
    /* check if there is a winner, if so change status */
    // const result = determineWinner(this.state.squares);
    // if (result) {
    //   status = "Winner: " + result;
    // }

    return (
      <div>
        <div className="status">{status}</div>
        {[0, 1, 2].map((d, index) => {
          return (
            <div className="board-row" key={index}>
              {this.renderSquare(index * 3)}
              {this.renderSquare(index * 3 + 1)}
              {this.renderSquare(index * 3 + 2)}
            </div>
          );
        })}
        {this.state.isGameOver && <div className="alert">Game Over!!!</div>}
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        Array(9).fill(null),
        [, , , , , , , , "X"],
        [, , , , , "O", , , "X"]
      ]
    };
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

  render() {
    const squareToRender = this.state.history[this.state.history.length - 1];
    return (
      <div className="game">
        <div className="game-board">
          <Board squareToRender={squareToRender} />
        </div>
        <div className="game-info">
          <div>history</div>
          <ol>{this.renderHistory(this.state.history)}</ol>
        </div>
      </div>
    );
  }
}

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

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
