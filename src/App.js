import React, { Component } from "react"
import "./App.css"
import Header from "./Header";
import Nav from "./Nav";
import Portfolio from "./Portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header />
        <Portfolio />
      </div>
    )
  }
}

export default App
