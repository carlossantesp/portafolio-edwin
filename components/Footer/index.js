import Wrapper from "../Wrapper";
import Brand from "../Brand";
import Social from "../Social";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer({ toggleHome, socials }) {
  const dateYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.contact}>
          <h4 className={styles.contactTitle}>Contacto</h4>
          <ul className={styles.socials}>
            {socials.map((social, index) => (
              <Social key={index} social={social} />
            ))}
          </ul>
        </div>
        <div className={styles.information}>
          <Brand linkHref="home" toggleHome={toggleHome} />
          <div className={styles.copy}>
            <p>
              Hecho con <FaHeart /> de Edwyn.
            </p>
            <p>Copyright {dateYear} - Todos los derechos reservados</p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
