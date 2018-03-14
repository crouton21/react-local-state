import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Name',
        city: 'City',
      }
    };

    this.handleName = this.handleName.bind(this);
    this.handleCity = this.handleCity.bind(this);

  }

  handleName(event) {
    this.setState({ user: {name:event.target.value} });
  }

  handleCity(event) {
    this.setState({ user: {city:event.target.value} });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.handleName} />
        <input onChange={this.handleCity} />
        <p>{this.state.user.name} is from {this.state.user.city}</p>
      </div>
    );
  }
}

export default App;
