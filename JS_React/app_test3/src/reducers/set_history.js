import {SET_HISTORY} from "../constants/action-types";


export default function set_history(state = [{ squares: Array(9).fill(null),}],  action) {
  switch(action.type){
  	case SET_HISTORY:
  	return action.payload.history.concat([action.payload.squares])
  	default:
  	return state;
  }
}
