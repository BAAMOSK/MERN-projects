import React from 'react';
import Button from '../../../ui/Button/Button';
import classes from './BuildControls.css';

const buildControls = props => (
    <div className={classes.build__controls}>
        <div className={classes.build__label}>{props.label}</div>
        
        <Button btnType="success" click={props.add}>ADD</Button>    
        <Button btnType="danger" click={props.remove} disable={props.disabled}>REMOVE</Button>    

    </div>
);

export default buildControls;
