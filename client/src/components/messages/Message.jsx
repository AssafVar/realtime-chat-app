import React, { useEffect } from 'react';
import { useState } from 'react';
import {format} from "timeago.js"
import './messages.css';

function Message({own, m}) {
    const [isUser, setIsUser] = useState(null);

    useEffect(()=>{
        if (own.id===m.sender){
            setIsUser("own");
        }
    },[])

    return (
        <>
        <div className={`message d-flex ${isUser}`}>
            <img src="https://mdbootstrap.com/img/new/slides/041.webp" alt="user photo"/>
            <span>{m.text}</span>
            <div>
            </div>
        </div>
        <span>{format(m.createdAt)}</span>
        </>
    );
}

export default Message;