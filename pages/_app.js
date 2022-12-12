import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect( () => { document?.querySelector("body")?.classList?.add("overflow-hidden") } );
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp
