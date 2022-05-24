import React, { useState } from 'react';
import Message from './Message';
import { Button } from "react-bootstrap";
import './messages.css';
import { useAuth } from '../../context/AuthProvider';

function Messages(props) {

    //const [user, setUser] = useState("own");
    const [message, setMessage] = useState('');
    const auth = useAuth();

    const handleSubmit = async()=>{
        const response = await postMessage(message,auth.token);
        console.log(response);
    }

    return (
        <>
            <h4>Messages</h4>
            <Message own={auth.user}/>
            <Message/>
            <Message/>
            <Message/>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <Button onClick={handleSubmit}>Send</Button>
        </>
    );
}

export default Messages;