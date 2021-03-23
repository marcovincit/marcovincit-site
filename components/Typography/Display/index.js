import styles from "./Display.module.scss";
import classNames from "classnames";

export default function Display(props) {
  const { align, as, color, children, className, number } = props;
  const TagName = as ? as : "h1";
  const classes = classNames(
    styles.Display,
    "Display",
    `${number ? styles.number : ""}`,
    {
      [`text-${color}`]: color,
      [`text-${align}`]: align,
    },
    className
  );

  return (
    <TagName data-scroll className={classes}>
      {children}
    </TagName>
  );
}
