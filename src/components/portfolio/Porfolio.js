/** @format */

import React from "react";
import "./Porfolio.css";
import img1 from "../../assets/EasyBankingIMG.png";
import img2 from "../../assets/FyloIMG.png";
import img3 from "../../assets/GuessMyNumber.png";
import img4 from "../../assets/RockPaperScissors.png";
import img5 from "../../assets/ShortlyIMG.png";
import img6 from "../../assets/Dice Game.png";
import img7 from "../../assets/Counter.png";
import img8 from "../../assets/TradeExpressIMG.png";
import img9 from "../../assets/BookMark.png";
import img10 from "../../assets/OrderSummary.png";

const Porfolio = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: "EasyBanking",
      github: "https://github.com/mayrhiarm/BankProject",
      demo: "https://easy-banking-appp.netlify.app/",
    },
    {
      id: 2,
      image: img2,
      title: "Fylo",
      github: "https://github.com/mayrhiarm/Fylo-ProjectApp",
      demo: "https://fyllo-app.netlify.app/",
    },
    {
      id: 3,
      image: img3,
      title: "Guess My Number",
      github: "https://github.com/mayrhiarm/guessmynumber",
      demo: "https://guess-my-number-appp.netlify.app/",
    },
    {
      id: 4,
      image: img4,
      title: "RockPaperScissors",
      github: "https://github.com/mayrhiarm/RockPaperScissors",
      demo: "https://rock-paper-scissors-mariam.netlify.app/",
    },
    {
      id: 5,
      image: img5,
      title: "Shortly",
      github: "https://github.com/mayrhiarm/Shortly",
      demo: "https://shortly-appp.netlify.app/",
    },
    {
      id: 6,
      image: img6,
      title: "Dice Game",
      github: "https://github.com/mayrhiarm/dicegame",
      demo: "https://dice-game-projectt.netlify.app/",
    },
    {
      id: 7,
      image: img7,
      title: "Counter",
      github: "https://github.com/mayrhiarm/Counter",
      demo: "https://counter-app-mariam.netlify.app/",
    },
    {
      id: 8,
      image: img8,
      title: "TradExpress",
      github: "https://github.com/mayrhiarm/TradExpress",
      demo: "https://tradexpress-app.netlify.app/",
    },
    {
      id: 9,
      image: img9,
      title: "BookMark",
      github: "https://github.com/mayrhiarm/BookMark",
      demo: "https://mariam-bookmark-project.netlify.app/",
    },
    {
      id: 10,
      image: img10,
      title: "OrderSummary",
      github: "https://github.com/mayrhiarm/OrderSummary",
      demo: "https://project-ordersummary.netlify.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>

          <h3>EasyBanking</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/BankProject"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://easy-banking-appp.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>

          <h3>Fylo</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/Fylo-ProjectApp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://fyllo-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>

          <h3>Guess My Number</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/guessmynumber"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://guess-my-number-appp.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt="" />
          </div>

          <h3>Rock Paper Scissors</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/RockPaperScissors"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://rock-paper-scissors-mariam.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img5} alt="" />
          </div>

          <h3>Shortly</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/Shortly"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://shortly-appp.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img6} alt="" />
          </div>

          <h3>Dice Game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/dicegame"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dice-game-projectt.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img7} alt="" />
          </div>

          <h3>Counter App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/Counter"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://counter-app-mariam.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img8} alt="" />
          </div>

          <h3>TradExpress</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/TradExpress"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://tradexpress-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img9} alt="" />
          </div>

          <h3>BookMark</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/BookMark"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://mariam-bookmark-project.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img10} alt="" />
          </div>

          <h3>Order Summary</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mayrhiarm/OrderSummary"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://project-ordersummary.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Porfolio;
