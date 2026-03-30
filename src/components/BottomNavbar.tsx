import { Link, useLocation } from "react-router"; // Asegúrate de usar "react-router-dom"
import "./BottomNavbar.css";
import cvPDF from "../assets/CV_Marco_Martinez.pdf";

const BottomNavbar = () => {
    const location = useLocation();

    const navItems = [
        { to: "/", icon: "bi-house", label: "Inicio" },
        { to: "/about-me", icon: "bi-person", label: "Sobre mí" },
        { to: "/skills", icon: "bi-lightbulb", label: "Skills" },
        { to: "/working-experience", icon: "bi-briefcase", label: "Experiencia" },
        { to: "/projects", icon: "bi-code-square", label: "Proyectos" },
    ];

    return (
        <nav className="navbar navbar-expand bottom-navbar bg-dark fixed-bottom pt-2 pb-5 p-0 bg-dark" data-bs-theme="dark">
            <div className="container-fluid navbar-content bottom-navbar-content my-1 py-1 px-1 rounded-4">
                <ul className="navbar-nav justify-content-center flex-grow-1 py-1">
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <Link
                                className={`btn bottom-navbar-btn nav-link bottom-navbar-nav-link d-flex flex-column align-items-center ${location.pathname === item.to ? "active" : ""}`}
                                to={item.to}
                                data-tooltip={item.label}
                            >
                                <i className={`bi ${item.icon}`}></i>
                                <span className="bottom-nav-text">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                    {/* Barra vertical separadora */}
                    <li className="nav-item separator">
                        <div className="vertical-bar"></div>
                    </li>
                    <li className="nav-item">
                        <a
                            href={cvPDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bottom-navbar-btn nav-link bottom-navbar-nav-link d-flex flex-column align-items-center"
                            data-tooltip="Ver currículum"
                        >
                            <i className="bi bi-file-earmark-text mx-auto"></i>
                            <span className="bottom-nav-text">CV</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default BottomNavbar;
