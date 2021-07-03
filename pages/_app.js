import "../styles/globals.scss";
import { useState, useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import useDeviceOrientation from "utils/useDeviceOrientation";
import modulate from "utils/modulate";

import Menu from "components/Menu";
import Header from "components/Header";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  // router
  const router = useRouter();
  const { slug } = router.query;

  // page info
  const title = `Marco Vincit${
    slug ? " | " + slug.charAt(0).toUpperCase() + slug.slice(1) : ""
  }`;

  // useDeviceOrientation
  const { absolute, alpha, beta, gamma } = useDeviceOrientation();

  console.log(absolute);

  // colors
  const [background, setBackground] = useState(0);
  const [color, setColor] = useState(0);

  const min = 0;
  const max = 360;

  useEffect(() => {
    setBackground(Math.round(min + Math.random() * (max - min)));
    setColor(Math.round(min + Math.random() * (max - min)));
  }, []);

  useEffect(() => {
    if (absolute !== 0) {
      const newBackground = modulate(gamma, [-90, 90], [min, max], true);
      const newColor = modulate(gamma, [-90, 90], [max, min], true);
      setBackground(Math.round(newBackground));
      setColor(Math.round(newColor));
    }
  }, [beta]);

  useEffect(() => {
    const root = document.querySelector(":root");
    root.style.setProperty("--text-color", `hsl(${color}, 60%, 70%)`);
    root.style.setProperty(
      "--background-color",
      `hsl(${background}, 40%, 10%)`
    );
  }, [color, background]);

  // return

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Brazilian Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
