import React from "react";
import Image from "next/image";
import { BiLocationPlus } from "react-icons/bi";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import Link from "next/link";
import styles from "./Post.module.scss";

const UserVacationCard = ({ vacation, user, check }) => {
  return (
    <article className={styles.wrapper}>
      <Link
        href={
          check
            ? `/vacations/${vacation._id}`
            : `/vacation-detail/${vacation._id}`
        }
      >
        <Image
          src={vacation.avatarUrl}
          alt="Vacation Photo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <Link
        href={
          check
            ? `/vacations/${vacation._id}`
            : `/vacation-detail/${vacation._id}`
        }
      >
        <h2 style={{ marginLeft: 8 }}>{vacation.title}</h2>
      </Link>
      <span className={styles.location}>
        <BiLocationPlus />
        Location: {vacation.location}
      </span>
      <div className={styles.details}>
        <span>
          {Math.floor(vacation.views / 2)} views
          <AiOutlineEye />
        </span>
        <span>
          123 reactions
          <AiOutlineLike />
        </span>
      </div>
    </article>
  );
};

export default UserVacationCard;
