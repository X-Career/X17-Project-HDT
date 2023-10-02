import React, { useRef } from "react";
import css from "./FormUpdateInfo.module.scss";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../redux/reducer/updateUserInfoSlice";

const FormUpdateInfo = ({ users, setUsers }) => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
  };

  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const handleInputClick = (event) => {
    event.target.select();
  };

  const handleInputFocus = (event) => {
    event.target.select();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    dispatch(updateUserInfo({ ...users }))
      .then((response) => {
        if (!response.payload?.success) {
          toast.error(response.payload?.data?.message, toastOptions);
        } else {
          toast.success("Done", toastOptions);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    inputRef.current.blur();
  };

  return (
    <div className={css.update_form}>
      <label>
        <span>First Name</span>
        <input
          ref={inputRef}
          type="text"
          name="firstName"
          autoComplete="off"
          defaultValue={users?.firstName}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        <span>Last Name</span>
        <input
          ref={inputRef}
          type="text"
          name="lastName"
          autoComplete="off"
          defaultValue={users?.lastName}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        <span>Username</span>
        <input
          ref={inputRef}
          type="text"
          name="username"
          autoComplete="off"
          defaultValue={users?.username}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        <span>Bio</span>
        <input
          ref={inputRef}
          type="text"
          name="bio"
          autoComplete="off"
          defaultValue={users?.bio}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        <span>Gender</span>
        <input
          ref={inputRef}
          type="text"
          name="gender"
          autoComplete="off"
          defaultValue={users?.gender}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        <span>Age</span>
        <input
          ref={inputRef}
          type="text"
          name="age"
          autoComplete="off"
          defaultValue={users?.age}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        <span>Date Of Birth</span>
        <input
          ref={inputRef}
          type="date"
          name="dateOfBirth"
          autoComplete="off"
          defaultValue={users?.dateOfBirth}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        <span>Current Password</span>
        <input
          ref={inputRef}
          type="password"
          name="crrPassword"
          autoComplete="off"
          defaultValue={users?.password}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        <span>New Password</span>
        <input
          ref={inputRef}
          type="password"
          name="newPassword"
          autoComplete="off"
          defaultValue={users?.password}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </label>
      <div style={{ display: "flex" }}>
        <label>
          <Link href="">
            <button onClick={handleSubmit} className={css.submitBtn}>
              Save
            </button>
          </Link>
        </label>
        <label>
          <Link href="/">
            <button className={css.cancelBtn}>Cancel</button>
          </Link>
        </label>
      </div>
      <ToastContainer
        style={{
          width: 250,
          position: "absolute",
          bottom: "-13.2rem",
        }}
      />
    </div>
  );
};

export default FormUpdateInfo;
