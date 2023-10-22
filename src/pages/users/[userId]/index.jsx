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

const User = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
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
