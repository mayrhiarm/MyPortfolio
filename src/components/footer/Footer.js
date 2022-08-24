/** @format */

import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mariam
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/mariam.sanni2">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/mayrhiarm_sawnee/">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/mayrhiarm?t=_mtn2YL9EV6_B_dhWGeing&s=08">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>Mariam 2022. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
