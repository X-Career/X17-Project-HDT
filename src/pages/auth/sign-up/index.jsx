import React, { useEffect, useRef, useState } from "react";
import css from "@/styles/auth.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

const SignUp = () => {
  const router = useRouter();
  const [users, setUsers] = useState();
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // router.push("/auth/sign-in");
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
              placeholder="Email Address*"
              onChange={handleDataChange}
              autoComplete="off"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password*"
              onChange={handleDataChange}
              autoComplete="off"
              required
            />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username*"
              onChange={handleDataChange}
              autoComplete="off"
              required
            />
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name*"
              onChange={handleDataChange}
              autoComplete="off"
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name*"
              onChange={handleDataChange}
              autoComplete="off"
              required
            />
            <input
              type="text"
              id="gender"
              name="gender"
              placeholder="Gender*"
              onKeyDown={handleKeyDown}
              onChange={handleDataChange}
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
    </div>
  );
};

export default SignUp;
