import React, { useState, useEffect } from "react";
import css from "@/styles/auth.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../../redux/reducer/authRegisterSlice";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 1200,
    pauseOnHover: true,
    draggable: true,
  };
  const registerInfo = useSelector((state) => state.register);
  const [users, setUsers] = useState({});

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
            <input
              type="text"
              id="gender"
              name="gender"
              placeholder="*Gender"
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              onClick={handleInputClick}
              onFocus={handleInputFocus}
              autoComplete="off"
              required
            />
            <button
              type="button"
              className={css.signUpBtn}
              onClick={(e) => handleSubmit(e)}
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
                <Link href="/auth/sign-in">Already Registered?</Link>
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

export default SignUp;
