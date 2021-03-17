import styles from "./HoverLink.module.scss";
import { useState } from "react";

export default function HoverLink({ label }) {
  const word = label.split("");
  return (
    <span className={styles.container}>
      {word.map((item) => (
        <span>{item}</span>
      ))}
    </span>
  );
}
