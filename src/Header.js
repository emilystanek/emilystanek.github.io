import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin, faDribbble, faGithub
} from "@fortawesome/free-brands-svg-icons";
import './assets/stylesheets/header.scss';
import Me from './assets/images/me.png';

class Header extends Component {
  render() {
    return (
      <div className="bg-photo">
        <section className="d-flex position-relative bg-size-cover bg-position-center min-vh-100 overflow-hidden pb-lg-5">
          <div className="container pb-5 py-lg-5 mt-5">
            <div className="row align-items-center py-3 mt-10">
              <div className="col-xl-2">
              <a href="index.html">
                        <img className="navbar-floating-logo d-none d-lg-block" src={Me} alt="Around" width="140" />
                    </a>
              </div>
              <div className="col-xl-10 d-flex justify-content-end">
                <div className="mx-auto mb-5 mb-lg-0 ms-lg-0 me-xl-7 text-center text-lg-start">
                  <h1 className="pb-2">Hi <span>👋 </span> I'm Emily!</h1>
                  <p>I'm a full stack developer with a specialization in UX/UI.</p>
                  <div className="social-links">
                    <a href="https://www.dribbble.com/EmilyStanek"
                      className="dribbble social">
                      <FontAwesomeIcon icon={faDribbble} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/emilymstanek/"
                      className="dribbble social">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/emilystanek/"
                      className="dribbble social">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Header