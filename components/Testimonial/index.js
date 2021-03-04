import styles from "./Testimonial.module.css";

export default function Testimonial({ testimonial }) {
  const { name, description, imageUrl } = testimonial;

  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialImg}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.testimonialBox}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
