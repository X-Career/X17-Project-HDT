import React, { useEffect, useRef, useState } from "react";
import css from "@/styles/auth.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

const SignIn = () => {
  const router = useRouter();
  const [users, setUsers] = useState();
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const callAPI = async () => {
    try {
      const response = await axios.post("/auth/sign-in", users);
      localStorage.setItem("userData", JSON.stringify(response.data));
      // dispatch(loginUser(response.data));
    } catch (error) {
      toast.error("Đăng nhập thất bại. Vui lòng thử lại!");
      console.log(error);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    callAPI(users)
    router.push("/");
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
            <button
              type="button"
              className={css.signInBtn}
              onClick={(e) => handleSubmit(e)}
            >
              Sign In
            </button>
            <section>
              <span>
                <Link href="#">Forgot Password?</Link>
              </span>
              <span>
                <Link href="/auth/sign-up">Don't have an account?</Link>
              </span>
            </section>
          </center>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
