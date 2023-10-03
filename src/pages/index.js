// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightSidebar/RightSidebar";
import Link from "next/link";
import Head from "next/head";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.main}>Home Page</div>
    </main>
  );
}
