import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import css from "@/styles/album.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, CardMedia } from "@mui/material";
import { getAlbum } from "../../../redux/reducer/album/getAlbumSlice";
import { deleteAlbum } from "../../../redux/reducer/album/deleteAlbumSlice";
import { deleteMediaFromAlbum } from "../../../redux/reducer/media/deleteMediaFromAlbum";
import { updateAlbum } from "../../../redux/reducer/album/updateAlbumSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUpdateMedia } from "../../../redux/reducer/resetState/deleteUpdateMedia";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { updateAlbumAvatar } from "../../../redux/reducer/album/updateAlbumAvatarSlice";
import { deleteUpdateAlbumAvatar } from "../../../redux/reducer/resetState/deleteUpdateAlbumAvatar";

const Albums = () => {
  const dispatch = useDispatch();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 1200,
    pauseOnHover: true,
    draggable: true,
  };
  const resUpdateAlbumAvatar = useSelector((state) => state.updateAlbumAvatar);

  useEffect(() => {
    dispatch(getAlbum());
    dispatch(deleteUpdateMedia());
  }, [resUpdateAlbumAvatar]);

  const getAlbumDetails = useSelector((state) => state.getAlbum);
  const [albumDetails, setAlbumDetails] = useState([]);
  const [requestData, setRequestData] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (getAlbumDetails.data?.success && !getAlbumDetails?.loading) {
      setAlbumDetails(getAlbumDetails.data?.data);
    }
  }, [getAlbumDetails]);

  const avatarAlbumRef = useRef(null);
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("data", file);
      dispatch(
        updateAlbumAvatar({
          payload: {
            body: formData,
          },
        })
      );
      setShow(false);
    } else {
      toast.error("An error occurred while uploading the file!", toastOptions);
    }
  };

  useEffect(() => {
    if (resUpdateAlbumAvatar.data?.success && !resUpdateAlbumAvatar.loading) {
      toast.success(resUpdateAlbumAvatar.data?.message, toastOptions);
      dispatch(deleteUpdateAlbumAvatar());
    } else if (
      !resUpdateAlbumAvatar.data?.success &&
      !resUpdateAlbumAvatar.loading
    ) {
      toast.error(resUpdateAlbumAvatar.data?.message, toastOptions);
    }
  }, [resUpdateAlbumAvatar]);

  const handleDeleteAlbum = (id, index) => {
    setAlbumDetails(albumDetails.filter((_, idx) => idx !== index));
    dispatch(
      deleteAlbum({
        payload: {
          query: {
            params: id,
          },
        },
      })
    );
    dispatch(
      deleteMediaFromAlbum({
        payload: {
          query: {
            params: id,
          },
        },
      })
    );
    toast.success("Deleted album!", toastOptions);
    setShow(false);
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
    const albumToUpdate = albumDetails.find((album) => album._id === id);
    if (albumToUpdate && albumToUpdate.albumName !== newData) {
      dispatch(
        updateAlbum({
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

  const resUpdateInfo = useSelector((state) => state.updateAlbum);
  useEffect(() => {
    if (resUpdateInfo.data?.success && !resUpdateInfo.loading) {
      toast.success(resUpdateInfo.data?.message, toastOptions);
    } else if (!resUpdateInfo.data?.success && !resUpdateInfo.loading) {
      toast.error(resUpdateInfo.data?.message, toastOptions);
    }
  }, [resUpdateInfo]);

  return (
    <div className={css.album}>
      <Head>
        <title>Album</title>
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
            <Link href="/create-album" className={css.createAlbum}>
              <AddRoundedIcon style={{ fontSize: 40 }} />
            </Link>
            <div className={css.createAlbumTitle}>Create Album</div>
          </Grid>
          {albumDetails?.map((item, index) => (
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
              <div className={`${css.image} globalImage`}>
                <Link href={`/albums/${item._id}`}>
                  <CardMedia
                    component="img"
                    alt="Album Image"
                    height="200"
                    image={item.coverUrl}
                    style={{ borderRadius: 8 }}
                  />
                </Link>
                <button
                  style={{ width: 0, height: 0 }}
                  onClick={() => setShow(true)}
                  data-title="Chỉnh sửa"
                >
                  <EditOutlinedIcon className={css.deleteIcon} />
                </button>
                <Modal
                  open={show}
                  onClose={() => {
                    setShow(false);
                  }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      background: "#ebebeb",
                      borderRadius: 3,
                      boxShadow: 24,
                      padding: 2,
                      display: "flex",
                      flexDirection: "column",
                      top: "30%",
                      left: "50%",
                      width: "200px",
                      transform: "translate(-50%, -50%)",
                      gap: 0.8,
                    }}
                  >
                    <button
                      onClick={() => {
                        avatarAlbumRef.current.click();
                      }}
                      className="btnEditAlbum"
                    >
                      Update Avatar
                    </button>
                    <button
                      onClick={() => handleDeleteAlbum(item._id, index)}
                      className="btnEditAlbum"
                    >
                      Delete Album
                    </button>
                    <input
                      style={{
                        display: "none",
                      }}
                      type="file"
                      accept="image/jpg, image/jpeg, image/png"
                      ref={avatarAlbumRef}
                      onChange={handleAvatarChange}
                    />
                  </Box>
                </Modal>
              </div>
              <div className={css.imageTitle}>
                <span
                  contentEditable
                  id="albumName"
                  onInput={handleContentChange}
                  onBlur={(e) => handleBlur(e, item._id)}
                  autoCorrect="off"
                >
                  {item.albumName}
                </span>
                <p>Owner: {item.owner}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ToastContainer
        style={{
          width: "fit-content",
        }}
      />
    </div>
  );
};

export default Albums;
