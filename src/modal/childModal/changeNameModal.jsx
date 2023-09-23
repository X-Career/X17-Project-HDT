import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CSS from "../style.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  background: "#fff",
  color: "black",
  borderRadius: 2,
  boxShadow: 24,
};

const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export default function ChangeNameModal({
  changeName,
  setChangeName,
  name,
  setName,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDataChange = (e) => {
    setChangeName({ ...changeName, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (
      (changeName.firstName || "").trim() === "" ||
      (changeName.lastName || "").trim() === ""
    ) {
      toast.error("Please fill in all required fields", toastOptions);
    } else {
      setName({ ...name, ...changeName });
      setOpen(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <React.Fragment>
      <p id={CSS.childModalTitle} onClick={handleOpen}>
        Change name
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <div className={CSS.headerChild}>
            <h4>Change name</h4>
            <ClearRoundedIcon
              className={CSS.headerBtnCloseChild}
              sx={{ fontSize: 20 }}
              onClick={handleClose}
            />
          </div>
          <div className={CSS.containerChild}>
            <div>
              <span>
                <label htmlFor="firstName">First Name: </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleDataChange}
                />
              </span>
              <span>
                <label htmlFor="lastName">Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleDataChange}
                  onKeyDown={handleKeyDown}
                />
              </span>
              <button onClick={handleSubmit}>Save</button>
            </div>
          </div>
          <ToastContainer />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
