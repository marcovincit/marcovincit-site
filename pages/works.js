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

import Cover from "components/Cover";

import parse from "html-react-parser";

export default function Works() {
  const title = "Works ↓".split("");

  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Container>
        <Header />

        <section data-scroll-section>
          <Display>Works ↓</Display>
        </section>

        {/* list */}

        <Cover src="/works/cover.jpg" href="#">
          Breves Bandeiras
          <br />
          Online Auction <br />
          2017
        </Cover>
        <Cover src="/works/cover.jpg" href="#">
          Breves Bandeiras
          <br />
          Online Auction <br />
          2017
        </Cover>
        <Cover src="/works/cover.jpg" href="#">
          Breves Bandeiras
          <br />
          Online Auction <br />
          2017
        </Cover>
        <Cover src="/works/cover.jpg" href="#">
          Breves Bandeiras
          <br />
          Online Auction <br />
          2017
        </Cover>
        <Cover src="/works/cover.jpg" href="#">
          Breves Bandeiras
          <br />
          Online Auction <br />
          2017
        </Cover>

        {/*  */}

        <section data-scroll-section>
          <hr data-scroll />
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
