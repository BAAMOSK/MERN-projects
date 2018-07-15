import React from 'react';
import './common.css';

const screen = () => {
    const smartUrl = "http://www.carlogos.org/logo/Smart-logo-1994-1366x768.png";
    const img = <img id="smart-logo" src={smartUrl}/>;
    return (
    <div className="screen-container">
        <p>
            I'm the smartest person you know.
            I use a smartphone. I drink smartwater&trade;. I live in
            a smart house. I drive a smart car. Just kidding. I drive
            a different car. 
        </p>
        <p>
            This website was made using the MERN stack. It's scalable,
            responsive, and awesome. Content is updated via an HTTP request
            to the database. The website looks best on a desktop display but
            can also be viewed on mobile. Continous integration keeps everything
            running smooth.            
        </p>
    </div>
    );
}

export default screen;
