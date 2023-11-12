import "@/styles/globals.css";
import store from "../../redux/store";
import { Provider } from "react-redux";
import styles from "@/styles/Home.module.scss";
import AuthLayout from "../components/Layout/AuthLayout";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { useRouter } from "next/router";
import { ShowFooterProvider } from "../components/context/FooterContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.error = () => {};
  const getLayout = (pathname) => {
    if (pathname.startsWith("/auth")) {
      return AuthLayout;
    }
    return DefaultLayout;
  };
  const Layout = getLayout(router.pathname);
  return (
    <Provider store={store}>
      <ShowFooterProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ShowFooterProvider>
    </Provider>
  );
}
