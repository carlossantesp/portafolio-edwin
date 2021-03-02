import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  children,
  classBtn,
  block,
  typeBtn,
  linkhref,
}) {
  const stylesBtn = `${styles.btn} ${
    classBtn === "primary" ? styles.primary : styles.secondary
  } ${block ? styles.block : ""}`;
  return (
    <>
      {typeBtn === "link" ? (
        <Link href={linkhref ? linkhref : "#"}>
          <a target="_blank" className={stylesBtn}>
            {children}
          </a>
        </Link>
      ) : (
        <button type="submit" className={stylesBtn}>
          {children}
        </button>
      )}
    </>
  );
}
