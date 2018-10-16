import React, { Component } from "react";
import determineWinner from "./determineWinner";
import Board from "./board";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [Array(9).fill(null)],
      stepNumber: 0,
      xIsNext: true,
      isGameOver: false
    };

    /* bind functions that mutate the state */
    this.handleClick = this.handleClick.bind(this);
    this.jumpTo = this.jumpTo.bind(this); //this function is modifying the state
  }

  renderHistory(historyArray) {
    return historyArray.map((value, index) => {
      return (
        <li key={index}>
          <button
            onClick={() => {
              this.jumpTo(index);
              console.log("jump to ", index);
            }}
          >
            Go to move #$
            {index}
          </button>
        </li>
      );
    });
  }

  handleClick(event) {
    /* get square id from className from event.target */
    const className = event.target.className;
    const i = className.slice(className.indexOf("squareID-") + 9);
    /* get squares before click */
    const squares = this.state.history[this.state.stepNumber].slice();

    /* determine if the square was already filled */
    if (this.state.isGameOver) {
      alert("Game over");
    } else if (squares[i] === null) {
      /* determine who is next */
      squares[i] = this.state.xIsNext ? "X" : "O";
      /* determine who is the winner if there is one */
      const winner = determineWinner(squares);

      //   /* test */
      //   console.log(squares[i]);
      //   console.log(winner);
      //   debugger;

      /* new history state */
      const newHistory = this.state.history.slice(0, this.state.stepNumber + 1);
      newHistory.push(squares);

      this.setState({
        history: newHistory,
        stepNumber: this.state.stepNumber + 1,
        xIsNext: !this.state.xIsNext,
        isGameOver: Boolean(winner)
      });
    } else {
      alert("this spot was filled already");
    }
  }

  jumpTo(stepNum) {
    this.setState({ stepNumber: stepNum }, () => {
      console.log("stepNum: ", this.state.stepNumber);
    });
  }

  render() {
    const squareToRender = this.state.history[this.state.history.length - 1];
    return (
      <div className="game">
        <div className="game-board">
          <Board squareToRender={squareToRender} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>history</div>
          <ol>{this.renderHistory(this.state.history)}</ol>
        </div>
      </div>
    );
  }
}
