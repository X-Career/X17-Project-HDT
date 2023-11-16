import Image from "next/image";
import styles from "../../../styles/user.module.scss";
import Link from "next/link";
import {
  BsFillPencilFill,
  BsPlus,
  BsCalendarHeart,
  BsGenderAmbiguous,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GrCircleInformation } from "react-icons/gr";
import { PiNumberCircleSevenBold } from "react-icons/pi";
import { AiOutlineArrowRight } from "react-icons/ai";
import PostCard from "../../../components/card/PostCard";
import Ad from "../../../components/card/Ad";
import UserHeader from "../../../components/userHeader/userHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getInfo } from "../../../../redux/reducer/user/getInfoSlice";
import Head from "next/head";

const User = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const getUserInfo = useSelector((state) => state.getInfo);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  useEffect(() => {
    if (getUserInfo.data?.success && !getUserInfo.loading) {
      setUser(getUserInfo?.data?.data);
    }
  }, [getUserInfo]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{user.firstName + " " + user.lastName}</title>
      </Head>
      {/* Header */}
      <UserHeader />
      <div className={styles.mainContent}>
        {/* Left */}
        <div className={styles.leftContent}>
          <h1 style={{ marginBottom: 16 }}>Your Information</h1>
          <div className={styles.userDetails}>
            <div>
              <span>
                <HiOutlineMail />
                <p>
                  <strong>Email:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.email}</p>
            </div>
            <div>
              <span>
                <BsCalendarHeart />
                <p>
                  <strong>Date of Birth:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.dateOfBirth ? user.dateOfBirth : "<No information>"}</p>
            </div>
            <div>
              <span>
                <PiNumberCircleSevenBold />
                <p>
                  <strong>Age:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.age ? user.age : "<No information>"}</p>
            </div>
            <div>
              <span>
                <BsGenderAmbiguous />
                <p>
                  <strong>Gender:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.gender ? user.gender : "<No information>"}</p>
            </div>
            <div>
              <span>
                <GrCircleInformation />
                <p>
                  <strong>Bio:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.bio ? user.bio : "Nothing to show here...yet!"}</p>
            </div>
          </div>
          <div>
            <Ad />
          </div>
        </div>

        {/* Right */}
        <div className={styles.rightContent}>
          <div className={styles.posts}>
            <h1>Your Vacations</h1>
            <div className={styles.postItem}>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
            <div style={{ margin: "0 auto", marginTop: 20 }}>
              <Link
                href={`/users/${user._id}/vacations`}
                className={styles.moreBtn}
              >
                View All
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>

          <div className={styles.albums}>
            <h1>Your Albums</h1>
            <div className={styles.postItem}>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
            <div style={{ margin: "0 auto", marginTop: 20 }}>
              <Link
                href={`/users/${user._id}/albums`}
                className={styles.moreBtn}
              >
                View All
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
