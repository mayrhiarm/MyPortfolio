/** @format */

import React from "react";
import "./About.css";
import img from "../../assets/standing.jpeg";
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
              <small>1+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>30+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projects Completed</small>
            </article>
          </div>

          <p>
            My name is Mariam Sanni, a passionate fullstack web developer. I
            have basic knowledge and understanding of the fundamentals of
            various programming languages (HTML, CSS, JavaScript, React
            framework, Python, Django) which can be used to achiev beautiful and
            functional webpages/websites. I am also a graduate of Psychology
            from the university of Lagos, Nigeria. A well organized,
            enthusiastic individual, skilled at keeping good interpersonal
            relationship with people as well as ability to work effectively with
            little or no supervision.
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
