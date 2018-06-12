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
    render () {
        return (
            <div className = "Chat">
                <ChatHeader />
                <MessageList messages = {this.state.messages}/>
                <MessageForm />
            </div>
        )
    }
}

export default Chat