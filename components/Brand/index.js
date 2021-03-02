import Link from "next/link";
import styles from "./Brand.module.css";
export default function Brand({ linkHref, primary }) {
  const nameLogo = "LOGO";
  const classLogo = `${styles.logo} ${
    primary ? styles.primary : styles.secondary
  }`;
  return (
    <Link href={linkHref ? linkHref : "#"}>
      <a className={classLogo}>{nameLogo}</a>
    </Link>
  );
}
