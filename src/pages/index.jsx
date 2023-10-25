import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteLogin } from "../../redux/reducer/resetState/deleteLogin";
import Head from "next/head";

export default function Home() {
  const dispatch = useDispatch();
  console.error = () => {};
  useEffect(() => {
    dispatch(deleteLogin());
  }, []);
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.main}>Home Page</div>
    </main>
  );
}
