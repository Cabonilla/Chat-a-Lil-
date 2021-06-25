import React from 'react';
import './Message.css';

const Message = ({message: { user, text }, name}) => {
	let isSentByCurrentUser = false;

	const trimmedName = name.trim().toLowerCase();

	if(user === trimmedName) {
		isSentByCurrentUser = true;
	}

	return (
		isSentByCurrentUser ? (
			<div className="messageContainer justifyEnd" id="one">
				<div className="messageBox backgroundBlue">
					<p className="messageText colorWhite">{text}</p>
				</div>
				<p className="sentText pr-10 pl-10">{trimmedName}</p>
			</div>
		)
		: (
			<div className="messageContainer justifyStart" id="two">
				<p className="sentText pl-10 pr-10">{user}</p>
				<div className="messageBox backgroundLight">
					<p className="messageText colorDark">{text}</p>
				</div>
			</div>
		)
	)
}

export default Message
