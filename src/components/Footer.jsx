import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
      
        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a target="_blank" rel="noreferrer" href="https://github.com/kuntalkumar">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a target="_blank" rel="noreferrer" href="www.linkedin.com/in/kuntal-kumar-621205236/">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/kuntalkumar">
            Designed and built by Kuntal Kumar{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
          <a href="kuntalkumar789@gmail.com" id="contact-email">kuntalkumar789@gmail.com<hr /></a>
      </div>
    </footer>
  );
}
