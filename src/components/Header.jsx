import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Logo from "../assets/img/logo.png";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Journals", href: "/journals" },
  { name: " Reviewers", href: "/reviewer" },
  { name: "Editor Information", href: "/editors-information" },
  { name: "Why Publish Us", href: "/why-publish-us" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href) => location.pathname === href;

  return (
    <>
      {/* ==================== HEADER ==================== */}
      <header className="fixed z-[100] w-full bg-white">

        {/* ==================== DESKTOP / MAIN HEADER ==================== */}
        <nav className="mx-auto flex h-[80px] w-[min(1180px,calc(100%-32px))] items-center justify-between sm:w-[min(1180px,calc(100%-48px))] lg:h-[75px]">

          {/* ==================== LOGO ==================== */}
          <Link
            to="/"
            className="group flex shrink-0 items-center"
            aria-label="Global Reviews Press Home"
          >
            <img
              src={Logo}
              alt="Global Reviews Press"
              className="
                h-auto
                w-[180px]
                object-contain
                transition-all
                duration-300
                group-hover:scale-[1.02]
                sm:w-[205px]
                lg:w-[220px]
                xl:w-[235px]
              "
            />
          </Link>

          {/* ==================== DESKTOP NAVIGATION ==================== */}
          <div className="hidden min-w-0 flex-1 items-center justify-end xl:flex">

            <div className="flex items-center gap-[28px] 2xl:gap-[29px]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    group relative whitespace-nowrap
                    py-3
                    text-[13px]
                    font-bold
                    tracking-[-0.01em]
                    transition-colors
                    duration-300
                    ${
                      isActive(item.href)
                        ? "text-[#0c3158]"
                        : "text-[#1f324b] hover:text-[#176797]"
                    }
                  `}
                >
                  {item.name}

                  {/* Active / hover underline */}
                  <span
                    className={`
                      absolute
                      bottom-[12px]
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#487cd0]
                      transition-all
                      duration-300
                      ${
                        isActive(item.href)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              ))}
            </div>

            {/* ==================== SUBMIT BUTTON ==================== */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="ml-[24px] shrink-0"
            >
              <Link
                to="/submit-manuscript"
                className="
                  group
                  inline-flex
                  h-[42px]
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-[5px]
                  border
                  border-[#071d3a]
                  bg-[#071d3a]
                  px-[18px]
                  text-[11px]
                  font-semibold
                  text-white
                  shadow-[0_4px_10px_rgba(7,29,58,0.14)]
                  transition-all
                  duration-300
                  hover:border-[#154f79]
                  hover:bg-[#154f79]
                  hover:shadow-[0_7px_18px_rgba(7,29,58,0.22)]
                "
              >
                Submit Manuscript
              </Link>
            </motion.div>
          </div>

          {/* ==================== MOBILE MENU BUTTON ==================== */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="
              flex
              h-[42px]
              w-[42px]
              shrink-0
              items-center
              justify-center
              rounded-[5px]
              border
              border-[#dce4ec]
              text-[#0a294b]
              transition-all
              duration-300
              hover:border-[#154f79]
              hover:bg-[#f4f8fb]
              xl:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={23} strokeWidth={1.8} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} strokeWidth={1.8} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* ==================== MOBILE / TABLET NAVIGATION ==================== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden border-t border-[#e7edf3] bg-white xl:hidden"
            >
              <div className="mx-auto w-[min(1180px,calc(100%-32px))] py-4 sm:w-[min(1180px,calc(100%-48px))]">

                {/* Navigation Links */}
                <div className="flex flex-col">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.035,
                      }}
                    >
                      <Link
                        to={item.href}
                        className={`
                          relative
                          flex
                          min-h-[47px]
                          items-center
                          border-b
                          border-[#edf1f5]
                          px-2
                          text-[13px]
                          font-semibold
                          transition-all
                          duration-300
                          ${
                            isActive(item.href)
                              ? "bg-[#f2f8f6] pl-4 text-[#188752]"
                              : "text-[#273a51] hover:bg-[#f7fafc] hover:pl-4 hover:text-[#12638e]"
                          }
                        `}
                      >
                        {isActive(item.href) && (
                          <span className="absolute left-0 h-[22px] w-[3px] rounded-r-full bg-[#168a57]" />
                        )}

                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Submit Button */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2,
                  }}
                  className="pt-5"
                >
                  <Link
                    to="/submit-manuscript"
                    className="
                      flex
                      h-[44px]
                      w-full
                      items-center
                      justify-center
                      rounded-[5px]
                      bg-[#071d3a]
                      px-5
                      text-[12px]
                      font-semibold
                      text-white
                      shadow-[0_5px_14px_rgba(7,29,58,0.16)]
                      transition-all
                      duration-300
                      hover:bg-[#154f79]
                      sm:w-fit
                    "
                  >
                    Submit Manuscript
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}