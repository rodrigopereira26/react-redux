import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      desc: '',
      age: ''
    };
  }

  handleInput = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target['type'] === 'checkbox' ? target.checked : target.value;

    return this.state({
      [name] : value
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
