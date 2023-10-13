import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteLogin } from "../../redux/reducer/resetState/deleteLogin";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteLogin());
  }, []);
  return (
    <main>
      <div className={styles.main}>Home Page</div>
    </main>
  );
}
