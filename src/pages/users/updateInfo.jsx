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
  const [users, setUsers] = useState({});
  const [file, setFile] = useState("");
  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${url}/userInfo`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data.data);
        if (response.data.data.avatarUrl) {
          setFile(response.data.data.avatarUrl);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [file]);

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBlZjc5MTMxM2U0YmNkOGM5ZDkwZDIiLCJpYXQiOjE2OTYwMTkxNDEsImV4cCI6MTY5NjAyNjM0MX0.HGZF9IZ7-6azz3wg6YNyj8o4SHwn-Lks8zmdK5SJHus";
  const url = "http://localhost:5000/api/v1/user";
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    try {
      if (file) {
        const formData = new FormData();
        formData.append("data", file);

        const response = await axios.post(`${url}/updateAvatar`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setFile(response.data.data.avatar);
        toast.success("Avatar updated successfully!", toastOptions);
      }
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
                priority={true}
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
