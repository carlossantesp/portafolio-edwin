import Head from "next/head";
import "normalize.css";
import { useState } from "react";
import {
  data,
  dataServices,
  dataProjects,
  dataTestimonals,
} from "../data/info";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TestimonialsSection from "../components/TestimonialsSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>Portafolio Edwin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isOpen={isOpen} toggle={toggle} />
      <main>
        <Hero data={data} dataServices={dataServices} />
        <Projects dataProjects={dataProjects} />
        <TestimonialsSection dataTestimonals={dataTestimonals} />
        <Contact />
      </main>
      <Footer socials={data.socials} />
    </>
  );
}
