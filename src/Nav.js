import React, { Component } from "react";
import Me from './assets/images/me.png';

class Nav extends Component {
    render() {
        return (
            <header className="navbar bg-dark navbar-expand-md navbar-floating navbar-sticky navbar-dark" data-fixed-element="">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img className="navbar-floating-logo d-none d-lg-block" src={Me} alt="Around" width="100" />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Nav