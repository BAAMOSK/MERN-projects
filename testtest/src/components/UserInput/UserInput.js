import React from 'react'

const userInput = (props) => {
    return <input 
                type="text"
                onChange={props.chaka}
                placeholder={props.currentName} />;
}

export default userInput;
