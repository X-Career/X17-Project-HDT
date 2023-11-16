import Link from "next/link";
import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BsFillCalendarFill } from "react-icons/bs";
import styles from "./Card.module.scss";

const HomeCard = ({ vacation, user }) => {
  return (
    <div className={styles.container} style={{ marginBottom: "2rem" }}>
      <div className={styles.background}>
        <div className={styles.leftBg}>
          <Link href={`/vacations/${vacation._id}`}>
            <Image
              src={vacation.avatarUrl}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className={styles.image}
            />
          </Link>
        </div>
        <div className={styles.rightBg}></div>
      </div>
      <div className={styles.content}>
        <Link href={`/vacations/${vacation._id}`}>
          <h2>{vacation.title}</h2>
        </Link>
        <Link href={`/users/${user._id}`} className={styles.detailsBox}>
          <BiSolidUser />
          <p style={{ fontWeight: 700 }}>Host by: @{vacation.host.username}</p>
        </Link>
        <div className={styles.detailsBox}>
          <MdLocationOn />
          <p>Location: {vacation.location}</p>
        </div>
        <div className={styles.detailsBox}>
          <BsFillCalendarFill />
          <span>
            From {new Date(vacation.startDay).toString().slice(4, 15)}
            &nbsp; to {new Date(vacation.endDay).toString().slice(4, 15)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
