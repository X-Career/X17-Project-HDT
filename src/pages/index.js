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
      <Header />
      <div className={styles.main}>
        <LeftSidebar />
        Home Page
        <RightSidebar />
      </div>
      <Footer />
    </main>
  );
}
