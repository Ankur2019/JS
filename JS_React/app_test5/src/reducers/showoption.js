import {SHOW_OPTIONS,DELETE_REPLY_BOX,SET_REPLY,SEND_MESSAGE,SET_ACTIVE_USER_ID,} from "../constants/action-types";
export default (state=false,action)=>{
	switch(action.type){
		case SHOW_OPTIONS:
		return action.payload.show;
		case SET_ACTIVE_USER_ID:
		return false;
		case DELETE_REPLY_BOX:
		return false;
		case SET_REPLY:
		return false;
		case SEND_MESSAGE:
		return false;
		default:
		return state;
	}
}