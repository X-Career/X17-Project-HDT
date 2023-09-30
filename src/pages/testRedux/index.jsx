import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/reducer/authSlice";
import { increaseValue, creaseValue } from "../../../redux/reducer/test";
import { getUserInfo } from "../../../redux/reducer/getUserInfoSLice";
import useRefreshToken from "../../../utils/hook/refreshToken";
const index = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.test.data);
  const tokendata = useSelector((state) => state.token.data);
  const refreshToken = useRefreshToken();
  const handleRefreshToken = () => {
    refreshToken();
  };
  const dataRequest = {
    identifier: "Test1",
    password: "Huybeo123",
  };

  const handleLogin = () => {
    dispatch(login(dataRequest));
  };
  const plus = () => {
    dispatch(increaseValue());
  };
  const handleGetUserInfo = () => {
    dispatch(getUserInfo());
  };
  const tru = () => {
    dispatch(creaseValue());
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={plus}>plus</button>
      <button onClick={tru}>tru</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetUserInfo}>get</button>
      <button onClick={handleRefreshToken}>token</button>
    </div>
  );
};

export default index;
