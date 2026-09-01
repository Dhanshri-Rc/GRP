import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  MapPin,
  Mail,
  Phone,
  Share2,
  MessageCircle,
  Globe2,
  Rss,
} from "lucide-react";

import logo from "../assets/img/global-reviews-press-footer-logo.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkClass = `
    block
    w-fit
    
    text-[12px]
    font-[400]
    leading-[1.75]
    text-white/90
    transition-all
    duration-300
    hover:translate-x-[3px]
    hover:text-white

    sm:text-[11.5px]

    lg:text-[11.5px]

    xl:text-[12px]
  `;

  const headingClass = `
    font-['Inter',sans-serif]
    text-[13px]
    font-[700]
    uppercase
    tracking-[0.02em]
    text-white

    sm:text-[12.5px]

    lg:text-[13px]

    xl:text-[13.5px]
  `;

  const socialClass = `
    group
    flex
    h-[27px]
    w-[27px]
    items-center
    justify-center
    rounded-full
    border
    border-white/35
    text-white/85
    transition-all
    duration-300

    hover:border-white
    hover:bg-white
    hover:text-[#05264a]
    hover:shadow-[0_5px_15px_rgba(255,255,255,0.12)]
  `;

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#05264a]
        text-white
      "
    >
      {/* ==================== TOP BORDER ==================== */}
      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-white/15
        "
      />

      {/* ==================== MAIN CONTAINER ==================== */}
      <div
        className="
          mx-auto
          w-[min(1120px,calc(100%-32px))]
          py-[34px]

          sm:w-[min(1120px,calc(100%-48px))]
          sm:py-[38px]

          lg:py-[32px]

          xl:py-[36px]
        "
      >
        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-[28px]
            gap-y-[34px]

            sm:grid-cols-2

            md:grid-cols-3

            lg:grid-cols-[1.25fr_0.8fr_0.9fr_0.95fr_1.55fr]
            lg:gap-x-[19px]
            lg:gap-y-0

            xl:grid-cols-[1.3fr_0.85fr_0.9fr_0.95fr_1.65fr]
            xl:gap-x-[36px]
          "
        >
          {/* =====================================================
              LOGO SECTION
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              lg:pr-[5px]
            "
          >
            {/* LOGO */}
            <Link
              to="/"
              className="
                group
                inline-block
              "
            >
              <motion.img
                src={logo}
                alt="Global Reviews Press"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  h-auto
                  w-[142px]
                  object-contain
                  object-left

                  sm:w-[150px]

                  lg:w-[135px]

                  xl:w-[148px]
                "
              />
            </Link>

           

            {/* ==================== SOCIAL ICONS ==================== */}
            <div
              className="
                mt-[10px]
                flex
                items-center
                gap-[7px]
              "
            >
              {/* SHARE */}
              <motion.a
                href="#"
                aria-label="Share"
                whileHover={{
                  y: -3,
                  scale: 1.08,
                  rotate: -4,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className={socialClass}
              >
                <Share2
                  size={12}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </motion.a>

              {/* MESSAGE */}
              <motion.a
                href="#"
                aria-label="Community"
                whileHover={{
                  y: -3,
                  scale: 1.08,
                  rotate: 4,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className={socialClass}
              >
                <MessageCircle
                  size={12}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </motion.a>

              {/* WEBSITE */}
              <motion.a
                href="#"
                aria-label="Website"
                whileHover={{
                  y: -3,
                  scale: 1.08,
                  rotate: -4,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className={socialClass}
              >
                <Globe2
                  size={12}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-[10deg]
                    group-hover:scale-110
                  "
                />
              </motion.a>

              {/* RSS */}
              <motion.a
                href="#"
                aria-label="Updates"
                whileHover={{
                  y: -3,
                  scale: 1.08,
                  rotate: 4,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className={socialClass}
              >
                <Rss
                  size={12}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </motion.a>
            </div>
          </motion.div>

          {/* =====================================================
              PUBLISHER
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
          >
            <h4 className={headingClass}>
              QUICK LINKS
            </h4>

            <ul
              className="
                mt-[11px]
                space-y-[1px]
              "
            >
              <li>
                <Link
                  to="/about"
                  className={linkClass}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/reviewer"
                  className={linkClass}
                >
                  Reviewers
                </Link>
              </li>

              <li>
                <Link
                  to="/editors-information"
                  className={linkClass}
                >
                  Editor Information
                </Link>
              </li>

              <li>
                <Link
                  to="/why-publish-us"
                  className={linkClass}
                >
                  Why Publish With Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={linkClass}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* =====================================================
              JOURNALS
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <h4 className={headingClass}>
              JOURNALS
            </h4>

            <ul
              className="
                mt-[11px]
                space-y-[1px]
              "
            >
              <li>
                <Link
                  to="/journals"
                  className={linkClass}
                >
                  All Journals
                </Link>
              </li>

              <li>
                <Link
                  to="/journals"
                  className={linkClass}
                >
                  New Journals
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className={linkClass}
                >
                  Journal Guidelines
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={linkClass}
                >
                  Publication Ethics
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={linkClass}
                >
                  Open Access Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* =====================================================
              AUTHORS
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
          >
            <h4 className={headingClass}>
              AUTHORS
            </h4>

            <ul
              className="
                mt-[11px]
                space-y-[1px]
              "
            >
              <li>
                <a
                  href="#"
                  className={linkClass}
                >
                  Author Guidelines
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={linkClass}
                >
                  Submit Manuscript
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={linkClass}
                >
                  Track Submission
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={linkClass}
                >
                  APC &amp; Waivers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={linkClass}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </motion.div>

       

          {/* =====================================================
              CONTACT US
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <h4 className={headingClass}>
              CONTACT US
            </h4>

            <div
              className="
                mt-[11px]
                space-y-[10px]
              "
            >
              {/* ADDRESS */}
              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Nagpur+Maharashtra+India"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  x: 3,
                }}
                className="
                  group
                  flex
                  items-start
                  gap-[7px]
                  text-white/90
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <MapPin
                  size={15}
                  strokeWidth={1.8}
                  className="
                    mt-[2px]
                    shrink-0
                    text-white
                  "
                />

                <span
                  className="
                    font-['Inter',sans-serif]
                    text-[10.5px]
                    font-[400]
                    leading-[1.55]

                    sm:text-[11px]

                    lg:text-[11px]

                    xl:text-[11.5px]
                  "
                >
                  202, Planet Apartment
                  <br />
                  Onkarnagar, 
                 
                  Nagpur - 440037,
                  <br />
                  Maharashtra, India.
                </span>
              </motion.a>

              {/* EMAIL */}
              <motion.a
                href="mailto:info@globalreviewspress.com"
                whileHover={{
                  x: 3,
                }}
                className="
                  group
                  flex
                  items-start
                  gap-[7px]
                  text-white/90
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <Mail
                  size={15}
                  strokeWidth={1.8}
                  className="
                    mt-[1px]
                    shrink-0
                    text-white
                  "
                />

                <span
                  className="
                    break-all
                    font-['Inter',sans-serif]
                    text-[10.5px]
                    font-[400]
                    leading-[1.5]

                    sm:text-[11px]

                    lg:text-[11px]

                    xl:text-[11.5px]
                  "
                >
                  info@globalreviewspress.com
                </span>
              </motion.a>

              {/* PHONE */}
              <motion.a
                href="tel:+919970294396"
                whileHover={{
                  x: 3,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-[7px]
                  text-white/90
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <Phone
                  size={15}
                  strokeWidth={1.8}
                  className="
                    shrink-0
                    text-white
                  "
                />

                <span
                  className="
                    font-['Inter',sans-serif]
                    text-[10.5px]
                    font-[400]

                    sm:text-[11px]

                    lg:text-[11px]

                    xl:text-[11.5px]
                  "
                >
                  +91 9970294396
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

      
      </div>
    </footer>
  );
}