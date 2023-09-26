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
        body: JSON.stringify({ email, username, password,confirmPassword }),
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
  
  // window.location.href = '/login' chuyển hướng về login khi đăng ký thành công xong

  return (
    <div className={styles.BlogContainer}>
          <div className="travel-blog">
            <span className="travel">Travel</span> Blog
          </div>
          <div className="">
            <h2 className="title">
              Sign up your account
            </h2>
            <div className="icon">
              <button>
                <FaFacebookF/>
              </button>
              <button>
                <FaGithub/>
              </button>
              <button>
                <FaGoogle/>
              </button>
            </div>
            <div className={styles.containerInput}>
              <div className={styles.Email}>
                <FaRegEnvelope/>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={e => {setEmail(e.target.value)}}
                />
              </div>
              <div className={styles.Username}>
                <FaRegUser/>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={e => {setUsername(e.target.value)}}
                />
              </div>
              <div className={styles.Password}>
                <MdLockOutline/>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => {setPassword(e.target.value)}}
                />
              </div>
              <div className={styles.confirmPassword}>
                <MdLockOutline/>
                <input
                  type="password"
                  placeholder="Confirm pasword"
                  onChange={e => {setConfirmPassword(e.target.value)}}
                />
              </div>
              </div>
              <div>
                <button className={styles.SignupBtn} onClick={handleRegistration}>
                Sign Up
              </button>
              <Link href="/login">
                <button className={styles.LoginBtn}>
                  Sign In
                </button>
              </Link></div>
              
          </div>
    </div>
  );
}
