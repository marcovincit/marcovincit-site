import Link from "next/link";
import Body from "../components/Typography/Body";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Header from "components/Header";
import Reel from "../components/Reel";

import { SmoothScrollProvider } from "../contexts/SmoothScroll.context";

export default function IndexPage() {
  return (
    <>
      <Container>
        <Header about />
        <Grid>
          <Body>Est. 2008</Body>

          <div />

          <Body>
            São Paulo <br /> Brazil
          </Body>

          <Body align="right">hello@marcovincit.com</Body>
        </Grid>
      </Container>
      <Reel />
    </>
  );
}
