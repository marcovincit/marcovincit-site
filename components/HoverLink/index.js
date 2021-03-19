import styles from "./HoverLink.module.scss";

import parse from "html-react-parser";

export default function HoverLink({ label }) {
  const word = label.split("");

  return (
    <span className={styles.container}>
      <span>
        {word.map((item) => (
          <span>{item === " " ? parse("&nbsp;") : item}</span>
        ))}
      </span>
      <span>
        {word.map((item) => (
          <span>{item === " " ? parse("&nbsp;") : item}</span>
        ))}
      </span>
    </span>
  );
}
