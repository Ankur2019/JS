import contacts from "./contacts";
import user from "./users";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import showoption from "./showoption";
import chatBoxContainReply from "./chatBoxContainReply"
import {combineReducers} from "redux";


export default combineReducers({
	user,
	contacts,
	activeUserId,
	messages,
	typing,
	showoption,
	chatBoxContainReply,
});

// export default (state, action) => {
//     return state;
// };

// import { contacts } from "../static-data";

// export default (state = { contacts }, action) => {
//   return state;
// };