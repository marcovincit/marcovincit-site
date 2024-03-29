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

     
       
        <main className={styles.grid}>


          {/* ABOUT */}
          <section id={data.about.title} className={styles.section}>
            <h3>{data.about.title}</h3>

            <div>
              {data.about.content.map((paragraph, key) => (
                <p key={key}>{parse(paragraph)}</p>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id={data.experience.title} className={styles.section}>
            <h3>{data.experience.title}</h3>
            <ul>
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
            <ul>
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

          {/* CLIENTS */}
          <section id={data.clients.title} className={styles.section}>
            <h3>{data.clients.title}</h3>

            <ul>
              {data.clients.content.map((item, key) => (
                <li className={styles.noListMargin} key={key}>
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
              <ul>
                {data.awards.content.map(({ link, name, label, date }, key) => key < 9 ? (
                    
                
                  <li data-scroll key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name} <br /> {label} <br /> <i>{date}</i>{" "}
                    </a>
                  </li>
                  
                  
                  
                  
                ): "")}
                
                <li>+{data.awards.content.length - 9}</li>
              </ul>
            </div>
          </section>
        </main>
   

      <Footer />
    </>
  );
}
