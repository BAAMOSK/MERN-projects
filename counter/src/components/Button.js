import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.activate} className="button">{props.children}</button>
        </div>
    );
}

export default Button;
