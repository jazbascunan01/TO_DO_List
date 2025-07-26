import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TO-DO App</Link>
        <button className="btn btn-outline-secondary" onClick={toggleTheme}>
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/agregar">Agregar</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/estadisticas">Estadísticas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/configuracion">Configuración</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
