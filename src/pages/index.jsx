import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowRight, AiFillPicture } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";
import HomeCard from "../components/card/HomeCard";
import styles from "@/styles/Home.module.scss";
import AlbumCard from "../components/card/AlbumCard";
import HeroCarosel from "../components/carosel/Carosel";
import { getHomeAlbum } from "../../redux/reducer/album/getHomeAlbumSlice";
import { getInfo } from "../../redux/reducer/user/getInfoSlice";
import { getHomeVacations } from "../../redux/reducer/vacation/getHomeVacations";
import { useShowFooter } from "../components/context/FooterContext";

export default function Home() {
  const { setShowHeader } = useShowFooter();
  setShowHeader(true);

  const dispatch = useDispatch();

  const vacationData = useSelector((state) => state.getHomeVacations);
  const albumData = useSelector((state) => state.getHomeAlbum);
  const [user, setUser] = useState({});
  const getUserInfo = useSelector((state) => state.getInfo);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  useEffect(() => {
    if (getUserInfo.data?.data) {
      setUser(getUserInfo?.data?.data);
    }
  }, [getUserInfo]);

  useEffect(() => {
    dispatch(
      getHomeVacations({
        payload: {
          query: {
            params: "1/6",
          },
        },
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      getHomeAlbum({
        payload: {
          query: {
            params: "1/6",
          },
        },
      })
    );
  }, []);

  const [vacations, setVacations] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (vacationData.data?.success && !vacationData?.loading) {
      setVacations(vacationData.data?.data);
    }
  }, [vacationData]);

  useEffect(() => {
    if (albumData.data?.success && !albumData?.loading) {
      setAlbums(albumData.data?.data);
    }
  }, [albumData]);

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
            {vacations?.map((vacation) => (
              <HomeCard key={vacation._id} vacation={vacation} user={user} />
            ))}
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
            {albums?.map((album) => (
              <AlbumCard key={album._id} album={album} user={user} />
            ))}
          </div>
          <div className={styles.btn}>
            <Link href="/albums/view-all" className={styles.moreBtn}>
              View More
              <AiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
