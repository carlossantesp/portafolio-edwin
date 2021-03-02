import Head from "next/head";
import "normalize.css";
import { useState } from "react";
import Header from "../components/Header";

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

      <h1>Portafolio Edwin</h1>
    </>
  );
}
