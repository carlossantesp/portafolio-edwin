import Link from "next/link";
import styles from "./Tab.module.css";

export default function Tab({ name, active }) {
  const namelower = name.toLowerCase();
  return (
    <div className={`${styles.tabItem} ${active ? styles.active : ""}`}>
      <Link href={`#${namelower}`}>
        <a className={styles.tabLink}>{namelower}</a>
      </Link>
    </div>
  );
}
