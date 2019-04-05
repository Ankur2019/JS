import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
  console.log('in Square(props)');
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


// class Square extends React.Component {

//   // constructor(props) {
//   //   super(props);
//   //   this.state={
//   //     value: null,
//   //   };
//   // }

//     render() {
//       return (
//         // <button className="square" onClick={function(){ alert('clicked'); }}>
//         <button className="square" 
//           onClick={ () => this.props.onClick() }
//         >
//           {this.props.value}

//         </button>
//       );
//     }
// }
  
class Board extends React.Component {

  constructor(props) {
    console.log('class Board extends React.Component');

    super(props);
    
    this.state={
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {

    console.log('in handleClick(i)');
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

    renderSquare(i) {
      return(
        <Square 
          value={this.state.squares[i]}
          onClick={ ()=> this.handleClick(i)}
        />
      );
    }
  
    render() {
      
      const winner = calculateWinner(this.state.squares);
      
      // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0');

      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}
  
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


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
  for (let i = 0; i < lines.length; i++) {
    
    console.log('in calculateWinner :'+i+' '+squares[a]+squares[b]+squares[c])

    const [a, b, c] = lines[i];
    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/*

https://reactjs.org/tutorial/tutorial.html

In JavaScript classes, you need to always call super when defining the constructor of a subclass. 
All React component classes that have a constructor should start it with a super(props) call.

When you call setState in a component, React automatically updates the child components inside of it too.
*/