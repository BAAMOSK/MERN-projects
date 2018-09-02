import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationList.css';

const navigationList = () => (
    <ul className={classes.navigation_list}>
        <NavigationItem link={'/'} active>HOME</NavigationItem>
        <NavigationItem link={'/menu'}>MENU</NavigationItem>
        <NavigationItem link={'/order'}>ORDER</NavigationItem>
    </ul>
);

export default navigationList;

