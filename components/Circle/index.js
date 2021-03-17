import styles from "./Circle.module.scss";

export default function Circle(props) {
  const { as, children } = props;
  const TagName = as ? as : "div";

  return <TagName className={styles.container}>{children}</TagName>;
}
