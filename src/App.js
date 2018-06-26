import React, { Component } from "react";
import "./App.css";
import "./reset.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="logo-button">Start Bootstrap</div>
          <nav className="nav">
            <div className="nav-links">SERVICES</div>
            <div className="nav-links">PORTFOLIO</div>
            <div className="nav-links">ABOUT</div>
            <div className="nav-links">TEAM</div>
            <div className="nav-links">CONTACT</div>
          </nav>
          {/* <div className="ham">Menu&#9776;</div> */}
          <button className="menu">MENU &#9776;</button>
        </header>
        <div className="content">
          <div className="h2">Welcome To Our Studio!</div>
          <div className="h1">IT'S NICE TO MEET YOU</div>
          <button className="more">TELL ME MORE</button>
        </div>
      </div>
    );
  }
}

export default App;
