import { motion } from "framer-motion"
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from "next/link"

const menuItems = [
  { name: 'Home', href: "/" },
  { name: 'Portraits', href: "/portraits" },
  { name: 'Landscapes', href: "/landscapes" },
  { name: 'Contact', href: "/contact" },
];

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 100, y: 0 },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

export default function Menu(props) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 1, delay: .5 }}
      className="absolute left-0 bottom-0 top-0 w-96 shadow-2xl shadow-black bg-neutral-900 bg-opacity-50 backdrop-blur-lg overflow-visible"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, x: 0, y: 50 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: 50 },
        }}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear', duration: 1, delay: 1 }}
        className="text-6xl text-white tracking-wide font-thin absolute whitespace-nowrap uppercase p-10"
      >
        James Plant Photography
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
          className="block border-white border-b-2 mt-5"
        />
      </motion.h1>

      <motion.ul
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
        className="text-white mt-40"
      >
        {menuItems.map((menuItem, menuIndex) => {
          return (
            <motion.li
              key={menuIndex}
              variants={menuItemVariants}
              transition={{ type: 'linear', duration: 1 }}
              className="text-lg font-thin p-8 uppercase tracking-widest hover:bg-white hover:bg-opacity-80 hover:text-black hover:pl-14 transition-all duration-500 cursor-pointer group"
            >
              <ChevronRightIcon className="inline w-5 h-5 -mt-1.5 mr-3" />
              <Link href={menuItem.href}>{menuItem.name}</Link>
              <div
                className="block border-neutral-800 border-b mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 w-0 group-hover:w-full group-hover:shadow-2xl"
              />
            </motion.li>
          )
        })}

      </motion.ul>
    </motion.div>
  )
}