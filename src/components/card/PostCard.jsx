import React from "react";
import Image from "next/image";
import styles from "./Post.module.scss";
import { BiLocationPlus } from "react-icons/bi";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import Link from "next/link";

const PostCard = () => {
  return (
    <article>
      <Link href="/">
        <Image
          src="/assets/paris.jpg"
          alt="Vacation Photo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <Link href="/">
        <h2>Title</h2>
      </Link>
      <span className={styles.location}>
        <BiLocationPlus />
        Location: Vac Location
      </span>
      <div className={styles.details}>
        <span>
          123 views
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

export default PostCard;
