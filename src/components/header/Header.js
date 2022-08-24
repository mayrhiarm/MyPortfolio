/** @format */

import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/laughter.jpeg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mariam Sanni</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div>
          <img className="me" src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
