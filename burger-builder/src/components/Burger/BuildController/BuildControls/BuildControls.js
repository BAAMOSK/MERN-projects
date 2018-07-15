import React from 'react';
import classes from './BuildControls.css';

const buildControls = props => (
    <div className={classes.build__controls}>
        <div className={classes.build__label}>{props.label}</div>
        <button className={classes.build__add_button} onClick={props.add}>ADD</button>
        
        <button 
            className={classes.build__remove_button}
            onClick={props.remove}
            disabled={props.disabled}
        >
            REMOVE
        </button>
    </div>
);

export default buildControls;
