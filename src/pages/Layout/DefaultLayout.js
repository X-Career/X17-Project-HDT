import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import styles from "@/styles/Home.module.css";
import AuthProtect from "../../components/authProtect/AuthProtect";

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
