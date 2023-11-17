import React, { use, useEffect, useRef, useState } from "react";
import styles from "./vacationDetail.module.scss";
import { dataEx } from "../../utils";
import { formatCustomDate } from "../../utils";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loading from "../../components/loadingPage/Loading";
import { getVacation } from "../../../redux/reducer/vacation/vacationDetail";
import MilestoneReadOnly from "../../components/MilestoneDetails";
import { FaHeart } from "react-icons/fa";
import { checkReaction } from "../../../redux/reducer/reaction/checkReactionSlice";
import { createReaction } from "../../../redux/reducer/reaction/createReactionSlice";

import Comment from "../../components/comment";
const VacationDetail = () => {
  const dispatch = useDispatch();
  const [success, setSucsses] = useState(false);
  const router = useRouter();
  const [check, setcheck] = useState(false);
  const [count, setCount] = useState(0);
  const checkReactionData = useSelector(
    (state) => state.checkReactionSlice.data
  );
  const createReactionData = useSelector((state) => state.createReaction.data);
  const { id } = router.query;
  useEffect(() => {
    if (checkReactionData?.data && checkReactionData.message === "success") {
      setcheck(checkReactionData.data?.like);
      setCount(checkReactionData.data?.total);
    }
  }, [checkReactionData]);
  useEffect(() => {
    if (createReactionData?.data && createReactionData.success) {
      dispatch(
        checkReaction({
          payload: {
            query: {
              params: id,
            },
          },
        })
      );
    }
  }, [createReactionData]);
  useEffect(() => {
    if (id) {
      dispatch(
        getVacation({
          payload: {
            query: {
              params: id,
            },
          },
        })
      );
      dispatch(
        checkReaction({
          payload: {
            query: {
              params: id,
            },
          },
        })
      );
    }
  }, [id, dispatch]);

  const vacationData = useSelector((state) => state.vacationDetail.data);
  useEffect(() => {
    if (vacationData) {
      if (vacationData.message === "success" && vacationData.success == true) {
        setSucsses(true);
      }
    }
  }, [vacationData]);
  const handleLike = () => {
    setcheck(!check);
    dispatch(
      createReaction({
        payload: {
          query: {
            params: id,
          },
        },
      })
    );
  };

  return (
    <>
      {success ? (
        <div className={styles["container"]}>
          <Head>
            <title>Vacations</title>
          </Head>
          <div className={styles["header"]}>
            <div className={styles.coverImg}>
              <Link
                href={`/users/${vacationData?.data?.host?._id}`}
                className={styles.coverImg}
              >
                <Image
                  src={vacationData?.data?.avatarUrl}
                  alt="coverImg"
                  width={2000}
                  height={2000}
                />
              </Link>
            </div>
            <div className={styles["userinfo"]}>
              <div className={styles["userinfo-leftSide"]}>
                <Image
                  src={
                    vacationData?.data?.host?.avatarUrl !== ""
                      ? vacationData?.data?.host?.avatarUrl
                      : dataEx.host.avatarUrl
                  }
                  alt=""
                  width={50}
                  height={50}
                />
                <div className={styles["textInfo"]}>
                  <Link
                    href={`/users/${vacationData?.data?.host?._id}`}
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    {vacationData?.data?.host?.username}
                  </Link>
                  <p>
                    {formatCustomDate(vacationData?.data?.createdAt)} •
                    {Math.floor(vacationData?.data?.views / 2)} views
                  </p>
                </div>
              </div>
              <div className={styles["userinfo-rightSide"]}>
                {check ? (
                  <FaHeart style={{ color: "red" }} onClick={handleLike} />
                ) : (
                  <AiOutlineHeart onClick={handleLike} />
                )}
                <span>{count}</span>
              </div>
            </div>
            <div className={styles["description"]}>
              <h1>{vacationData?.data?.title}</h1>
              <p>{vacationData?.data?.description}</p>
            </div>
          </div>
          <div className={styles["milestoneContent"]}>
            <MilestoneReadOnly vacationId={id} />
          </div>
          <div className={styles["comment"]}>
            <div className={styles["commentZone"]}>
              <Comment vacationId={id} />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default VacationDetail;
