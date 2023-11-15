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

const UserHeader = () => {
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
            src={
              user.avatarUrl
                ? user.avatarUrl
                : "https://media.istockphoto.com/id/1223671392/vi/vec-to/%E1%BA%A3nh-h%E1%BB%93-s%C6%A1-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-ch%E1%BB%97-d%C3%A0nh-s%E1%BA%B5n-cho-%E1%BA%A3nh-minh-h%E1%BB%8Da-vect%C6%A1.jpg?s=612x612&w=0&k=20&c=l9x3h9RMD16-z4kNjo3z7DXVEORzkxKCMn2IVwn9liI="
            }
            alt="Profile Picture"
            width={120}
            height={120}
            style={{
              border: "1px solid #333",
              marginTop: 10,
            }}
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

export default UserHeader;
