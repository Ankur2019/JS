// import React, { Component } from 'react'
import React from 'react'

function Square(props) {
    // console.log('\nin Square(props)' + props.value);
    // console.log('Win Square in Square Component = ' + props.win_square);
    return (
      <button className="square" onClick={props.onClick}>
        <font color={props.text_color}> {props.value} </font>
      </button>
    );
}

export default Square;

// class Square extends React.Component {
//     render() {
//         return (
//         <button className="square">
//             {this.props.value}
//         </button>
//         );
//     }
// }


