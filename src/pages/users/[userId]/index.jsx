import Image from "next/image";
import styles from "../../../styles/user.module.scss";
import Link from "next/link";
import {
  BsFillPencilFill,
  BsPlus,
  BsCalendarHeart,
  BsGenderAmbiguous,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GrCircleInformation } from "react-icons/gr";
import { PiNumberCircleSevenBold } from "react-icons/pi";
import { AiOutlineArrowRight } from "react-icons/ai";
import UserVacationCard from "../../../components/card/UserVacationCard";
import UserAlbumCard from "../../../components/card/UserAlbumCard";
import Ad from "../../../components/card/Ad";
import UserHeader from "../../../components/userHeader/userHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Head from "next/head";
import { getUsersInfo } from "../../../../redux/reducer/user/getUsersInfoSlice";
import { getInfo } from "../../../../redux/reducer/user/getInfoSlice";
import { getProfileVacations } from "../../../../redux/reducer/vacation/getProfileVacations";
import { getOtherUserAlbum } from "../../../../redux/reducer/album/getOtherUserAlbumSlice";
import { useRouter } from "next/router";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({});
  const [crrUser, setCrrUser] = useState({});
  const { userId } = router.query;
  const resGetUsersInfo = useSelector((state) => state.getUsersInfo);
  const getUserInfo = useSelector((state) => state.getInfo);
  const vacationData = useSelector((state) => state.getProfileVacations);
  const albumData = useSelector((state) => state.getOtherUserAlbum);
  const [vacations, setVacations] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  useEffect(() => {
    if (getUserInfo.data?.data) {
      setCrrUser(getUserInfo?.data?.data);
    }
  }, [getUserInfo]);

  useEffect(() => {
    if (userId) {
      dispatch(
        getUsersInfo({
          payload: {
            query: {
              params: userId,
            },
          },
        })
      );
    }
  }, [userId]);

  useEffect(() => {
    if (resGetUsersInfo.data?.success && !resGetUsersInfo.loading) {
      setUser(resGetUsersInfo?.data?.data);
    }
  }, [resGetUsersInfo]);

  const [check, setCheck] = useState(null);
  useEffect(() => {
    if (user._id === crrUser._id) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [user, crrUser]);

  useEffect(() => {
    dispatch(
      getProfileVacations({
        payload: {
          query: {
            params: "1/6",
          },
        },
      })
    );
  }, []);

  // useEffect(() => {
  //   dispatch(
  //     getOtherUserAlbum({
  //       payload: {
  //         query: {
  //           params: ,
  //         },
  //       },
  //     })
  //   );
  // }, []);

  useEffect(() => {
    if (vacationData.data?.success && !vacationData?.loading) {
      setVacations(vacationData.data?.data);
    }
  }, [vacationData]);

  // useEffect(() => {
  //   if (albumData.data?.success && !albumData?.loading) {
  //     setAlbums(albumData.data?.data);
  //   }
  // }, [albumData]);

  // console.log(vacationData);

  return (
    <div className={styles.container}>
      <Head>
        <title>{user.firstName + " " + user.lastName}</title>
      </Head>
      {/* Header */}
      <UserHeader user={user} check={check} />
      <div className={styles.mainContent}>
        {/* Left */}
        <div className={styles.leftContent}>
          <h1 style={{ marginBottom: 16 }}>Your Information</h1>
          <div className={styles.userDetails}>
            <div>
              <span>
                <HiOutlineMail />
                <p>
                  <strong>Email:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.email}</p>
            </div>
            <div>
              <span>
                <BsCalendarHeart />
                <p>
                  <strong>Date of Birth:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.dateOfBirth ? user.dateOfBirth : "<No information>"}</p>
            </div>
            <div>
              <span>
                <PiNumberCircleSevenBold />
                <p>
                  <strong>Age:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.age ? user.age : "<No information>"}</p>
            </div>
            <div>
              <span>
                <BsGenderAmbiguous />
                <p>
                  <strong>Gender:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.gender ? user.gender : "<No information>"}</p>
            </div>
            <div>
              <span>
                <GrCircleInformation />
                <p>
                  <strong>Bio:</strong>
                </p>
              </span>
              &nbsp; &nbsp;
              <p>{user.bio ? user.bio : "Nothing to show here...yet!"}</p>
            </div>
          </div>
          <div>
            <Ad />
          </div>
        </div>

        {/* Right */}
        <div className={styles.rightContent}>
          <div className={styles.posts}>
            <h1>Your Vacations</h1>
            <div className={styles.postItem}>
              {vacations?.map((vacation) => (
                <UserVacationCard
                  key={vacation._id}
                  vacation={vacation}
                  user={user}
                />
              ))}
            </div>
            <div style={{ margin: "0 auto", marginTop: 20 }}>
              <Link
                href={`/users/${user._id}/vacations`}
                className={styles.moreBtn}
              >
                View All
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>

          <div className={styles.albums}>
            <h1>Your Albums</h1>
            <div className={styles.postItem}>
              <UserAlbumCard />
              <UserAlbumCard />
              <UserAlbumCard />
              <UserAlbumCard />
              <UserAlbumCard />
              <UserAlbumCard />
            </div>
            <div style={{ margin: "0 auto", marginTop: 20 }}>
              <Link
                href={check ? "/albums" : "/albums/view-person"}
                className={styles.moreBtn}
                onClick={() => {
                  localStorage.setItem("otherUserId", user._id);
                }}
              >
                View More
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
