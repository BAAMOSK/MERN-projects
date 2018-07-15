import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredients.css';

//Cannot follow standard css styling -- no hypens in JSX variables
//BEM use underscores

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case('bread_bottom'):
                ingredient = <div className={classes.bread_bottom}></div>;
                break;
            case('bread_top'):
                ingredient = (
                    <div className={classes.bread_top}>
                        <div className={classes.seeds_1}></div>  
                        <div className={classes.seeds_2}></div>  
                    </div>
                );
                break;
            case('patty'):
                ingredient = <div className={classes.patty}></div>
                break;
            case('lettuce'):
                ingredient = <div className={classes.lettuce}></div>
                break;
            case('cheese'):
                ingredient = <div className={classes.cheese}></div>
                break;
            case('bacon'):
                ingredient = <div className={classes.bacon}></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredients;

