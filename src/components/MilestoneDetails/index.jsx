import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMilestones } from "../../../redux/reducer/milestone/milestoneSlice.js";
import { Collapse } from "antd";
import Post from "../post-detail/index.jsx";
import { formatCustomDate } from "@/utils/index.js";
import styles from "../Milestone/milestone.module.scss";

const MilestoneReadOnly = ({ vacationId }) => {
  const dispatch = useDispatch();
  const milestoneData = useSelector((state) => state.infoMileStone.data);

  useEffect(() => {
    dispatch(
      getMilestones({
        payload: {
          query: {
            params: vacationId,
          },
        },
      })
    );
  }, [dispatch, vacationId]);

  return (
    <div className={styles["mainContent"]}>
      {milestoneData && milestoneData.data?.length > 0 ? (
        milestoneData.data.map((milestone, index) => (
          <Collapse
            key={milestone._id}
            size="large"
            defaultActiveKey={milestone._id}
            bordered={false}
            style={{ marginBottom: "1rem" }}
            items={[
              {
                key: `${milestone._id}`,
                label: (
                  <>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        padding: 0,
                      }}
                    >
                      {formatCustomDate(milestone.date)}
                    </span>
                    <h1
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#ccc",
                      }}
                    >
                      {milestone.title !== ""
                        ? milestone.title
                        : "Add Subtitle"}
                    </h1>
                  </>
                ),
                children: <Post milestoneId={milestone._id} />,
              },
            ]}
          />
        ))
      ) : (
        <p>No milestones available</p>
      )}
    </div>
  );
};

export default MilestoneReadOnly;
