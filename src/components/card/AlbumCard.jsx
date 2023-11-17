import Link from "next/link";
import Image from "next/image";
import banner3 from "../../../public/assets/banner3.jpg";
import { BiSolidUser } from "react-icons/bi";
import styles from "./Card.module.scss";
import { useEffect, useState } from "react";

const AlbumCard = ({ album, user }) => {
  const [check, setCheck] = useState(null);

  useEffect(() => {
    if (user._id === album.userId._id) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [user, album]);

  // console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.leftBg}>
          <Link
            href={
              check
                ? `/albums/${album._id}`
                : `/albums/view-person/${album._id}`
            }
          >
            <Image
              src={album.coverUrl}
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
            check ? `/albums/${album._id}` : `/albums/view-person/${album._id}`
          }
        >
          <h2>{album.albumName}</h2>
        </Link>
        <Link href={`/users/${album.userId._id}`} className={styles.detailsBox}>
          <BiSolidUser />
          <p style={{ fontWeight: 700 }}>From: {album.owner}</p>
        </Link>
        <p style={{ marginTop: 32 }}>
          Share with us the best photos from one of your ultimate adventure!
        </p>
      </div>
    </div>
  );
};

export default AlbumCard;
