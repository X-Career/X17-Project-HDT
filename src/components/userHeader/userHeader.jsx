import React from "react";
import styles from "@/styles/user.module.scss";
import Link from "next/link";
import Image from "next/image";
import {
  BsFillPencilFill,
  BsPlus,
  BsCalendarHeart,
  BsGenderAmbiguous,
} from "react-icons/bs";

const userHeader = () => {
  return (
    <div className={styles.userHeader}>
      <div className={styles.userAvatar}>
        <Link href={`/`}>
          <Image
            src="/assets/tonton.png"
            alt="Profile Picture"
            width={132}
            height={132}
            className={styles.userImage}
          />
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 24,
            gap: 8,
          }}
        >
          <h2>FirstName LastName</h2>
          <p>@username</p>
        </div>
      </div>
      <div className={styles.userBtns}>
        <Link href="/" className={styles.button}>
          <BsPlus style={{ fontSize: "28px" }} />
          Create Vacation
        </Link>
        <Link href="/" className={styles.button}>
          <BsPlus style={{ fontSize: "28px" }} />
          Create Album
        </Link>
        <Link href="/" className={styles.button}>
          <BsFillPencilFill style={{ marginRight: 8 }} />
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default userHeader;
