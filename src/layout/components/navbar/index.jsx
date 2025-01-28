import { useSelector } from "react-redux";
import { Logo, ThemeToggler } from "../../../generalComponents";
import { Profile } from "../../../modules/private/suggestion/components/productCard/components";
import { IconClose, IconHamburger } from "../../../assets/svgAssetsComponents";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Links } from "../../../modules/private/profile/components/Links";

export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <nav className="sticky top-0 z-50 flex items-center bg-grey-50 dark:bg-grey-950 justify-between gap-4 px-6 py-4 md:py-8 md:px-10 xl:max-w-[1110px] xl:mx-auto xl:px-0">
      <div>
        <Logo />
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <div className="sm:flex flex-col text-right hidden">
          <p className="text-grey-600 dark:text-grey-100 font-medium text-[16px]">
            {user?.name}
          </p>
          <p className="text-grey-400 dark:text-grey-100/75 text-[12px] leading-[12px]">
            {user?.email}
          </p>
        </div>
        <div>
          <Profile />
        </div>
      </div>

      <div className="text-grey-500 dark:text-grey-50 flex items-center">
        <ThemeToggler />
      </div>

      <div
        className=" md:hidden text-grey-600 dark:text-grey-50"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <IconClose /> : <IconHamburger />}
      </div>

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
              transition={{ ease: "easeInOut" }}
              className="w-[271px] bg-grey-50 dark:bg-grey-950  p-6 fixed z-20 top-[72px] right-0 bottom-0"
            >
              <Links />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Expanded Menu End */}
    </nav>
  );
};
