import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Ana', age: 20 },
      { name: 'Yudy', age: 22 }
    ],
    otherState: 'some state value'
  };

  switchNameHandler = newName => {
    // console.log('It was clicked!');
    // DONT'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Ana', age: 20 },
        { name: 'Yudy', age: 23 }
      ],
      otherState: 'some other value'
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Maximiliam', age: 15 },
        { name: event.target.value, age: 25 },
        { name: 'Yudy', age: 30 }
      ],
      otherState: 'some other value'
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hello</h1>
        <button onClick={() => this.switchNameHandler('Maximiliam!!')}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
