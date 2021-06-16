import styles from "./Reel.module.scss";

export default function Reel(props) {
  const { as, children } = props;
  const TagName = as ? as : "div";

  return (
    <TagName className={styles.container}>
      <video className={styles.video} autoPlay muted loop>
        <source src="home.mp4" type="video/mp4" />
      </video>
    </TagName>
  );
}
