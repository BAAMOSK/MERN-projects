import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        counter: 0
    }
    
    render() {
        return (
            <div className="header">Current Counter: {this.props.counter}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
}

export default connect(mapStateToProps)(Header);
