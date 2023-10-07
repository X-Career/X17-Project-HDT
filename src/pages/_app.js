import "@/styles/globals.css";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import styles from "@/styles/Home.module.css";
import AuthLayout from "./Layout/AuthLayout";
import DefaultLayout from "./Layout/DefaultLayout";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = (pathname) => {
    if (pathname.startsWith("/auth")) {
      return AuthLayout;
    }
    return DefaultLayout;
  };
  const Layout = getLayout(router.pathname);
  return (
    <Provider store={store}>
      <Layout>
        <div className={styles.main}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </Provider>
  );
}
