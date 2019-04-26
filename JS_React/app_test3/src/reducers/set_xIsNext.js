import {SET_X} from "../constants/action-types";


export default function set_xIsNext(state = true, action) {
  switch(action.type){
  	case SET_X:
  	return action.payload;
  	default:
  	return state;
  }
}
