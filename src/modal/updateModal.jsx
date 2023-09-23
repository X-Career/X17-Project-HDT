import React, { useState } from "react";
// import Image from "next/image";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CSS from "./style.module.scss";
import ChangeNameModal from "./childModal/changeNameModal";
import ChangeUserNameModal from "./childModal/changeUserNameModal";
import ChangePasswordModal from "./childModal/changePasswordModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 800,
  background: "#fff",
  color: "black",
  borderRadius: 2,
  boxShadow: 24,
};

// const toastOptions = {
//   position: "bottom-right",
//   autoClose: 8000,
//   pauseOnHover: true,
//   draggable: true,
//   theme: "dark",
// };

export default function UpdateModal({ show, setShow }) {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [username, setUsername] = useState({ username: "" });
  const [password, setPassword] = useState({ password: "" });
  const [changeName, setChangeName] = useState({});
  const [changeUsername, setChangeUsername] = useState({});
  const [changePassword, setChangePassword] = useState({});
  return (
    <div
      style={{
        position: "absolute",
        overflowY: "scroll",
      }}
    >
      <Modal
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={CSS.header}>
            <p>Setting</p>
            <ClearRoundedIcon
              className={CSS.headerBtnClose}
              sx={{ fontSize: 20 }}
              onClick={() => setShow(!show)}
            />
          </div>
          <div className={CSS.container}>
            <div className={CSS.containerLeft}>
              {/* <Image src="" alt="." /> */}
            </div>
            <div className={CSS.containerRight}>
              <form action="submit">
                <div>
                  <label htmlFor="name">
                    <h3>Name</h3>
                  </label>
                  <div>
                    {name.firstName} {name.lastName}
                  </div>
                  <ChangeNameModal
                    name={name}
                    setName={setName}
                    changeName={changeName}
                    setChangeName={setChangeName}
                  />
                </div>
                <div>
                  <label htmlFor="username">
                    <h3>User Name</h3>
                  </label>
                  <div>{username.username}</div>
                  <ChangeUserNameModal
                    usename={username}
                    setUsername={setUsername}
                    changeUsername={changeUsername}
                    setChangeUsername={setChangeUsername}
                  />
                </div>
                <div>
                  <label htmlFor="password">
                    <h3>Password</h3>
                  </label>
                  <div>{username.username}</div>
                  <ChangePasswordModal
                    password={password}
                    setPassword={setPassword}
                    changePassword={changePassword}
                    setChangePassword={setChangePassword}
                  />
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
