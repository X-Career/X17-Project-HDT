import React from "react";
import styles from "./LeftSidebar.module.scss";
import Link from "next/link";
import { BsPencil } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { MdOutlineAddReaction } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

const LeftSidebar = () => {
  return (
    <div className={styles.leftSidebar}>
      <div className={styles.navItems}>
        <Link href="/latest" className={styles.navItem}>
          <BsPencil className={styles.navIcon} />
          <p>Latest</p>
        </Link>
        <Link href="/most-viewed" className={styles.navItem}>
          <GrView className={styles.navIcon} />
          <p>Most Viewed</p>
        </Link>
        <Link href="/most-reactions" className={styles.navItem}>
          <MdOutlineAddReaction className={styles.navIcon} />
          <p>Most Reactions</p>
        </Link>
        <Link href="/about" className={styles.navItem}>
          <AiOutlineInfoCircle className={styles.navIcon} />
          <p>About Us</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
