import { Link } from "react-router"
import "./Home.css"
import ButtonMailto from "../components/ButtonMailto"
import faceImage from "../assets/Foto_CV_MM.png";
import cvPDF from "../assets/CV_Marco_Martinez.pdf";

const Home = () => {
  return (
    <>
      <img className="face-image" src={faceImage} width="140px" height="140px" />
      <h1 className="mb-4">Hola! Soy Marco Martínez</h1>
      <p className="main-description">
        <p>
        Joven desarrollador graduado en Grado Superior de
        <span className="important"> Desarrollo de aplicaciones Multiplataforma </span> 
        y 
        <span className="important"> especializado en Ciberseguridad</span>. 
        Actualmente estoy estudiando el Grado Superior de 
        <span className="important"> Desarrollo de aplicaciones Web </span> 
        </p>
        Cumplo con 3 meses de experiencia trabajando como
        <span className="important"> Junior Full Stack Developer</span>
        , y 9 meses de experiencia trabajando como
        <span className="important"> Técnico de Informática especializado en ciberseguridad</span>.
      </p>
      <p className="main-description">
        Explora mi portfolio, donde podrás conocer más sobre mis aptitudes
        y algunos de los proyectos en los que he trabajado.
      </p>
      <section>
        <div className="button-group my-4">
          <a
            href={cvPDF}// Ruta del PDF dentro del proyecto
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary me-3 mb-3 rounded-5"
          >
            <i className="bi bi-file-earmark-text me-2"></i>
            Ver Currículum
          </a>
          <ButtonMailto label="Contáctame" mailto="mailto:marco.martinez.profesional@gmail.com" />
          <Link to="https://www.linkedin.com/in/marco-martinez-alamo/" target="_blank" className="btn btn-secondary me-3 mb-3  rounded-5">
            <i className="bi bi-linkedin me-2"></i>
            LinkedIn
          </Link>
          <Link to="https://github.com/MartinezDelAlamoMarco" target="_blank" className="btn btn-secondary me-3 mb-3  rounded-5">
            <i className="bi bi-github me-2"></i>
            GitHub
          </Link>
        </div>
        <h3 className="mt-4">Información de contacto:</h3>
        <ul className="main-description">
          <li className="list-group-item contact-info-li">
            <strong>Email: </strong>
            <a href="mailto:marco.martinez.profesional@gmail.com">marco.martinez.profesional@gmail.com</a>
          </li>
          <li className="list-group-item contact-info-li">
            <strong>Número de teléfono: </strong>
            +34 684 386 585
          </li>
        </ul>
      </section>
    </>
  )
}

export default Home