"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import avatar from "../../../public/assets/tonton.png";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.navLogo}>
        <div className={styles.nav}>
          <Link href="/" className={styles.logoImage}>
            {/* <Image
            src="/assets/travel-logo.png"
            alt="logo"
            width={28}
            height={28}
          /> */}
            <p className={styles.logoName}>TravelBlog</p>
          </Link>
          <div className={styles.navBar}>
            <Link href="/" className={styles.navItem}>
              Home
            </Link>
            <Link href="/vacations" className={styles.navItem}>
              Vacations
            </Link>
            <Link href="/albums" className={styles.navItem}>
              Albums
            </Link>
          </div>
        </div>

        <div className={styles.userBar}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.search}
            />
            <BiSearch className={styles.searchIcon} />
          </div>
          <Link href={`/users/1`}>
            <Image
              src={avatar}
              width={40}
              height={40}
              className={styles.avatar}
            />
          </Link>
          <div
            className={styles.auth}
            onClick={() => {
              localStorage.clear();
              router.push("/auth/sign-in");
            }}
          >
            <Link className={styles.btns} href="/auth/sign-in">
              <AiOutlineLogin className={styles.icon} />
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
