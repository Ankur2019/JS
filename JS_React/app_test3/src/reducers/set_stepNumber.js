import {SET_STEPNUMBER} from "../constants/action-types";


export default function set_stepNumber(state = 0, action) {
  switch(action.type){
  	case SET_STEPNUMBER:
  	return action.payload;
  	default:
  	return state;
  }
}
