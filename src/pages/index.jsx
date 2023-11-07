import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteLogin } from "../../redux/reducer/resetState/deleteLogin";
import { deleteUpdateInfo } from "../../redux/reducer/resetState/deleteUpdateInfo";
import { AiOutlineArrowRight } from "react-icons/ai";
import Head from "next/head";
import Link from "next/link";
import Carousel from "../components/Carousel/Carousel";
import HomeCard from "../components/card/HomeCard";
import styles from "@/styles/Home.module.scss";
import AlbumCard from "../components/card/AlbumCard";

export default function Home() {
  const dispatch = useDispatch();
  console.error = () => {};
  useEffect(() => {
    dispatch(deleteLogin());
    dispatch(deleteUpdateInfo());
  }, []);
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.main}>
        {/* Carosel */}
        {/* <Carousel /> */}

        {/* Vacations  */}
        <div className={styles.container}>
          <div className={styles.miniHeader}>
            <h1 className={styles.title}>Vacations</h1>
          </div>
          <div className={styles.content}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
          <div className={styles.btn}>
            <Link href="/" className={styles.moreBtn}>
              View More
              <AiOutlineArrowRight />
            </Link>
          </div>
        </div>

        {/* Albums  */}
        <div className={styles.albumContainer}>
          <div className={styles.miniHeader}>
            <h1 className={styles.title}>Albums</h1>
          </div>
          <div className={styles.content}>
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
          </div>
          <div className={styles.btn}>
            <Link href="/" className={styles.moreBtn}>
              View More
              <AiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
