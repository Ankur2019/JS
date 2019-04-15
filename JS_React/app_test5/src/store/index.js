import {createStore} from 'redux';
import reducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer);

const store = createStore(reducer, composeWithDevTools( )); // for using 'redux-devtools-extension'

export default store;



// import { createStore } from "redux";
// import reducer from "../reducers";
// import { contacts } from "../static-data";

// const store = createStore(reducer, {contacts});

// export default store;


