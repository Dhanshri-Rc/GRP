import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import logo from "../assets/img/global-reviews-press-footer-logo.webp";

/* =========================================================
   SOCIAL ICONS
   No additional package required
========================================================= */

function FacebookIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 8H16V4.5c-.43-.06-1.91-.18-3.66-.18-3.61 0-6.09 2.2-6.09 6.26V14H3v3.91h3.25V24h3.98v-6.09h3.32L14.08 14h-3.85v-3.04C10.23 9.83 10.54 8 13.5 8Z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.34 7.68H1.48V20h3.86V7.68ZM3.41 2C2.18 2 1.2 2.99 1.2 4.21c0 1.21.98 2.2 2.21 2.2 1.22 0 2.21-.99 2.21-2.2C5.62 2.99 4.63 2 3.41 2ZM20.8 12.95c0-3.72-1.99-5.45-4.64-5.45-2.14 0-3.1 1.18-3.63 2.01V7.68H8.67V20h3.86v-6.1c0-1.61.31-3.17 2.31-3.17 1.97 0 1.99 1.84 1.99 3.27V20h3.86l.11-7.05Z" />
    </svg>
  );
}

function XIcon({ size = 13 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.24 2H21.9l-7.99 9.13L23.3 22h-7.35l-5.76-7.53L3.61 22H-.05l8.52-9.74L-.54 2h7.54l5.2 6.87L18.24 2Zm-1.28 18.09h2.03L5.9 3.81H3.72l13.24 16.28Z" />
    </svg>
  );
}

export default function Footer() {
  const linkClass = `
    block
    w-fit

    font-['Inter',sans-serif]
    text-[11.5px]
    font-[400]
    leading-[1.8]
    text-white/85

    transition-all
    duration-300

    hover:translate-x-[3px]
    hover:text-white

    sm:text-[11.5px]

    lg:text-[12px]
  `;

  const headingClass = `
    font-['Inter',sans-serif]
    text-[13px]
    font-[700]
    uppercase
    tracking-[0.025em]
    text-white

    sm:text-[13px]

    lg:text-[13.5px]
  `;

  const socialClass = `
    group
    flex
    h-[30px]
    w-[30px]
    shrink-0
    items-center
    justify-center
    rounded-full

    border
    border-white/30

    bg-white/[0.04]

    text-white/90

    transition-all
    duration-300

    hover:-translate-y-[3px]
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
      {/* =====================================================
          TOP BORDER
      ====================================================== */}
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

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div
        className="
          mx-auto
          w-[min(1120px,calc(100%-32px))]
          py-[30px]

          sm:w-[min(1120px,calc(100%-48px))]
          sm:py-[30px]

          lg:py-[30px]
        "
      >
        {/* =====================================================
            FOUR COLUMN FOOTER GRID
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-[28px]
            gap-y-[32px]

            min-[520px]:grid-cols-2

            lg:grid-cols-[1.25fr_0.9fr_1fr_1.45fr]
            lg:items-start
            lg:gap-x-[40px]
            lg:gap-y-0

            xl:grid-cols-[1.25fr_0.9fr_1fr_1.5fr]
            xl:gap-x-[55px]
          "
        >
          {/* =====================================================
              01. LOGO + SOCIAL ICONS
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
                  w-[145px]
                  object-contain
                  object-left

                  sm:w-[150px]

                  lg:w-[160px]
                "
              />
            </Link>

      
            {/* =================================================
                SOCIAL MEDIA ICONS
            ================================================== */}
            <div
              className="
                mt-[15px]
                flex
                flex-wrap
                items-center
                gap-[8px]
              "
            >
              {/* FACEBOOK */}
              <motion.a
                href="#"
                aria-label="Facebook"
                title="Facebook"
                whileTap={{
                  scale: 0.94,
                }}
                className={socialClass}
              >
                <FacebookIcon />
              </motion.a>

              {/* INSTAGRAM */}
              <motion.a
                href="#"
                aria-label="Instagram"
                title="Instagram"
                whileTap={{
                  scale: 0.94,
                }}
                className={socialClass}
              >
                <InstagramIcon />
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                href="#"
                aria-label="LinkedIn"
                title="LinkedIn"
                whileTap={{
                  scale: 0.94,
                }}
                className={socialClass}
              >
                <LinkedinIcon />
              </motion.a>

              {/* X / TWITTER */}
              <motion.a
                href="#"
                aria-label="X"
                title="X"
                whileTap={{
                  scale: 0.94,
                }}
                className={socialClass}
              >
                <XIcon />
              </motion.a>
            </div>
          </motion.div>

          {/* =====================================================
              02. QUICK LINKS
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

            <span
              className="
                mt-[7px]
                block
                h-[2px]
                w-[27px]
                rounded-full
                bg-[#8dbb31]
              "
            />

            <ul
              className="
                mt-[12px]
                space-y-[2px]
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
                  to="/journals"
                  className={linkClass}
                >
                  Journals
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
            </ul>
          </motion.div>

          {/* =====================================================
              03. RESOURCES
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
              RESOURCES
            </h4>

            <span
              className="
                mt-[7px]
                block
                h-[2px]
                w-[27px]
                rounded-full
                bg-[#8dbb31]
              "
            />

            <ul
              className="
                mt-[12px]
                space-y-[2px]
              "
            >
              {/* SUBMIT MANUSCRIPT */}
              <li>
                <Link
                  to="/submit-manuscript"
                  className={linkClass}
                >
                  Submit Manuscript
                </Link>
              </li>

              {/* CONTACT */}
              <li>
                <Link
                  to="/contact"
                  className={linkClass}
                >
                  Contact Us
                </Link>
              </li>

              {/* PRIVACY POLICY */}
              <li>
                <Link
                  to="/privacy-policy"
                  className={linkClass}
                >
                  Privacy Policy
                </Link>
              </li>

              {/* TERMS */}
              <li>
                <Link
                  to="/terms-and-conditions"
                  className={linkClass}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* =====================================================
              04. CONTACT US
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
              CONTACT US
            </h4>

            <span
              className="
                mt-[7px]
                block
                h-[2px]
                w-[27px]
                rounded-full
                bg-[#8dbb31]
              "
            />

            <div
              className="
                mt-[13px]
                space-y-[3px]
              "
            >
              {/* =============================================
                  ADDRESS
              ============================================== */}
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
                  gap-[9px]

                  text-white/85

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                <div
                  className="
                    mt-[1px]
                    flex
                    h-[27px]
                    w-[27px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full

                    bg-white/[0.07]

                    text-white
                  "
                >
                  <MapPin
                    size={14}
                    strokeWidth={1.7}
                  />
                </div>

                <span
                  className="
                    pt-[2px]

                    font-['Inter',sans-serif]
                    text-[10.5px]
                    font-[400]
                    leading-[1.55]

                    sm:text-[11px]

                    lg:text-[11.5px]
                  "
                >
                  202, Planet Apartment
                  <br />

                  Omkar nagar, Nagpur - 440037,
                  <br />

                  Maharashtra, India.
                </span>
              </motion.a>

              {/* =============================================
                  EMAIL
              ============================================== */}
              <motion.a
                href="mailto:info@globalreviewspress.com"
                whileHover={{
                  x: 3,
                }}
                className="
                  group
                  flex
                  items-start
                  gap-[9px]

                  text-white/85

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                <div
                  className="
                    flex
                    h-[27px]
                    w-[27px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full

                    bg-white/[0.07]

                    text-white
                  "
                >
                  <Mail
                    size={14}
                    strokeWidth={1.7}
                  />
                </div>

                <span
                  className="
                    min-w-0
                    break-all
                    pt-[4px]

                    font-['Inter',sans-serif]
                    text-[10.5px]
                    font-[400]
                    leading-[1.5]

                    sm:text-[11px]

                    lg:text-[11.5px]
                  "
                >
                  info@globalreviewspress.com
                </span>
              </motion.a>

              {/* =============================================
                  PHONE
              ============================================== */}
              <motion.a
                href="tel:+919970294396"
                whileHover={{
                  x: 3,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-[9px]

                  text-white/85

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                <div
                  className="
                    flex
                    h-[27px]
                    w-[27px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full

                    bg-white/[0.07]

                    text-white
                  "
                >
                  <Phone
                    size={14}
                    strokeWidth={1.7}
                  />
                </div>

                <span
                  className="
                    font-['Inter',sans-serif]
                    text-[10.5px]
                    font-[400]

                    sm:text-[11px]

                    lg:text-[11.5px]
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