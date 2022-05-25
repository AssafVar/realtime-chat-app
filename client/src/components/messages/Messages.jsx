import React, { useRef, useState } from 'react';
import Message from './Message';
import './messages.css';
import { useAuth } from '../../context/AuthProvider';
import { useEffect } from 'react';

function Messages({chatMessages}) {

    const [user, setUser] = useState(null);
    const auth = useAuth();
    const scrollRef = useRef();

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"});
    },[chatMessages])

    return (
        <>
            <h4>Messages</h4>
            <div  className='messages-div'>
            {chatMessages&&chatMessages.map((m)=>(
                <div ref={scrollRef}>
                <Message own={auth.user} m={m}/>
                </div>
            ))}
            </div>

        </>
    );
}

export default Messages;