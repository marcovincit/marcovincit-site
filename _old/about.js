import React, { useEffect, useState } from "react";
import Link from "next/link";

import data from "data/about";
import info from "data/info";

import { SmoothScrollProvider } from "contexts/SmoothScroll.context";

import Header from "components/Header";
import Footer from "components/Footer";

import Display from "components/Typography/Display";
import Body from "components/Typography/Body";

import Container from "components/Container";
import Grid from "components/Grid";
import List from "components/List";
import ListInline from "components/ListInline";

import Photo from "components/Photo";

import parse from "html-react-parser";

export default function About() {
  const year = "2008 — 2021".split("");

  return (
    <>
      <Header />
      <SmoothScrollProvider options={{ smooth: true }}>
        <Container>
          <section data-scroll-section>
            <Display as="span" number>
              {year.map((item, key) => (
                <span
                  key={key}
                  data-scroll
                  data-scroll-speed={year.length - key * 0.5}
                  data-scroll-position="top"
                  data-scroll-delay={0.1}
                >
                  {parse(item)}
                </span>
              ))}
            </Display>
          </section>

          <div className="space-5" />

          <Photo />

          <section data-scroll-section>
            <Grid>
              <div />
              <div style={{ gridColumn: "3 / 5" }}>
                <Body>
                  {data.text.map((item, key) =>
                    parse(`<span key={key}>${item}</span>`)
                  )}
                </Body>
              </div>
            </Grid>
          </section>

          <section data-scroll-section>
            <div
              data-scroll
              data-scroll-speed={0.5}
              data-scroll-position="top"
              data-scroll-delay={0.5}
            >
              <Display>{data.experience.title}</Display>
            </div>
          </section>

          <section data-scroll-section>
            <Grid>
              <div />
              <List>
                {data.experience.content.map(
                  ({ name, label, date, location }, key) => (
                    <li data-scroll key={key}>
                      <Body as="span">
                        <b>{name}</b>
                        <br />
                        {label}
                        <br />
                        {date}
                        <br />
                        {location}
                      </Body>
                    </li>
                  )
                )}
              </List>
            </Grid>
          </section>

          <section data-scroll-section>
            <div
              data-scroll
              data-scroll-speed={0.5}
              data-scroll-position="top"
              data-scroll-delay={0.5}
            >
              <Grid>
                <div />
                <Display>Clients</Display>
              </Grid>
            </div>
          </section>

          <section data-scroll-section>
            <Grid>
              <div />
              <List join>
                {data.clients.content.map((item, key) => (
                  <li data-scroll>
                    <Body key={key} style={{ paddingBottom: 0 }} as="span">
                      {item}
                    </Body>
                  </li>
                ))}
              </List>
            </Grid>
          </section>

          <section data-scroll-section>
            <div
              data-scroll
              data-scroll-speed={0.5}
              data-scroll-position="top"
              data-scroll-delay={0.5}
            >
              <Grid>
                <div />
                <Display>{data.side.title}</Display>
              </Grid>
            </div>
          </section>

          <section data-scroll-section>
            <Grid>
              <div />
              <List>
                {data.side.content.map(({ link, name, type, date }, key) => (
                  <li data-scroll>
                    <Body key={key} as="span">
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <b>{name}</b>
                        <br />
                        {type}
                        <br />
                        {date}
                      </a>
                    </Body>
                  </li>
                ))}
              </List>
            </Grid>
          </section>

          <section data-scroll-section>
            <Display>{data.publications.title}</Display>
          </section>

          <section data-scroll-section>
            <Grid>
              <div />

              {/* online */}
              <section>
                <Body as="h4">
                  <b>{data.publications.online.title}</b>
                </Body>
                <br />
                <ul>
                  {data.publications.online.content.map(
                    ({ link, name, label, date }, key) => (
                      <li data-scroll>
                        <Body key={key} as="span">
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <b>{name}</b>
                            <br />
                            {label}
                            {label ? <br /> : null}
                            {date}
                          </a>
                        </Body>
                      </li>
                    )
                  )}
                </ul>
              </section>

              {/* press */}

              <section>
                <Body as="h4">
                  <b>{data.publications.press.title}</b>
                </Body>
                <br />
                <ul>
                  {data.publications.press.content.map(
                    ({ link, name, label, date }, key) => (
                      <li data-scroll>
                        <Body key={key} as="span">
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <b>{name}</b>
                            <br />
                            {label}
                            {label ? <br /> : null}

                            {date}
                          </a>
                        </Body>
                      </li>
                    )
                  )}
                </ul>
              </section>
              <div
                data-scroll
                data-scroll-speed={3}
                data-scroll-position="center"
                data-scroll-delay={1}
              >
                <svg width="100%" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50" fill="var(--text-color)" />
                </svg>
              </div>
            </Grid>
          </section>

          <section data-scroll-section>
            <Display>
              {data.awards.title.map((item) => (
                <>
                  <div>{item}</div>
                </>
              ))}
            </Display>
          </section>

          <section data-scroll-section>
            <Grid>
              <div />
              <ListInline>
                {data.awards.content.map(({ link, name, label, date }, key) => (
                  <li data-scroll>
                    <Body key={key} as="span">
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <b>{name}</b>
                        <br />
                        {label}
                        <br />
                        {date}
                      </a>
                    </Body>
                  </li>
                ))}
              </ListInline>
            </Grid>
          </section>

          <Footer />
        </Container>
      </SmoothScrollProvider>
    </>
  );
}
