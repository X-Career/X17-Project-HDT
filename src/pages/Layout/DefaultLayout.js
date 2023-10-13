import React from "react";
import AuthProtect from "@/components/authProtect/AuthProtect";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
