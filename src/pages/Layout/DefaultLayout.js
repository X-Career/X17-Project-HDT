import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
