import "styles/globals.scss";
import Head from "next/head";
import { useState, useEffect } from "react";


const colors = [
    // {background: "#211011", text:"#7B70A3", hover:"blue"},
    // {background: "#142314", text:"#768BA7", hover:"blue"},
    {background: "#FEFEFE", text:"#333333", hover:"blue"}

]

function MyApp({ Component, pageProps }) {
    
  // colors
  const [colorScheme, setColorScheme] = useState(0);

  const min = 0;
  const max = colors.length-1;

  useEffect(() => {
    setColorScheme(Math.round(min + Math.random() * (max - min)));
    
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root");
    root.style.setProperty("--text-color", `${colors[colorScheme].text}`);
    root.style.setProperty("--background-color", `${colors[colorScheme].background}`);
    root.style.setProperty("--hover-color", `${colors[colorScheme].hover}`);
  }, [colorScheme]);

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
