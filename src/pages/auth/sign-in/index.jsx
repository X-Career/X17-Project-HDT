import React, { useEffect, useState } from "react";
import css from "@/styles/auth.module.scss";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../redux/reducer/auth/authLoginSlice";
import { deleteRegister } from "../../../../redux/reducer/resetState/deleteRegister";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteRegister());
  }, []);

  const [users, setUsers] = useState({});
  const toastOptions = {
    position: "bottom-right",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
  };
  const loginInfo = useSelector((state) => state.login);
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (!loginInfo.data?.success && !loginInfo.loading) {
      toast.error(loginInfo.data?.message, toastOptions);
    } else if (loginInfo.data?.success && !loginInfo.loading) {
      toast.success(loginInfo.data?.message, toastOptions);
      localStorage.setItem("accessToken", loginInfo.data?.data?.accessToken);
      localStorage.setItem("refreshToken", loginInfo.data?.data?.refreshToken);
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  }, [loginInfo]);

  const handleSubmit = () => {
    dispatch(
      login({
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
        <title>Sign In</title>
      </Head>
      <div className={css.signInForm}>
        <form action="" method="POST" id="signIn" className={css.animate}>
          <center>
            <h1>SIGN IN</h1>
            <input
              type="text"
              id="emailOrUsername"
              name="identifier"
              placeholder="Email Address or Username*"
              onChange={handleDataChange}
              autoComplete="off"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password*"
              onKeyDown={handleKeyDown}
              onChange={handleDataChange}
              autoComplete="off"
              required
            />
            <div
              style={{
                display: "flex",
                margin: 0,
                padding: "0 30px",
                gap: 10,
                alignItems: "center",
              }}
            >
              <input type="checkbox" onChange={() => {}} />
              Remember Me
            </div>
            <button
              type="button"
              className={css.signInBtn}
              onClick={() => handleSubmit()}
            >
              Sign In
            </button>
            <section>
              <span>
                <Link href="#">Forgot Password?</Link>
              </span>
              <span>
                <Link href="/auth/sign-up">Become a member</Link>
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

export default SignIn;
