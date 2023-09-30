"use client";
import { useDispatch, useSelector } from "react-redux";
import { refreshTokenThunk as refreshTokenAsyncThunk } from "../../redux/reducer/refreshToken";
import { useEffect } from "react";
const useRefreshToken = () => {
  const dispatch = useDispatch();
  const tokendata = useSelector((state) => state.token.data);

  const refreshToken = async () => {
    let dataRT = {};

    if (typeof window !== "undefined") {
      const RT = localStorage.getItem("refreshToken");
      dataRT = {
        refreshToken: RT,
      };
    }
    await dispatch(refreshTokenAsyncThunk(dataRT));
  };

  useEffect(() => {
    if (tokendata && tokendata.RT) {
      const newRT = tokendata.RT;
      const newAT = tokendata.token;
      localStorage.setItem("refreshToken", newRT);
      localStorage.setItem("accessToken", newAT);
    }
  }, [tokendata]);

  return refreshToken;
};

export default useRefreshToken;
