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
      choice: 0,
    };
  }

  // Choice the suitable plauing square by computer
  computer(squares) {
    
    // for (let i=0; i<squares.length; i++) {
    for (let i=squares.length-1; i>=0; i--) {
      if (squares[i]===null) {
        squares[i]='O';
        break;
      }
    }
    return squares;

  }

  handleClick(i) {
    // console.log('in handleClick '+ i);
    
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    let squares = current.squares.slice();


    // player is still not choosed
    if(this.state.choice === 0)
    {
      return;
    }

    let windata = calculateWinner(current.squares);
    let winner = windata.won;

    // when we allready have a winner, new click won't effect
    if (winner !== null) {
      this.setState({
          win_square: [windata.a, windata.b, windata.c],
      });
      return;
    }

    // If value is put in that square
    if (squares[i]) {
      return;
    }
    
    // from now new click will effect
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    // Check if recent clicked square by user made him winner
    windata = calculateWinner(squares);
    winner = windata.won;

    if (winner !== null) {
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,  
        win_square: [windata.a, windata.b, windata.c],
      });
      return;
    }

    // When playing with computer and user clicked his square
    if(this.state.choice === 1 && squares[i]==='X')
    {
      // update square
      squares = this.computer(squares);
    }

    windata = calculateWinner(squares);
    winner = windata.won;

    // check if chamge made by computer made him win
    let val = (winner !== null) ? [windata.a, windata.b, windata.c] : Array(3).fill(null) ;
    // if opponent is computer xIsNext is always true
    let tmp = (this.state.choice === 1) ? true : !this.state.xIsNext ;


    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      win_square: val,
      xIsNext: tmp,
    });

  }

  // for jumping previous steps
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      win_square: Array(3).fill(null),
    });

    let val = (this.state.choice === 1) ? true : (step % 2) === 0;
    this.setState({xIsNext: val});
    
  }

  // toggle the move list between ascending & descending 
  mov_toggle() {
    this.setState({
        mov_asc: !this.state.mov_asc,
    });

  }

  // when a player is choosed board goes to initial state
  choice_toggle(i) {
    this.setState({
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      mov_asc: true,
      win_square: Array(3).fill(null),
      choice: i,
    });
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

    let status, status2, font_color = 'black';
    if (winner) {
      status = 'Winner: ' + winner;
      font_color = 'red';
    } 
    else if(this.state.stepNumber===9) {
      status = 'Game is Drawn';
      font_color = 'red';
    }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    if (this.state.choice === 0) {status2 = 'Please choice to play with Computer or Another Player\n'}
    else if (this.state.choice === 1) {status2 = 'Playing with Computer'}
    else {status2 = 'Playing with Another Player'}

    return (
      <div className="game">
        
        <div className="game-choice">
          <button className="choice_square" onClick={() => this.choice_toggle(1)}>
              Computer
          </button>
          <button className="choice_square" onClick={() => this.choice_toggle(2)}>
              Another Player
          </button>
        </div>

        <div className="game-board">

          <Board key = {'board_' + this.state.stepNumber} //
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
            win_square = {this.state.win_square}
          />


        </div>

        <div className="game-info">
          <div><font color="blue">{status2}</font></div>
          <br></br>
          <div><font color={font_color}>{status}</font></div>
          <br></br>
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

    const [a, b, c] = lines[i];
    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

      return {"a":a, "b":b, "c":c, "won": squares[a]};
    }
  }
  return {"a":null, "b":null, "c":null, "won": null};
}

export default Game;


// this.forceUpdate()
// to re-render when the value changes
// This is because changes to anything other than state and props does not trigger a re-render.
// If you find yourself using forceUpdate(), you’re probably doing something wrong