import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/reducer/authSlice";
import { increaseValue } from "../../../redux/reducer/test";
const index = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  const count = useSelector((state) => state.test.value);
  const dataRequest = {
    identifier: "Sieubuong@gmail.com",
    password: "Huybeo123",
  };
  const handleLogin = () => {
    dispatch(login(dataRequest));
  };
  const plus = () => {
    dispatch(increaseValue());
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={plus}>plus</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default index;
