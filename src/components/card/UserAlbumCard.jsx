import React from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import styles from "./Post.module.scss";

const UserAlbumCard = ({ album, user, check }) => {
  return (
    <article className={styles.wrapper}>
      <Link
        href={
          check ? `/albums/${album._id}` : `/albums/view-person/${album._id}`
        }
      >
        <Image
          src={album.coverUrl}
          alt="Album Photo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <Link
        href={
          check ? `/albums/${album._id}` : `/albums/view-person/${album._id}`
        }
      >
        <h2 style={{ marginLeft: 8 }}>{album.albumName}</h2>
      </Link>
      <div className={styles.privacy}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            gap: 4,
          }}
        >
          <MdLockOutline style={{ fontSize: 16 }} />
          Privacy: {album.privacy}
        </div>
      </div>
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

export default UserAlbumCard;
