//CLASS COMPONENT BECAUSE IT HOLDS STATE
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';
import './styles.css';

class Ui extends Component {
    state = {
        text: ""
    }

    onTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = () => {
        this.props.showTodo(this.state.text);
    }

    render() {
        return (
            <div>
                <input className="todo-input" type='text' onChange={this.onTextChange} value={this.state.text} />
                    <p>{this.props.text}</p>
                <ul className="ui-container">
                    <li className="ui-button" onClick={this.handleSubmit}><p>Add</p></li>
                    <li className="ui-button"><p>Update</p></li>
                    <li className="ui-button"><p>Done</p></li>
                    <li className="ui-button"><p>Delete</p></li>
                </ul>
            </div>    
        );
    }
}

const mapStateToProps = state => {
    return {
        text: state.text
    };
}

const mapDispatchToProps = dispatch => {
    console.log(dispatch);
    return {
        showTodo: (text) => dispatch({ type: add, text })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ui);
