import React, { useEffect, useState } from "react";
import data from "../data/about";

import { SmoothScrollProvider } from "../contexts/SmoothScroll.context";

import Display from "../components/Typography/Display";
import Body from "../components/Typography/Body";
import Container from "../components/Container";
import Grid from "../components/Grid";
import List from "../components/List";

export default function About() {
  // const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // setAboutData(data);
  }, []);

  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <div data-scroll-section>
        <div>
          <Container as="section">
            <div>
              <hr />
              <Display>2008 — 2021</Display>
              <hr />
            </div>
          </Container>

          {/* experience */}
          <Container as="section">
            <hr />
            <Grid>
              <Body as="h3">{data.experience.title}</Body>
              <List>
                {data.experience.content.map(
                  ({ name, label, date, location }, key) => (
                    <Body key={key} as="li">
                      {name}
                      <br />
                      {label}
                      <br />
                      {date}
                      <br />
                      {location}
                    </Body>
                  )
                )}
              </List>
            </Grid>
          </Container>

          {/* clients */}
          <Container as="section">
            <hr />
            <Grid>
              <Body as="h3">
                {data.clients.title.map((item) => (
                  <>
                    {item} <br />
                  </>
                ))}
              </Body>
              <List>
                {data.clients.content.map((item, key) => (
                  <Body key={key} as="li" style={{ paddingBottom: 0 }}>
                    {item}
                  </Body>
                ))}
              </List>
            </Grid>
          </Container>

          {/* side projects */}
          <Container as="section">
            <hr />
            <Grid>
              <Body as="h3">{data.side.title}</Body>
              <List>
                {data.side.content.map(({ link, name, type, date }, key) => (
                  <Body key={key} as="li">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                      <br />
                      {type}
                      <br />
                      {date}
                    </a>
                  </Body>
                ))}
              </List>
            </Grid>
          </Container>

          {/* publications */}
          <Container as="section">
            <hr />
            <Grid>
              <Body as="h3">{data.publications.title}</Body>

              <section>
                <Body as="h4">{data.publications.online.title}</Body>
                <br />
                <ul>
                  {data.publications.online.content.map(
                    ({ link, name, label, date }, key) => (
                      <Body key={key} as="li">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {name}
                          <br />
                          {label}
                          {label ? <br /> : null}
                          {date}
                        </a>
                      </Body>
                    )
                  )}
                </ul>
              </section>

              <section>
                <Body as="h4">{data.publications.press.title}</Body>
                <br />
                <ul>
                  {data.publications.press.content.map(
                    ({ link, name, label, date }, key) => (
                      <Body key={key} as="li">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {name}
                          <br />
                          {label}
                          {label ? <br /> : null}

                          {date}
                        </a>
                      </Body>
                    )
                  )}
                </ul>
              </section>
            </Grid>
          </Container>

          {/* awards */}
          <Container as="section">
            <hr />
            <Grid>
              <Body as="h3">{data.awards.title}</Body>
              <List>
                {data.awards.content.map(({ link, name, label, date }, key) => (
                  <Body key={key} as="li">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                      <br />
                      {label}
                      <br />
                      {date}
                    </a>
                  </Body>
                ))}
              </List>
            </Grid>
          </Container>
        </div>
      </div>
    </SmoothScrollProvider>
  );
}
