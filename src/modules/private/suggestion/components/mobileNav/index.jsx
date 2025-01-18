import iconMenu from "../../../../../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../../../../../assets/shared/mobile/icon-close.svg";
import { Roadmaps } from "../roadmaps";
import { Tags } from "../tags";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ThemeToggler } from "../../../../../generalComponents";

export const MobileNav = () => {
  const variants = {
    closed: {
      opacity: 0,
      width: 0,
    },
    open: {
      opacity: 1,
      width: "271px",
    },
  };

  const navCardVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky overflow-visible  top-0 z-30 ">
      {/* Menu Upper Body Start */}
      <div className="px-6 py-4 bg-suggestion-header-mobile bg-no-repeat bg-cover flex items-center justify-between gap-2 md:hidden h-[72px]">
        <div className="text-grey-0">
          <h2 className="text-sm font-bold">Frontend Mentor</h2>
          <p className="text-xs opacity-75">Feedback Board</p>
        </div>
        <div className="ml-auto flex items-center justify-center mt-2 mr-4 text-white">
          <ThemeToggler />
        </div>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <img
            src={isOpen ? closeIcon : iconMenu}
            alt="Hamburger Icon"
            className="size-5"
          />
        </button>
      </div>
      {/* Menu Upper Body End */}

      {/* Expanded Menu Start */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <button
              onClick={() => setIsOpen(false)}
              className="fixed z-20 top-[72px] right-0 bottom-0 bg-black/50  w-full md:hidden"
            ></button>
            <motion.div
              initial="closed"
              variants={variants}
              animate={isOpen ? "open" : "closed"}
              exit={"closed"}
              className="w-[271px] bg-grey-50  p-6 fixed z-20 top-[72px] right-0 bottom-0"
            >
              <motion.div
                initial="hidden"
                animate={isOpen ? "shown" : "hidden"}
                variants={navCardVariants}
                transition={{ delay: 0.3 }}
                exit={"hidden"}
              >
                <Tags />
              </motion.div>
              <motion.div
                initial="hidden"
                animate={isOpen ? "shown" : "hidden"}
                variants={navCardVariants}
                transition={{ delay: 0.3 }}
                exit={"hidden"}
              >
                <Roadmaps />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Expanded Menu End */}
    </div>
  );
};
