import React from "react";
import Me from './assets/images/me.png';
import './assets/stylesheets/nav.scss';

const Nav = () => {
        return (
            <header className="navbar navbar-expand-md navbar-floating navbar-sticky navbar-dark" data-fixed-element="">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img className="navbar-floating-logo d-lg-block" src={Me} alt="Around" width="100" />
                    </a>
                </div>
            </header>
        )
}

export default Nav