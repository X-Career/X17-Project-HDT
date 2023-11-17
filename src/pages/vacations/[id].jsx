import React, { useEffect, useRef } from "react";
import { useState } from "react";
import upload from "@/assets/img/upload.png";
import Image from "next/image";
import styles from "./vacationDetail.module.scss";
import css from "../vacation-detail/vacationDetail.module.scss";
import { DatePicker } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { isValidEmail } from "../../utils/index.js";
const { RangePicker } = DatePicker;
import { addTripmate } from "../../../redux/reducer/vacation/addTripmate";
import { removeTripmate } from "../../../redux/reducer/vacation/removeTripmate";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getVacation } from "../../../redux/reducer/vacation/vacationDetail";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { RESET_CREATE_POST } from "../../../redux/reducer/resetReducer/index.js";
import { updateVacation } from "../../../redux/reducer/vacation/updateVacationSlice";
import { updateImageCover } from "../../../redux/reducer/milestone/updateCoverImgSLice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastOptions from "@/utils/index.js";
import Milestone from "../../components/Milestone/Milestone";
import { AiFillSave } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import Loading from "../../components/loadingPage/Loading";
import Head from "next/head";
import Comment from "../../components/comment/index.jsx";

const VacationsDetail = () => {
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

  const [coverUrl, setCoverUrl] = useState();
  const inputRef = useRef();
  const [saveCount, setSaveCount] = useState(0);
  const [fileImgUpload, setFileImgUpload] = useState("");
  const uploadLoading = useSelector((state) => state.updateCoverImg);
  const removeTripmateStt = useSelector((state) => state.removeTripmate.data);
  const vacationDataRs = useSelector((state) => state.createVacation.data);
  const addTripmateStt = useSelector((state) => state.addTripmate.data);
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
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isModalChangeImgOpen, setIsModalChangeImgOpen] = useState(false);
  const [isModalAddTripmate, setIsModalAddTripmate] = useState(false);
  const [isDateChanged, setIsDateChanged] = useState(false);
  const [newValue, setNewValue] = useState(null);
  const [participants, setParticipants] = useState(null);
  const [listAdd, setListAdd] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (removeTripmateStt) {
      if (removeTripmateStt.message === "Participant removed successfully") {
        setParticipants(removeTripmateStt.data.participants);
        toast.success(removeTripmateStt.message, toastOptions);
      }
    }
  }, [removeTripmateStt]);

  useEffect(() => {
    if (addTripmateStt) {
      if (addTripmateStt.message === "Participants added successfully") {
        setParticipants(addTripmateStt.data.participants);
        toast.success(addTripmateStt.message, toastOptions);
        setListAdd([]);
      }
    }
  }, [addTripmateStt]);

  const handleAddClick = () => {
    if (isValidEmail(inputValue)) {
      setListAdd([...listAdd, inputValue]);
      setInputValue("");
    } else {
      toast.warning("Không đúng định dạng email", toastOptions);
    }
  };
  const handleRemoveClick = (index) => {
    const updatedList = [...listAdd];
    updatedList.splice(index, 1);
    setListAdd(updatedList);
  };
  const handleRemoveTripmate = (tripmate) => {
    dispatch(
      removeTripmate({
        payload: {
          query: {
            params: id,
          },
          body: {
            email: tripmate,
          },
        },
      })
    );
  };
  const handleAddTripmate = () => {
    dispatch(
      addTripmate({
        payload: {
          query: {
            params: id,
          },
          body: {
            tripmates: listAdd,
          },
        },
      })
    );
  };
  const handleDateChange = (val) => {
    setNewValue(val);
    setRequestData(newValue);
    setIsDateChanged(true);
  };
  const handleUnSave = () => {
    if (updateCheck) {
      setValue([
        dayjs(updateCheck.data?.startDay),
        dayjs(updateCheck.data?.endDay),
      ]);
      setNewValue(null);
      setIsDateChanged(false);
      setRequestData(null);
    } else {
      if (vacationData) {
        setValue([
          dayjs(vacationData.data?.startDay),
          dayjs(vacationData.data?.endDay),
        ]);
      }
    }
  };
  const handleSaveDate = () => {
    updateVacationHandle();
  };
  useEffect(() => {
    if (newValue && newValue[0] && newValue[1]) {
      const startDate = dayjs(newValue[0]).format("D/M/YYYY");
      const endDate = dayjs(newValue[1]).format("D/M/YYYY");
      setRequestData({
        startDay: startDate,
        endDay: endDate,
      });
    }
  }, [newValue]);
  const showModalChangeImg = () => {
    setIsModalChangeImgOpen(true);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    const newData = {
      privacy: event.target.value,
    };
    setRequestData(newData);
  };
  const handleCancel = () => {
    setIsModalChangeImgOpen(false);
  };
  const handleCancelAddTripmate = () => {
    setIsModalAddTripmate(false);
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
        dayjs(vacationData.data?.startDay),
        dayjs(vacationData.data?.endDay),
      ]);
      setTitle(vacationData.data?.title);
      setLocation(vacationData.data?.location);
      setSelectedOption(vacationData.data?.privacy);
      setCoverUrl(vacationData.data?.avatarUrl);
      setDescription(vacationData.data?.description);
      setParticipants(vacationData.data?.participants);
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
      setValue([
        dayjs(updateCheck.data?.startDay),
        dayjs(updateCheck.data?.endDay),
      ]);
      toast.success(updateCheck.message, toastOptions);
      setSaveCount(saveCount + 1);
    }
  }, [updateCheck]);
  const handleBlur = () => {
    let newContent = event.target.textContent;
    if (
      newContent != title &&
      newContent != location &&
      newContent != description
    ) {
      updateVacationHandle();
    }
  };
  const handleSelectBlur = () => {
    updateVacationHandle();
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const showModalAddTripmate = () => {
    setIsModalAddTripmate(true);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFileImgUpload(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileImg(reader.result);
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
    formData.append("data", fileImgUpload);
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
  useEffect(() => {}, [uploadLoading.loading]);
  useEffect(() => {
    if (
      uploadLoading.data &&
      uploadLoading.data.message === "CoverImg uploaded successfully!"
    ) {
      setCoverUrl(uploadLoading.data.data.avatarUrl);
      setIsModalChangeImgOpen(false);
      toast.success(uploadLoading.data.message, toastOptions);
    }
  }, [uploadLoading.data]);
  return (
    <>
      {vacationData ? (
        <div className={`${styles["container"]} ${css.container}`}>
          <Head>
            <title>Vacations</title>
          </Head>
          <div className={styles["header"]}>
            <div className={styles["coverImg"]}>
              <Image
                src={coverUrl}
                className={styles["imgcover"]}
                width={1000}
                height={1000}
              />

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
                        fontWeight: 400,
                        padding: "5px 15px",
                        border: "none",
                        borderRadius: "5px",
                        color: "#5491f5",
                        cursor: "pointer",
                      }}
                      onClick={() => inputRef.current.click()}
                    >
                      Browse
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
                  <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    onBlur={handleSelectBlur}
                  >
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
              <div className={styles["description"]}>
                <span
                  contentEditable
                  id="description"
                  onInput={handleContentChange}
                  onBlur={handleBlur}
                >
                  {description}
                </span>
              </div>
              <details open>
                <summary>Tripmates</summary>
                <div className={styles["tripmate-content"]}>
                  {participants &&
                  participants !== null &&
                  participants.length > 0 ? (
                    participants.map((tripmate, index) => (
                      <div className={styles["tripmate-item"]} key={index}>
                        <span>{tripmate}</span>
                        <AiOutlineClose
                          onClick={() => handleRemoveTripmate(tripmate)}
                        />
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

                  <div
                    className={styles["tripmate-add"]}
                    onClick={showModalAddTripmate}
                  >
                    <IoMdPersonAdd />
                    <span>Add tripmate</span>
                  </div>
                </div>
              </details>
              <Modal
                title="Add Tripmates"
                open={isModalAddTripmate}
                onOk={handleAddTripmate}
                onCancel={handleCancelAddTripmate}
                className={styles["addTripmate"]}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Username or Email..."
                    style={{
                      padding: "5px 10px",
                      width: "100%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button
                    style={{
                      padding: "5px 10px",
                      borderRadius: "100px",
                      backgroundColor: "#5491f5",
                      cursor: "pointer",
                      border: "none",
                    }}
                    onClick={handleAddClick}
                  >
                    Add
                  </button>
                </div>
                <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
                  {listAdd.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #ccc",
                        borderRadius: "100px",
                        maxWidth: "fit-content",
                        padding: "5px 10px",
                      }}
                    >
                      {item}
                      <AiOutlineClose
                        style={{
                          marginLeft: "0.5rem",
                          cursor: "pointer",
                          color: "red",
                        }}
                        onClick={() => handleRemoveClick(index)}
                      />
                    </div>
                  ))}
                </div>
              </Modal>
            </div>
          </div>
          <div className={styles["milestone"]}>
            <div className={styles["milestoneHeader"]}>
              <h1>Milestones</h1>
              <div className={styles["datezone"]}>
                <RangePicker
                  value={dates || value}
                  onChange={(val) => {
                    setValue(val);
                    handleDateChange(val);
                  }}
                  onOpenChange={onOpenChange}
                  className={styles["date"]}
                />
                {isDateChanged && (
                  <div className={styles["savezone"]}>
                    <AiFillSave
                      className={styles["save"]}
                      onClick={handleSaveDate}
                    />
                    <FaWindowClose
                      className={styles["save"]}
                      onClick={handleUnSave}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={styles["milestoneContent"]}>
              <Milestone vacationId={id} saveCount={saveCount} />
            </div>
          </div>
          <div className={css["comment"]}>
            <div className={css["commentZone"]}>
              <Comment vacationId={id} />
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
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};

export default VacationsDetail;
