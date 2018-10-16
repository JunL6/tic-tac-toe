import React, { Component } from "react";
import Square from "./square";

export default class Board extends Component {
  constructor(props) {
    super(props);
    const currentSquare = props.squareToRender;
    console.log(currentSquare);
  }

  renderSquare(i) {
    return (
      <Square
        squareId={i}
        value={this.props.squareToRender[i]}
        onClick={this.props.onClick}
      />
    );
  }

  render() {
    console.log(this.props.xIsNext);
    const status = `Next player: ${this.props.xIsNext ? "X" : "O"}`;
    // const status = "..oo..oo..oo..oo..oo..oo..";

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

        {/* {this.state.isGameOver && <div className="alert">Game Over!!!</div>} */}
      </div>
    );
  }
}
