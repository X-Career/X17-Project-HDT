import React, { cloneElement } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import styles from "@/styles/Home.module.css";
import AuthProtect from "../authProtect/AuthProtect";
import { useShowFooter } from "../context/FooterContext";

const DefaultLayout = ({ children }) => {
  const { showFooter } = useShowFooter();
  return (
    <AuthProtect>
      <Header />
      <div className={styles.main}>{children}</div>
      {showFooter && <Footer />}
    </AuthProtect>
  );
};

export default DefaultLayout;
