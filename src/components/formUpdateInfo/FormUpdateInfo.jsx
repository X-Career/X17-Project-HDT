import React, { useEffect, useRef, useState } from "react";
import css from "./FormUpdateInfo.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clean,
  updateUserInfo,
} from "../../../redux/reducer/user/updateUserInfoSlice";
import { toastOptions } from "@/utils/index";
import { Select, MenuItem } from "@mui/material";
import {
  MaleRounded,
  FemaleRounded,
  TransgenderRounded,
} from "@mui/icons-material";
import { useRouter } from "next/router";

const FormUpdateInfo = ({ users, setUsers }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const renderOption = (value, label, icon) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        fontSize: "14px",
      }}
    >
      {icon} {label}
    </div>
  );

  const [gender, setGender] = useState("");

  useEffect(() => {
    setGender(users?.gender);
  }, [users]);
  console.warn = console.error = () => {};
  const updateInfo = useSelector((state) => state.update);
  const inputRef = useRef(null);
  const handleInputClick = (event) => {
    event.target.select();
  };

  const handleInputFocus = (event) => {
    event.target.select();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "gender") {
      setGender(value);
      setUsers((user) => ({
        ...user,
        gender: value,
      }));
    } else {
      setUsers((user) => ({
        ...user,
        [name]: value,
      }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (updateInfo.data?.success && !updateInfo.loading) {
      toast.success("Done", toastOptions);
      dispatch(clean());
      router.push(`/users/${users._id}`);
    } else if (!updateInfo.data?.success && !updateInfo.loading) {
      toast.error(updateInfo.data?.message, toastOptions);
    }
  }, [updateInfo]);

  const handleSubmit = () => {
    inputRef.current.blur();
    dispatch(
      updateUserInfo({
        payload: {
          body: {
            ...users,
          },
        },
      })
    );
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
        <div className={css.gender}>
          <Select
            value={gender}
            name="gender"
            onChange={handleChange}
            displayEmpty
            sx={{
              "& .MuiSelect-select ": {
                padding: 0,
                all: "unset",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="" disabled>
              Select gender
            </MenuItem>
            <MenuItem value="male">
              {renderOption("male", "Male", <MaleRounded />)}
            </MenuItem>
            <MenuItem value="female">
              {renderOption("female", "Female", <FemaleRounded />)}
            </MenuItem>
            <MenuItem value="other">
              {renderOption("other", "Other", <TransgenderRounded />)}
            </MenuItem>
          </Select>
        </div>
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
          <div>
            <button onClick={handleSubmit} className={css.submitBtn}>
              Save
            </button>
          </div>
        </label>
        <label>
          <div onClick={() => router.push(`/users/${users._id}`)}>
            <button className={css.cancelBtn}>Cancel</button>
          </div>
        </label>
      </div>
      <ToastContainer
        style={{
          width: 230,
          position: "absolute",
          bottom: "-8rem",
          marginRight: "-5.6rem",
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default FormUpdateInfo;
