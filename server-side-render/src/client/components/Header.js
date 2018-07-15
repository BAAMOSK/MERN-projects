import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//USE LINK FOR NAVIGATION INSIDE REACT
//A TAGS FOR WHOLE BROWSER ACCESS

const Header = ({auth}) => {
    const authButton = auth ? (<a href="/api/logout">LOGOUT</a>) : (<a href="/api/auth/google">LOGIN</a>); 
    return (
        <div className="header-container">
            <Link to="/">REACT SSR</Link>
            <ul className="button-container">
                <li className="button"><Link to="/users">USERS</Link></li>
                <li className="button"><Link to="/users">USERS</Link></li>
                <li className="button"><Link to="/admins">ADMINS</Link></li>
                <li className="button">{authButton}</li>
            </ul>
        </div>
    );
};

function mapStateToProps({auth}) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Header);
