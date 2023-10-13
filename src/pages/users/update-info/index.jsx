/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import css from "@/styles/updateInfo.module.scss";
import FormUpdateInfo from "@/components/formUpdateInfo/FormUpdateInfo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../../../redux/reducer/getInfoSlice";
import { updateImage } from "../../../../redux/reducer/updateImageSlice";

export default function UpdateInfo() {
  const dispatch = useDispatch();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 3500,
    pauseOnHover: true,
    draggable: true,
  };
  const [users, setUsers] = useState({});
  const [file, setFile] = useState("");
  const getUserInfo = useSelector((state) => state.getInfo);
  const updateAvatar = useSelector((state) => state.updateImage);

  useEffect(() => {
    dispatch(getInfo());
  }, [file]);

  useEffect(() => {
    if (getUserInfo.data?.data) {
      setUsers(getUserInfo?.data?.data);
      setFile(getUserInfo?.data?.data?.avatarUrl);
    }
  }, [getUserInfo]);

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (updateAvatar.data?.success && !updateAvatar.loading) {
      setFile(updateAvatar?.data?.data?.avatarUrl);
    }
  }, [updateAvatar]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("data", file);
      dispatch(
        updateImage({
          payload: {
            body: formData,
          },
        })
      );
      toast.success("Avatar updated successfully!", toastOptions);
    } else {
      toast.error("An error occurred while updating the avatar!", toastOptions);
    }
  };
  return (
    <div>
      <Head>
        <title>Update Info</title>
      </Head>

      <div className={css.contain}>
        <div className={css.contain_avt}>
          <div className={css.file_input}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Image
                src={
                  file ||
                  "https://media.istockphoto.com/id/1223671392/vi/vec-to/%E1%BA%A3nh-h%E1%BB%93-s%C6%A1-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-ch%E1%BB%97-d%C3%A0nh-s%E1%BA%B5n-cho-%E1%BA%A3nh-minh-h%E1%BB%8Da-vect%C6%A1.jpg?s=612x612&w=0&k=20&c=l9x3h9RMD16-z4kNjo3z7DXVEORzkxKCMn2IVwn9liI="
                }
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
                {users?.bio}
              </p>
            </div>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className={css.contain_info}>
          <div style={{ marginBottom: 13 }}>
            <b>About Me</b>
          </div>
          <div className={css.contain_info_center}>
            <FormUpdateInfo users={users} setUsers={setUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
