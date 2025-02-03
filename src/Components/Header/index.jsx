import { Link } from "react-router-dom";
import "./Header.css"


const Header = () => {
    return (
        <header className="header">
        <div className="logo">
          {/* Reemplaza el texto por el logo de tu emprendimiento */}
          <img src="/logo.png" alt="AmiiWool Logo" className="logo-img" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Productos" className="nav-link">
                Productos
              </Link>
            </li>
            <li>
              <Link to="/Personalizacion" className="nav-link">
                Hecho para ti
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;