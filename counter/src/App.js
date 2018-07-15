import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Button from './components/Button';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <div className="button-container">
                    <Button activate={this.props.increment}>Increment</Button>
                    <Button activate={this.props.decrement}>Decrement</Button>
                    <Button activate={this.props.addValue}>Add 5</Button>
                    <Button activate={this.props.subValue}>Subtract 5</Button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        addValue: () => dispatch({ type: 'ADD_VALUE', value: 5 }),
        subValue: () => dispatch({ type: 'SUB_VALUE', value: 5 })
    };
}

export default connect(null, mapDispatchToProps)(App);
