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

import Photo from "components/Photo";

import parse from "html-react-parser";

export default function About() {
  const year = "2008 — 2021".split("");

  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Container>
        <Header />

        <section data-scroll-section>
          <div
            data-scroll
            data-scroll-speed={8}
            data-scroll-position="top"
            data-scroll-delay={0.1}
          >
            <hr data-scroll />
          </div>

          <Display number>
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

          <div
            data-scroll
            data-scroll-speed={5}
            data-scroll-position="top"
            data-scroll-delay={0.1}
          >
            <hr data-scroll />
          </div>
        </section>

        <Photo />

        <section data-scroll-section>
          <hr data-scroll />
          <Grid>
            <Body as="h3">{data.title}</Body>
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
          <hr data-scroll />
          <Display>
            <Link href="/works">
              <a>Works →</a>
            </Link>
          </Display>
        </section>

        <section data-scroll-section>
          <hr data-scroll />
          <Grid>
            <Body as="h3">{data.experience.title}</Body>
            <List>
              {data.experience.content.map(
                ({ name, label, date, location }, key) => (
                  <li data-scroll key={key}>
                    <Body as="span">
                      {name}
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
          <hr data-scroll />
          <Grid>
            <Body as="h3">
              {data.clients.title.map((item, key) => (
                <>
                  <span key={key}>{item}</span>
                  <br />
                </>
              ))}
            </Body>
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
          <hr data-scroll />
          <Grid>
            <Body as="h3">{data.side.title}</Body>
            <List>
              {data.side.content.map(({ link, name, type, date }, key) => (
                <li data-scroll>
                  <Body key={key} as="span">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
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
          <hr data-scroll />

          <Grid>
            <Body as="h3">{data.publications.title}</Body>

            {/* online */}
            <section>
              <Body as="h4">{data.publications.online.title}</Body>
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
                          {name}
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
              <Body as="h4">{data.publications.press.title}</Body>
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
                          {name}
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

            <svg width="100%" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" fill="var(--text-color)" />
            </svg>
          </Grid>
        </section>

        <section data-scroll-section>
          <hr data-scroll />
          <Grid>
            <Body as="h3">{data.awards.title}</Body>
            <List>
              {data.awards.content.map(({ link, name, label, date }, key) => (
                <li data-scroll>
                  <Body key={key} as="span">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                      <br />
                      {label}
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
          <hr data-scroll />
          <Display>
            <Link href="/works">
              <a> Works →</a>
            </Link>
          </Display>
        </section>

        <Footer />
      </Container>
    </SmoothScrollProvider>
  );
}
