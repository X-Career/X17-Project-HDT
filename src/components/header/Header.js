import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navLogo}>
        <Link href="/" className={styles.logoImage}>
          <Image
            src="/assets/travel-logo.png"
            alt="logo"
            width={28}
            height={28}
          />
          <p className={styles.logoName}>Travel Blog</p>
        </Link>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.search}
          />
          <BiSearch className={styles.searchIcon} />
        </div>

        <div className={styles.navBar}>
          <div className={styles.auth}>
            <Link href="/">Sign In</Link>
            <Link href="/">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
