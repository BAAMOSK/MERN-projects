import React from 'react'
import classes from './NavigationItem.css';

const navigationItem = props => {
    return (
        <li className={classes.navigation_item}>
            <a 
                className={classes.navigation_item__a}
                href={props.link}
            >
                <p className={props.active ? classes.navigation_item__p : null}>{props.children}</p>
            </a>
        </li>
    );
}

export default navigationItem;
