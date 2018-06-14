import React from 'react'
import Message from './Message';

const MessageList = ({messages, room}) => {
    return (
        <div className="MessageList" style = {styles.messageList}>
            <div className = "roomAnnouncement" style = {styles.messageList.roomAnnouncment}>
                <h3 style = {styles.messageList.roomAnnouncment.h3}>
                    #{room.name}
                </h3>
                <p>This is the very beginning of the #{room.name} room.</p>
            </div>
            {
                messages.map(msg =>
                    <Message key={msg.id} message={msg} />
                )
            }
        </div>
    )
}

const styles = {
    messageList: {
        backgroundColor: "white",
        flex: "1",
        paddingBottom: "1rem",
        overFlowY: "scroll",
        roomAnnouncment: {
            padding: "2rem 1rem",
            h3: {
                fontSize: "1.5rem",
            }
        }
    }
}

export default MessageList
