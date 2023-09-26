/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import css from "../../styles/updateInfo.module.scss";
import FormUpdateInfo from "../../components/FormUpdateInfo";

export default function UpdateInfo() {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const random = Math.floor(Math.random() * 1001);
  const [file, setFile] = useState(
    `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${random}.jpg`
  );
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(reader.result);
        localStorage.setItem("file", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const url = "https://64565c585f9a4f236141d794.mockapi.io/user";
  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}`)
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
        setIsLoading(false);
      });
  }, []);
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
                BIOlaksjfaosifjaoiwjfoaiwjfoijawfoijoaijwfoaijsofajsflkajsfaoisjfaiosf
              </p>
            </div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} />
          </div>
        </div>
        <div className={css.contain_info}>
          <div>
            <b>About</b>
          </div>
          <div className={css.contain_info_center}>
            <FormUpdateInfo  />
          </div>
        </div>
      </div>
    </div>
  );
}
