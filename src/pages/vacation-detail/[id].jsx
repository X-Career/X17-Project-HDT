import React, { use, useEffect, useRef, useState } from "react";
import styles from "./vacationDetail.module.scss";
import { dataEx } from "../../utils";
import { formatCustomDate } from "../../utils";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loading from "../../components/loadingPage/Loading";
import { getVacation } from "../../../redux/reducer/vacation/vacationDetail";
import MilestoneReadOnly from "../../components/MilestoneDetails";

import Comment from "../../components/comment";
const VacationDetail = () => {
  const dispatch = useDispatch();
  const [success, setSucsses] = useState(false);
  const router = useRouter();

  const { id } = router.query;
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

  return (
    <>
      {success ? (
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <div className={styles.coverImg}>
              <Image
                src={vacationData?.data?.avatarUrl}
                alt="coverImg"
                width={200}
                height={200}
              />
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
                  <p>{vacationData?.data?.host?.username}</p>
                  <p>
                    {formatCustomDate(vacationData?.data?.createdAt)} •
                    {vacationData?.data?.views} views
                  </p>
                </div>
              </div>
              <div className={styles["userinfo-rightSide"]}>
                <AiOutlineHeart />
                <span>30</span>
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
