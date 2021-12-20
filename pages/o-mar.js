import Head from "next/head";
import styles from "../styles/OMar.module.scss";

import React, { useRef, useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const list = [
  {
    name: "Spotify",
    logo: "spotify.svg",
    link: "https://open.spotify.com/album/2AksjgFiKW8Zwq9AVgvB2X",
  },
  {
    name: "YouTube Music",
    logo: "youtubemusic.svg",
    link: "https://music.youtube.com/watch?v=Ts7xYREFRK4&feature=share",
  },
  {
    name: "Apple Music",
    logo: "applemusic.svg",
    link: "https://geo.music.apple.com/album/o-mar-single/1528410596?uo=5&app=music",
  },
  {
    name: "Deezer",
    logo: "deezer.svg",
    link: "https://www.deezer.com/album/168253382",
  },

  {
    name: "SoundCloud",
    logo: "soundcloud.svg",
    link: "https://soundcloud.com/marcovincit/o-mar-4",
  },
];

export default function () {
  const { scrollYProgress } = useViewportScroll();
  const refContainer = useRef("");
  const [containerHeight, setContainerHeight] = useState("");
  let translateY = useTransform(scrollYProgress, [0, 1], [0, -(1037 - 812)]);

  useEffect(() => {
    setContainerHeight(refContainer.current.clientHeight);

    // console.log(refContainer.current.clientHeight);
  }, []);

  return (
    <>
      <Head>
        <title>Marco Vincit - O mar</title>
        <link rel="icon" href="/o-mar/cover.jpg" />
      </Head>

      <style global jsx>{`
        body {
          background-image: url("/o-mar/bg-mobile.jpg");
        }

        @media (min-width: 1000px) {
          body {
            background-image: url("/o-mar/bg-01.jpg");
          }
        }
      `}</style>

      <main ref={refContainer} className={styles.container}>
        <div className={styles.colAlbum}>
          <h1 className={styles.title01}>
            Novo <br /> single
          </h1>
          <img
            className={styles.cover}
            alt="Marco Vincit - O mar"
            src="/o-mar/cover.jpg"
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
