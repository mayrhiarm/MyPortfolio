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
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook">
          <FaFacebookF />
        </a>
        <a href="https://Instagram.com">
          <BsInstagram />
        </a>
        <a href="https://Twitter.com">
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
