import { FaGithub, FaFigma, FaReact } from "react-icons/fa";
import styles from "./InfoService.module.css";

export default function ServiceSection({ info }) {
  const { icon, description } = info;
  const iconEnables = [
    { icon: "github", component: <FaGithub /> },
    { icon: "figma", component: <FaFigma /> },
    { icon: "react", component: <FaReact /> },
  ];
  return (
    <div className={styles.sevice}>
      <div className={styles.icon}>
        {iconEnables.find((i) => i.icon === icon).component}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
