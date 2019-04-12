import {SHOW_OPTIONS,SET_REPLY,SET_ACTIVE_USER_ID,DELETE_REPLY_BOX} from "../constants/action-types";
export default (state = [false,"",""],action)=>{
	switch(action.type){
	case SHOW_OPTIONS:
	let {text,name} = action.payload;
	return [false,text,name];
	case SET_ACTIVE_USER_ID:
	return [false,"",""];
	case DELETE_REPLY_BOX:
	return [false,"",""];
	case SET_REPLY:
	let {nameOfReply,textOfReply} = action.payload
	return [true,textOfReply,nameOfReply]
	default:
	return state;
	}
}
