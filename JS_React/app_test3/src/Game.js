// import React, { Component } from 'react'
import React from "react";
import Board from "./Board";
import store from "./store";
import _ from "lodash";

import { 
  set_stepNumber,
  set_history,
  set_mov_asc,
  set_xIsNext,
  set_win_square,
  set_choice,
} from "./actions";
class Game extends React.Component {
  // Choice the suitable plauing square by computer
  computer(squares) {
    // for (let i=0; i<squares.length; i++) {
    for (let i = squares.length - 1; i >= 0; i--) {
      if (squares[i] === null) {
        squares[i] = "O";
        break;
      }
    }
    return squares;
  }

  handleClick(i) {
    console.log('in handleClick '+ i);

    this.state = store.getState();
    console.log(this.state);

    const history = this.state.set_history.slice(
      0,
      this.state.set_stepNumber + 1
    );
    const current = history[history.length - 1];
    console.log(history);
    console.log(history.length);
    console.log(current);
    console.log(history.squares);
    console.log('check ');
    let squares = current.slice();
    console.log(current);

    // player is still not choosed
    if (this.state.set_choice === 0) {
      return;
    }

    let windata = calculateWinner(squares);
    let winner = windata.won;

    // when we allready have a winner, new click won't effect
    if (winner !== null) {
      store.dispatch(set_win_square(windata));
      // this.setState({
      //     win_square: [windata.a, windata.b, windata.c],
      // });
      return;
    }

    // If value is put in that square
    if (squares[i]) {
      return;
    }

    // from now new click will effect
    squares[i] = this.state.set_xIsNext ? "X" : "O";

    // Check if recent clicked square by user made him winner
    windata = calculateWinner(squares);
    winner = windata.won;

    if (winner !== null) {
      store.dispatch(set_history(history, squares));
      store.dispatch(set_stepNumber(history.length));
      store.dispatch(set_win_square(windata));

      // this.setState({
      //   history: history.concat([{
      //     squares: squares
      //   }]),
      //   stepNumber: history.length,
      //   win_square: [windata.a, windata.b, windata.c],
      // });
      return;
    }

    // When playing with computer and user clicked his square
    if (this.state.set_choice === 1 && squares[i] === "X") {
      // update square
      squares = this.computer(squares);
    }

    windata = calculateWinner(squares);
    winner = windata.won;

    // check if chamge made by computer made him win
    let val = winner !== null ? windata : Array(3).fill(null);
    // if opponent is computer xIsNext is always true
    let tmp = this.state.set_choice === 1 ? true : !this.state.set_xIsNext;

    store.dispatch(set_history(history, squares));
    store.dispatch(set_stepNumber(history.length));
    store.dispatch(set_win_square(windata));
    store.dispatch(set_xIsNext(tmp));

    // this.setState({
    //   history: history.concat([{
    //     squares: squares
    //   }]),
    //   stepNumber: history.length,
    //   win_square: val,
    //   xIsNext: tmp,
    // });
  }

  // for jumping previous steps
  jumpTo(step) {
    this.state = store.getState();

    store.dispatch(set_stepNumber(step));

    let windata = { a: null, b: null, c: null, won: null };

    store.dispatch(set_win_square(windata));

    // this.setState({
    //   stepNumber: step,
    //   win_square: Array(3).fill(null),
    // });

    let val = this.state.set_choice === 1 ? true : step % 2 === 0;
    store.dispatch(set_xIsNext(val));
    // this.setState({xIsNext: val});
  }

  // toggle the move list between ascending & descending
  mov_toggle() {
    this.state = store.getState();
    // console.log(set_mov_asc);
    store.dispatch(set_mov_asc(!this.state.set_mov_asc));
    // this.setState({
    //     mov_asc: !this.state.set_mov_asc,
    // });
  }

  // when a player is choosed board goes to initial state
  choice_toggle(i) {
    this.state = store.getState();


    store.dispatch(set_choice(i));

    // this.setState({
    //   history: [{
    //     squares: Array(9).fill(null),
    //   }],
    //   stepNumber: 0,
    //   xIsNext: true,
    //   mov_asc: true,
    //   win_square: Array(3).fill(null),
    //   choice: i,
    // });
  }

  render() {
    this.state = store.getState();
    // console.log(store.getState());
    // console.log(this.state);

    // let step = new_state.stepNumber;

    // console.log(this.state + ' state is ' + new_state + " hi " + step);
    // console.log(this.state);
    // console.log(new_state);

    const history = this.state.set_history;
    // console.log("In history");
    // console.log(history);
    const current = history[this.state.set_stepNumber];
    const windata = calculateWinner(current.squares);
    const winner = windata.won;

    let mov = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    const moves = this.state.set_mov_asc
      ? mov.slice(0, mov.length)
      : mov.slice(0, mov.length).reverse();

    console.log("In render");

    let status,
      status2,
      font_color = "black";
    if (winner) {
      status = "Winner: " + winner;
      font_color = "red";
    } else if (this.state.set_stepNumber === 9) {
      status = "Game is Drawn";
      font_color = "red";
    } else {
      status = "Next player: " + (this.state.set_xIsNext ? "X" : "O");
    }

    if (this.state.set_choice === 0) {
      status2 = "Please choice to play with Computer or Another Player\n";
    } else if (this.state.set_choice === 1) {
      status2 = "Playing with Computer";
    } else {
      status2 = "Playing with Another Player";
    }

    return (
      <div className="game">
        <div className="game-choice">
          <button
            className="choice_square"
            onClick={() => this.choice_toggle(1)}
          >
            Computer
          </button>
          <button
            className="choice_square"
            onClick={() => this.choice_toggle(2)}
          >
            Another Player
          </button>
        </div>

        <div className="game-board">
          <Board
            key={"board_" + this.state.set_stepNumber} //
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            win_square={this.state.set_win_square}
          />
        </div>

        <div className="game-info">
          <div>
            <font color="blue">{status2}</font>
          </div>
          <br />
          <div>
            <font color={font_color}>{status}</font>
          </div>
          <br />
          <button className="mov_square" onClick={() => this.mov_toggle()}>
            Toggle Move list
          </button>
          {this.state.set_mov_asc ? (
            <ol>{moves} </ol>
          ) : (
            <ol reversed>{moves} </ol>
          )}
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { a: a, b: b, c: c, won: squares[a] };
    }
  }
  return { a: null, b: null, c: null, won: null };
}

export default Game;

// this.forceUpdate()
// to re-render when the value changes
// This is because changes to anything other than state and props does not trigger a re-render.
// If you find yourself using forceUpdate(), you’re probably doing something wrong
