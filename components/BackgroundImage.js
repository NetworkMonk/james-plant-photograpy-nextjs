import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0, delay: 1.5 },
  exit: { opacity: 0, x: 100, y: 0, transition: { duration: 1.5 } },
}

export default function BackgroundImage(props) {
  const { image, visible } = props;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear', duration: 1.5, delay: 1.5 }}
          className="absolute -z-10 top-0 left-0 right-0 bottom-0 overflow-hidden"
        >
          <Image src={`/img/photos/${image}.jpg`} alt="Background Image" style={{ objectFit: 'cover' }} sizes="100vw" fill priority className={"brightness-50 saturate-[.2]"} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}