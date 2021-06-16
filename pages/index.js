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
            <Title>{data.about.title}</Title>

            <p data-scroll>
              {parse(`
              <p data-scroll>${data.about.content}</p>
              `)}
            </p>
          </div>

          {/* CLIENTS */}
          <div>
            <Title>{data.clients.title}</Title>
            <List join>
              {data.clients.content.map((item, key) => (
                <li data-scroll key={key}>
                  {item}
                </li>
              ))}
            </List>
          </div>

          <div
            style={{
              gridColumn: `3 / 5`,
            }}
          >
            <Grid col={2}>
              {/* PRESS */}
              <div>
                <Title>{data.press.title}</Title>
                {data.press.content.map(({ link, name, label, date }, key) => (
                  <li data-scroll key={key}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                      <br />
                      {label}
                      {label ? <br /> : null}

                      {date}
                    </a>
                  </li>
                ))}
              </div>

              {/* PUBLICATIONS */}
              <div>
                <Title>{data.publications.title}</Title>
                {data.publications.content.map(
                  ({ link, name, label, date }, key) => (
                    <li data-scroll key={key}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {name}
                        <br />
                        {label}
                        {label ? <br /> : null}

                        {date}
                      </a>
                    </li>
                  )
                )}
              </div>

              {/* PHOTO */}
              <Photo />
            </Grid>
          </div>

          {/* SIDE PROJECTS */}
          <div>
            <Title>{data.side.title}</Title>
            {data.side.content.map(({ link, name, type, date }, key) => (
              <li data-scroll key={key}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <b>{name}</b>
                  <br />
                  {type}
                  <br />
                  {date}
                </a>
              </li>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div>
            <Title>{data.experience.title}</Title>
            {data.experience.content.map(
              ({ name, label, date, location }, key) => (
                <li data-scroll key={key}>
                  {name}
                  <br />
                  {label}
                  <br />
                  {date}
                  <br />
                  {location}
                </li>
              )
            )}
          </div>
        </Grid>

        <div className="space" />

        <Grid>
          {/* AWARDS */}

          <div className={styles.ListInline}>
            <Title>{data.awards.title}</Title>
            <ListInline>
              {data.awards.content.map(({ link, name, label, date }, key) => (
                <li data-scroll key={key}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {name}
                    <br />
                    {label}
                    <br />
                    {date}
                  </a>
                </li>
              ))}
            </ListInline>
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
