import "styles/globals.scss";
import Head from "next/head";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // colors
  // const [background, setBackground] = useState(0);
  // const [color, setColor] = useState(0);

  // const min = 0;
  // const max = 360;

  // useEffect(() => {
  //   setBackground(Math.round(min + Math.random() * (max - min)));
  //   setColor(Math.round(min + Math.random() * (max - min)));
  // }, []);

  // useEffect(() => {
  //   const root = document.querySelector(":root");
  //   root.style.setProperty("--text-color", `hsl(${color}, 30%, 80%)`);
  //   root.style.setProperty("--background-color", `hsl(${background}, 40%, 10%)`);
  // }, [color, background]);

  return (
    <>
      <Head>
        <title>Marco Vincit | Design & Development</title>
        <meta name="description" content="Brazilian Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
