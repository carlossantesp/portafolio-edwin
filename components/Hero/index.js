import Wrapper from "../Wrapper";
import ServiceSection from "../ServiceSection";
import styles from "./Hero.module.css";

export default function Hero({ data, dataServices }) {
  const { name, resume, imageUrl } = data;
  return (
    <section id="hola" className={styles.hero}>
      <Wrapper>
        <div className={styles.info}>
          <div className={styles.imageWrapper}>
            <img src={imageUrl} alt={name} />
          </div>
          <h1 className={styles.title}>
            ¡Hola a todos ! <span>Soy {name}</span>
          </h1>
          <p className={styles.description}>{resume}</p>
        </div>
        <div className={styles.services}>
          {dataServices.map((info, index) => (
            <ServiceSection key={index} info={info} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
