import Link from "next/link";
import Title from "../components/Typography/Title";
import Container from "../components/Container";

import Grid from "../components/Grid";

import Header from "components/Header";
import Reel from "../components/Reel";

import parse from "html-react-parser";

import data from "data/about";

import { SmoothScrollProvider } from "../contexts/SmoothScroll.context";

import styles from "styles/Home.module.scss";
import List from "components/List";
import ListInline from "components/ListInline";
import Photo from "components/Photo";
import Circle from "components/Circle";

export default function IndexPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Container>
        <Grid>
          <div>
            Marco Vincit <br /> Design & Development
          </div>
        </Grid>

        <div className="space" />

        <Grid>
          {/* ABOUT */}
          <div>
            <Title as="h2">{data.about.title}</Title>
            <p data-scroll>
              {parse(`
              <p data-scroll>${data.about.content}</p>
              `)}
            </p>
            <span className="mark">
              ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
              ▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
            </span>
          </div>
          {/* CLIENTS */}
          <div>
            <Title as="h2">{data.clients.title}</Title>
            <ul>
              {data.clients.content.map((item, key) => (
                <li data-scroll key={key}>
                  {item}
                  {" / "}
                </li>
              ))}
            </ul>

            <span className="mark">
              ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
              ▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
            </span>
          </div>

          <div>
            {/* PRESS */}
            <Title as="h2">{data.press.title}</Title>
            <ul>
              {data.press.content.map(({ link, name, label, date }, key) => (
                <li data-scroll key={key}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {name}, {label} {date} {" / "}
                  </a>
                </li>
              ))}
            </ul>

            <span className="mark">
              ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
              ▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
            </span>

            {/* PUBLICATIONS */}
            <Title as="h2">{data.publications.title}</Title>
            <ul>
              {data.publications.content.map(
                ({ link, name, label, date }, key) => (
                  <li data-scroll key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}, {label} {date} {" / "}
                    </a>
                  </li>
                )
              )}
            </ul>
            <br />
            <Photo />
          </div>

          {/* SIDE PROJECTS */}
          <div>
            <Title as="h2">{data.side.title}</Title>
            <ul>
              {data.side.content.map(({ link, name, type, date }, key) => (
                <li data-scroll key={key}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {name}, {type} <Title as="span">{date}</Title> {" / "}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPERIENCE */}
          <div>
            <Title as="h2">{data.experience.title}</Title>
            <ul>
              {data.experience.content.map(
                ({ name, label, date, location }, key) => (
                  <li data-scroll key={key}>
                    {name}, {label}, {location} <Title as="span">{date}</Title>
                    {" / "}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* AWARDS */}
          <div>
            <Title as="h2">{data.awards.title}</Title>
            <ul>
              {data.awards.content.map(({ link, name, label, date }, key) => (
                <li data-scroll key={key}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {name}, {label} <Title as="span">{date}</Title> {" / "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Grid>

        <div className="space" />

        <Grid>
          <div />

          <div>Est. 2008</div>
          <div>Vielen Dank Herr Tschichold.</div>

          <div />

          <div>São Paulo, Brazil</div>

          <div>hi@marcovincit.com</div>
        </Grid>
      </Container>
    </SmoothScrollProvider>
  );
}
