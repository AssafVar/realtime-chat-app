import React, { useState } from 'react';
import Message from './Message';
import './messages.css';

function Messages(props) {

    const [user, setUser] = useState("own");


    return (
        <div>
            <h4>Messages</h4>
            <Message own={user}/>
            <Message/>
            <Message/>
            <Message/>

        </div>
    );
}

export default Messages;