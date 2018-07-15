import React, { Component } from 'react';
//import { Helmet } from 'react-helmet';
import Helmet from '../../common/helmet';
import Screen from '../../common/window';
import './Landing.css';

class Landing extends Component {
    render() {
        return(
            <div className="landing-container">
                <Helmet title="GOTCHA" />
                <h1 className="landing-message">WELCOME</h1>
                <Screen />
            </div>
        );
    }
}

export default Landing;
