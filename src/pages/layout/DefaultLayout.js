import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import AuthProtect from "../../components/authProtect/AuthProtect";
import styles from "@/styles/Home.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <AuthProtect>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </AuthProtect>
  );
};

export default DefaultLayout;
