import React, { Component } from "react";
import determineWinner from "./determineWinner";
import Board from "./board";

export default class Game extends Component {
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
