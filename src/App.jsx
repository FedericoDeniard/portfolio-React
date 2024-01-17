import './App.css'
import Card from './components/cards/cards'
import FooterComp from './components/footerComp/footer'
import ContactForm from './components/contact-form/form'

import { useTranslation } from "react-i18next";


function App() {

    const { t } = useTranslation();

        // Scoll on Cards container
    const scrollLeft = () => {
        let cardsContainer = document.getElementsByClassName("cards-container")[0];
        cardsContainer.scrollBy({left: -300,
        behavior: "smooth"})
    }
    const scrollRight = () => {
        let cardsContainer = document.getElementsByClassName("cards-container")[0];
        cardsContainer.scrollBy({left: 300,
        behavior: "smooth"})
    }

  return (
    <>
    <section className="intro" id="intro">
        <div className="myself">
            <img id="myself-pic" className="pic" src="assets/me.jpg"/>
        </div>
        <h1>Hola, soy Federico</h1>
        <h3>Frontend developer</h3>
        <p>{t("MYSELF-DESCRIPTION")}</p>
        <a className="contact-button button" id="contact-button" href="#contact" onContextMenu={(e) =>{
            e.preventDefault();}}>
            {t("CONTACT")}</a>
    </section>
    <section className="projects">
        <h2>{t("PROJECTS")}</h2>
        <div className="cards-container">
          <Card project="Chordoku"
          evenOrOdd="even"
          link="https://chord-doku.vercel.app/"
          imgSrc="assets/projects/chordoku.png"
          text={t("CHORDOKU_TEXT")}
          />
          <Card project="Random Color"
          evenOrOdd="odd"
          link="https://federicodeniard.github.io/cursojs/pages/random-color/index.html"
          imgSrc= "assets/projects/randomColor.png"
          text={t("RANDOM-COLOR__TEXT")}
           />
           <Card project="My Page" 
           evenOrOdd="even"
           link="https://federicodeniard.github.io/practice-page/pages/index/index.html"
           imgSrc="assets/projects/me.jpeg"
           text={t("MY-PAGE__TEXT")}
           />  
           <Card project="RGB Selector"
           evenOrOdd="odd"
           link="https://federicodeniard.github.io/cursojs/pages/select-color/index.html"
           imgSrc="assets/projects/colorSelector.png"
           text={t("RGB-SELECTOR__TEXT")}
           />
           <Card project="Quotes"
           evenOrOdd="even"
           link="https://federicodeniard.github.io/cursojs/pages/random-notes/index.html"
           imgSrc="assets/projects/quotes.png"
           text={t("QUOTES-TEXT")}
           />
           <Card project="Chronometer"
           evenOrOdd="odd"
           link= "https://federicodeniard.github.io/cursojs/pages/timer/index.html"
           imgSrc="assets/projects/chronometer.png"
           text={t("CHRONOMETER_TEXT")}
           />
           <Card project="To-do List"
           evenOrOdd="even"
           link="https://federicodeniard.github.io/cursojs/pages/todo/index.html"
           imgSrc="assets/projects/todo.png"
           text={t("TODO-LIST__TEXT")}
           />
           </div>
        <img onClick={scrollLeft} className="container-leftarrow" src="assets/icons/left.svg"/>
        <img onClick={scrollRight} className="container-rightarrow" src="assets/icons/right.svg"/>
    </section>
    <section className="skills-container">
        <h2>{t("SKILLS")}</h2>
        <div className="skills-graph skills">
            <div className="skill">
                <label htmlFor="HTML-Skill">HTML</label>
                <input id="HTML-Skill" className="range html" type="range" min="0" max="100" value="80" disabled/>
            </div>
            <div className="skill">
                <label htmlFor="CSS-Skill">CSS</label>
                <input id="CSS-Skill" className="range css" type="range" min="0" max="100" value="90" disabled/>
            </div>
            <div className="skill">
                <label htmlFor="JS-Skill">JS</label>
                <input id="JS-Skill" className="range js" type="range" min="0" max="100" value="70" disabled/>
            </div>
            <div className="skill">
                <label htmlFor="GIT-Skill">GIT</label>
                <input id="GIT-Skill" className="range git" type="range" min="0" max="100" value="65" disabled/>
            </div>
            <div className="skill">
                <label htmlFor="REACT-SKILL">REACT</label>
                <input id='REACT-Skill' className='range react' type='range' min="0" max="100" value="50" disabled/>

            </div>
        </div>
        <h2>{t("LANGUAGES")}</h2>
        <div className="lang-graph skills">
            <div className="skill">
                <label htmlFor="ESP-Skill">ESP</label>
                <input id="ESP-Skill" className="range esp" type="range" min="0" max="100" value="100" disabled/>
            </div>
            <div className="skill">
                <label htmlFor="ENG-Skill">ENG</label>
                <input id="ENG-Skill" className="range eng" type="range" min="0" max="100" value="60" disabled/>
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
  )
}

export default App
