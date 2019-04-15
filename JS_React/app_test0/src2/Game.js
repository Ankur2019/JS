// import React, { Component } from 'react'
import React from 'react';
import Board from './Board';


class Game extends React.Component {

    constructor(props) {
      console.log('in class Game extends React.Component Constructor');
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
        mov_asc: true,
        win_square: Array(3).fill(null),
      };
    }
  
    handleClick(i) {
      console.log('in handleClick '+ i);
      
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const windata = calculateWinner(current.squares);
      const winner = windata.won;

      if (winner !== null) {
        this.setState({
            win_square: [windata.a, windata.b, windata.c],
        });
        return;
      }

    //   if (calculateWinner(squares) || squares[i]) {
      if (squares[i]) {
        return;
      }
      
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        win_square: Array(3).fill(null),
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
        win_square: Array(3).fill(null),
      });
    }

    mov_toggle() {
        this.setState({
            mov_asc: !this.state.mov_asc,
        });
    }
    
    win_square_change(windata) {
      console.log("in win square change = " + this.state.win_square);
      if (this.state.win_square[0]===null) {
        this.setState({
          win_square: [windata.a, windata.b, windata.c],
        });
      }
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const windata = calculateWinner(current.squares);
      const winner = windata.won;

      let mov = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });

      const moves =  (this.state.mov_asc) ? mov.slice(0, mov.length) : (mov.slice(0, mov.length)).reverse();

  
      console.log('In render');
      let status, font_color = 'black';
      if (winner) {
        status = 'Winner: ' + winner;
        font_color = 'red';

        let change = function myFunc(windata) {console.log('walk '); return this.win_square_change(windata)};

        this.win_square_change(windata);
        console.log(change);
      } 
      else if(this.state.stepNumber===9) {
        status = 'Game is Drawn';
        font_color = 'red';
      }
      else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board key={'board_' + this.state.stepNumber} //
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              win_square={this.state.win_square}
            />
          </div>
          <div className="game-info">
            <div><font color={font_color}>{status}</font></div>

            <button className="mov_square" onClick={() => this.mov_toggle()}>
                Toggle Move list
            </button>
            {this.state.mov_asc ?
                <ol >{moves} </ol> :
                <ol reversed>{moves} </ol>
            }
          </div>
        </div>
      );
    }
  
}


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
      
    //   console.log('in calculateWinner :'+i+' '+squares[a]+squares[b]+squares[c])
  
      const [a, b, c] = lines[i];
      
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        
        // return squares[a];

        return {"a":a, "b":b, "c":c, "won": squares[a]};
      }
    }
    // return null;
    return {"a":null, "b":null, "c":null, "won": null};
}

export default Game;
