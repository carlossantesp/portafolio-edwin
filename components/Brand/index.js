// import Link from "next/link";
import { Link } from "react-scroll";
import styles from "./Brand.module.css";
export default function Brand({ toggleHome, linkHref, primary }) {
  const nameLogo = "LOGO";
  const classLogo = `${styles.logo} ${
    primary ? styles.primary : styles.secondary
  }`;
  return (
    <Link
      to={linkHref}
      spy={true}
      smooth={true}
      duration={500}
      exact="true"
      onClick={toggleHome}
      className={classLogo}
    >
      {nameLogo}
    </Link>
  );
}
