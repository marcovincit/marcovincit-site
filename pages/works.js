import React, { useEffect, useState } from "react";
import Link from "next/link";

import works from "data/works";

import { SmoothScrollProvider } from "contexts/SmoothScroll.context";

import Header from "components/Header";
import Footer from "components/Footer";

import Display from "components/Typography/Display";
import Body from "components/Typography/Body";

import Container from "components/Container";
import Grid from "components/Grid";
import WorkList from "components/WorkList";
import Circle from "components/Circle";

import HoverLink from "components/HoverLink";

import Cover from "components/Cover";

import parse from "html-react-parser";

export default function Works() {
  const title = "Works ↓".split("");

  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Container>
        <Header about />

        <section data-scroll-section>
          <div data-scroll data-scroll-speed={1} data-scroll-position="top">
            <Display>Works</Display>
          </div>
        </section>

        <div className="space-11" />

        <section data-scroll-section>
          <WorkList data={works.projects} />
        </section>

        <section data-scroll-section>
          <Circle />
        </section>

        <section data-scroll-section>
          <Display>
            <Link href="/about">
              <a>
                <HoverLink label="About →" />
              </a>
            </Link>
          </Display>
        </section>

        <Footer />
      </Container>
    </SmoothScrollProvider>
  );
}
