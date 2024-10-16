import "./App.css";
import Card from "./components/cards/cards";
import FooterComp from "./components/footerComp/footer";
import ContactForm from "./components/contact-form/form";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  // Scoll on Cards container
  const scrollLeft = () => {
    let cardsContainer = document.getElementsByClassName("cards-container")[0];
    cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    let cardsContainer = document.getElementsByClassName("cards-container")[0];
    cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Define is an element is touched

  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };
  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  //

  return (
    <>
      <section className="intro" id="intro">
        <div className="myself">
          <img id="myself-pic" className="pic" src="assets/me.jpg" />
        </div>
        <h1>Hola, soy Federico</h1>
        <h3>Fullstack developer</h3>
        <p>{t("MYSELF-DESCRIPTION")}</p>
        <a
          className={`interactive-button ${isTouched ? "touch" : ""}`}
          href="#contact"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
          <span className="button-text">{t("CONTACT")}</span>
        </a>
      </section>
      <section className="projects">
        <h2>{t("PROJECTS")}</h2>
        <div className="cards-container">
          <Card
            project={t("CHORDOKU_TITLE")}
            evenOrOdd="odd"
            link="https://chord-doku.vercel.app/"
            imgSrc="assets/projects/chordoku.png"
            text={t("CHORDOKU_TEXT")}
          />
          <Card
            project={t("MEMORY_GAME")}
            evenOrOdd={"even"}
            link="https://federicodeniard.github.io/memory_game/"
            imgSrc={"assets/projects/memory_game.png"}
            text={t("MEMORY_GAME_TEXT")}
          />
          <Card
            project={t("PAIRS_TITLE")}
            evenOrOdd="odd"
            link="https://federicodeniard.github.io/front-orderer-pairs/"
            imgSrc="assets/projects/pairs.png"
            text={t("PAIRS_TEXT")}
          />

          <Card
            project={t("RANDOM_TITLE")}
            evenOrOdd="even"
            link="https://federicodeniard.github.io/cursojs/pages/random-color/index.html"
            imgSrc="assets/projects/randomColor.png"
            text={t("RANDOM-COLOR__TEXT")}
          />
          <Card
            project={t("MY-PAGE_TITLE")}
            evenOrOdd="odd"
            link="https://federicodeniard.github.io/practice-page/pages/index/index.html"
            imgSrc="assets/projects/me.jpeg"
            text={t("MY-PAGE__TEXT")}
          />
          <Card
            project={t("RGB_TITLE")}
            evenOrOdd="even"
            link="https://federicodeniard.github.io/cursojs/pages/select-color/index.html"
            imgSrc="assets/projects/colorSelector.png"
            text={t("RGB-SELECTOR__TEXT")}
          />
          <Card
            project={t("QUOTES_TITLE")}
            evenOrOdd="odd"
            link="https://federicodeniard.github.io/cursojs/pages/random-notes/index.html"
            imgSrc="assets/projects/quotes.png"
            text={t("QUOTES-TEXT")}
          />
          <Card
            project={t("CHRONOMETER_TITLE")}
            evenOrOdd="even"
            link="https://federicodeniard.github.io/cursojs/pages/timer/index.html"
            imgSrc="assets/projects/chronometer.png"
            text={t("CHRONOMETER_TEXT")}
          />
          <Card
            project={t("TO-DO_TITLE")}
            evenOrOdd="odd"
            link="https://federicodeniard.github.io/cursojs/pages/todo/index.html"
            imgSrc="assets/projects/todo.png"
            text={t("TODO-LIST__TEXT")}
          />
          <Card
            project={t("POKEDEX_TITLE")}
            evenOrOdd="even"
            link="https://federicodeniard.github.io/pokedex/"
            imgSrc="assets/projects/pokedex.png"
            text={t("POKEDEX-TEXT")}
          />
          <Card
            project={t("RICK-MORTY_TITLE")}
            evenOrOdd="odd"
            link="https://federicodeniard.github.io/ApiRick/"
            imgSrc="assets/projects/rick.png"
            text={t("RICK_TEXT")}
          />
        </div>
        <img
          onClick={scrollLeft}
          className="container-leftarrow"
          src="assets/icons/left.svg"
        />
        <img
          onClick={scrollRight}
          className="container-rightarrow"
          src="assets/icons/right.svg"
        />
      </section>
      <section className="skills-container">
        <h2>{t("SKILLS")}</h2>
        <div className="skills-graph skills">
          <div className="tech-skill">
            <p className="skill">HTML</p>
            <img className="skill-img" src="assets/icons/techs/html.svg" />
          </div>
          <div className="tech-skill">
            <p className="skill">CSS</p>
            <img className="skill-img" src="assets/icons/techs/css.svg" />
          </div>
          <div className="tech-skill">
            <p className="skill">JS</p>
            <img className="skill-img" src="assets/icons/techs/js.svg" />
          </div>
          <div className="tech-skill">
            <p className="skill">GIT</p>
            <img className="skill-img" src="assets/icons/techs/git.svg" />
          </div>
          <div className="tech-skill">
            <p className="skill">REACT</p>
            <img className="skill-img" src="assets/icons/techs/react.svg" />
          </div>
          <div className="tech-skill">
            <p className="skill">PYTHON</p>
            <img className="skill-img" src="assets/icons/techs/python.svg" />
          </div>{" "}
          <div className="tech-skill">
            <p className="skill">FLASK</p>
            <img className="skill-img" src="assets/icons/techs/flask.svg" />
          </div>
          <div className="tech-skill">
            <p className="skill">SQL</p>
            <img className="skill-img" src="assets/icons/techs/sql.svg" />
          </div>
          <div className="tech-skill">
            <p className="skill">TypeScript</p>
            <img
              className="skill-img"
              src="assets/icons/techs/typescript.svg"
            />
          </div>
          <div className="tech-skill">
            <p className="skill">Node.Js</p>
            <img className="skill-img" src="assets/icons/techs/Node.js.svg" />
          </div>
        </div>
        <h2>{t("LANGUAGES")}</h2>
        <div className="lang-graph skills">
          <div className="skill">
            <label htmlFor="ESP-Skill">ESP</label>
            <input
              id="ESP-Skill"
              className="range esp"
              type="range"
              min="0"
              max="100"
              value="100"
              disabled
            />
          </div>
          <div className="skill">
            <label htmlFor="ENG-Skill">ENG</label>
            <input
              id="ENG-Skill"
              className="range eng"
              type="range"
              min="0"
              max="100"
              value="60"
              disabled
            />
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <h2>{t("CONTACT")}</h2>
        <div className="contact-info">
          <div className="email">
            <p>{t("EMAIL")}: fededeniard@gmail.com</p>
          </div>
          <div className="phone">
            <p>{t("PHONE")}: (+54)11 6828-7827</p>
          </div>
        </div>
        <ContactForm />
      </section>
      <footer>
        <FooterComp />
      </footer>
    </>
  );
}

export default App;
