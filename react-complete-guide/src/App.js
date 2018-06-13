import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
    state = {
        persons: [
            { name: 'Tee', age: 55 },
            { name: 'Crystal', age: 33 },
            { name: 'Ling Ling', age: 22 },
        ],
        showPersons: false
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Tee', age: 55 },
                { name: 'Crystal', age: 33 },
                { name: event.target.value, age: 22 },
            ]
        })
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 38 },
                { name: 'Qi Wen', age: 40 },
                { name: 'Oscar', age: 14 },
            ]
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })
    }

    deletePersonHandler = (index) => {
        const personsCopy = [...this.state.persons];
        personsCopy.splice(index, 1);
        this.setState({ persons: personsCopy });
    }

    changeNameHandler = (event, index) => {
        //Select correct component to be changed
        //click on [0,1,2]
        const selectedPerson = { ...this.state.persons[index] };
        
        //persons[0].name gets changed by input
        selectedPerson.name = event.target.value;
        
        const copy = [...this.state.persons];
        
        //overwrite previous name
        copy[index] = selectedPerson;

        //set the copy as new state
        this.setState({ persons: copy })
    }

  render() {
    const styles = {
        backgroundColor: 'green',
        font: 'inherit',
        borderRadius: '10px',
        borders:  '3px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': { backgroundColor: 'lightgreen', color: 'white' },
        '@media (min-width: 500px)': {
            'backgroundColor': '#ddd'
        }
    }

    let persons = null;

    if ( this.state.showPersons ) {
        persons = (
            <div>
                { 
                    this.state.persons.map((data, index) => {
                        return <Person
                            clickas={ () => this.deletePersonHandler(index) }
                            key={index}
                            name={data.name}
                            age={data.age} 
                            changeItUp={ (event) => this.changeNameHandler(event, index) } />   
                    })
                }
            </div>
        );

        styles.backgroundColor = 'red';
        styles[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        };
    }

        let cssStyles = [];

        if( this.state.persons.length <= 2 ) {
            cssStyles.push('red');
        }
        if( this.state.persons.length <= 1) {
            cssStyles.push('bold');
        }
  
    return (
            <div className="App">
                <h1 className={cssStyles.join(' ')}>Tee Mak</h1>

                <button style={styles} onClick={ this.togglePersonsHandler }>Show Name</button>
                {persons}

            </div>
    );

  }
}

export default Radium(App);




