import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component{
  render(){
    return (
      <div id="root">

          <h1 >Welcome Home</h1>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
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
  )
  }
}

export default Home;
