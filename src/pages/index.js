import Head from "next/head"; /* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <Head>
        <title>Home</title>
      </Head>
      <Link href="/auth/updateInfo">
        <button>Update Info</button>
      </Link>
    </div>
  );
}
