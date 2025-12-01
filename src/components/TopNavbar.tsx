import { Link } from "react-router"
import "./TopNavbar.css"

const TopNavbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand fixed-top navbar-dark px-5 top-bar bg-dark">
        <Link className="navbar-brand custom-navbar-brand m-0" to="/">
            <span>PortFolio <span className="navbar-important">Marco Martínez</span></span>
        </Link>
    </nav>
    </>
  )
}

export default TopNavbar