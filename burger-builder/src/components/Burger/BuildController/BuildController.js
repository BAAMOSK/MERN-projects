import React from 'react';
import classes from './BuildController.css';
import BuildControls from './BuildControls/BuildControls';
import Button from '../../ui/Button/Button';

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Beef', type: 'beef' }
];

/*const renderBuildControls = () => {
    console.log('DID THIS RUN?');
    controls.map(item => (
        <BuildControls key={item.label} label={item.label} type={item.type} />
    ));
};

const controller_buttons = renderBuildControls();*/

const buildController = props => (
    <div className={classes.build_controller}>
        <h3 className={classes.price}>PRICE: ${props.price}</h3>
        
        {controls.map(item => 
            <BuildControls 
                key={item.label}
                label={item.label}
                add={() => props.addType(item.type)}
                remove={() => props.removeType(item.type)}
                disabled={props.disable[item.type]}
            />
        )}
        
        <Button btnType="info" click={props.order} disable={!props.validOrder}>ORDER</Button>

    </div>
);

export default buildController;

//Burgerbuilder          --- BuildController ---------  BuildControls
//disable(disableButton) --> disabled(disable[type]) -> DISABLED = disabled
