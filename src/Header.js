import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin, faDribbble, faGithub
} from "@fortawesome/free-brands-svg-icons";
import './assets/stylesheets/header.scss';
import { faAddressCard, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Header =() => {
    return (

      <div className="row align-items-center py-3 mt-5">
        <div className="col-xl-10 d-flex justify-content-end mt-5">
          <div className="mx-auto mb-5 mb-lg-0 ms-lg-0 me-xl-7 text-center text-lg-start">
            <h1 className="pb-2">Hi <span role="img" aria-label="waving emoji">👋 </span> I'm Emily!</h1>
            <p>I'm a frontend developer with a design-savvy eye. I have a passion for ReactJS and building beautiful frontends.</p>
            <div className="social-links">
              <a href="https://www.dribbble.com/EmilyStanek" target="_blank" rel="noopener noreferrer"
                className="social">
                <FontAwesomeIcon icon={faDribbble} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/emilys2023/" target="_blank" rel="noopener noreferrer"
                className="social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/emilystanek/" target="_blank" rel="noopener noreferrer"
                className="social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="mailto:stanekemily@gmail.com" target="_blank" rel="noopener noreferrer"
                className="social">
                <FontAwesomeIcon icon={faPaperPlane} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header