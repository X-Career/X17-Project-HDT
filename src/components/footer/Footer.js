import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* Above */}
      <div className={styles.footerAbove}>
        <div className={styles.footerForm}>
          <p style={{ fontWeight: 600 }}>Subcribe to get latest news</p>
          <div className={styles.formField}>
            <input type="email" placeholder="Enter your email..." />
            <button>Send</button>
          </div>
        </div>

        <div className={styles.aboveBtns}>
          <button>
            <Link href="/">Home</Link>
          </button>
          <button>
            <Link href="/vacations">Vacations</Link>
          </button>
          <button>
            <Link href="/albums">Albums</Link>
          </button>
          <button>
            <Link href="/">About</Link>
          </button>
          <button>
            <Link href="/">Terms</Link>
          </button>
        </div>

        <div className={styles.aboveSocial}>
          <p>Follow Us</p>
          <div className={styles.socials}>
            <button>
              <Link href="/">
                <AiFillFacebook />
              </Link>
            </button>
            <button>
              <Link href="/">
                <AiFillInstagram />
              </Link>
            </button>
            <button>
              <Link href="/">
                <AiFillGoogleCircle />
              </Link>
            </button>
            <button>
              <Link href="/">
                <AiFillTwitterCircle />
              </Link>
            </button>
            <button>
              <Link href="/">
                <AiFillGithub />
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Below */}
      <div className={styles.footerBelow}>
        <div className={styles.belowBtns}>
          <button>Terms</button>
          <button>Privacy</button>
          <button>Policy</button>
          <button>About</button>
        </div>
        <div
          className={styles.belowLogo}
          style={{ fontWeight: 700, fontSize: 24 }}
        >
          <Link href="/">TravelBlog</Link>
        </div>
        <div style={{ fontWeight: 600 }}>© 2023. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
