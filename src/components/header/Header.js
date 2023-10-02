"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";

const Header = () => {
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
            {/* Chỉ render khi người dùng đăng nhập hoặc có thể render trong Home
            Page */}
            {/* <Link href="/create-vacation" className={styles.navItem}>
              Create vacation
            </Link>
            <Link href="/create-album" className={styles.navItem}>
              Create album
            </Link> */}
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
          <div className={styles.auth}>
            <Link className={styles.btns} href="/sign-in">
              <AiOutlineLogin className={styles.icon} />
              Log In
            </Link>
            <Link className={styles.btns} href="/sign-up">
              <AiOutlineUserAdd className={styles.icon} />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
