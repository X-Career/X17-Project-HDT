import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "../../styles/Home.module.css";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles["main"]}> {children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
