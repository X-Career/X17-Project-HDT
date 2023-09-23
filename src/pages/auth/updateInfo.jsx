/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import UpdateModal from "../../modal/updateModal";

export default function UpdateInfo() {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <Head>
        <title>Update Info</title>
      </Head>
      <button style={{ margin: 20 }}>
        <SettingsRoundedIcon
          sx={{ fontSize: 20 }}
          onClick={() => setShow(!show)}
        />
      </button>
      <Link href="/">
        <button>
          <KeyboardBackspaceRoundedIcon sx={{ fontSize: 20 }} />
        </button>
      </Link>
      {show && <UpdateModal show={show} setShow={setShow} />}
    </div>
  );
}
