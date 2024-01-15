
import './App.css'
import Card from './components/cards/cards'
import FooterComp from './components/footerComp/footer'
import ContactForm from './components/contact-form/form'

function App() {

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
        <p>Desarrollador Front-End apasionado
            y autodidacta, con experiencia en
            proyectos desafiantes como
            Chordoku. En constante búsqueda de
            conocimiento</p>
        <a className="contact-button button" id="contact-button" href="#contact" onContextMenu={(e) =>{
            e.preventDefault();}}>Contacto</a>
    </section>
    <section className="projects">
        <h2>Proyectos</h2>
        <div className="cards-container">
          <Card project="Chordoku"
          evenOrOdd="even"
          link="https://chord-doku.vercel.app/"
          imgSrc="assets/projects/chordoku.png"
          text="Chordoku es un videojuego musical que desafía tu destreza armónica. En un tablero de
          4x4, tu misión es completar el acorde asignado. Sumérgete en esta experiencia única que fusiona la
          diversión de un juego con la creatividad musical, poniendo a prueba tus habilidades armónicas en
          cada nivel."
          />
          <Card project="Random Color"
          evenOrOdd="odd"
          link="https://federicodeniard.github.io/cursojs/pages/random-color/index.html"
          imgSrc= "assets/projects/randomColor.png"
          text="Random Color es un proyecto con un botón que genera colores de manera aleatoria
          al hacer clic. Muestra el color en pantalla de forma inmediata, ofreciendo una experiencia
          interactiva"
           />
           <Card project="My Page" 
           evenOrOdd="even"
           link="https://federicodeniard.github.io/practice-page/pages/index/index.html"
           imgSrc="assets/projects/me.jpeg"
           text="My Page es mi espacio personal en línea, donde comparto videos de mis actuaciones
           musicales en vivo. Además, tienes acceso exclusivo a las partituras de mis propios arreglos. Explora
           mi mundo musical a través de interpretaciones en vivo y descubre la música detrás de las partituras."
           />  
           <Card project="RGB Selector"
           evenOrOdd="odd"
           link="https://federicodeniard.github.io/cursojs/pages/select-color/index.html"
           imgSrc="assets/projects/colorSelector.png"
           text="RGB Selector es una herramienta interactiva con tres controles deslizantes para los
           colores Rojo, Verde y Azul. Ajusta estos controles para mezclar colores y crea una amplia gama de
           tonalidades. El color resultante se muestra en tiempo real como fondo, permitiéndote experimentar y
           personalizar tus selecciones de color de manera intuitiva."
           />
           <Card project="Quotes"
           evenOrOdd="even"
           link="https://federicodeniard.github.io/cursojs/pages/random-notes/index.html"
           imgSrc="assets/projects/quotes.png"
           text="Quotes es un generador de citas aleatorias de South Park. Con alrededor de 41 frases de
           varios personajes de la serie, simplemente presiona un botón para recibir una de estas divertidas
           citas de forma aleatoria. Una manera entretenida de revivir momentos clásicos de la serie."
           />
           <Card project="Chronometer"
           evenOrOdd="odd"
           link= "https://federicodeniard.github.io/cursojs/pages/timer/index.html"
           imgSrc="assets/projects/chronometer.png"
           text="Chronometer es una aplicación simple de cronómetro. Ofrece funcionalidad básica para
           medir el tiempo, siendo una herramienta directa y eficiente para diversas situaciones."
           />
           <Card project="To-do List"
           evenOrOdd="even"
           link="https://federicodeniard.github.io/cursojs/pages/todo/index.html"
           imgSrc="assets/projects/todo.png"
           text="To-do List es una aplicación sencilla de lista de tareas. Permite organizar y gestionar
           tus tareas pendientes de manera fácil y eficiente. Una herramienta práctica para mantenerse
           organizado en tus actividades diarias."
           />
           </div>
        <img onClick={scrollLeft} className="container-leftarrow" src="assets/icons/left.svg"/>
        <img onClick={scrollRight} className="container-rightarrow" src="assets/icons/right.svg"/>
    </section>
    <section className="skills-container">
        <h2>Habilidades</h2>
        <div className="skills-graph skills">
            <div className="skill">
                <label htmlFor="HTML-Skill">HTML</label>
                <input id="HTML-Skill" className="range html" type="range" min="0" max="100" value="80" disabled/>
            </div>
            <div className="skill">
                <label htmlFor="CSS-Skill">CSS</label>
                <input id="CSS-Skill" className="range css" type="range" min="0" max="100" value="70" disabled/>
            </div>
            <div className="skill">
                <label htmlFor="JS-Skill">JS</label>
                <input id="JS-Skill" className="range js" type="range" min="0" max="100" value="50" disabled/>
            </div>
            <div className="skill">
                <label htmlFor="GIT-Skill">GIT</label>
                <input id="GIT-Skill" className="range git" type="range" min="0" max="100" value="50" disabled/>
            </div>
        </div>
        <h2>Idiomas</h2>
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
        <h2>Contacto</h2>
        <div className="contact-info">
            <div className="email">
                <p>Email: fededeniard@gmail.com</p>
            </div>
            <div className="phone">
                <p>Teléfono: (+54)11 6828-7827</p>
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
