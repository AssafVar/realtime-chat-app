import React from 'react';
import { useState } from 'react';
import Login from '../components/forms/Login';
import Signup from '../components/forms/Signup';
import "./register.css"
function Register(props) {

    const [isRegister,setIsRegister] = useState(false);

    return (
        <div className='register'>
            <h4>Welcome to real-time-app</h4>
            {isRegister?
            <div>
                <span>Login or </span>
                <span className='register-toggle' onClick={()=>setIsRegister(!isRegister)}>click to signup</span>
            </div>:
            <div>
                <span>Signup or </span>
                <span className='register-toggle' onClick={()=>setIsRegister(!isRegister)}>click to login</span>
            </div>}
        {isRegister&&<Login/>}
        {!isRegister&&<Signup/>}
        </div>
    );
}

export default Register;