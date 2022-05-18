import React from 'react';

function Message({own}) {

    return (
        <div className={`message d-flex ${own}`}>
            <img src="https://mdbootstrap.com/img/new/slides/041.webp" alt="user photo"/>
            <span>Some text about something Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nostrum. At, mollitia ea corporis harum maxime laudantium totam molestias cum minus, eaque, incidunt suscipit nulla dolores tempore aut? Asperiores, sequi?</span>
        </div>
    );
}

export default Message;