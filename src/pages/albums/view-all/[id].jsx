import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import css from "@/styles/albumDetails.module.scss";
import { Container, Grid, CardMedia } from "@mui/material";
import { getMediaWithoutEdit } from "../../../../redux/reducer/media/getMediaWithoutEditSlice";

function AlbumViewOnlyDetails() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [media, setMedia] = useState([]);

  const resGetMediaWithoutEdit = useSelector(
    (state) => state.getMediaWithoutEdit
  );

  useEffect(() => {
    if (id) {
      dispatch(
        getMediaWithoutEdit({
          payload: {
            query: {
              params: id,
            },
          },
        })
      );
    }
  }, [id]);

  useEffect(() => {
    if (
      resGetMediaWithoutEdit.data?.success &&
      !resGetMediaWithoutEdit?.loading
    ) {
      setMedia(resGetMediaWithoutEdit.data?.data);
    }
  }, [resGetMediaWithoutEdit]);

  return (
    <div className={css.media}>
      <Head>
        <title>Album Details</title>
      </Head>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
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
                </div>
                <div className={css.imageTitle}>
                  <span
                    id="title"
                    style={{
                      all: "unset",
                      margin: 0,
                      padding: 6,
                      outline: "none",
                      fontWeight: "bold",
                      fontSize: 20,
                      overflow: "hidden",
                      height: "max-content",
                      width: "260px",
                      backgroundColor: "transparent",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default AlbumViewOnlyDetails;
