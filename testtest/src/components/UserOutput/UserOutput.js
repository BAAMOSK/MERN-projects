import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
                <div className="out">
                    <h3>{props.userName}</h3>
                    <p>Sup yo!</p>
                </div>
            );
}

export default UserOutput;
