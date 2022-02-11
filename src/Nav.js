import React from "react";
import Me from './assets/images/me.png';
import './assets/stylesheets/nav.scss';

const Nav = () => {
        return (
            <header className="navbar navbar-expand-md navbar-floating navbar-sticky navbar-dark" data-fixed-element="">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img className=" navbar-floating-logo d-none d-lg-block" src={Me} alt="Around" width="100" />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="social" href="https://dribbble.com/EmilyStanek" target="_blank" rel="noopener noreferrer">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="social " href="mailto:stanekemily@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
}

export default Nav