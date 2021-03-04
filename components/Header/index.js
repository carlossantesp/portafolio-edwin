import { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import Brand from "../Brand";
import Navbar from "../Navbar";
import Button from "../Button";
import styles from "./Header.module.css";
import { FiMenu } from "react-icons/fi";

export default function Header({ toggleHome, isOpen, toggle }) {
  const [resume, setResume] = useState("Currículum");

  useEffect(() => {
    if (window.innerWidth >= 992) setResume("Descargar Currículum");
    const handleSize = () => {
      if (window.innerWidth >= 992) setResume("Descargar Currículum");
      else setResume("Currículum");
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <header id="home" className={styles.header}>
      <Wrapper>
        <div className={styles.menu} onClick={toggle}>
          <FiMenu />
        </div>
        <div className={styles.brand}>
          <Brand linkHref="home" primary={true} toggleHome={toggleHome} />
        </div>
        <nav
          className={`${styles.nav} ${isOpen ? styles.active : ""}`}
          onClick={toggle}
        >
          <Navbar toggleHome={toggleHome} toggle={toggle} />
        </nav>
        <div className={styles.btn}>
          <Button typeBtn="link" classBtn="primary">
            {resume}
          </Button>
        </div>
      </Wrapper>
    </header>
  );
}
