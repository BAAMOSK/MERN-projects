import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../../actions/authActions';
import './Login.css';

class Login extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        errors: {}
    }

    componentWillReceiveProps = nextProps => {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    } 

    nameHandler = event => {
        const email = event.target.value;
        this.setState({ email });
    }

    passHandler = event => {
        const password = event.target.value;
        this.setState({ password });
    }

    submitForm = event => {
        event.preventDefault();
        //Pass name, email, password
        //this.props.registerUser(this.state, this.props.history);
        
        this.props.loginUser(this.state);
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="login-container">
                <h1>LOGIN</h1>                
                <p>ADMIN ONLY ACCESS</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <form onSubmit={this.submitForm}>
                    <div className="field-container">
                        <label>Name</label>
                        <input type="text" onChange={this.nameHandler}></input>
                    </div>
                    <div className="field-container">
                        <label>Password</label>
                        <input type="password" onChange={this.passHandler}></input>
                    </div>
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
};

//Actions are properties
//prevents casting errors -- loginUser will not be set as array -- set only as an action/function
//THIS COMPONENT MUST HAVE THE AUTH STATE
//USED TO HELP OTHER DEVELOPERS FOLLOW ARCHITECTURE
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = ({auth, errors}) => ({
    auth, errors
});

export default connect(mapStateToProps, { registerUser, loginUser })(withRouter(Login));
