import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import HomeCard from "../../components/card/HomeCard";
import { getInfo } from "../../../redux/reducer/user/getInfoSlice";
import { clean } from "../../../redux/reducer/vacation/getAllVacations";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllVacations } from "../../../redux/reducer/vacation/getAllVacations";
import { getHomeVacations } from "../../../redux/reducer/vacation/getHomeVacations";

export default function Vacations() {
  const dispatch = useDispatch();
  const [vacations, setVacations] = useState([]);
  const vacationData = useSelector((state) => state.getHomeVacations);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [user, setUser] = useState({});
  const getUserInfo = useSelector((state) => state.getInfo);
  // const [params, setParams] = useState(1);
  // const [vacationCombine, setVacationCombine] = useState([]);
  // const [initialRender, setInitialRender] = useState(true);

  const fetchData = () => {
    dispatch(
      getHomeVacations({
        payload: {
          query: {
            params: `${page}/4`,
          },
        },
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, page]);

  const fetchMoreData = () => {
    // Tăng trang lên để lấy dữ liệu mới
    setPage(page + 1);
  };

  useEffect(() => {
    console.log(page);
  }, [page]);

  console.log(vacationData);

  // useEffect(() => {
  //   dispatch(getAllVacations(vacationData));
  // }, [vacationData]);

  useEffect(() => {
    dispatch(clean());
    // setVacationCombine([]);
    dispatch(getInfo());
  }, []);

  useEffect(() => {
    if (getUserInfo.data?.data) {
      setUser(getUserInfo?.data?.data);
    }
  }, [getUserInfo]);

  // useEffect(() => {
  //   if (initialRender) {
  //     setInitialRender(false);
  //     return;
  //   }

  //   dispatch(
  //     getAllVacations({
  //       payload: {
  //         query: {
  //           params: `${params}/1`,
  //         },
  //       },
  //     })
  //   );
  // }, [params, initialRender]);

  // useEffect(() => {
  //   if (vacationData.data?.success && !vacationData?.loading) {
  //     setVacationCombine((prevVacationCombine) => {
  //       // console.log("Previous vacationCombine:", prevVacationCombine);
  //       const previousData = prevVacationCombine || [];
  //       return [...previousData, ...vacationData.data?.data];
  //     });
  //   }
  // }, [vacationData?.data?.data]);

  // // useEffect(() => {
  // //   console.log(vacationCombine);
  // // }, [vacationCombine]);

  // const handlePage = () => {
  //   setParams((prevParams) => prevParams + 1);
  // };

  return (
    <main style={{ marginTop: 80 }}>
      <Head>
        <title>Vacations</title>
      </Head>

      {/* Vacations */}
      <div className={styles.container}>
        <div className={styles.miniHeader}>
          <h1 className={styles.title}>Vacations</h1>
        </div>
        {/* <div className={styles.content}>
          {vacationCombine?.map((vacation) => (
            <HomeCard key={vacation._id} vacation={vacation} user={user} />
          ))}
        </div> */}

        {/* <InfiniteScroll
          dataLength={vacationData?.data?.data?.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {vacationData?.data?.data?.map((vacation) => (
            <HomeCard key={vacation._id} vacation={vacation} user={user} />
          ))}
        </InfiniteScroll> */}
      </div>

      <button onClick={() => fetchMoreData()}>Load More</button>
    </main>
  );
}
