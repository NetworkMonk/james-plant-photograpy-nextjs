import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion"
import Head from 'next/head'
import Image from 'next/image'
import BackgroundImage from '../components/BackgroundImage'
import BackgroundSlideShow from '../components/BackgroundSlideshow'
import Menu from '../components/Menu'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Head>
        <title>James Plant Photography</title>
        <meta name="description" content="Portrait photographer in London and Essex. Premium portraits to an excellent standard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute -z-20 top-0 left-0 right-0 bottom-0 bg-black"></div>

      <BackgroundSlideShow />

      <Menu />

      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              enter: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 100 },
            }}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', duration: 1, delay: 1 }}
            className="absolute -z-10 top-0 bottom-0 right-0 w-3/4 bg-opacity-0"
          ></motion.div>
          <div className="text-white p-10 mt-auto align-bottom absolute bottom-0 max-h-[75vh] overflow-auto text-right">
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: 0, y: 50 },
                enter: { opacity: 1, x: 0, y: 0 },
                exit: { opacity: 0, x: 0, y: 50 },
              }}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: 'linear', duration: 1, delay: 1 }}
              className="text-4xl text-right mb-10 font-thin tracking-wide uppercase inline-block"
            >
              About Me
              <motion.div
                variants={{
                  hidden: { width: 0 },
                  enter: { width: '100%' },
                  exit: { width: 0 },
                }}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: 'linear', duration: 1, delay: 1 }}
                className="block border-white border-b-2 mt-5 ml-auto"
              />
            </motion.h2>
            <motion.div
              variants={{
                show: {
                  transition: {
                    staggerChildren: .5,
                    delayChildren: 1.5
                  }
                }
              }}
              initial="hidden"
              animate="show"
              transition={{ type: 'linear', duration: 1, delay: 1 }}
              className="text-left"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ type: 'linear', duration: 1 }}
                className="text-gray-100 my-5 leading-relaxed tracking-wide"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum massa egestas porta elementum. Proin ipsum lectus, ultrices ut odio eget, lacinia sodales arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ut est felis. Proin nec finibus ex, rutrum aliquet sem. Aliquam vulputate velit non tristique vehicula. Nam vulputate ligula ante.</motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ type: 'linear', duration: 1 }}
                className="text-gray-100 my-5 leading-relaxed tracking-wide"
              >In non justo ac odio gravida aliquet. Nullam sed neque non augue tristique posuere at ac enim. Nam quis tellus vel purus congue faucibus in vel dui. Curabitur sed lobortis sapien, ac placerat elit. Donec varius nisl a neque dictum volutpat. Aenean dapibus a urna vitae finibus. Praesent ac urna ante. Nullam pellentesque quam et nunc posuere, laoreet porta nunc bibendum. In et metus libero. Nunc ultricies nec erat sed aliquam. Phasellus ornare hendrerit leo, vitae laoreet arcu congue quis. Ut in diam facilisis, vehicula nisl sit amet, pellentesque enim. Aliquam sit amet commodo lorem, volutpat consectetur orci. Mauris auctor egestas nisl, ultricies lacinia justo feugiat vitae. Maecenas placerat justo velit, luctus viverra nisl ultricies non. Quisque in tellus at dolor ullamcorper eleifend.</motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ type: 'linear', duration: 1 }}
                className="text-gray-100 my-5 leading-relaxed tracking-wide"
              >Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ullamcorper lacus id consectetur. Fusce id velit eu magna dapibus gravida in ut ex. Suspendisse potenti. Ut elit velit, vulputate eu bibendum in, vehicula vitae erat. Maecenas ac quam convallis magna sollicitudin elementum. Donec interdum ex ut augue posuere lobortis. Mauris sed augue sed massa interdum mattis. Quisque mollis placerat erat a volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam venenatis molestie nisl. Vivamus iaculis sed felis ut vestibulum. Cras volutpat tristique leo, eget rhoncus nisl feugiat in.</motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ type: 'linear', duration: 1 }}
                className="text-gray-100 my-5 leading-relaxed tracking-wide"
              >Aliquam congue placerat erat non imperdiet. Cras pulvinar at libero vitae venenatis. Aliquam sollicitudin bibendum interdum. Aenean sapien lectus, varius sit amet placerat eget, suscipit in metus. Aenean velit dui, faucibus sit amet eros eget, accumsan euismod mauris. Duis purus est, sagittis vitae ante eget, imperdiet facilisis sapien. Sed accumsan at leo ut scelerisque. Nunc ac nisl magna. Vestibulum a nulla metus. Praesent scelerisque sodales leo quis egestas. Praesent posuere nec odio in sollicitudin. Proin at ante nec ex feugiat maximus. Donec non mi gravida dui cursus laoreet ac et lorem. Curabitur sollicitudin mollis elit a imperdiet. Etiam sagittis, urna id euismod laoreet, nulla velit sodales ex, sed convallis turpis lacus a diam.</motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ type: 'linear', duration: 1 }}
                className="text-gray-100 my-5 leading-relaxed tracking-wide"
              >Vivamus sit amet velit consequat tellus fermentum bibendum. Donec eu lobortis nibh, eget vehicula risus. In metus urna, rhoncus nec nisi vitae, vehicula venenatis justo. Etiam vel dolor fermentum, porttitor metus tempor, molestie dui. Vivamus sit amet purus ante. Praesent aliquam vehicula lacus a fermentum. Vestibulum eu lectus turpis. Aenean tincidunt nunc at ligula porta blandit. Sed lacinia ultricies turpis a varius. Phasellus consequat imperdiet tellus, sit amet placerat tortor. Curabitur non feugiat erat, at suscipit nibh. Mauris sed sollicitudin augue.</motion.p>
            </motion.div>
          </div>
        </div>
      </div>


      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
