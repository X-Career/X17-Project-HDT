import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineArrowRight, AiFillPicture } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";
import HomeCard from "../components/card/HomeCard";
import styles from "@/styles/Home.module.scss";
import AlbumCard from "../components/card/AlbumCard";
import HeroCarosel from "../components/carosel/Carosel";
import { useShowFooter } from "../components/context/FooterContext";

export default function Home() {
  const { setShowHeader } = useShowFooter();
  setShowHeader(true);
  
  console.error = () => {};
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.main}>
        <HeroCarosel />

        <div className={styles.heroBtn}>
          <Link href={`/create-vacation`}>
            <button className={styles.moreBtn}>
              Create Vacation
              <BsFillPencilFill />
            </button>
          </Link>
          <Link href={`/create-album`}>
            <button className={styles.moreBtn}>
              Create Album
              <AiFillPicture />
            </button>
          </Link>
        </div>

        {/* Vacations */}
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
            <Link href="/vacations" className={styles.moreBtn}>
              View More
              <AiOutlineArrowRight />
            </Link>
          </div>
        </div>

        {/* Albums */}
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
            <Link href="/albums" className={styles.moreBtn}>
              View More
              <AiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
