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

const User = () => {
  return (
    <div className={styles.container}>
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
                <p>Email:</p>
              </span>
              &nbsp; &nbsp;
              <p>User Email</p>
            </div>
            <div>
              <span>
                <BsCalendarHeart />
                <p>Date of Birth:</p>
              </span>
              &nbsp; &nbsp;
              <p>User Date</p>
            </div>
            <div>
              <span>
                <PiNumberCircleSevenBold />
                <p>Age:</p>
              </span>
              &nbsp; &nbsp;
              <p>User Age</p>
            </div>
            <div>
              <span>
                <BsGenderAmbiguous />
                <p>Gender:</p>
              </span>
              &nbsp; &nbsp;
              <p>User Gender</p>
            </div>
            <div>
              <span>
                <GrCircleInformation />
                <p>Bio:</p>
              </span>
              &nbsp; &nbsp;
              <p>User Bio</p>
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
              <Link href="/" className={styles.moreBtn}>
                View More
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
              <Link href="/" className={styles.moreBtn}>
                View More
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
