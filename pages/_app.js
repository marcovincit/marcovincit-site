import "../styles/globals.scss";
import { useState, useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Menu from "components/Menu";

function MyApp({ Component, pageProps }) {
  // router
  const router = useRouter();
  const { slug } = router.query;

  // page info
  const title = `Marco Vincit${
    slug ? " | " + slug.charAt(0).toUpperCase() + slug.slice(1) : ""
  }`;

  // colors
  const [background, setBackground] = useState(0);
  const [color, setColor] = useState(0);

  const min = 1;
  const max = 360;

  useEffect(() => {
    setBackground(Math.round(min + Math.random() * (max - min)));
    setColor(Math.round(min + Math.random() * (max - min)));
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root");
    root.style.setProperty("--text-color", `hsl(${color}, 30%, 70%)`);
    root.style.setProperty(
      "--background-color",
      `hsl(${background}, 50%, 10%)`
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
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
