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
            setUser(response.data[0])
            }catch(err){
                setError("could not get the data")
            }
        }
        getUser()
    },[])
    return (
        <div className="contact">
        <img src={user?.imageUrl} alt=""/>
        <span>{user?.firstName}</span>
    </div>
    );
}

export default Contact;