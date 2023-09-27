import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/reducer/authSlice";
import { authSlice } from "../../../redux/reducer/authSlice";
const index = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  const dataRequest = {
    identifier: "ieubuong@gmail.com",
    password: "Huybeo123",
  };
  const handleLogin = () => {
    dispatch(login(dataRequest));
  };
  console.log(data);
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default index;
