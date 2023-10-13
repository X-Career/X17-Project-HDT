import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/reducer/authLoginSlice";
import { increaseValue, creaseValue } from "../../../redux/reducer/test";
import { getInfo } from "../../../redux/reducer/getInfoSlice";
import Loading from "../../components/loadingPage/Loading";

const index = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.test.data);
  const tokendata = useSelector((state) => state.token.data);
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
    dispatch(getInfo());
  };
  const tru = () => {
    dispatch(creaseValue());
  };

  return (
    <div>
      <Loading />
    </div>
  );
};

export default index;
