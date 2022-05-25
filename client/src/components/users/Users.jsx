import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthProvider.js';
import { getAllUsers,connectUser } from '../../services/server.js';
import "./users.css"

function Users(props) {

    const [users, setUsers] = useState([]);
    const auth = useAuth();
    useEffect(()=>{
        const getUsers = async()=>{
            try{
            const response = await getAllUsers(auth.token);
                setUsers(response.data);
            }catch(err){
                console.log(err)
            }
        }
        getUsers();
    },[])
    const createConversation = async(user)=>{
        const contact = await connectUser(user.id, auth.user.id,auth.token);
    }
    return (
        <div>
            <h4>Add user</h4>
            {users&&users.map((user,index)=>(
                <div key ={index} className='users-div'>
                    <span  onClick={()=>{createConversation(user)}}>{user.firstName} {user.lastName}</span>
                </div>
            ))}
        </div>
    );
}

export default Users;