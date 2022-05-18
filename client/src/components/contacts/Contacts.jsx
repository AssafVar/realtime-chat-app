import React from 'react';
import "./contacts.css";
import Contact from './Contact';


function Contacts(props) {

    return (
        <div className='contacts'>
            <h4>Contacts</h4>
            <Contact />
            <Contact/>
            <Contact/>
            <Contact/>
        </div>
    );
}

export default Contacts;