import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAlbum } from "../../../redux/reducer/album/getAlbumSlice";

const Albums = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbum());
  }, []);
  return <div>Albums</div>;
};

export default Albums;
