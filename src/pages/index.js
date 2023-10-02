import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightSidebar/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className={styles.main}>Home Page</div>
    </main>
  );
}
