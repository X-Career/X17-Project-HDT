import React, { useEffect, useState } from "react";
import styles from "@/styles/user.module.scss";
import Link from "next/link";
import Image from "next/image";
import {
  BsFillPencilFill,
  BsPlus,
  BsCalendarHeart,
  BsGenderAmbiguous,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../../redux/reducer/user/getInfoSlice";

const userHeader = () => {
  const dispatch = useDispatch();
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
    <div className={styles.userHeader}>
      <div className={styles.userAvatar}>
        <Link href={`/`}>
          <Image
            src={user.avatarUrl ? user.avatarUrl : "/assets/tonton.png"}
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
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <p>@{user.username}</p>
        </div>
      </div>
      <div className={styles.userBtns}>
        <Link href="/create-vacation" className={styles.button}>
          <BsPlus style={{ fontSize: "28px" }} />
          Create Vacation
        </Link>
        <Link href="/create-album" className={styles.button}>
          <BsPlus style={{ fontSize: "28px" }} />
          Create Album
        </Link>
        <Link href="/users/update-info" className={styles.button}>
          <BsFillPencilFill style={{ marginRight: 8 }} />
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default userHeader;
