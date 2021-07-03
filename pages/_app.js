import "../styles/globals.scss";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
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

  return (
    <>
      {color}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
