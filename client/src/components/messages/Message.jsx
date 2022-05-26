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
        <div className={`messages d-flex ${isUser}`}>
            <img src="" alt="user photo"/>
            <div className={`message ${isUser}`}>
            <span  >{m.text}</span>
           
            </div>
        </div>
        <span>{format(m.createdAt)}</span>
        </>
    );
}

export default Message;