import { 
	SET_ACTIVE_USER_ID,
	SET_TYPING_VALUE,
	SEND_MESSAGE,
  SET_EDIT_MESSAGE,
  DELETE_MESSAGE,
  SHOW_OPTIONS,
  SHOW_CHAT_REPLY,
  DELETE_REPLY_BOX,
  SET_REPLY
} from "../constants/action-types";

export const activeUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value =>({
	type: SET_TYPING_VALUE,
	payload:value
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});

export const setEditMessage = (messageToEdit,user,editTextNo) =>({
  type: SET_EDIT_MESSAGE,
  payload: {
    messageToEdit,
    editTextNo,
    user
  }
});
export const deleteMessage = (messageNumberDeleted,activeUser) =>({
 type: DELETE_MESSAGE,
 payload:{
  messageNumberDeleted,
  activeUser
 }
});


export const showOptions = (show,active,text,name) =>({
 type: SHOW_OPTIONS,
 payload:{
  show,
  active,
  text,
  name,
 }
});

export const showChatBoxReply =([show,textToShow])=>({
  type: SHOW_CHAT_REPLY,
  payload:{
    show,
    textToShow
  }
})


export const deleteReplyBoxFromChatBox =()=>({
  type: DELETE_REPLY_BOX,
  payload:{
  }
})

export const setReply =(nameOfReply,textOfReply,activeUserId)=>({
  type: SET_REPLY,
  payload:{
    nameOfReply,
    textOfReply,
    activeUserId
  }
})