import React, { Component } from "react"
import Header from "./Header";
import Portfolio from "./Portfolio";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-photo">
          <section className="d-flex position-relative bg-size-cover bg-position-center min-vh-100 overflow-hidden pb-lg-5">
            <div className="container">
              <Nav/>
              <Header />
              <Portfolio />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App
