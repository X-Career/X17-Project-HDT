import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import styles from "@/styles/Home.module.scss";
import AuthProtect from "../authProtect/AuthProtect";
import { useShowFooter } from "../context/FooterContext";
import NewHeader from "../header/NewHeader";

const DefaultLayout = ({ children }) => {
  const { showFooter, showHeader } = useShowFooter();
  return (
    <AuthProtect>
      {showHeader && <NewHeader />}
      <div className={styles.main}>{children}</div>
      {showFooter && <Footer />}
    </AuthProtect>
  );
};

export default DefaultLayout;
