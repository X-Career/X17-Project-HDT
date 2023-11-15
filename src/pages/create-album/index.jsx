import React, { useState, useRef, useEffect } from "react";
import css from "./album.module.scss";
import Head from "next/head";
import Image from "next/image";
import { Container, Grid, CardMedia } from "@mui/material";
import FilePresentRoundedIcon from "@mui/icons-material/FilePresentRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import ImageIcon from "@mui/icons-material/Image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useShowFooter } from "../../components/context/FooterContext";
import { useDispatch, useSelector } from "react-redux";
import { createAlbum } from "../../../redux/reducer/album/albumSlice";
import { createMedia } from "../../../redux/reducer/media/createMediaSlice";
import { useRouter } from "next/router";

const CreateAlbum = () => {
  const { setShowFooter } = useShowFooter();
  setShowFooter(false);
  const dispatch = useDispatch();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 1200,
    pauseOnHover: true,
    draggable: true,
  };
  const [media, setMedia] = useState([]);
  const [mediaUpload, setMediaUpload] = useState([]);
  const [albumName, setAlbumName] = useState("");
  const [avatarAlbumUrl, setAvatarAlbumUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState(null);
  const textareaRefs = useRef([]);

  const fileInput = useRef(null);
  const avatarAlbumRef = useRef(null);
  const inputNameAlbumRef = useRef(null);

  const handleBtnClick = () => {
    fileInput.current.click();
  };

  const handleInputClick = (event) => {
    event.target.select();
  };
  const handleInputFocus = (event) => {
    event.target.select();
  };

  const handleTextareaChange = (e, index) => {
    const { value } = e.target;
    const newMedia = [...media];
    const newMediaUpload = [...mediaUpload];
    newMedia[index].title = value;
    newMediaUpload[index].title = value;
    setMedia(newMedia);
    setMediaUpload(newMediaUpload);
  };

  const handleAlbumNameChange = (e) => {
    const { value } = e.target;
    setAlbumName(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleDeleteMedia = (id) => {
    setMedia(media.filter((_, idx) => idx !== id));
    setMediaUpload(mediaUpload.filter((_, idx) => idx !== id));
  };
  const handleDeleteAvatar = () => {
    setAvatarAlbumUrl("");
    setCoverUrl("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setMedia([
          ...media,
          { type: "image", url: URL.createObjectURL(file), title: null },
        ]);
        setMediaUpload([
          ...mediaUpload,
          { type: "image", url: file, title: null },
        ]);
      } else if (file.type.startsWith("video/")) {
        setMedia([
          ...media,
          { type: "video", url: URL.createObjectURL(file), title: null },
        ]);
        setMediaUpload([
          ...mediaUpload,
          { type: "video", url: file, title: null },
        ]);
      } else {
        toast.error("Unsupported file format!", toastOptions);
      }
    } else {
      toast.error("An error occurred while uploading the file!", toastOptions);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarAlbumUrl(URL.createObjectURL(file));
      setCoverUrl(file);
    } else {
      toast.error("An error occurred while uploading the file!", toastOptions);
    }
  };

  const buildDataRequest = () => {
    const dataRequest = {
      albumName: albumName,
      coverUrl: coverUrl,
      media: mediaUpload,
    };
    if (!dataRequest.albumName) {
      return { error: "Vui lòng nhập tên album!" };
    } else if (!dataRequest.coverUrl) {
      return { error: "Vui lòng tải lên ảnh đại diện album!" };
    } else if (dataRequest.media.length === 0) {
      return { error: "Vui lòng tải ảnh hoặc video lên!" };
    } else {
      return dataRequest;
    }
  };

  const createAlbumResponse = useSelector((state) => state.createAlbum);
  const createMediaResponse = useSelector((state) => state.createMedia);
  const router = useRouter();
  useEffect(() => {
    if (!createAlbumResponse?.data?.success && !createAlbumResponse?.loading) {
      toast.error(createAlbumResponse?.data?.message, toastOptions);
    } else if (
      createAlbumResponse?.data?.success &&
      !createAlbumResponse?.loading
    ) {
      toast.success(createAlbumResponse?.data?.message, toastOptions);
    }
  }, [createAlbumResponse]);
  useEffect(() => {
    if (createMediaResponse?.data?.success && !createMediaResponse?.loading) {
      setTimeout(() => {
        router.push("/albums");
      }, 1200);
    } else if (
      !createMediaResponse?.data?.success &&
      !createMediaResponse?.loading
    ) {
      toast.error(createMediaResponse?.data?.message, toastOptions);
    }
  }, [createMediaResponse]);

  const handleSubmit = () => {
    inputNameAlbumRef.current.blur();
    const dataRequest = buildDataRequest();
    if (!dataRequest.error) {
      const formData = new FormData();
      formData.append("data", coverUrl);
      formData.append("albumName", albumName);
      dispatch(
        createAlbum({
          payload: {
            body: formData,
          },
        })
      ).then((res) => {
        mediaUpload.forEach((media) => {
          const formDataMedia = new FormData();
          formDataMedia.append("file", media.url);
          formDataMedia.append("type", media.type);
          formDataMedia.append("title", JSON.stringify(media.title));
          return dispatch(
            createMedia({
              payload: {
                query: {
                  params: res.payload.data?._id,
                },
                body: formDataMedia,
              },
            })
          );
        });
      });
    } else {
      toast.warning(dataRequest.error, toastOptions);
    }
  };

  return (
    <div className={css.body}>
      <Head>
        <title>Create Album</title>
      </Head>
      <div className={css.container_left}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
          }}
        >
          <h1>Create Album</h1>
          <div className={css.albumAvatar}>
            {avatarAlbumUrl ? (
              <div style={{ position: "relative" }}>
                <Image
                  src={avatarAlbumUrl}
                  className={css.albumAvatarImg}
                  width={100}
                  height={100}
                  alt="Avatar"
                  priority={true}
                  onClick={() => {
                    avatarAlbumRef.current.click();
                  }}
                />
                <button
                  className={css.btnWithAvatar}
                  style={{
                    width: 0,
                    height: 0,
                    all: "unset",
                    position: "absolute",
                    top: "-8px",
                    right: "-10px",
                    margin: 0,
                    padding: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteAvatar()}
                  data-title="Xoá ảnh"
                >
                  <HighlightOffRoundedIcon className={css.deleteIcon} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  avatarAlbumRef.current.click();
                }}
                className={css.btnWithoutAvatar}
              >
                Avatar Album
              </button>
            )}

            <input
              style={{
                display: "none",
              }}
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              ref={avatarAlbumRef}
              onChange={handleAvatarChange}
            />
          </div>
          <input
            value={albumName}
            type="text"
            name="albumName"
            onChange={handleAlbumNameChange}
            onKeyDown={handleKeyDown}
            ref={inputNameAlbumRef}
            onClick={handleInputClick}
            onFocus={handleInputFocus}
            placeholder="Tên album"
            autoComplete="off"
          />
          <div className={css.btn} onClick={handleBtnClick}>
            <FilePresentRoundedIcon style={{ fontSize: 18 }} />
            <button style={{ fontSize: 14 }}>Tải ảnh hoặc video lên</button>
          </div>
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png, video/*"
            ref={fileInput}
            onChange={handleFileChange}
          />
        </div>
        <div className={css.doneBtn} onClick={handleSubmit}>
          Đăng
        </div>
      </div>
      {media.length !== 0 ? (
        <div className={css.container_right}>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              {media?.map((item, index) => (
                <Grid
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    marginRight:
                      media.length > 2
                        ? media.length > 3
                          ? ""
                          : "40px"
                        : "80px",
                  }}
                  item
                  container
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}
                >
                  <div className={css.image}>
                    {item.type === "image" ? (
                      <CardMedia
                        component="img"
                        alt="Album Image"
                        height="200"
                        image={item.url}
                        style={{ borderRadius: 8 }}
                      />
                    ) : (
                      <video
                        src={item.url}
                        controls
                        width="200"
                        height="200"
                        style={{ borderRadius: 8 }}
                      />
                    )}
                    <button
                      style={{ width: 0, height: 0, cursor: "pointer" }}
                      onClick={() => handleDeleteMedia(index)}
                      data-title="Xoá ảnh/Xoá video"
                    >
                      <HighlightOffRoundedIcon className={css.deleteIcon} />
                    </button>
                  </div>
                  <textarea
                    rows="1"
                    cols="25"
                    value={item.title}
                    placeholder="Mô tả (không bắt buộc)"
                    ref={(el) => (textareaRefs.current[index] = el)}
                    onChange={(e) => handleTextareaChange(e, index)}
                    className={css.mediaTitle}
                    type="text"
                    autoComplete="off"
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      ) : (
        <div className={css.wait}>
          <ImageIcon style={{ fontSize: 54, marginBottom: 10 }} />
          <h3>Hãy thêm gì đó... 🤔</h3>
        </div>
      )}
      <ToastContainer
        style={{
          width: "fit-content",
        }}
      />
    </div>
  );
};

export default CreateAlbum;
