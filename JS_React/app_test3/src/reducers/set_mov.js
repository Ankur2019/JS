import {SET_MOV} from "../constants/action-types";


export default function set_mov(state = true, action) {
  switch(action.type){
  	case SET_MOV:
  	return action.payload;
  	default:
  	return state;
  }
}
