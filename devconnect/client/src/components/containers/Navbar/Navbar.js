import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../actions/authActions';
import './Navbar.css';

class Navbar extends Component {

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const login = "";
        const logout = (
          //<li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/" onClick={this.props.logoutUser}>Logout</Link></li>            
        );

        return (
            <div className="navbar-container">
                <Link to="/">TEE MAK</Link>
                
                <div className="links-container">                    
                    <ul>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/social">Social</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {isAuthenticated ? logout : login}                    
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
