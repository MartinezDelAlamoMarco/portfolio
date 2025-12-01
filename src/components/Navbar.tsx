import { Link } from "react-router"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand fixed-bottom mb-4" data-bs-theme="dark">
            <div className="container-fluid navbar-content my-2 py-1 px-4 rounded-5">
                <ul className="navbar-nav justify-content-center flex-grow-1">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/"><i className="bi bi-house"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/about-me"><i className="bi bi-person"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/skills"><i className="bi bi-tools"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/projects"><i className="bi bi-code-square"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/contact-me"><i className="bi bi-chat-dots"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar