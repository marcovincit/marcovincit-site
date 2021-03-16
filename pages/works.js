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

import Cover from "components/Cover";

import parse from "html-react-parser";

export default function Works() {
  const title = "Works ↓".split("");

  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Container>
        <Header />

        <section data-scroll-section>
          <div data-scroll data-scroll-speed={1} data-scroll-position="top">
            <Display>Works</Display>
          </div>
        </section>

        {/* list */}

        <section data-scroll-section>
          <WorkList data={works.projects} />
        </section>

        {/*  */}

        <section data-scroll-section>
          {/* <hr data-scroll /> */}
          <Display>
            <Link href="/about">
              <a>About →</a>
            </Link>
          </Display>
        </section>

        <Footer />
      </Container>
    </SmoothScrollProvider>
  );
}
