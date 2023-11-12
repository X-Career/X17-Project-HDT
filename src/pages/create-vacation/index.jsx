import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clean,
  createVacation,
} from "../../../redux/reducer/vacation/createVacationSlice";
import { FaPlus, FaUserFriends, FaLock } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "antd";
import styles from "../../styles/vacation.module.scss";
import { IoIosMail } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastOptions from "@/utils/index.js";
import { useRouter } from "next/router";
import Head from "next/head";
import { useShowFooter } from "../../components/context/FooterContext";

const vacation = () => {
  const { setShowFooter } = useShowFooter();
  setShowFooter(false);
  const router = useRouter();
  const { RangePicker } = DatePicker;
  const vacationData = useSelector((state) => state.createVacation.data);
  const dispatch = useDispatch();
  const [privacy, setPrivacy] = React.useState("public");
  const [tripmates, setTripMates] = React.useState([]);
  const [inputValueTripmate, setInputValueTripmate] = useState("");
  const combinedStyles = `${styles["form-field"]} ${styles["tripmates"]}`;
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  const [showAddTripmates, setAddTripmates] = React.useState(false);
  const [formattedStartDate, setFormattedStartDate] = useState(null);
  const [formattedEndDate, setFormattedEndDate] = useState(null);
  const handleChange = (event) => {
    setPrivacy(event.target.value);
  };
  const handleInputChange = (e) => {
    setInputValueTripmate(e.target.value);
  };
  const handleAddTripMate = () => {
    if (inputValueTripmate.trim() !== "") {
      setTripMates([...tripmates, inputValueTripmate]);
      setInputValueTripmate("");
    }
  };
  useEffect(() => {
    if (dates && dates[0] && dates[1]) {
      const startDate = dayjs(dates[0]).format("D/M/YYYY");
      const endDate = dayjs(dates[1]).format("D/M/YYYY");
      setFormattedStartDate(startDate);
      setFormattedEndDate(endDate);
    }
  }, [dates]);
  const handleRemoveTripMate = (index) => {
    const updatedTripmates = [...tripmates];
    updatedTripmates.splice(index, 1);
    setTripMates(updatedTripmates);
  };
  const buildDataRequest = () => {
    const dataRequest = {
      location: document.getElementById("locationInput").value,
      title: document.getElementById("titleInput").value,
      description: document.getElementById("descriptionInput").value,
      participants: tripmates,
      startDay: formattedStartDate,
      endDay: formattedEndDate,
      privacy: privacy,
    };
    if (
      !dataRequest.location ||
      !dataRequest.title ||
      !dataRequest.description ||
      !dataRequest.startDay ||
      !dataRequest.endDay
    ) {
      return { error: "Vui Lòng nhập đầy đủ các trường" };
    } else {
      return dataRequest;
    }
  };

  const handleCreateVacation = (e) => {
    e.preventDefault();
    const dataRequest = buildDataRequest();
    if (!dataRequest.error) {
      dispatch(
        createVacation({
          payload: {
            body: dataRequest,
          },
        })
      );
    } else {
      toast.warning(dataRequest.error, toastOptions);
    }
  };
  useEffect(() => {
    if (vacationData) {
      if (vacationData.success) {
        dispatch(clean());
        router.push(`/vacations/${vacationData.data._id}`);
      } else {
        toast.error(vacationData.message, toastOptions);
      }
    }
  }, [vacationData]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  const renderOption = (value, label, icon) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        justifyContent: "center",
        fontSize: "16px",
      }}
    >
      {icon} {label}
    </div>
  );

  return (
    <div className={styles["container"]}>
      <Head>
        <title>Create Vacation</title>
      </Head>
      <div className={styles["content"]}>
        <div className={styles["vacation"]}>
          <h1>Create a new vacation</h1>
          <div className={styles["vacationForm"]}>
            <form id="createvacationform">
              <div className={styles["form-field"]}>
                <input
                  type="text"
                  placeholder=" "
                  className={styles["form-input"]}
                  autoComplete="off"
                  onKeyDown={handleKeyDown}
                  id="locationInput"
                />
                <label className={styles["form-label"]}>
                  <span>Where to?</span>
                  <span>e.g. Paris, Hawai...</span>
                </label>
              </div>
              <div className={styles["form-field"]}>
                <input
                  type="text"
                  placeholder=" "
                  className={styles["form-input"]}
                  autoComplete="off"
                  onKeyDown={handleKeyDown}
                  id="titleInput"
                />
                <label className={styles["form-label"]}>
                  <span>Title?</span>
                  <span>e.g. Life's Beach</span>
                </label>
              </div>
              <div className={styles["form-field"]}>
                <input
                  type="text"
                  placeholder=" "
                  className={styles["form-input"]}
                  autoComplete="off"
                  onKeyDown={handleKeyDown}
                  id="descriptionInput"
                />
                <label className={styles["form-label"]}>
                  <span>Description?</span>
                  <span>e.g. My last vacaton...</span>
                </label>
              </div>
              {/* datepick */}
              <RangePicker
                value={dates || value}
                onCalendarChange={(val) => {
                  setDates(val);
                }}
                onChange={(val) => {
                  setValue(val);
                }}
                onOpenChange={onOpenChange}
                changeOnBlur
                className={styles["test"]}
              />

              {showAddTripmates && (
                <div className={combinedStyles} style={{ marginTop: "20px" }}>
                  <input
                    type="text"
                    placeholder=" "
                    onChange={handleInputChange}
                    autoComplete="off"
                    value={inputValueTripmate}
                    className={styles["form-input"]}
                    onKeyDown={handleKeyDown}
                  />
                  <label className={styles["form-label"]}>
                    <span>Invite tripmates</span>
                    <span>Enter an email address</span>
                  </label>
                </div>
              )}

              {inputValueTripmate && (
                <div
                  className={styles["tripmateMail"]}
                  onClick={handleAddTripMate}
                >
                  <div className={styles["tripmateMail-icon"]}>
                    <IoIosMail />
                  </div>
                  <div className={styles["tripmateMail-span"]}>
                    <span>Send an email</span>
                    <span>to {inputValueTripmate}</span>
                  </div>
                </div>
              )}
              <div className={styles["listTripmate"]}>
                {tripmates.map((tripmate, index) => (
                  <div key={index} className={styles["tripmate-item"]}>
                    <span>{tripmate}</span>
                    <AiOutlineClose
                      onClick={() => handleRemoveTripMate(index)}
                    />
                  </div>
                ))}
              </div>
              <div className={styles["form-plus"]}>
                <div className={styles["form-privacy"]}>
                  <Select
                    value={privacy}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      "& .MuiSelect-select ": {
                        padding: "10px",
                        border: "0",
                        outline: "none",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Privacy
                    </MenuItem>
                    <MenuItem value="public">
                      {renderOption("public", "Public", <FaEarthAmericas />)}
                    </MenuItem>
                    <MenuItem value="friends">
                      {renderOption("friends", "Friends", <FaUserFriends />)}
                    </MenuItem>
                    <MenuItem value="private">
                      {renderOption("private", "Private", <FaLock />)}
                    </MenuItem>
                  </Select>
                </div>
                <div
                  className={
                    !showAddTripmates
                      ? styles["form-invite"]
                      : styles["form-invite-hidden"]
                  }
                  onClick={() => setAddTripmates(true)}
                >
                  <FaPlus />
                  <span>Invite Tripmates</span>
                </div>
              </div>
              <button onClick={handleCreateVacation}>Create Vacation</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        style={{
          width: "fit-content",
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default vacation;
