import Link from "next/link";
import Image from "next/image";
import banner2 from "../../../public/assets/banner2.jpg";
import { BiSolidUser } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BsFillCalendarFill } from "react-icons/bs";
import styles from "./Card.module.scss";

const HomeCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.leftBg}>
          <Link href={`/`}>
            <Image src={banner2} className={styles.image} alt="Image" />
          </Link>
        </div>
        <div className={styles.rightBg}></div>
      </div>
      <div className={styles.content}>
        <Link href={`/`}>
          <h2>Your vacation title</h2>
        </Link>
        <Link href={`/`} className={styles.detailsBox}>
          <BiSolidUser />
          <p style={{ fontWeight: 700 }}>Host: @username</p>
        </Link>
        <div className={styles.detailsBox}>
          <MdLocationOn />
          <p>Location: </p>
        </div>
        <div className={styles.detailsBox}>
          <BsFillCalendarFill />
          <span>From Start Date to End Date (nếu có)</span>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
