import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildController from '../../components/Burger/BuildController/BuildController';
import Aux from '../../hoc/Aux';

const PRICES = {
    lettuce: .5,   
    bacon: .8,   
    cheese: 1,   
    patty: 1.5   
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            patty: 0,
        },
        price: 1.99,
        invalidOrder: true
    }

    orderHandler = (ingredients) => {
        const total = Object.keys(ingredients)
            .map(key => {
                return ingredients[key];
            })
            .reduce((prev, current) => {
                return prev + current;
            }, 0);
        this.setState({ invalidOrder: total < 1 });
    }

    addHandler = ing => {
        //update ingredient amount
        const ingredientQuantity = this.state.ingredients[ing] + 1;
        const updatedIngredients = {...this.state.ingredients};
        //updated state -- new ingredient amount
        updatedIngredients[ing] = ingredientQuantity;
        //update burger price
        const updatedPrice = PRICES[ing] + this.state.price;
        //set new state
        this.setState({ ingredients: updatedIngredients, price: updatedPrice });
        
        this.orderHandler(updatedIngredients);
    }

    removeHandler = ing => {
        /*if(!this.state.ingredients[ing]) {
            return;
        }*/
        const ingredientQuantity = this.state.ingredients[ing] - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[ing] = ingredientQuantity;

        const updatedPrice = Number((this.state.price - PRICES[ing]).toFixed(2));
        this.setState({ ingredients: updatedIngredients, price: updatedPrice });

        this.orderHandler(updatedIngredients);
    }

    render() {
        const disableButton = {...this.state.ingredients};
        
        for(let key in disableButton) {
            disableButton[key] = disableButton[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildController 
                    addType={this.addHandler}
                    removeType={this.removeHandler}
                    disable={disableButton}
                    price={this.state.price}
                    validOrder={this.state.invalidOrder}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
