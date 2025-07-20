import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">ToDoApp</h2>
      <ul>
        <li><Link className={location.pathname === '/' ? 'active' : ''} to="/">Inicio</Link></li>
        <li><Link className={location.pathname === '/tasks' ? 'active' : ''} to="/tasks">Tareas</Link></li>
        <li><Link className={location.pathname === '/new' ? 'active' : ''} to="/new">Agregar</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;