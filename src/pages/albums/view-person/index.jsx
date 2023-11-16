import React, { useEffect, useState } from "react";
import Head from "next/head";
import css from "@/styles/album.module.scss";
import { Container, Grid, CardMedia } from "@mui/material";
import { getAlbum } from "../../../../redux/reducer/album/getAlbumSlice";
import { getOtherUserAlbum } from "../../../../redux/reducer/album/getOtherUserAlbumSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

function OnlyViewPersonAlbums() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [albumDetails, setAlbumDetails] = useState([]);
  const getAlbumDetails = useSelector((state) => state.getOtherUserAlbum);

  useEffect(() => {
    dispatch(
      getOtherUserAlbum({
        payload: {
          query: {
            params: localStorage.getItem("otherUserId"),
          },
        },
      })
    );
  }, []);

  useEffect(() => {
    if (getAlbumDetails.data?.success && !getAlbumDetails?.loading) {
      setAlbumDetails(getAlbumDetails.data?.data);
    }
  }, [getAlbumDetails]);

  return (
    <div className={css.album}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          {albumDetails?.length === 0 ? (
            <p
              style={{
                fontSize: 22,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              Chưa tải lên album nào. 😥
            </p>
          ) : (
            albumDetails?.map((item, index) => (
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
                <Head>
                  <title>Albums of {item.owner} </title>
                </Head>
                <div className={`${css.image}`}>
                  <div
                    style={{ cursor: "pointer", margin: 0, padding: 0 }}
                    onClick={() => {
                      router.push(`/albums/view-person/${item._id}`);
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="Album Image"
                      height="200"
                      image={item.coverUrl}
                      style={{ borderRadius: 8 }}
                    />
                  </div>
                </div>
                <div className={css.imageTitle}>
                  <span
                    id="albumName"
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
                    {item.albumName}
                  </span>
                  <Link
                    href={`/users/${item.userId._id}`}
                    style={{
                      all: "unset",
                      padding: "0 6px",
                    }}
                  >
                    Owner: {item.owner}
                  </Link>
                </div>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default OnlyViewPersonAlbums;
