import { SET_TYPING_VALUE,SEND_MESSAGE,SET_EDIT_MESSAGE,SET_ACTIVE_USER_ID } from "../constants/action-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    case SET_EDIT_MESSAGE:
    let {messageToEdit} = action.payload;
    let message = (messageToEdit.lastIndexOf("[edited]")!==-1) ? messageToEdit.replace("[edited]",""):messageToEdit
    return message;
    case SET_ACTIVE_USER_ID:
    return "";
    default:
      return state;
  }
}