import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import classes from './Toolbar.css';

const toolbar = props => (
    <header className={classes.toolbar_container}>
        <div>MENU</div>
        <Logo />
        <nav className={classes.toolbar__nav}>
            <NavigationList />
        </nav>
    </header>
);

export default toolbar;
