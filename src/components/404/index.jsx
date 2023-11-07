import React from "react";
import Image from "next/image";
import haha from "../../assets/img/haha.png";
const Page404 = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <Image src={haha} width={500} height={500} />
    </div>
  );
};

export default Page404;
