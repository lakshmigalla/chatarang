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
        // backgroundColor: "white",
        backgroundImage: `url('https://images.unsplash.com/photo-1519229560282-5c6d4a11e474?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb6548e69b2812cd4008d56825cd94c9&auto=format&fit=crop&w=1649&q=80')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flex: "1",
        paddingBottom: "1rem",
        overFlowY: "scroll",
        roomAnnouncment: {
            padding: "2rem 1rem",
            color: "white",
            h3: {
                fontSize: "1.5rem",

            }
        }
    }
}

export default MessageList
