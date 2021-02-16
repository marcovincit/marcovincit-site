import Link from "next/link";
import Grid from "components/Grid";
import Body from "components/Typography/Body";

export default function Header() {
  return (
    <header data-scroll-section>
      <Grid>
        <div
          data-scroll
          data-scroll-speed={8}
          data-scroll-position="top"
          data-scroll-delay={0.1}
        >
          <Body>
            <Link href="/">Marco Vincit</Link>
          </Body>
        </div>

        <div />

        <div
          data-scroll
          data-scroll-speed={8}
          data-scroll-position="top"
          data-scroll-delay={0.1}
        >
          <Body>
            Just a designer <br /> who loves code <br /> and music.
          </Body>
        </div>

        {/* <Body>
          <Link href="/works">
            <a>Works →</a>
          </Link>
        </Body> */}
      </Grid>
    </header>
  );
}
