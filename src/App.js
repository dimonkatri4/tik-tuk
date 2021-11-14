import logo from './logo.svg';
import './App.css';
import {requestTrendingFeed} from "./redux/trending-reducer";
import React from "react";
import {connect} from "react-redux";
import {requestUsersInfo} from "./redux/users-reducer";

function App({requestUsersInfo}) {

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
        <button onClick={requestUsersInfo}>Click</button>
      </header>
    </div>
  );
}

export default connect(null, {requestUsersInfo})(App);
