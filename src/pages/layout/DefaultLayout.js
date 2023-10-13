import React from "react";
<<<<<<< HEAD
=======
import AuthProtect from "@/components/authProtect/AuthProtect";
>>>>>>> c2c0e0f044f9419864f7bed0b4a32c42530411d7
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
