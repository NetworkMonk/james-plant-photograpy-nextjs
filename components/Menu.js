import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -100, y: 0 },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

export default function Menu(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: 1, delay: 0.5 }}
        className="absolute left-0 bottom-0 top-0 w-96 shadow-2xl shadow-black bg-neutral-900 bg-opacity-50 backdrop-blur-lg overflow-visible hidden lg:block"
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
          transition={{ type: "linear", duration: 1, delay: 1 }}
          className="text-6xl text-white tracking-widest font-thin absolute whitespace-nowrap uppercase p-10"
        >
          James Plant
          <span className="inline-block ml-3 text-base font-normal opacity-90 tracking-widest">
            Photography
          </span>
          <motion.div
            variants={{
              hidden: { width: 0 },
              enter: { width: "100%" },
              exit: { width: 0 },
            }}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear", duration: 1, delay: 1 }}
            className="block border-white border-b-2 mt-5"
          />
        </motion.h1>

        <motion.ul
          variants={{
            show: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 1.5,
              },
            },
          }}
          initial="hidden"
          animate="show"
          transition={{ type: "linear", duration: 1, delay: 1 }}
          className="text-white mt-40"
        >
          {menuItems.map((menuItem, menuIndex) => {
            return (
              <Link href={menuItem.href} key={menuIndex}>
                <motion.li
                  variants={menuItemVariants}
                  transition={{ type: "linear", duration: 1 }}
                  className="text-lg font-light p-8 uppercase tracking-widest hover:bg-white hover:bg-opacity-90 hover:text-black hover:pl-14 transition-all duration-500 cursor-pointer group"
                >
                  <ChevronRightIcon className="inline w-5 h-5 -mt-1.5 mr-3" />
                  {menuItem.name}
                  <div className="block border-neutral-800 border-b mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 w-0 group-hover:w-full group-hover:shadow-2xl" />
                </motion.li>
              </Link>
            );
          })}
        </motion.ul>
      </motion.div>
      <div className="block lg:hidden">
        <AnimatePresence mode="wait">
          {menuVisible && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear", duration: 0.5, delay: 0 }}
              className="absolute left-0 bottom-0 top-0 w-[90vw] shadow-2xl shadow-black bg-neutral-900 bg-opacity-50 backdrop-blur-lg overflow-hidden z-10"
            >
              <motion.ul
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.25,
                      delayChildren: 0,
                    },
                  },
                }}
                initial="hidden"
                animate="show"
                transition={{ type: "linear", duration: 0, delay: 0 }}
                className="text-white mt-36"
              >
                {menuItems.map((menuItem, menuIndex) => {
                  return (
                    <Link
                      href={menuItem.href}
                      key={menuIndex}
                      onClick={() => setMenuVisible(false)}
                    >
                      <motion.li
                        variants={menuItemVariants}
                        transition={{ type: "linear", duration: 0.5 }}
                        className="text-md font-light p-4 px-6 uppercase tracking-widest hover:bg-white hover:bg-opacity-90 hover:text-black transition-all duration-500 cursor-pointer group"
                      >
                        <ChevronRightIcon className="inline w-4 h-4 -mt-1 mr-3" />
                        {menuItem.name}
                        <div className="block border-neutral-800 border-b mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 w-0 group-hover:w-full group-hover:shadow-2xl" />
                      </motion.li>
                    </Link>
                  );
                })}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: 0, y: 50 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, x: 0, y: 50 },
          }}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", duration: 1, delay: 1 }}
          className="text-lg md:text-xl text-white tracking-wide font-light absolute uppercase p-10 z-20"
        >
          <div
            onClick={() => setMenuVisible(!menuVisible)}
            className="cursor-pointer"
          >
            <Bars3Icon className="inline w-6 h-6 mr-3 -mt-1" />
            James Plant Photography
            <motion.div
              variants={{
                hidden: { width: 0 },
                enter: { width: "100%" },
                exit: { width: 0 },
              }}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear", duration: 1, delay: 1 }}
              className="block border-white border-b-2 mt-5"
            />
          </div>
        </motion.h1>
      </div>
    </>
  );
}
