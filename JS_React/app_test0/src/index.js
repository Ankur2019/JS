import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';



ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

/*

https://reactjs.org/tutorial/tutorial.html

In JavaScript classes, you need to always call super when defining the constructor of a subclass. 
All React component classes that have a constructor should start it with a super(props) call.

When you call setState in a component, React automatically updates the child components inside of it too.
*/

