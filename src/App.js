import React from "react"
import Header from "./Header";
import Nav from "./Nav";

const App = () => {

    return (
      <div className="App">
        <div className="bg-photo">
          <section className="d-flex position-relative bg-size-cover bg-position-center min-vh-100 overflow-hidden pb-lg-5">
            <div className="container">
              <Nav/>
              <Header />
            </div>
          </section>
        </div>
      </div>
    )
}

export default App
