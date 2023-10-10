import React, { useEffect, useRef } from "react";
import { useState } from "react";
import paris from "@/assets/img/paris.jpg";
import upload from "@/assets/img/upload.png";
import Image from "next/image";
import styles from "./vacationDetail.module.scss";
import { DatePicker } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const { RangePicker } = DatePicker;
import { Modal } from "antd";
import { BsTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getVacation } from "../../../redux/reducer/vacationDetail";
import dayjs from "dayjs";
import { formatCustomDate } from "../../../utils/index.js";
import { useRouter } from "next/router";
import { updateVacation } from "../../../redux/reducer/updateVacationSlice";
import { updateImageCover } from "../../../redux/reducer/milestone/updateCoverImgSLice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastOptions from "../../../utils/index.js";
import Milestone from "../../components/Milestone/Milestone";
import { set } from "date-fns";
const vacationsDetail = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const inputRef = useRef();
  const [fileImgUpload, setFileImgUpload] = useState("");
  const uploadLoading = useSelector((state) => state.updateCoverImg);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = router.query;
  const vacationData = useSelector((state) => state.vacationDetail.data);
  const [fileImg, setFileImg] = useState(null);
  const [selectedOption, setSelectedOption] = useState();
  const updateCheck = useSelector((state) => state.updateVacation.data);
  const [requestData, setRequestData] = useState("");
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isModalChangeImgOpen, setIsModalChangeImgOpen] = useState(false);
  const showModalChangeImg = () => {
    setIsModalChangeImgOpen(true);
  };

  const handleCancel = () => {
    setIsModalChangeImgOpen(false);
  };
  useEffect(() => {
    if (id) {
      dispatch(
        getVacation({
          payload: {
            query: {
              params: id,
            },
          },
        })
      );
    }
  }, [id, dispatch]);

  const updateVacationHandle = () => {
    dispatch(
      updateVacation({
        payload: {
          query: {
            params: id,
          },
          body: requestData,
        },
      })
    );
  };
  useEffect(() => {
    if (vacationData) {
      setValue([
        dayjs(vacationData.data.startDay),
        dayjs(vacationData.data.endDay),
      ]);
      setTitle(vacationData.data.title);
      setLocation(vacationData.data.location);
      setSelectedOption(vacationData.data.privacy);
    }
  }, [vacationData]);
  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  const handleContentChange = (event) => {
    setRequestData("");
    const newContent = event.target.textContent;
    const id = event.currentTarget.id;
    const newData = {
      [id]: newContent,
    };
    setRequestData(newData);
  };
  useEffect(() => {
    if (updateCheck) {
      toast.success(updateCheck.message, toastOptions);
    }
  }, [updateCheck]);
  const handleBlur = () => {
    let newContent = event.target.textContent;
    if (newContent != title && newContent != location) {
      console.log(newContent);
      updateVacationHandle();
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFileImgUpload(file);
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileImg(reader.result);
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setFileImgUpload(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDeleteImg = () => {
    setFileImg(null);
  };
  const handleUpdateCover = () => {
    const formData = new FormData();
    console.log(fileImgUpload);
    formData.append("data", fileImgUpload);
    console.log(formData);
    dispatch(
      updateImageCover({
        payload: {
          query: {
            params: id,
          },
          body: formData,
        },
      })
    );
  };
  useEffect(() => {
    console.log(uploadLoading.loading);
  }, [uploadLoading.loading]);

  return (
    <>
      {vacationData ? (
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <div className={styles["coverImg"]}>
              <Image src={paris} alt="" />
              <div className={styles["edit"]} onClick={showModalChangeImg}>
                <FaPencilAlt />
              </div>
              <Modal
                title="Upload Cover Image"
                open={isModalChangeImgOpen}
                onCancel={handleCancel}
                onOk={handleUpdateCover}
                okText={"Upload"}
              >
                {fileImg &&
                  (uploadLoading.loading ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Spin indicator={antIcon} />
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Image src={fileImg} width={300} height={300} />
                      <button
                        style={{
                          fontSize: "16px",
                          fontWeight: "normal",
                          padding: "5px 10px",
                          border: "none",
                          borderRadius: "100px",
                          cursor: "pointer",
                          backgroundColor: "#FF9AA2",
                        }}
                        onClick={handleDeleteImg}
                      >
                        Xóa ảnh
                      </button>
                    </div>
                  ))}

                {!fileImg && (
                  <div
                    className={styles["dropZone"]}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        border: "1px dashed ",
                        padding: "3rem",
                        borderRadius: "50%",
                        justifyContent: "space-between",
                      }}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <Image
                        src={upload}
                        style={{
                          width: "100%",
                        }}
                      />
                      <h1 style={{ fontSize: "14px" }}>
                        Drag and drop File to upload
                      </h1>
                    </div>
                    <h1 style={{ fontSize: "16px", fontWeight: "normal" }}>
                      or
                    </h1>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      hidden
                      ref={inputRef}
                    />
                    <button
                      style={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        padding: "5px 10px",
                        border: "none",
                      }}
                      onClick={() => inputRef.current.click()}
                    >
                      Upload a photo
                    </button>
                  </div>
                )}
              </Modal>
            </div>
            <div className={styles["headerInfo"]}>
              <div className={styles["titleForm"]}>
                <span
                  contentEditable
                  id="title"
                  onInput={handleContentChange}
                  onBlur={handleBlur}
                >
                  {title}
                </span>
              </div>
              <div className={styles["infoBot"]}>
                <div className={styles["privacy"]}>
                  <select value={selectedOption}>
                    <option value="private">Private</option>
                    <option value="friends">Friends</option>
                    <option value="public">Public</option>
                  </select>
                </div>
                <div className={styles["headerLocation"]}>
                  <FaLocationCrosshairs />
                  <span
                    contentEditable
                    id="location"
                    onInput={handleContentChange}
                    onBlur={handleBlur}
                  >
                    {location}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles["headerDes"]}>
              <details open>
                <summary>Description</summary>
                <p>{vacationData.data.description}</p>
              </details>
              <details open>
                <summary>Tripmates</summary>
                <div className={styles["tripmate-content"]}>
                  {vacationData.data.participants.length > 0 ? (
                    vacationData.data.participants.map((tripmate, index) => (
                      <div className={styles["tripmate-item"]} key={index}>
                        <span>{tripmate}</span>
                        <AiOutlineClose />
                      </div>
                    ))
                  ) : (
                    <div
                      className={styles["no-participants-message"]}
                      style={{ color: "red" }}
                    >
                      Dùng add tripmate để thêm bạn đồng hành
                    </div>
                  )}
                  <div className={styles["tripmate-add"]}>
                    <IoMdPersonAdd />
                    <span>Add tripmate</span>
                  </div>
                </div>
              </details>
            </div>
          </div>
          <div className={styles["milestone"]}>
            <div className={styles["milestoneHeader"]}>
              <h1>Milestones</h1>
              <RangePicker
                value={dates || value}
                onCalendarChange={(val) => {
                  setDates(val);
                }}
                onChange={(val) => {
                  setValue(val);
                }}
                onOpenChange={onOpenChange}
                changeOnBlur
                className={styles["date"]}
              />
            </div>
            <div className={styles["milestoneContent"]}>
              <Milestone vacationId={id} />
            </div>
          </div>
          <ToastContainer
            style={{
              width: "fit-content",
              zIndex: 1000,
            }}
          />
        </div>
      ) : (
        <div>loading..</div>
      )}
    </>
  );
};

export default vacationsDetail;
