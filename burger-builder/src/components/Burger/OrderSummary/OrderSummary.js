import React from 'react';
import Button from '../../ui/Button/Button';
import classes from './OrderSummary.css';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(name => {
            return <li className={classes.order_summary__li} key={name}>
                <span className={classes.order_summary__item}>{name}</span>
                : {props.ingredients[name]}
            </li>; 
        });

    return (
        <div className={classes.order_summary_container}>
            <h3 className={classes.order_summary__title}>ORDER</h3>
            <p>Your burger will be made with these ingredients:</p>
            
            <ul className={classes.order_summary__ul}>
                {ingredientSummary}
            </ul>
            
            <p className={classes.order_summary__confirmation}>Continue to Checkout?</p>
            <p className={classes.order_summary__confirmation}>PRICE: ${props.price}</p>
            
            <div className={classes.order_summary__button_container}>
                <Button btnType="success" click={props.confirm}>CONTINUE</Button>
                <Button btnType="danger" click={props.cancel}>BACK</Button>
            </div>

        </div>            
    );
}

export default orderSummary;
