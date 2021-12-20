import Head from "next/head";
import styles from "../styles/Home.module.scss";

import React, { useRef, useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const list = [
  { name: "Novo Single - Tô a Fim", link: "https://ffm.to/toafim" },
  { name: "EP - Quando o Dia Terminar", link: "/quando-o-dia-terminar" },
  { name: "Single - O Mar", link: "/o-mar" },
];

export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  const refContainer = useRef("");
  const [containerHeight, setContainerHeight] = useState("");
  let translateY = useTransform(scrollYProgress, [0, 1], [0, -(1037 - 812)]);

  useEffect(() => {
    setContainerHeight(refContainer.current.clientHeight);

    console.log(refContainer.current.clientHeight);
  }, []);

  return (
    <>
      <Head>
        <title>Marco Vincit</title>
        <link rel="icon" href="/home/cover.jpg" />
      </Head>

      <main ref={refContainer} className={styles.container}>
        <div className={styles.colAlbum}>
          <img className={styles.cover} alt="Marco Vincit" src="/profile.jpg" />

          <a
            className={styles.title02}
            href="https://www.instagram.com/marcovincit/"
          >
            @marcovincit
          </a>
        </div>
        <div className={styles.colList}>
          <ul className={styles.list}>
            {list.map(({ name, logo, link }) => (
              <li className={styles.listItem} key={name}>
                <a
                  className={styles.link}
                  title={name}
                  href={link}
                  target="_blank"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
