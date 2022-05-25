import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthProvider.js';
import { getUserById } from '../../services/server.js';

function Contact({conversation,currentUser}) {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const auth = useAuth();
    useEffect(()=>{
        const friendId = conversation.members.find((member)=>
            member!==currentUser.id
        );
        const getUser = async()=>{
            try{
            const response = await getUserById(friendId,auth.token);
            setUser(`${response.data[0].firstName} ${response.data[0].lastName}`)
            }catch(err){
                setError("could not get the data")
            }
        }
        getUser()
    },[])

    return (
        <div className="contact">
        <img src="https://mdbootstrap.com/img/new/slides/041.webp" alt=""/>
        <span>{user}</span>
    </div>
    );
}

export default Contact;