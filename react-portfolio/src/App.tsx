import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
