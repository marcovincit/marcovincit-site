import styles from "./Display.module.scss";
import classNames from "classnames";

export default function Display(props) {
  const { align, as, color, children, className } = props;
  const TagName = as ? as : "h1";
  const classes = classNames(
    styles.Display,
    "Display",
    {
      [`text-${color}`]: color,
      [`text-${align}`]: align,
    },
    className
  );

  return <TagName className={classes}>{children}</TagName>;
}
