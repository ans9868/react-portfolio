import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Adel</div>
      <div className={styles.navlinks}>
        <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>Projects</NavLink>
        <NavLink to="/articles" className={({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>Blog</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>Contact</NavLink>
      </div>
    </div>
  );
} 