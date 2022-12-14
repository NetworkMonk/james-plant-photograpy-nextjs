import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StandardPage from '../components/StandardPage';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [pageVisible, setPageVisible] = useState(false);
  const router = useRouter();

  useEffect(() => { document?.querySelector("body")?.classList?.add("overflow-hidden") });
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setPageVisible(true);
    }, 1500);
    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <StandardPage>
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} mode="wait">
        {pageVisible && (
          <Component {...pageProps} key={router.route} />
        )}
      </AnimatePresence>
    </StandardPage>
  );
}

export default MyApp
