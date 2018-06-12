import React, { Component } from 'react'

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
    constructor () {
        super()

        this.state = {
            messages: [
                {
                    id: 1,
                    userName: 'shmi',
                    body: 'Coolio!'
                },
                {
                    id: 2,
                    userName: 'kiki',
                    body: 'Wow. So cool!'
                }
            ]
        }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            userName: this.props.user.userName,
            body
        })

        this.setState({ messages })
    }

    render () {
        return (
            <div className = "Chat">
                <ChatHeader />
                <MessageList messages = {this.state.messages} />
                <MessageForm addMessage = {this.addMessage} />
            </div>
        )
    }
}

export default Chat