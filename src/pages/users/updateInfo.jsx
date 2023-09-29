/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import css from "../../styles/updateInfo.module.scss";
import FormUpdateInfo from "../../components/FormUpdateInfo";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpdateInfo() {
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState(users.avatarUrl);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
  };
  useEffect(() => {
    axios
      .get(`${url}/userInfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {});
  }, []);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (localStorage.file) {
      setFile(localStorage.file);
    }
  }, [file]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBlZjc5MTMxM2U0YmNkOGM5ZDkwZDIiLCJpYXQiOjE2OTYwMDUwNTQsImV4cCI6MTY5NjAxMjI1NH0.s_-cGt6Zz93i3M72qo6KLp59yX8h1QTliP9ZROSzhz0";
  const url = "http://localhost:5000/api/v1/user";
  const handleFileChange = async (event) => {
    // const file = event.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setFile(reader.result);
    //     localStorage.setItem("file", reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("data", file);

      const response = await axios.put(`${url}/updateAvatar`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setUsers({
        ...users,
        avatarUrl: response.data.data.avatarUrl,
      });

      localStorage.setItem("avatarUrl", response.data.data.avatarUrl);
      toast.success("Avatar updated successfully!", toastOptions);
    } catch (error) {
      toast.error("An error occurred while updating the avatar!", toastOptions);
    }
  };

  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <Head>
        <title>Update Info</title>
      </Head>

      <div className={css.contain}>
        <div className={css.contain_avt}>
          <div className={css.file_input}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Image
                src={file}
                width={100}
                height={100}
                alt="Avatar"
                className={css.contain_avt_image}
                onClick={handleImageClick}
              />
              <p
                style={{
                  margin: "20px 0",
                  wordWrap: "break-word",
                }}
              >
                {users.bio}
              </p>
            </div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} />
          </div>
        </div>
        <div className={css.contain_info}>
          <div style={{ marginBottom: 13 }}>
            <b>About Me</b>
          </div>
          <div className={css.contain_info_center}>
            <FormUpdateInfo
              token={token}
              url={url}
              users={users}
              setUsers={setUsers}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
