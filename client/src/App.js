import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  getData() {
    fetch('http://localhost:5001/')
      .then(data => data.json())
      .then(res => this.setState({ data: res.title }))
      .then(() => console.table(this.state));
  }

  componentDidMount = () => {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          { this.state.data }
        </p>
        <button onClick={this.getData.bind(this)}>Get Data</button>
      </div>
    );
  }
}

export default App;
