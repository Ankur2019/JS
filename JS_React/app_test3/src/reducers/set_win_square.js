import {SET_WIN_SQUARE} from "../constants/action-types";


export default function set_win_square(state = Array(3).fill(null), action) {
  switch(action.type){
  	case SET_WIN_SQUARE:
  	return action.payload;
  	default:
  	return state;
  }
}
