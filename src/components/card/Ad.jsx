import React from "react";
import Image from "next/image";
import cosmetic from "../../../public/assets/cosmetics.jpg";
import equipments from "../../../public/assets/equipments.jpg";
import styles from "./Ad.module.scss";

const Ad = () => {
  return (
    <div className={styles.adWrapper}>
      <div className={styles.ad}>
        <div>
          <Image
            src={cosmetic}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Image"
          />
        </div>
        <div className={styles.adDetails}>
          <p>Get your favorite cosmetics from the most famous brands!</p>
          <h3 style={{ marginBottom: 12 }}>Buy now!</h3>
        </div>
      </div>
      <div className={styles.ad}>
        <div>
          <Image
            src={equipments}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Image"
          />
        </div>
        <div className={styles.adDetails}>
          <p>Browse the finest equipments for your ideal trip!</p>
          <h3 style={{ marginBottom: 12 }}>Explore now!</h3>
        </div>
      </div>
    </div>
  );
};

export default Ad;
