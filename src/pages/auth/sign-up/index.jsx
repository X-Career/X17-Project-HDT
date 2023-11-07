import React, { useState, useEffect } from "react";
import css from "@/styles/auth.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../../redux/reducer/auth/authRegisterSlice";
import { Select, MenuItem } from "@mui/material";
import { deleteLogin } from "../../../../redux/reducer/resetState/deleteLogin";
import {
  MaleRounded,
  FemaleRounded,
  TransgenderRounded,
} from "@mui/icons-material";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteLogin());
  }, []);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 1200,
    pauseOnHover: true,
    draggable: true,
  };
  const registerInfo = useSelector((state) => state.register);
  const [users, setUsers] = useState({});
  const [gender, setGender] = useState("");

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

  useEffect(() => {
    if (!registerInfo.data?.success && !registerInfo.loading) {
      toast.error(registerInfo.data?.message, toastOptions);
    } else if (registerInfo.data?.success && !registerInfo.loading) {
      toast.success(registerInfo.data?.message, toastOptions);
      setTimeout(() => {
        router.push("/auth/sign-in");
      }, 2000);
    }
  }, [registerInfo]);

  const handleSubmit = () => {
    dispatch(
      register({
        payload: {
          body: {
            ...users,
          },
        },
      })
    );
  };

  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className={css.signUpForm}>
        <form action="" method="POST" id="signUp" className={css.animate}>
          <center>
            <h1>SIGN UP</h1>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="*Email Address"
              onChange={handleChange}
              onClick={handleInputClick}
              onFocus={handleInputFocus}
              autoComplete="off"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*Password (At least 6 characters and 1 uppercase)"
              onChange={handleChange}
              onClick={handleInputClick}
              onFocus={handleInputFocus}
              autoComplete="off"
              required
            />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="*Username"
              onChange={handleChange}
              onClick={handleInputClick}
              onFocus={handleInputFocus}
              autoComplete="off"
              required
            />
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="*First Name"
              onChange={handleChange}
              onClick={handleInputClick}
              onFocus={handleInputFocus}
              autoComplete="off"
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="*Last Name"
              onChange={handleChange}
              onClick={handleInputClick}
              onFocus={handleInputFocus}
              autoComplete="off"
              required
            />
            <div className={css.gender}>
              <Select
                value={gender}
                name="gender"
                onChange={handleChange}
                displayEmpty
                style={{ color: "#fff" }}
                sx={{
                  "& .MuiSelect-select ": {
                    padding: 0,
                    all: "unset",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSelect-iconOutlined": {
                    color: "#fff",
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
            <button
              type="button"
              className={css.signUpBtn}
              onClick={() => handleSubmit()}
            >
              Sign Up
            </button>
            <section
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <span>
                <Link href="/auth/sign-in">
                  Already Registered? Log in now!
                </Link>
              </span>
            </section>
          </center>
        </form>
      </div>
      <ToastContainer
        style={{
          width: 230,
        }}
      />
    </div>
  );
};

SignUp.getInitialProps = () => {
  return { noLayOut: true };
};

export default SignUp;
