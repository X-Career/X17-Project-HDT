import Link from "next/link";
import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BsFillCalendarFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import styles from "./Card.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomeCard = ({ vacation, user }) => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(null);

  useEffect(() => {
    if (user._id === vacation.host._id) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [user, vacation]);

  return (
    <div className={styles.container} style={{ marginBottom: "2rem" }}>
      <div className={styles.background}>
        <div className={styles.leftBg}>
          <Link
            href={
              check
                ? `/vacations/${vacation._id}`
                : `/vacation-detail/${vacation._id}`
            }
          >
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
        <Link
          href={
            check
              ? `/vacations/${vacation._id}`
              : `/vacation-detail/${vacation._id}`
          }
        >
          <h2>{vacation.title}</h2>
        </Link>
        <Link
          href={`/users/${vacation.host._id}`}
          className={styles.detailsBox}
        >
          <BiSolidUser />
          <p style={{ fontWeight: 700 }}>Host by: @{vacation.host.username}</p>
        </Link>
        <div className={styles.detailsBox}>
          <MdLocationOn />
          <p>Location: {vacation.location}</p>
        </div>
        <div className={styles.detailsBox}>
          <IoEyeSharp />
          <p>Views: {Math.floor(vacation.views / 2)}</p>
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
