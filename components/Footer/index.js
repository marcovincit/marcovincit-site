import Link from "next/link";
import Grid from "components/Grid";
import Body from "components/Typography/Body";

export default function Footer() {
  function gotoTop(e) {
    e.preventDefault;
    window.scrollTo(0, 0);
    console.log("hey");
  }
  return (
    <footer data-scroll-section>
      <hr data-scroll />
      <Grid>
        <div style={{ gridColumn: "2 /  1 span" }}>
          <Body>© 2021 </Body>
        </div>

        <div style={{ gridColumn: "3 /  2 span" }}>
          <Body>
            Marco Vincit 👨🏻‍💻
            <br />
            Vielen Dank Herr Tschichold.
          </Body>
        </div>
      </Grid>
    </footer>
  );
}
