import Head from "next/head";
import styles from "../styles/Home.module.scss";

import React, { useRef, useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const list = [
  { name: "Spotify", logo: "spotify.svg", link: "http://spotify.com" },
  {
    name: "YouTube Music",
    logo: "youtubemusic.svg",
    link: "http://spotify.com",
  },
  { name: "Apple Music", logo: "applemusic.svg", link: "http://spotify.com" },
  { name: "SoundCloud", logo: "soundcloud.svg", link: "http://spotify.com" },
  { name: "Deezer", logo: "deezer.svg", link: "http://spotify.com" },
  { name: "Tidal", logo: "tidal.svg", link: "http://spotify.com" },
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
        <title>Marco Vincit - O mar</title>
        <link rel="icon" href="/cover.jpg" />
      </Head>

      <main ref={refContainer} className={styles.container}>
        <div className={styles.colAlbum}>
          <h1 className={styles.title01}>
            Novo <br /> single
          </h1>
          <img
            className={styles.cover}
            alt="Marco Vincit - O mar"
            src="/cover.jpg"
          />
          <h1 className={styles.title02}>
            Ouça <br /> agora
          </h1>
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
                  <img
                    className={styles.logo}
                    alt={name}
                    src={"/logos/" + logo}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
