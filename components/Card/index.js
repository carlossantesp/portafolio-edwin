import Button from "../Button";
import styles from "./Card.module.css";

export default function Card({ project }) {
  const { id, title, description, repo, urlDemo, imageUrl } = project;
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.cardBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.bntWrapper}>
          {id % 2 === 0 ? (
            <>
              <Button classBtn="secondary" typeBtn="link" linkhref={urlDemo}>
                Ver proyecto
              </Button>
              <Button classBtn="primary" typeBtn="link" linkhref={repo}>
                Ver código
              </Button>
            </>
          ) : (
            <>
              <Button classBtn="primary" typeBtn="link" linkhref={urlDemo}>
                Ver proyecto
              </Button>
              <Button typeBtn="link" linkhref={repo}>
                Ver código
              </Button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
