import "./App.css";
import Card from "./components/cards/cards";
import FooterComp from "./components/footerComp/footer";
import ContactForm from "./components/contact-form/form";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { projects } from "./utils/projects";
import { skills } from "./utils/skills";

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
        <h1>{t("INTRODUCTION")}</h1>
        <h3>{t("FULLSTACK-DEVELOPER")}</h3>
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
          {projects.map((project, index) => (
          <Card
              key={index}
              project={t(project.name)}
              evenOrOdd={index % 2 === 0 ? "even" : "odd"}
              link={project.link}
              imgSrc={project.imgSrc}
              text={t(project.text)}
          />
          ))}
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
          {skills.map((skill, index) => (
            <div className="tech-skill" key={index}>
              <p className="skill">{t(skill.name)}</p>
              <img className="skill-img" src={skill.img} />
          </div>
          ))}
        </div>
        <h2>{t("LANGUAGES")}</h2>
        <div className="lang-graph skills">
          <div className="skill">
            <label htmlFor="ESP-Skill">{t("SPANISH")}</label>
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
            <label htmlFor="ENG-Skill">{t("ENGLISH")}</label>
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
