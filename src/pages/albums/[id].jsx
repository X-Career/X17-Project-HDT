import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import css from "@/styles/albumDetails.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Grid, CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { getMedia } from "../../../redux/reducer/media/getMediaSlice";
import { deleteMedia } from "../../../redux/reducer/media/deleteMediaFromAlbum";
import { createMediaInsideMediaDetails } from "../../../redux/reducer/media/createMediaInsideMediaDetails";
import { updateMedia } from "../../../redux/reducer/media/updateMediaSlice";
import { cleanUpdateMedia } from "../../../redux/reducer/media/updateMediaSlice";
import { cleanCreateMediaInsideMediaDetails } from "../../../redux/reducer/media/createMediaInsideMediaDetails";
import { useShowFooter } from "../../components/context/FooterContext";

const AlbumDetail = () => {
  const { setShowFooter, setShowHeader } = useShowFooter();
  const router = useRouter();
  const dispatch = useDispatch();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 1200,
    pauseOnHover: true,
    draggable: true,
  };
  const { id } = router.query;
  const [media, setMedia] = useState([]);
  const [privacy, setPrivacy] = useState(false);
  const [requestData, setRequestData] = useState("");

  const getMediaDetails = useSelector((state) => state.getMedia);
  const createMediaDetails = useSelector(
    (state) => state.createMediaInsideMediaDetails
  );

  useEffect(() => {
    if (id) {
      dispatch(
        getMedia({
          payload: {
            query: {
              params: id,
            },
          },
        })
      );
    }
  }, [id, createMediaDetails]);

  console.error = console.warn = () => {};

  useEffect(() => {
    if (
      getMediaDetails.data?.success &&
      !getMediaDetails?.loading &&
      getMediaDetails.data?.message === "Media retrieved successfully"
    ) {
      setPrivacy(true);
      setMedia(getMediaDetails.data?.data);
    }
  }, [getMediaDetails]);
  useEffect(() => {
    if (createMediaDetails.data?.success && !createMediaDetails?.loading) {
      toast.success(createMediaDetails.data?.message, toastOptions);
      dispatch(cleanCreateMediaInsideMediaDetails());
    } else if (
      !createMediaDetails.data?.success &&
      !createMediaDetails?.loading
    ) {
      toast.error(createMediaDetails?.data?.message, toastOptions);
      dispatch(cleanCreateMediaInsideMediaDetails());
    }
  }, [createMediaDetails]);

  const handleDeleteMedia = (id, index) => {
    setMedia(media.filter((_, idx) => idx !== index));
    dispatch(
      deleteMedia({
        payload: {
          query: {
            params: id,
          },
        },
      })
    );
    toast.success("Media deleted", toastOptions);
  };
  const fileInput = useRef(null);
  const handleBtnClick = () => {
    fileInput.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      if (file.type.startsWith("image/")) {
        formData.append("type", "image");
      } else if (file.type.startsWith("video/")) {
        formData.append("type", "video");
      } else {
        toast.error("Unsupported file format!", toastOptions);
      }
      dispatch(
        createMediaInsideMediaDetails({
          payload: {
            query: {
              params: id,
            },
            body: formData,
          },
        })
      );
    } else {
      toast.error("An error occurred while uploading the file!", toastOptions);
    }
  };

  const handleContentChange = (e) => {
    setRequestData("");
    const newContent = e.target.textContent;
    const id = e.currentTarget.id;
    const newData = {
      [id]: newContent,
    };
    setRequestData(newData);
  };

  const handleBlur = (e, id) => {
    const newData = e.target.textContent;
    const mediaToUpdate = media.find((item) => item._id === id);
    if (mediaToUpdate && mediaToUpdate.title !== newData) {
      dispatch(
        updateMedia({
          payload: {
            query: {
              params: id,
            },
            body: requestData,
          },
        })
      );
    }
  };

  const updateMediaTitle = useSelector((state) => state.updateMedia);
  useEffect(() => {
    if (updateMediaTitle.data?.success && !updateMediaTitle?.loading) {
      toast.success(updateMediaTitle.data?.message, toastOptions);
      dispatch(cleanUpdateMedia());
    } else if (!updateMediaTitle.data?.success && !updateMediaTitle?.loading) {
      toast.error(updateMediaTitle?.data?.message, toastOptions);
      dispatch(cleanUpdateMedia());
    }
  }, [updateMediaTitle]);
  return (
    <div>
      {privacy ? (
        <div className={css.media}>
          {(setShowFooter(true), setShowHeader(true))}
          <Head>
            <title>Album Details</title>
          </Head>
          <Container maxWidth="lg">
            <Grid container spacing={0}>
              <Grid
                item
                container
                xs={12}
                sm={6}
                md={4}
                lg={3}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <div className={css.createMedia} onClick={handleBtnClick}>
                  <AddRoundedIcon style={{ fontSize: 40 }} />
                </div>
                <div className={css.createMediaTitle}>Create Media</div>
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png, video/*"
                  ref={fileInput}
                  onChange={handleFileChange}
                />
              </Grid>
              {media?.length === 0 ? (
                <p
                  style={{
                    fontSize: 22,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  Chưa có ảnh và video nào được tải lên. 😥
                </p>
              ) : (
                media?.map((item, index) => (
                  <Grid
                    style={{
                      marginBottom: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                    item
                    container
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={item._id}
                  >
                    <div className={css.image}>
                      {item.type === "image" ? (
                        <CardMedia
                          component="img"
                          alt="Album Image"
                          height="200"
                          image={item.mediaUrl}
                          style={{ borderRadius: 8 }}
                        />
                      ) : (
                        <video
                          src={item.mediaUrl}
                          controls
                          width="200"
                          height="200"
                          style={{ borderRadius: 8 }}
                        />
                      )}
                      <button
                        style={{ width: 0, height: 0 }}
                        onClick={() => handleDeleteMedia(item._id, index)}
                        data-title="Xoá ảnh/Xoá video"
                      >
                        <HighlightOffRoundedIcon className={css.deleteIcon} />
                      </button>
                    </div>
                    <div className={css.imageTitle}>
                      <span
                        contentEditable
                        id="title"
                        onInput={handleContentChange}
                        onBlur={(e) => handleBlur(e, item._id)}
                        autoCorrect="off"
                      >
                        {item.title}
                      </span>
                    </div>
                  </Grid>
                ))
              )}
            </Grid>
          </Container>
          <ToastContainer
            style={{
              width: "fit-content",
            }}
          />
        </div>
      ) : (
        <div className={css.errorPath}>
          {(setShowFooter(false), setShowHeader(false))}
          <Head>
            <title>404 - Page not found</title>
          </Head>
          <Image
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t1.15752-9/386863919_154438431059761_8650493410429411168_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=yU8ybZR69jkAX9WOzd2&_nc_ht=scontent.fhan18-1.fna&oh=03_AdRoT_vRgBKcG3Jjbn0yb-p5Mz28LFNTmJK3q3tRxxWDIw&oe=6577E59A"
            alt="404 Page not found"
            width={800}
            height={500}
          />
          <button
            className={css.redirectBtn}
            style={{ position: "absolute", top: "24rem" }}
            onClick={() => router.push("/")}
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default AlbumDetail;
