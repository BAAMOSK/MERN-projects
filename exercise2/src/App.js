import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {
  
    state = {
        userInput: ''    
    }

    getLength = (event) => {
        this.setState({
            userInput: event.target.value            
        })        
    }

    removeBlock = (index) => {
        //convert string to array
        const copy = this.state.userInput.split('');
        //remove selected index
        copy.splice(index, 1);
        //convert array to string 
        const updatedCopy = copy.join('');
        //set updatedCopy as new state
        this.setState({
            userInput: updatedCopy
        });
    }

  render() {
      //QUESTION - Why does the removeBlock function have to be anonymous???
    const letters = this.state.userInput.split('').map((letter, index) => {
        return <Char character={letter} key={index} likeylikey={() => this.removeBlock(index)} />
    });

    return (
      <div className="App">
            <input 
                type="text"
                onChange={ this.getLength }
                value={ this.state.userInput } />
            <p>{this.state.userInput.length}</p>
            <Validation inputLength={this.state.userInput.length} />
            {letters}
      </div>
    );
  }

}

export default App;
