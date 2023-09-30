import { FaFacebookF, FaGithub, FaGoogle, FaRegEnvelope, FaRegUser} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { message } from "antd";
import styles from '@/styles/Signup.module.scss'



export default function Home() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password, confirmPassword}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        message('Đăng ký thành công') 
      } else {
        console.error('Đăng ký không thành công');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }
  };
  
  // window.location.href = '/login' chuyển hướng về login khi đăng ký thành công xong

  return (
    <div className={styles.Container}>
          <div className={styles.Header}>
            <span className={styles.Travel}>Travel</span> Blog
          </div>
          <div className={styles.Slogan}>Let's begin your adventure</div>
          <div className={styles.SignupContainer}>
          <div className="body">
            <h1 className={styles.Title}>
              Sign up your account
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
            <div className={styles.ContainerInput} onSubmit={handleSubmit}>
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
                  value={password}
                  onChange={e => {setPassword(e.target.value)}}
                />
              </div>
              <div className={styles.InputBox}>
                <MdLockOutline/>
                <input
                  type="password"
                  placeholder="Confirm pasword"
                  className={styles.Input}
                  value={confirmPassword}
                  onChange={e => {setConfirmPassword(e.target.value)}}
                />
              </div>
              </div>
              <div> 
                <button className={styles.SignupBtn} type="submit" onClick={handleRegistration}>
                  Sign Up
                </button>
                <Link href="/login">
                <button className={styles.LoginBtn}>
                  Sign In
                </button>
                </Link>
              </div>
          </div>
    </div>
    </div>
  );
}
