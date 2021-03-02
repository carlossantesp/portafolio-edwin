import Link from "next/link";
import Brand from "../Brand";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.brand}>
        <Brand linkHref="/" primary={true} />
      </div>
      <div className={styles.bg}></div>
      <ul className={styles.navbar}>
        <li className={styles.navbarItem}>
          <Link href="#hola">
            <a className={styles.navbarLink}>Hola</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="#proyectos">
            <a className={styles.navbarLink}>Proyectos</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="#testimonios">
            <a className={styles.navbarLink}>Testimonios</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="#contacto">
            <a className={styles.navbarLink}>Contacto</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
