import React from "react";
import { useState } from "react";
import { FaPlus, FaUserFriends, FaLock } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "../../styles/vacation.module.scss";
const vacation = () => {
  const [privacy, setPrivacy] = React.useState("public");
  const combinedStyles = `${styles["form-field"]} ${styles["tripmates"]}`;
  const [showAddTripmates, setAddTripmates] = React.useState(false);
  const handleChange = (event) => {
    setPrivacy(event.target.value);
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
      <div className={styles["content"]}>
        <div className={styles["vacation"]}>
          <h1>Create a new vacation</h1>
          <div className={styles["vacationForm"]}>
            <form action="">
              <div className={styles["form-field"]}>
                <input
                  type="text"
                  placeholder=" "
                  className={styles["form-input"]}
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
                />
                <label className={styles["form-label"]}>
                  <span>Description?</span>
                  <span>e.g. My last vacaton...</span>
                </label>
              </div>
              {/* datepick */}
              {showAddTripmates && (
                <div className={combinedStyles} style={{ marginTop: "20px" }}>
                  <input
                    type="text"
                    placeholder=" "
                    className={styles["form-input"]}
                  />
                  <label className={styles["form-label"]}>
                    <span>Invite tripmates</span>
                    <span>Enter an email address</span>
                  </label>
                </div>
              )}
              <div className={styles["form-plus"]}>
                <div className={styles["form-privacy"]}>
                  <Select
                    value={privacy}
                    onChange={handleChange}
                    displayEmpty
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                    }}
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
              <button>Create Vacation</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vacation;
