"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import avatar from "../../../public/assets/tonton.png";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";
import { host } from "../../utils/constants";
// import { getInfo } from "../../../redux/reducer/user/getInfoSlice.js";
import styles from "./Header.module.scss";

const Header = () => {
  // const dispatch = useDispatch();
  // const [user, setUser] = useState({});
  // const getUserInfo = useSelector((state) => state.getInfo);

  // useEffect(() => {
  //   dispatch(getInfo());
  // }, []);

  // useEffect(() => {
  //   if (getUserInfo.data?.data) {
  //     setUser(getUserInfo?.data?.data);
  //   }
  // }, [getUserInfo]);

  return (
    <div className={styles.header}>
      <div className={styles.navLogo}>
        <div className={styles.nav}>
          <Link href="/" className={styles.logoImage}>
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
          <Link href={`/`}>
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
              window.location.assign(`${host}/auth/sign-in`);
            }}
          >
            <div className={styles.btns}>
              <AiOutlineLogin className={styles.icon} />
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
