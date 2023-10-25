import React from "react";
import styles from "./loading.module.scss";
const Loading = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["hourglass"]}></div>
    </div>
  );
};

export default Loading;
