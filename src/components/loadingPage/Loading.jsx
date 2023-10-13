import React from "react";
import styles from "./loading.module.scss";
const Loading = () => {
  return (
    <div class={styles["container"]}>
      <div class={styles["hourglass"]}></div>
    </div>
  );
};

export default Loading;
