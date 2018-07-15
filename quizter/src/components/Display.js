import React, { Component } from 'react';
import Question from './question';
import Questions from './questions';

class Display extends Component {
    render() {
        return (
                    <div>
                        <Question />
                        <Questions />
                    </div>
                );
    }
}

export default Display;
