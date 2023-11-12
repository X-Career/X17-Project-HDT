"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import avatar from "../../../public/assets/tonton.png";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";
import { getInfo } from "../../../redux/reducer/user/getInfoSlice";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

const NewHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({});
  const getUserInfo = useSelector((state) => state.getInfo);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  useEffect(() => {
    if (getUserInfo.data?.data) {
      setUser(getUserInfo?.data?.data);
    }
  }, [getUserInfo]);

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
            <Link href="/create-vacation" className={styles.navItem}>
              Create Vacation
            </Link>
            <Link href="/create-album" className={styles.navItem}>
              Create Album
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
          {user ? (
            <div className={styles.authSection}>
              <Link href={`/users/${user._id}`}>
                <Image
                  src={
                    user.avatarUrl
                      ? user.avatarUrl
                      : "https://media.istockphoto.com/id/1223671392/vi/vec-to/%E1%BA%A3nh-h%E1%BB%93-s%C6%A1-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-ch%E1%BB%97-d%C3%A0nh-s%E1%BA%B5n-cho-%E1%BA%A3nh-minh-h%E1%BB%8Da-vect%C6%A1.jpg?s=612x612&w=0&k=20&c=l9x3h9RMD16-z4kNjo3z7DXVEORzkxKCMn2IVwn9liI="
                  }
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
              </Link>
              <div
                className={styles.auth}
                onClick={() => {
                  localStorage.clear();
                  router.push(`/auth/sign-in`);
                }}
              >
                <div className={styles.btns}>
                  <AiOutlineLogin className={styles.icon} />
                  Log Out
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.authSection}>
              <Link href={`/sign-in`}>
                <div className={styles.btns}>Log In</div>
              </Link>
              <Link href={`/sign-up`}>
                <div className={styles.btns}>Sign Up</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
