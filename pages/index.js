import Link from "next/link";
import Body from "../components/Typography/Body";
import Container from "../components/Container";
import Grid from "../components/Grid";

import Reel from "../components/Reel";

import { SmoothScrollProvider } from "../contexts/SmoothScroll.context";

export default function IndexPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Container>
        <Grid>
          <Body>
            <Link href="/about">
              <a>Marco Vincit</a>
            </Link>
          </Body>

          <div />

          <Body>
            Just a designer <br /> who loves code <br /> and music.
          </Body>

          <Body>
            <Link href="/works">
              <a>Works →</a>
            </Link>
          </Body>
        </Grid>
        <Grid>
          <Body>© 2021</Body>

          <div />

          <Body>
            São Paulo <br /> Brazil
          </Body>

          <Body>
            hello@marcovincit.com
            <br />
            +55 11 95366.8661
          </Body>
        </Grid>
      </Container>
      <Reel />
    </SmoothScrollProvider>
  );
}
