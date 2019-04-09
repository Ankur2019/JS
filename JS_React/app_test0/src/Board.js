
import React from 'react';
import Square from './Square';

class Board extends React.Component {

    renderSquare(i) {
      
      let text_color = 'black';
      console.log("value of i = " + i);
      console.log('In renderSquare = ' + this.props.win_square[0] + this.props.win_square[1] + this.props.win_square[2]);
      if ( i === this.props.win_square[0] || i === this.props.win_square[1] || i === this.props.win_square[2])
      {
        text_color = 'red'; // it will not change as tha winning text is previously rendered and will not be re-rendered
      }


      return(
        <Square key={'square_'+i} //
          value={this.props.squares[i]}
          text_color = {text_color}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
    
    BoardDiv = () => {
        let parent = [];
    
        // Outer loop to create parent
        for (let cnt = 0, i = 0; i < 3; i++) {
          let children = [];
          //Inner loop to create children
          for (let j = 0; j < 3; j++) {
            children.push(this.renderSquare(cnt)); // concat will not work here
            ++cnt;
          }
          //Create the parent and add the children

          parent.push(<div key={'div_'+i}>{children}</div>) //
        }
        return parent;
    }
  
    render() {
    //   console.log('Win Square in board component = ' + this.props.win_square);
      return (
        <div>
            {this.BoardDiv()}

          {/* <div className="board-row">
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
          </div> */}
        </div>
      );
    }
}

export default Board;