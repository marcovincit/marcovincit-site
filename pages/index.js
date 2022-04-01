import styles from "styles/Home.module.scss";
import data from "data/about";
import parse from "html-react-parser";
import { motion, useReducedMotion } from "framer-motion";
import { easeInOutQuint } from "utils/easing";
import { Header, Menu, Footer } from "components";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Header />

      <div className={styles.main}>
        <Menu />

        <main className={styles.content}>
          <div className={`${styles.image}`}>
            <motion.div
              initial={{ clipPath: `inset(0% 0% 100% 0%)` }}
              transition={{
                duration: shouldReduceMotion ? 0 : 2.5,
                delay: shouldReduceMotion ? 0 : 2,
                ease: easeInOutQuint,
              }}
              animate={{ clipPath: `inset(0% 0% 0% 0%)` }}
              style={{
                background: `var(--background-color)!important`,
              }}
            >
              <motion.img
                width="100%"
                height="auto"
                layout="responsive"
                src="/about.jpg"
                initial={{ scale: 1.5 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 3,
                  delay: shouldReduceMotion ? 0 : 1,
                  ease: easeInOutQuint,
                }}
                animate={{ scale: 1 }}
              />
            </motion.div>
          </div>

          {/* ABOUT */}
          <section id={data.about.title} className={styles.section}>
            <h3>{data.about.title}</h3>

            <div className={styles.col}>
              {data.about.content.map((paragraph, key) => (
                <p key={key}>{parse(paragraph)}</p>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id={data.experience.title} className={styles.section}>
            <h3>{data.experience.title}</h3>
            <ul className={styles.grid}>
              {data.experience.content.map(
                ({ name, label, date, location, link }, key) => (
                  <li data-scroll key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <b>{name}</b>
                      <br /> {label}
                      <br />
                      <i>{location}</i>
                      <br />
                      <i>{date}</i>
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>

          {/* PRESS */}
          <section id={data.press.title} className={styles.section}>
            <h3>{data.press.title}</h3>
            <ul className={styles.grid}>
              {data.press.content.map(
                ({ link, name, label, author, date }, key) => (
                  <li key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <b>{name}</b>
                      <br />
                      {label ? parse(`${label}`) : ""}
                      {label ? <br /> : ""}
                      {author}
                      {author ? <br /> : ""}
                      <i>{date}</i>
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>

          {/* SIDE PROJECTS */}
          <section id="Projects" className={styles.section}>
            <h3>{data.side.title}</h3>
            <ul className={styles.grid}>
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

          {/* CLIENTS */}
          <section id={data.clients.title} className={styles.section}>
            <h3>{data.clients.title}</h3>

            <ul className={styles.col}>
              {data.clients.content.map((item, key) => (
                <li key={key}>
                  {" "}
                  <span> {item} </span>{" "}
                </li>
              ))}
            </ul>
          </section>

          {/* FEATURED */}

          <section id={data.awards.title} className={styles.section}>
            <div>
              <h3>{data.awards.title}</h3>
              <ul className={styles.grid}>
                {data.awards.content.map(({ link, name, label, date }, key) => (
                  <li data-scroll key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name} <br /> {label} <br /> <i>{date}</i>{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
