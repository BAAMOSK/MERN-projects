import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = props => (
    <div className={classes.logo}>
        <img className={classes.logo__img} src={burgerLogo} alt="burger logo"/>
    </div>
);

export default logo;
