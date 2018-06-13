import React from 'react';

const Validation = (props) => {
    let validationMessage = <h3>Text too short</h3>;

    if(props.inputLength > 5) {
        validationMessage = <h1>Text long enough</h1>;
    }

    return (
                <div>
                    {validationMessage}
                </div>
            )
}

export default Validation;
