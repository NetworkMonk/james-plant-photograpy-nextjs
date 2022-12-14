import { motion } from "framer-motion"

export default function Title(props) {
  const { children } = props;

  return (
    <motion.h2
      variants={{
        hidden: { opacity: 0, x: 0, y: 50 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 50 },
      }}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 1, delay: 0 }}
      className="text-xl lg:text-4xl lg:text-right mb-10 font-thin tracking-wide uppercase inline-block"
    >
      {children}
      <motion.div
        variants={{
          hidden: { width: 0 },
          enter: { width: '100%' },
          exit: { width: 0 },
        }}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear', duration: 1, delay: 0 }}
        className="block border-white border-b-2 mt-5 lg:ml-auto"
      />
    </motion.h2>
  )
}