import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin, faDribbble, faGithub
} from "@fortawesome/free-brands-svg-icons";
import './assets/stylesheets/header.scss';

class Header extends Component {
  render() {
    return (

      <div className="row align-items-center py-3 mt-5">
        <div className="col-xl-10 d-flex justify-content-end mt-5">
          <div className="mx-auto mb-5 mb-lg-0 ms-lg-0 me-xl-7 text-center text-lg-start">
            <h1 className="pb-2">Hi <span>👋 </span> I'm Emily!</h1>
            <p>I'm a full stack developer with a specialization in UX/UI.</p>
            <div className="social-links">
              <a href="https://www.dribbble.com/EmilyStanek" target="_blank" rel="noopener noreferrer"
                className="dribbble social">
                <FontAwesomeIcon icon={faDribbble} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/emilymstanek/" target="_blank" rel="noopener noreferrer"
                className="dribbble social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/emilystanek/" target="_blank" rel="noopener noreferrer"
                className="dribbble social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header