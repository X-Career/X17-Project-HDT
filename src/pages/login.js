import { FaFacebookF, FaGithub, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Login.module.scss"

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        {/* Sign In */}
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-500">Travel</span>Blog
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-blue-500 mb-2">
              Sign in to your account
            </h2>
            <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <button className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebookF className="text-sm" />
              </button>
              <button className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGithub className="text-sm" />
              </button>
              <button className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sm" />
              </button>
            </div>
            <p className="text-gray-400">or use your account</p>
            <div className="flex flex-col items-center mt-3 gap-3">
              <div className="bg-gray-100 w-64 px-2 py-3 flex items-center gap-2 rounded-md">
                <FaRegEnvelope className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Email or Username"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 px-2 py-3 flex items-center gap-2 rounded-md">
                <MdLockOutline className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="flex w-64 mb-5 text-gray-400">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
              </div>
              <button className="border-2 border-blue-400 text-blue-400 rounded-full px-12 py-2 cursor-pointer font-semibold hover:bg-blue-400 hover:text-white">
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Sign Up */}
        <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-8">Sign up and start your journey with us!</p>
          <Link href="/signup">
            <button className="border-2 border-white rounded-full px-12 py-2 cursor-pointer font-semibold hover:bg-white hover:text-blue-400">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
