import "../styles/globals.scss";
import styles from "../styles/Pages.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

import data from "data/about";
import parse from "html-react-parser";

import Page from "components/Page";

import Head from "next/head";

import useDeviceOrientation from "utils/useDeviceOrientation";
import modulate from "utils/modulate";

import Menu from "components/Menu";
import Header from "components/Header";
import Footer from "components/Footer";

import SiteProvider, { useSite } from "context";

function Site() {
  const { pageState, setPageState, pageTitle, pageZIndex } = useSite();

  let layerNumber = 300;

  // close

  const close = (name) => {
    setPageState({ ...pageState, [name]: false });
  };

  // useDeviceOrientation
  const { absolute, alpha, beta, gamma } = useDeviceOrientation();

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
    root.style.setProperty("--text-color", `hsl(${color}, 50%, 70%)`);
    root.style.setProperty("--background-color", `hsl(${background}, 40%, 8%)`);
  }, [color, background]);

  // return

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Brazilian Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <main className={styles.container}>
        {/* AWARDS */}
        <Page size={93} active={pageState.featured} zIndex={layerNumber}>
          <section>
            <h3>{data.awards.title}</h3>
            <ul className={styles.col}>
              {data.awards.content.map(({ link, name, label, date }, key) =>
                key < 14 ? (
                  <li data-scroll key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name} <br /> {label} <br /> <i>{date}</i>{" "}
                    </a>
                  </li>
                ) : null
              )}
            </ul>
          </section>

          <section>
            <br />
            <br />
            <ul className={styles.col}>
              {data.awards.content.map(({ link, name, label, date }, key) =>
                key >= 14 && key <= 27 ? (
                  <li data-scroll key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name} <br /> {label} <br /> <i>{date}</i>{" "}
                    </a>
                  </li>
                ) : null
              )}
            </ul>
          </section>
          <div className={styles.close} onClick={() => close("featured")} />
        </Page>

        {/* SIDE PROJECTS */}
        <Page
          size={79}
          onePage
          active={pageState.projects}
          zIndex={pageZIndex.projects}
        >
          <section>
            <h3>{data.side.title}</h3>
            <ul>
              {data.side.content.map(({ link, name, type, date }, key) => (
                <li key={key}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {name} <br />
                    {type} <br /> <i>{date}</i>{" "}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <div className={styles.close} onClick={() => close("projects")} />
        </Page>

        {/* ABOUT */}
        <Page size={65} active={pageState.about} zIndex={pageZIndex.about}>
          <section>
            <h3>{data.about.title}</h3>
            {data.about.content.map((paragraph, key) => (
              <p key={key}>{parse(paragraph)}</p>
            ))}
          </section>
          <section className={styles.aboutImageContainer}>
            <Image
              width={600}
              height={900}
              className={styles.aboutImage}
              src="/about.jpg"
            />
          </section>

          <div className={styles.close} onClick={() => close("about")} />
        </Page>

        <Page
          size={76}
          onePage
          active={pageState.press}
          zIndex={pageZIndex.press}
        >
          {/* PRESS */}
          <section>
            <h3>{data.press.title}</h3>
            <ul>
              {data.press.content.map(
                ({ link, name, label, author, date }, key) => (
                  <li key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                      <br />
                      {label} {author}
                      <br />
                      <i>{date}</i>
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>

          <div className={styles.close} onClick={() => close("press")} />
        </Page>

        <Page
          size={50}
          onePage
          active={pageState.publications}
          zIndex={pageZIndex.publications}
        >
          {/* PUBLICATIONS */}
          <section>
            <h3>{data.publications.title}</h3>
            <ul>
              {data.publications.content.map(
                ({ link, name, label, date }, key) => (
                  <li key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {" "}
                      {name}
                      <br />
                      {label}
                      <br />
                      <i>{date}</i>
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>

          <div className={styles.close} onClick={() => close("publications")} />
        </Page>

        <Page
          size={70}
          onePage
          active={pageState.clients}
          zIndex={pageZIndex.clients}
        >
          {/* CLIENTS */}
          <section>
            <h3>{data.clients.title}</h3>

            <ul className={styles.simpleList}>
              {data.clients.content.map((item, key) => (
                <li key={key}>
                  {" "}
                  <span> {item} </span>{" "}
                </li>
              ))}
            </ul>
          </section>
          <div className={styles.close} onClick={() => close("clients")} />
        </Page>

        <Page
          size={66}
          onePage
          active={pageState.experience}
          zIndex={pageZIndex.experience}
        >
          {/* EXPERIENCE */}
          <section>
            <h3>{data.experience.title}</h3>
            <ul>
              {data.experience.content.map(
                ({ name, label, date, location, link }, key) => (
                  <li data-scroll key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                      <br /> {label}
                      <br />
                      {/* {location}
            <br /> */}
                      <i>{date}</i>
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>

          <div className={styles.close} onClick={() => close("experience")} />
        </Page>
      </main>

      <Footer />
    </>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <SiteProvider>
      <Site />
    </SiteProvider>
  );
}
