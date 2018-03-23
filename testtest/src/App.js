import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
    state = {
        family: [
            { name: 'Tee'},
            { name: 'Crystal'},
            { name: 'Oscar'}
        ]
    };

    nameChangeHandler = (event) => {
        this.setState({
            family: [
                { name: event.target.value },
                { name: 'Crystal' },
                { name: 'Oscar' }
            ]
        });
    }

  render() {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
      <div className="App" >
        <UserInput 
            chaka={this.nameChangeHandler}
            currentName={this.state.family[0].name} />
            
            <div style={styles} >
                <UserOutput userName={this.state.family[0].name} />
                <UserOutput userName={this.state.family[1].name} />
                <UserOutput userName={this.state.family[2].name} />
            </div>
      </div>
    );
  }
}

export default App;
