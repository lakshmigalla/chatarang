import React from 'react'
import Avatar from './Avatar';
import Metadata from './Metadata';

const Message = (props) => {
    return (
        <div className = "Message" style = {styles.message}>
            <Avatar />
            <Metadata message = {props.message}/>
            <div className = "body" style = {styles.message.details}>{props.message.body}</div>
        </div>
    )
}

const styles = {
    message: {
        display: "flex",
        marginTop: "1rem",
        padding: "0 1rem",

        details: {
            flex: "1",
            paddingLeft: "0.5rem"
        }
    }
}

export default Message