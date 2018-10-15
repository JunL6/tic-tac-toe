import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Board extends Component {
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
        // onClick={this.handleClick}
      />
    );
  }

  render() {
    let status = "Next player: todo";

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

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
