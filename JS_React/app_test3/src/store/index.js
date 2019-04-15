import {createStore} from 'redux';
import reducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer);

const initialState = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      mov_asc: true,
      win_square: Array(3).fill(null),
      choice: 0,
    };

const store = createStore(reducer, initialState, composeWithDevTools( )); // for using 'redux-devtools-extension'

export default store;
