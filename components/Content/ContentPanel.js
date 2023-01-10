import { motion } from "framer-motion"

function ContentPanel(props) {
  const { children } = props;

  return (
    <motion.div
      variants={{
        show: {
          transition: {
            staggerChildren: .5,
            delayChildren: .5
          }
        },
        exit: {
          opacity: 0,
          transition: {
            delay: 0,
            staggerChildren: .5,
            delayChildren: .5,
          },
        },
      }}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ type: 'linear', duration: 1, delay: 1, staggerChildren: .5, delayChildren: .5 }}
      className="text-left"
    >
      {children}
    </motion.div>
  );
}

function ContentParagraph(props) {
  const { children } = props;

  return (
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ type: 'linear', duration: 1 }}
      className="text-gray-100 my-5 leading-relaxed tracking-wide"
    >
      {children}
    </motion.p>
  );
}

function ContentDiv(props) {
  const { children } = props;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ type: 'linear', duration: 1 }}
      className="text-gray-100 my-5 leading-relaxed tracking-wide"
    >
      {children}
    </motion.div>
  );
}

export { ContentPanel, ContentParagraph, ContentDiv };