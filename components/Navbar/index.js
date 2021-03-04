import { Link } from "react-scroll";
import Brand from "../Brand";
import styles from "./Navbar.module.css";

export default function Navbar({ toggleHome, toggle }) {
  return (
    <>
      <div className={styles.brand}>
        <Brand linkHref="home" primary={true} toggleHome={toggleHome} />
      </div>
      <div className={styles.bg}></div>
      <ul className={styles.navbar}>
        <li className={styles.navbarItem}>
          <Link
            to="hola"
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
            exact="true"
            className={styles.navbarLink}
            onClick={toggle}
          >
            Hola
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            exact="true"
            className={styles.navbarLink}
            onClick={toggle}
          >
            Proyectos
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            exact="true"
            className={styles.navbarLink}
            onClick={toggle}
          >
            Testimonios
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            exact="true"
            className={styles.navbarLink}
            onClick={toggle}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </>
  );
}
