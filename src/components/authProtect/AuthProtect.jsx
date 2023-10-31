import React, { useState, useEffect } from "react";
import Head from "next/head";
import css from "./authProtect.module.scss";
import { useRouter } from "next/router";

export default function AuthProtect(props) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.accessToken) {
      router.push("/auth/sign-in");
    } else {
      if (
        router.pathname === "/auth/sign-in" ||
        router.pathname === "/auth/sign-up"
      ) {
        router.push("/");
      }
      setLoading(false);
    }
  }, [router.pathname]);

  return (
    <div className={`${css.authProtect} ${loading ? css.isCheckingAuth : ""}`}>
      {loading ? (
        <div className={css.loader}>
          <Head>
            <title>Loading...</title>
          </Head>
        </div>
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
}
