import React from "react";
import "./FunctionButtons.css";
import store from "../store";
import {setReply} from "../actions";

const handleReply = (event)=>{
	let {activeUserID,chatBoxContainReply} = store.getState();
	let name = chatBoxContainReply[2];
	let text = chatBoxContainReply[1];
	store.dispatch(setReply(name,text,activeUserID));
}

const FunctionButtons = ()=>{
	// let {chatBoxContainReply,activeUserID} = store.getState();;
	return(
	<div 
	className = {`FunctionButtons ${store.getState().showoption ? "show" : ""}`}
	>
	<button onClick = {handleReply} className = "F_button reply"><i className="fas fa-reply"></i></button>
	<button className = "F_button delete"><i className="fas fa-trash"></i></button>
	<button className = "F_button favourite"><i className="fas fa-star"></i></button>
	</div>
	);
}

export default FunctionButtons;