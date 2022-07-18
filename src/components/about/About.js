/** @format */

import React from "react";
import "./About.css";
import img from "../../assets/pexels-cottonbro-4904563.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+Years Working Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projects Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            omnis voluptas corporis autem quidem hic, ipsa eveniet, quod
            excepturi vel voluptatem quo soluta totam assumenda rem eum aperiam
            doloremque ullam.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;