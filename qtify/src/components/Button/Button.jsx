import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return <button className={styles.navbarButton}>{props.children}</button>;
}

export default Button;
