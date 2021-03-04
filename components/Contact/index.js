import Wrapper from "../Wrapper";
import Button from "../Button";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <Wrapper>
        <h2 className={styles.title}>Contacto</h2>
        <p className={styles.description}>
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto.
        </p>
        <form action="#" className={styles.contactForm}>
          <input
            className={styles.contactControl}
            type="text"
            placeholder="Nombre completo"
            required
          />
          <input
            className={styles.contactControl}
            type="text"
            placeholder="Correo electrónico"
            required
          />
          <textarea
            className={styles.contactControl}
            rows="5"
            placeholder="Mensaje"
            required
          ></textarea>
          <Button classBtn="primary" block={true} typeBtn="button">
            Enviar Mensaje
          </Button>
        </form>
      </Wrapper>
    </section>
  );
}
