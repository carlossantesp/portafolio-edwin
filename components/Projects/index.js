import Wrapper from "../Wrapper";
import Tab from "../Tab";
import Card from "../Card";
import styles from "./Projects.module.css";

export default function Projects({ dataProjects }) {
  return (
    <section id="projects" className={styles.projects}>
      <Wrapper>
        <h2 className={styles.title}>Proyectos</h2>
        <div className={styles.tabsList}>
          {dataProjects.map((project) => (
            <Tab
              key={[project.id]}
              name={project.title}
              active={project.active}
            />
          ))}
        </div>
        <div className={styles.projectsList}>
          {dataProjects.map((project) => (
            <Card key={[project.id]} project={project} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
