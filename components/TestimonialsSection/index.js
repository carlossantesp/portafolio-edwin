import Wrapper from "../Wrapper";
import Testimonial from "../Testimonial";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection({ dataTestimonals }) {
  return (
    <section id="testimonials" className={styles.testimonialSection}>
      <Wrapper>
        <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.testimonialWrapper}>
          {dataTestimonals.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
