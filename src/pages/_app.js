import { useRouter } from 'next/router';
import "../styles/Signup.module.scss"

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <router>
      <Component {...pageProps} />
    </router>
  );
}

export default MyApp;