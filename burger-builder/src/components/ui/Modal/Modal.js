import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import classes from './Modal.css';

const modal = props => {
    const showModal = props.show ? classes.modal : classes.hidden;
    
    return (
        <Aux>
            <Backdrop show={props.show} click={props.click}/>
            <div className={showModal}>
                {props.children}
            </div>
        </Aux>
    );
}

export default modal;
