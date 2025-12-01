import "./AboutMe.css"

const AboutMe = () => {
  return (
    <>
      <h1 className="mb-4">Sobre mí</h1>
      <div className="about-me-content">
        <p>
          Me llamo <span className="important">Marco Martínez del Álamo</span>. Empecé en la programación con 18 años.
        </p>
        <p>
          Soy un <span className="important"></span>desarrollador fullstack de 21 años graduado en un grado superior de
          <span className="important"> Desarrollo de Aplicaciones Multiplataforma (DAM)</span>, apasionado por la tecnología y 
          en constante aprendizaje.
        </p>
        <p>
          Además, acabo de completar recientemente un <span className="important">máster de ciberseguridad</span>, 
          para ampliar mis conocimientos en este campo tan relevante hoy en día.
        </p>
        <p>
          Actualmente me encuentro cursando el grado superior de <span className="important"> Desarrollo de aplicaciones Web</span>, el cual me gustaría compaginar con un trabajo.
        </p>
        <p>
          En verano de 2024 realicé una <span className="important">inmersión lingüística en Inglaterra</span>, 
          donde mejoré mis habilidades para comunicarme en inglés. Después, 
          superé el <span className="important">examen oficial de inglés nivel B2 (FIRST)</span>.
        </p>
        <p>
          Actualmente estoy en busca de nuevas oportunidades laborales donde pueda 
          seguir creciendo y contribuyendo con mis habilidades.
        </p>
      </div>
    </>
  )
}

export default AboutMe