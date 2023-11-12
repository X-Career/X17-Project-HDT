import Link from "next/link";
import Image from "next/image";
import banner3 from "../../../public/assets/banner3.jpg";
import { BiSolidUser } from "react-icons/bi";
import styles from "./Card.module.scss";

const AlbumCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.leftBg}>
          <Link href={`/`}>
            <Image src={banner3} className={styles.image} alt="Image" />
          </Link>
        </div>
        <div className={styles.rightBg}></div>
      </div>
      <div className={styles.content}>
        <Link href={`/`}>
          <h2>Your Album Name</h2>
        </Link>
        <Link href={`/`} className={styles.detailsBox}>
          <BiSolidUser />
          <p style={{ fontWeight: 700 }}>From: @username</p>
        </Link>
        <p style={{ marginTop: 32 }}>
          Share with us the best photos from one of your ultimate adventure!
        </p>
      </div>
    </div>
  );
};

export default AlbumCard;
