import Link from "next/link";
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import styles from "./Social.module.css";

export default function Social({ social }) {
  const { icon, linkUrl, name } = social;
  const iconEnable = [
    {
      icon: "email",
      component: <FaEnvelope />,
    },
    {
      icon: "phone",
      component: <FaPhoneAlt />,
    },
    {
      icon: "instagram",
      component: <FaInstagram />,
    },
    {
      icon: "twitter",
      component: <FaTwitter />,
    },
  ];
  return (
    <li className={styles.item}>
      <div>{iconEnable.find((i) => i.icon === icon).component}</div>
      <Link href={linkUrl}>
        <a className={styles.link} target="_blank">
          {name}
        </a>
      </Link>
    </li>
  );
}
