import { FaFacebookF, FaGithub, FaGoogle, FaRegEnvelope,FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Login.module.scss"

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
<div className={styles.Container}>
          <div className={styles.Header}>
            <span className={styles.Travel}>Travel</span> Blog
          </div>
          <div className={styles.Slogan}>Let's begin your adventure</div>
          <div className={styles.LoginContainer}>
          <div className="body">
            <h1 className={styles.Title}>
              Sign in your account
            </h1>
            {/* <div className={styles.Icon}>
              <button>
                <FaFacebookF/>
              </button>
              <button>
                <FaGithub/>
              </button>
              <button>
                <FaGoogle/>
              </button>
            </div> */}
            <div className={styles.ContainerInput}>
              <div className={styles.InputBox}>
                <FaRegEnvelope/>
                <input
                  type="text"
                  placeholder="Email"
                  className={styles.Input}
                  onChange={e => {setEmail(e.target.value)}}
                />
              </div>
              <div className={styles.InputBox}>
                <FaRegUser/>
                <input
                  type="text"
                  placeholder="Username"
                  className={styles.Input}
                  onChange={e => {setUsername(e.target.value)}}
                />
              </div>
              <div className={styles.InputBox}>
                <MdLockOutline/>
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.Input}
                  onChange={e => {setPassword(e.target.value)}}
                />
              </div>
              </div>
              <div> 
                <Link href="/signup">
                <button className={styles.SignupBtn}>
                  Sign Up
                </button>
                </Link>
                <button className={styles.LoginBtn}>
                  Sign In
                </button>
              </div>
          </div>
    </div>
    </div>
  );
}
