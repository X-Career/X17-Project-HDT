import React, { useEffect, useState } from "react";
import { getMilestones } from "../../../redux/reducer/milestone/milestoneSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Collapse, Divider } from "antd";
import Posts from "../post/Posts.jsx";
import { formatCustomDate } from "../../../utils/index.js";
import styles from "./milestone.module.scss";
const Milestone = ({ vacationId }) => {
  const dispatch = useDispatch();
  const milestoneData = useSelector((state) => state.infoMileStone.data);
  const [milestoneDay, setMilestoneDay] = useState("");
  const [milestoneTitle, setMilestoneTitle] = useState("");
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
  }, []);
  useEffect(() => {
    if (milestoneData) {
      setMilestoneTitle(milestoneData.data.title);
      setMilestoneTitle(formatCustomDate(milestoneData.data.date));
    }
  }, [milestoneData]);
  return (
    <div className={styles["mainContent"]}>
      {milestoneData && milestoneData.data.length > 0 ? (
        milestoneData.data.map((milestone, index) => (
          <Collapse
            key={index}
            size="large"
            style={{ marginBottom: "1rem" }}
            items={[
              {
                key: `${index}`,
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
                children: <Posts />,
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

export default Milestone;
