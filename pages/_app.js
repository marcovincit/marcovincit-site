import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [background, setBackground] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const min = 1;
    const max = 360;

    setBackground(min + Math.random() * (max - min));
    setColor(min + Math.random() * (max - min));

    const doc = document.documentElement;
    doc.style.setProperty("--text-color", `hsl(${color}, 30%, 70%)`);
    doc.style.setProperty("--background-color", `hsl(${background}, 50%, 10%)`);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
