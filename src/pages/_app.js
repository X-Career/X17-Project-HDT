import { useRouter } from 'next/router';
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <router>
      <Component {...pageProps} />
    </router>
  );
}

export default MyApp;