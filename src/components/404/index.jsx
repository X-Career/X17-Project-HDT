import React from "react";
import Image from "next/image";
import haha from "../../assets/img/haha.png";
import arrow from "../../assets/img/arrow.png";
const Page404 = () => {
  return (
    <div style={{ width: "40%", background: "#EDF3FF", borderRadius: "8px" }}>
      <div style={{ position: "relative" }}>
        <Image src={haha} width={500} height={500} />
        <div style={{ position: "absolute", top: 20, right: "-250px" }}>
          <Image src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Page404;
