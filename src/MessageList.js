import React from 'react'
import Message from './Message';

const MessageList = () => {
    const messages = [
        {
            id: 1,
            userName: 'dstrus',
            body: 'Chatting up a storm, yo!'
        },
        {
            id: 2,
            userName: 'dpalazzo',
            body: 'Wow. So cool!'
        }
    ]

    return (
        <div className="MessageList">
            {
                messages.map(msg => (
                    <Message key={msg.id} message={msg} />
                ))
            }
        </div>
    )
}

export default MessageList
