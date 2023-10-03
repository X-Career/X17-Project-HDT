import React, { useState, useEffect } from "react";
import css from "./authProtect.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../../redux/reducer/getInfoSlice";

export default function AuthProtect(props) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className={`${css.authProtect} ${loading ? css.isCheckingAuth : ""}`}>
      {loading ? <div className={css.loader}> </div> : props.children}
    </div>
  );
}
