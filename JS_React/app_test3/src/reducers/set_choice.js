import {SET_CHOICE} from "../constants/action-types";


export default function set_choice(state = 0, action) {
  switch(action.type){
  	case SET_CHOICE:
  	return action.payload;
  	default:
  	return state;
  }
}
