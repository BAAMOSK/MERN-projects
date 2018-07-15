import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

//EXTRACT AMOUNT OF KEYS FROM VALUES
const burger = ({ ingredients }) => {
    //RECIEVES KEYS FROM THE PARENT COMPONENT
    let transformedIngredients = Object.keys(ingredients)
        .map(parentKey => {
            //ARRAY CONSTRUCTOR WITH LENGTH BASED ON VALUES
            return [...Array(ingredients[parentKey])]
                .map((_, index) => {
                    return <BurgerIngredients key={parentKey + index} type={parentKey} />;
                });
        })
        .reduce((previousValue, currentValue, currentIndex) => {
            return previousValue.concat(currentValue);
        }, []);
    
    if(!transformedIngredients.length) {
        transformedIngredients = <p>Build your burger!</p>;
    }
        
    //transformedIngredients
    //create an array length based on values
    //each index set the key as type
    return (
        <div className={classes.burger}>
            <BurgerIngredients type="bread_top" />
                {transformedIngredients}
            <BurgerIngredients type="bread_bottom" />
        </div>
    );
}

export default burger;
