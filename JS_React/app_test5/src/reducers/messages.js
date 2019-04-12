import {getMessages} from "../static-data";
import { SEND_MESSAGE,SET_EDIT_MESSAGE,DELETE_MESSAGE} from "../constants/action-types";
import _ from "lodash";
import store from "../store";

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const containsReply = store.getState().chatBoxContainReply[0];
      const arrayView = _.values(allUserMsgs);
      const editedTrue = arrayView.filter(item=>{
        return item.edited === true;
      });

      let number;
      var messageToWrite;
      if(editedTrue.length===0){
        number = +_.keys(allUserMsgs).pop() + 1;
        messageToWrite = message;
      }else{
        number = editedTrue[0].number;
        messageToWrite = message + " [edited]"
      }
      var userMessage = message.endsWith("-f") ? false:true;
         return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: messageToWrite.replace(" -f",""),
            is_user_msg: userMessage,
            edited:false,
            containReply:containsReply,
          }
        }
      };
      
    case SET_EDIT_MESSAGE:
    const {messageToEdit,editTextNo, user} = action.payload;
    const messages = state[user]
    return{
      ...state,
      [user]:{
        ...messages,
        [editTextNo]:{
          number:+editTextNo,
          text:messageToEdit,
          is_user_msg: true,
          edited: true,
          containReply:false,
        }
      }
    }

    case DELETE_MESSAGE:
    const {messageNumberDeleted,activeUser} = action.payload;
    const activeUserMessages = state[activeUser];
     return{
      ...state,
      [activeUser]:{
        ...activeUserMessages,
        [messageNumberDeleted]:{
          number:+messageNumberDeleted,
          text:"",
          is_user_msg: true,
          edited: false,
          containReply:false,
        }
      }
    }
    // case SET_REPLY:
    // let { nameOfReply,textOfReply, activeUserId} = action.payload;
    // let usermsgs = state[activeUserId];
    // let number = +_.keys(usermsgs).pop() + 1;
    // return {
    //     ...state,
    //     [usermsgs]: {
    //       ...usermsgs,
    //       [number]: {
    //         number,
    //         text: "",
    //         is_user_msg: userMessage,
    //         edited:false,
    //         containReply:true,
    //       }
    //     }
    //   };

    default:
      return state;
  }
};