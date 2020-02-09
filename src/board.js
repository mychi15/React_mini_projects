import React from 'react';
import Square from './square';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(1)}{this.renderSquare(2)}{this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}{this.renderSquare(5)}{this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}{this.renderSquare(8)}{this.renderSquare(9)}
        </div>
      </div>
    );
  }
}

export default Board;


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}