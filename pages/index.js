import Link from "next/link";
import Image from "../components/Image";
import Body from "../components/Typography/Body";
import Grid from "../components/Grid";

import { SmoothScrollProvider } from "../contexts/SmoothScroll.context";

export default function IndexPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Grid>
        <div>
          <Body>Marco Vincit</Body>
          <Body>© 2021</Body>
        </div>

        <div />

        <div>
          <Body>
            Just a designer <br /> who loves code <br /> and music.
          </Body>

          <Body>
            São Paulo <br /> Brazil
          </Body>
        </div>

        <div>
          <Body>
            <Link href="about">About →</Link>
          </Body>
          <Body>Works →</Body>

          <Body>
            hello@marcovincit.com
            <br />
            +55 11 95366.8661
          </Body>
        </div>
      </Grid>
    </SmoothScrollProvider>
  );
}
