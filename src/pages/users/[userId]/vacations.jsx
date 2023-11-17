import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import HomeCard from "../../../components/card/HomeCard";
import { getInfo } from "../../../../redux/reducer/user/getInfoSlice";
import { clean } from "../../../../redux/reducer/vacation/getAllVacations";
import InfiniteScroll from "react-infinite-scroll-component";
import { getUserVacations } from "../../../../redux/reducer/vacation/getUserVacations";

const UserVacations = () => {
  const dispatch = useDispatch();
  const vacationData = useSelector((state) => state.getUserVacations);
  const getUserInfo = useSelector((state) => state.getInfo);
  const [user, setUser] = useState({});
  const [vacationCombine, setVacationCombine] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    dispatch(getUserVacations());
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(clean());
    dispatch(getInfo());
  }, []);

  useEffect(() => {
    if (getUserInfo.data?.data) {
      setUser(getUserInfo?.data?.data);
    }
  }, [getUserInfo]);

  useEffect(() => {
    if (vacationData.data?.success && !vacationData?.loading) {
      setVacationCombine((prevVacationCombine) => {
        const previousData = prevVacationCombine || [];
        const newData = vacationData.data?.data || [];

        // Check if the new data is not already present in the combined array
        const uniqueNewData = newData.filter(
          (newItem) =>
            !previousData.some((prevItem) => prevItem._id === newItem._id)
        );

        return [...previousData, ...uniqueNewData];
      });

      // Set hasMore based on whether new data is available
      setHasMore(vacationData.data?.data.length > 0);
    }
  }, [vacationData?.data?.data]);

  return (
    <main style={{ marginTop: 80 }}>
      <Head>
        <title>Your Vacations</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.miniHeader}>
          <h1 className={styles.title}>Your Vacations</h1>
        </div>

        <InfiniteScroll
          dataLength={vacationCombine.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          style={{ overflow: "hidden", marginLeft: 200 }}
        >
          {vacationCombine.map((vacation) => (
            <HomeCard key={vacation._id} vacation={vacation} user={user} />
          ))}
        </InfiniteScroll>
      </div>
    </main>
  );
};

export default UserVacations;
