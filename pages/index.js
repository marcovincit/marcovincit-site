import Link from "next/link";
import Image from "../components/Image";
import Body1 from "../components/Typography/Body1";
import Grid from "../components/Grid";

import { SmoothScrollProvider } from "../contexts/SmoothScroll.context";

export default function IndexPage() {
  return (
    <Grid>
      <div>
        <Body1>Marco Vincit</Body1>
        <Body1>© 2021</Body1>
      </div>

      <div />

      <div>
        <Body1>
          Just a designer <br /> who loves code <br /> and music.
        </Body1>

        <Body1>
          São Paulo <br /> Brazil
        </Body1>
      </div>

      <div>
        <Body1>Works →</Body1>

        <Body1>
          hello@marcovincit.com
          <br />
          +55 11 95366.8661
        </Body1>
      </div>
    </Grid>
  );
}
