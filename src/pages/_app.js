import "@/styles/globals.css";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import styles from "@/styles/Home.module.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <Header />
      <div className={styles.main}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  );
}
