import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Logo from "../assets/img/global-reviews-press-logo.webp";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Journals", href: "/journals" },
  { name: "Reviewers", href: "/reviewer" },
  { name: "Editor Information", href: "/editors-information" },
  { name: "Why Publish", href: "/why-publish-us" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  /* =====================================================
      CLOSE MENU ON ROUTE CHANGE
  ====================================================== */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* =====================================================
      LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ====================================================== */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href) => location.pathname === href;

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header
        className={`
          fixed
          left-0
          top-0
          z-[100]
          w-full
          transition-colors
          duration-300

          ${
            isHome
              ? "bg-[#05264a]"
              : "bg-white shadow-[0_1px_8px_rgba(4,25,54,0.04)]"
          }
        `}
      >
        {/* =====================================================
            MAIN NAVBAR
        ====================================================== */}
        <nav
          className="
            mx-auto
            flex
            h-[80px]
            w-[min(1180px,calc(100%-32px))]
            items-center
            justify-between

            sm:w-[min(1180px,calc(100%-48px))]

            lg:h-[75px]
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            to="/"
            aria-label="Global Reviews Press Home"
            className="
              group
              flex
              shrink-0
              items-center
            "
          >
            <motion.img
              src={Logo}
              alt="Global Reviews Press"
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 0.25,
              }}
              className={`
                h-auto
                w-[175px]
                object-contain
                transition-all
                duration-300

                sm:w-[195px]

                lg:w-[205px]

                xl:w-[220px]

                ${
                  isHome
                    ? "brightness-0 invert"
                    : ""
                }
              `}
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <div
            className="
              hidden
              min-w-0
              flex-1
              items-center
              justify-end

              xl:flex
            "
          >
            <div
              className="
                flex
                items-center
                gap-[24px]

                2xl:gap-[28px]
              "
            >
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      group
                      relative
                      whitespace-nowrap
                      py-3
                      text-[13px]
                      font-[700]
                      tracking-[-0.01em]
                      transition-colors
                      duration-300

                      ${
                        isHome
                          ? active
                            ? "text-white"
                            : "text-white/95 hover:text-white"
                          : active
                            ? "text-[#0c3158]"
                            : "text-[#1f324b] hover:text-[#176797]"
                      }
                    `}
                  >
                    {item.name}

                    {/* UNDERLINE */}
                    <span
                      className={`
                        absolute
                        bottom-[10px]
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          isHome
                            ? "bg-[#32b3df]"
                            : "bg-[#487cd0]"
                        }

                        ${
                          active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                );
              })}
              {/* =================================================
    SUBMIT PAPER BUTTON
================================================== */}
<motion.div
  whileHover={{
    y: -2,
  }}
  whileTap={{
    scale: 0.97,
  }}
  transition={{
    duration: 0.2,
  }}
  className="shrink-0"
>
  <Link
    to="/submit-manuscript"
    className={`
      group
      inline-flex
      h-[38px]
      items-center
      justify-center
      whitespace-nowrap
      rounded-[5px]
      border
      px-[17px]
      text-[12.5px]
      font-[600]
      transition-all
      duration-300

      ${
        isHome
          ? `
            border-white/80
            bg-white
            text-[#05264a]

            hover:border-[#0e87b0]
            hover:bg-[#087ba1]
            hover:text-white
            hover:shadow-[0_7px_18px_rgba(0,0,0,0.15)]
          `
          : `
            border-[#000001]
            bg-[#05264A]
            text-white

            hover:border-[#176797]
            hover:bg-[#176797]
            hover:shadow-[0_7px_18px_rgba(5,38,74,0.18)]
          `
      }
    `}
  >
    Submit Paper
  </Link>
</motion.div>
            </div>

          
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <motion.button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            whileTap={{
              scale: 0.94,
            }}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className={`
              flex
              h-[42px]
              w-[42px]
              shrink-0
              items-center
              justify-center
              rounded-[5px]
              border
              transition-all
              duration-300

              xl:hidden

              ${
                isHome
                  ? `
                    border-white/30
                    bg-white/5
                    text-white

                    hover:border-white/60
                    hover:bg-white/10
                  `
                  : `
                    border-[#dce4ec]
                    bg-white
                    text-[#0a294b]

                    hover:border-[#154f79]
                    hover:bg-[#f4f8fb]
                  `
              }
            `}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <X
                    size={23}
                    strokeWidth={1.8}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <Menu
                    size={24}
                    strokeWidth={1.8}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={() => {
              setIsOpen(false);
            }}
            className="
              fixed
              inset-x-0
              bottom-0
              top-[80px]
              z-[90]
              bg-black/35
              backdrop-blur-[1px]

              lg:top-[75px]

              xl:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE / TABLET 250PX SIDEBAR
      ====================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{
              opacity: 0,
              x: 260,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 260,
            }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              fixed
              bottom-0
              right-0
              top-[80px]
              z-[95]
              w-[250px]
              overflow-y-auto
              shadow-[-12px_0_35px_rgba(1,16,53,0.16)]

              lg:top-[75px]

              xl:hidden

              ${
                isHome
                  ? "bg-[#011035]"
                  : "bg-white"
              }
            `}
          >
            {/* =================================================
                MENU CONTENT
            ================================================== */}
            <div
              className="
                flex
                min-h-full
                flex-col
                px-[15px]
                pb-[25px]
                pt-[15px]
              "
            >
              {/* =============================================
                  NAVIGATION LINKS
              ============================================== */}
              <div className="flex flex-col">
                {navigation.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: 15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: 0.04 + index * 0.04,
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className={`
                          group
                          relative
                          flex
                          min-h-[49px]
                          items-center
                          rounded-[4px]
                          border-b
                          px-[12px]
                          text-[12px]
                          font-[650]
                          transition-all
                          duration-300

                          ${
                            isHome
                              ? active
                                ? `
                                  bg-white/10
                                  pl-[17px]
                                  text-white
                                  border-white/10
                                `
                                : `
                                  border-white/10
                                  text-white/95

                                  hover:bg-white/7
                                  hover:pl-[17px]
                                  hover:text-white
                                `
                              : active
                                ? `
                                  border-[#e8edf2]
                                  bg-[#f1f7fb]
                                  pl-[17px]
                                  text-[#0b6594]
                                `
                                : `
                                  border-[#edf1f5]
                                  text-[#273a51]

                                  hover:bg-[#f7fafc]
                                  hover:pl-[17px]
                                  hover:text-[#12638e]
                                `
                          }
                        `}
                      >
                        {/* ACTIVE LINE */}
                        {active && (
                          <motion.span
                            layoutId="mobile-active-line"
                            className={`
                              absolute
                              left-0
                              h-[22px]
                              w-[3px]
                              rounded-r-full

                              ${
                                isHome
                                  ? "bg-[#35b9dc]"
                                  : "bg-[#168a57]"
                              }
                            `}
                          />
                        )}

                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

             {/* =================================================
    MOBILE SUBMIT PAPER BUTTON
================================================== */}
<motion.div
  initial={{
    opacity: 0,
    y: 12,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.3,
    delay: 0.3,
  }}
  className="mt-[18px]"
>
  <Link
    to="/submit-manuscript"
    onClick={() => {
      setIsOpen(false);
    }}
    className={`
      flex
      h-[43px]
      w-full
      items-center
      justify-center
      rounded-[5px]
      border
      text-[12px]
      font-[700]
      transition-all
      duration-300

      ${
        isHome
          ? `
            border-white
            bg-white
            text-[#011035]

            hover:border-[#35b9dc]
            hover:bg-[#35b9dc]
            hover:text-white
          `
          : `
            border-[#05264a]
            bg-[#05264a]
            text-white

            hover:border-[#176797]
            hover:bg-[#176797]
          `
      }
    `}
  >
    Submit Paper
  </Link>
</motion.div>

              {/* =============================================
                  SMALL BOTTOM TEXT
              ============================================== */}
              <div
                className={`
                  mt-auto
                  pt-[35px]
                  text-[9px]
                  leading-[1.6]

                  ${
                    isHome
                      ? "text-white/40"
                      : "text-[#8c9aaa]"
                  }
                `}
              >
                Global Reviews Press
                <br />
                Research. Reviews. Real Impact.
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}