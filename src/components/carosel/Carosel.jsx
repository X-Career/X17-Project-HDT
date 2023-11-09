import React from "react";
import { Carousel } from "antd";
import banner1 from "../../../public/assets/banner1.jpg";
import banner2 from "../../../public/assets/banner2.jpg";
import banner3 from "../../../public/assets/banner3.jpg";
import banner4 from "../../../public/assets/banner4.jpg";
import banner5 from "../../../public/assets/banner5.jpg";
import banner6 from "../../../public/assets/banner6.jpg";
import banner7 from "../../../public/assets/banner7.jpg";
import banner8 from "../../../public/assets/banner8.jpg";
import Image from "next/image";
import styles from "./carosel.module.scss";

const contentStyle = {
  height: "auto",
  width: "100%",
};

const HeroCarosel = () => (
  <Carousel autoplay className={styles.caroselWrapper}>
    <div>
      <div style={contentStyle}>
        <Image
          src={banner1}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image
          src={banner2}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image
          src={banner3}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image
          src={banner4}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image
          src={banner5}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image
          src={banner6}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image
          src={banner7}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image
          src={banner8}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  </Carousel>
);
export default HeroCarosel;
