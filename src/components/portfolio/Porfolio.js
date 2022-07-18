/** @format */

import React from "react";
import "./Porfolio.css";
import img1 from "../../assets/pexels-cottonbro-4904563.jpg";

const Porfolio = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: "What you built",
      github: "https://github.com/mariam",
      demo: "https://netlify",
    },
    {
      id: 2,
      image: img1,
      title: "What you built",
      github: "https://github.com/mariam",
      demo: "https://netlify",
    },
    {
      id: 3,
      image: img1,
      title: "What you built",
      github: "https://github.com/mariam",
      demo: "https://netlify",
    },
    {
      id: 4,
      image: img1,
      title: "What you built",
      github: "https://github.com/mariam",
      demo: "https://netlify",
    },
    {
      id: 5,
      image: img1,
      title: "What you built",
      github: "https://github.com/mariam",
      demo: "https://netlify",
    },
    {
      id: 6,
      image: img1,
      title: "What you built",
      github: "https://github.com/mariam",
      demo: "https://netlify",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>This Is a Portfolio Item Title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Porfolio;
