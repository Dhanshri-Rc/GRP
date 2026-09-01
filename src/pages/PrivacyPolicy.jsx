import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  Database,
  Cookie,
  Share2,
  UserRoundCheck,
  Clock3,
  Globe2,
  ExternalLink,
  Baby,
  RefreshCw,
  Mail,
  FileText,
  CheckCircle2,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white pt-[75px]">
        {/* =========================================================
            PRIVACY POLICY HERO
        ========================================================== */}
        <section
          className="
            relative
            isolate
            overflow-hidden
            bg-[#061f43]
            text-white
          "
        >
          {/* Background decoration */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-20
              bg-gradient-to-r
              from-[#061c3d]
              via-[#07325e]
              to-[#086b68]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[90px]
              -top-[150px]
              -z-10
              h-[430px]
              w-[430px]
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[60px]
              top-[30px]
              -z-10
              h-[190px]
              w-[190px]
              rounded-full
              border
              border-[#62b46e]/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-100px]
              left-[35%]
              -z-10
              h-[250px]
              w-[250px]
              rounded-full
              bg-[#11937b]/10
              blur-3xl
            "
          />

          <div
            className="
              mx-auto
              flex
              min-h-[310px]
              w-[min(1120px,calc(100%-32px))]
              items-center
              py-[50px]

              sm:min-h-[330px]
              sm:w-[min(1120px,calc(100%-48px))]

              lg:min-h-[345px]
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -28,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                max-w-[700px]
              "
            >
              {/* Badge */}
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
                  delay: 0.08,
                  duration: 0.5,
                }}
                className="
                  inline-flex
                  items-center
                  gap-[7px]
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.07]
                  px-[11px]
                  py-[6px]
                  backdrop-blur-sm
                "
              >
                <ShieldCheck
                  size={14}
                  strokeWidth={1.7}
                  className="text-[#89d189]"
                />

                <span
                  className="
                    font-['Inter',sans-serif]
                    text-[8px]
                    font-[700]
                    uppercase
                    tracking-[0.08em]
                    text-white/90
                  "
                >
                  Your Privacy Matters
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.14,
                  duration: 0.55,
                }}
                className="
                  mt-[17px]
                  font-['Inter',sans-serif]
                  text-[34px]
                  font-[700]
                  leading-[1.06]
                  tracking-[-0.035em]
                  text-white

                  sm:text-[42px]
                  lg:text-[46px]
                "
              >
                Privacy Policy
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.21,
                  duration: 0.55,
                }}
                className="
                  mt-[17px]
                  max-w-[610px]
                  font-['Inter',sans-serif]
                  text-[11px]
                  font-[450]
                  leading-[1.75]
                  text-white/85

                  sm:text-[12px]
                "
              >
                Global Reviews Press respects your privacy and is committed to
                protecting the personal information you share with us. This
                policy explains how we collect, use, protect and manage your
                information when you interact with our website and publishing
                services.
              </motion.p>

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
                  delay: 0.28,
                  duration: 0.5,
                }}
                className="
                  mt-[18px]
                  flex
                  flex-wrap
                  items-center
                  gap-[14px]
                  font-['Inter',sans-serif]
                  text-[8px]
                  font-[500]
                  text-white/70
                "
              >
                <span className="inline-flex items-center gap-[5px]">
                  <FileText size={12} />
                  Privacy & Data Protection
                </span>

                <span className="hidden h-[3px] w-[3px] rounded-full bg-white/40 sm:block" />

                <span>
                  Last Updated: September 2026
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            INTRO STRIP
        ========================================================== */}
        <section
          className="
            border-b
            border-[#e8edf2]
            bg-[#f8fafc]
            py-[17px]
          "
        >
          <div
            className="
              mx-auto
              flex
              w-[min(1120px,calc(100%-32px))]
              flex-col
              gap-[10px]

              sm:w-[min(1120px,calc(100%-48px))]

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div className="flex items-start gap-[9px]">
              <CheckCircle2
                size={17}
                strokeWidth={1.6}
                className="mt-[1px] shrink-0 text-[#4d9448]"
              />

              <p
                className="
                  max-w-[690px]
                  font-['Inter',sans-serif]
                  text-[8.5px]
                  font-[500]
                  leading-[1.65]
                  text-[#465970]

                  sm:text-[9px]
                "
              >
                By using the Global Reviews Press website, you acknowledge that
                you have read and understood this Privacy Policy.
              </p>
            </div>

            <a
              href="#contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-[6px]
                text-[8px]
                font-[700]
                text-[#24689d]
                transition-colors
                hover:text-[#174d79]
              "
            >
              Privacy Questions

              <ArrowRight
                size={11}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-[3px]
                "
              />
            </a>
          </div>
        </section>

        {/* =========================================================
            MAIN PRIVACY CONTENT
        ========================================================== */}
        <section className="bg-white py-[30px] sm:py-[38px] lg:py-[44px]">
          <div
            className="
              mx-auto
              grid
              w-[min(1120px,calc(100%-32px))]
              grid-cols-1
              gap-[24px]

              sm:w-[min(1120px,calc(100%-48px))]

              lg:grid-cols-[225px_minmax(0,1fr)]
              lg:gap-[34px]
            "
          >
            {/* =====================================================
                LEFT SIDE NAVIGATION
            ====================================================== */}
            <motion.aside
              initial={{
                opacity: 0,
                x: -18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                h-fit
                rounded-[8px]
                border
                border-[#e5ebf0]
                bg-[#fbfcfd]
                p-[15px]
                shadow-[0_4px_16px_rgba(16,44,74,0.035)]

                lg:sticky
                lg:top-[105px]
              "
            >
              <h2
                className="
                  font-['Inter',sans-serif]
                  text-[10px]
                  font-[800]
                  text-[#173d70]
                "
              >
                PRIVACY POLICY
              </h2>

              <span
                className="
                  mt-[7px]
                  block
                  h-[2px]
                  w-[30px]
                  rounded-full
                  bg-[#56a04a]
                "
              />

              <nav
                className="
                  mt-[14px]
                  grid
                  grid-cols-2
                  gap-[5px]

                  min-[500px]:grid-cols-3

                  lg:grid-cols-1
                "
              >
                {[
                  ["overview", "1. Overview"],
                  ["information", "2. Information We Collect"],
                  ["use", "3. How We Use Information"],
                  ["cookies", "4. Cookies"],
                  ["sharing", "5. Information Sharing"],
                  ["security", "6. Data Security"],
                  ["retention", "7. Data Retention"],
                  ["rights", "8. Your Rights"],
                  ["links", "9. Third-Party Links"],
                  ["children", "10. Children's Privacy"],
                  ["changes", "11. Policy Changes"],
                  ["contact", "12. Contact Us"],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-[4px]
                      px-[8px]
                      py-[7px]

                      font-['Inter',sans-serif]
                      text-[7px]
                      font-[600]
                      text-[#5c6c80]

                      transition-all
                      duration-300

                      hover:bg-[#edf5fb]
                      hover:text-[#195d91]
                    "
                  >
                    <span>{label}</span>

                    <ArrowRight
                      size={8}
                      className="
                        hidden
                        opacity-0
                        transition-all
                        duration-300

                        group-hover:translate-x-[2px]
                        group-hover:opacity-100

                        lg:block
                      "
                    />
                  </a>
                ))}
              </nav>
            </motion.aside>

            {/* =====================================================
                RIGHT CONTENT
            ====================================================== */}
            <div className="min-w-0 space-y-[14px]">
              {/* =================================================
                  1. OVERVIEW
              ================================================== */}
              <motion.article
                id="overview"
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]

                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]

                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e9f4ff]
                      text-[#3278ae]
                    "
                  >
                    <ShieldCheck size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h2
                      className="
                        font-['Inter',sans-serif]
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      1. Overview
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        font-['Inter',sans-serif]
                        text-[8px]
                        font-[450]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      This Privacy Policy describes how Global Reviews Press
                      collects and processes information when users browse our
                      website, submit manuscripts, participate as reviewers or
                      editors, subscribe to communications, contact our team, or
                      otherwise interact with our publishing services.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  2. INFORMATION WE COLLECT
              ================================================== */}
              <motion.article
                id="information"
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]

                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#edf8ef]
                      text-[#4e9850]
                    "
                  >
                    <Database size={18} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      2. Information We Collect
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      Depending on how you use our services, we may collect
                      information such as:
                    </p>

                    <ul
                      className="
                        mt-[10px]
                        grid
                        grid-cols-1
                        gap-[7px]

                        md:grid-cols-2
                      "
                    >
                      {[
                        "Name, email address and contact details",
                        "Institution, affiliation and professional information",
                        "Author, editor or reviewer profile information",
                        "Manuscript and submission-related information",
                        "Correspondence sent to Global Reviews Press",
                        "Website usage, browser and technical information",
                      ].map((item) => (
                        <li
                          key={item}
                          className="
                            flex
                            items-start
                            gap-[7px]
                            text-[7.5px]
                            leading-[1.55]
                            text-[#596a7d]
                          "
                        >
                          <CheckCircle2
                            size={11}
                            strokeWidth={1.7}
                            className="mt-[1px] shrink-0 text-[#57a14d]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  3. HOW WE USE INFORMATION
              ================================================== */}
              <motion.article
                id="use"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#f0edfa] text-[#7353a5]">
                    <UserRoundCheck size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      3. How We Use Your Information
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      We may use collected information to operate our publishing
                      platform, process manuscript submissions, coordinate peer
                      review, communicate with authors and reviewers, improve
                      website functionality, respond to enquiries, maintain
                      academic records, prevent misuse and meet applicable legal
                      obligations.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  4. COOKIES
              ================================================== */}
              <motion.article
                id="cookies"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#fff6e9] text-[#dc9239]">
                    <Cookie size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      4. Cookies and Similar Technologies
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      Our website may use cookies and similar technologies to
                      remember preferences, support essential functionality,
                      understand website usage and improve user experience. You
                      may control cookies through your browser settings,
                      although disabling certain cookies may affect website
                      functionality.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  5. INFORMATION SHARING
              ================================================== */}
              <motion.article
                id="sharing"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#ecf8f8] text-[#279895]">
                    <Share2 size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      5. Information Sharing
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      Global Reviews Press does not sell personal information.
                      Information may be shared with authorized editors,
                      reviewers, publishing service providers, technology
                      providers or professional partners when required to
                      deliver our services, protect legitimate interests or
                      comply with legal requirements.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  6. DATA SECURITY
              ================================================== */}
              <motion.article
                id="security"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#edf3ff] text-[#4169ad]">
                    <LockKeyhole size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      6. Data Security
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      We use reasonable administrative, technical and
                      organizational safeguards designed to protect information
                      against unauthorized access, alteration, disclosure or
                      loss. However, no electronic transmission or storage
                      method can be guaranteed to be completely secure.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  7. RETENTION
              ================================================== */}
              <motion.article
                id="retention"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#f4f1fb] text-[#6a55a1]">
                    <Clock3 size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      7. Data Retention
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      Personal information is retained only for as long as
                      reasonably necessary for publishing operations, academic
                      record keeping, contractual requirements, dispute
                      resolution, legal compliance or other legitimate business
                      purposes.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  8. YOUR RIGHTS
              ================================================== */}
              <motion.article
                id="rights"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#dbe9da]
                  bg-[#f9fcf8]
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#e9f5e6] text-[#4d9144]">
                    <UserRoundCheck size={18} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      8. Your Privacy Rights
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      Subject to applicable law, you may have rights relating
                      to your personal information, including:
                    </p>

                    <div className="mt-[10px] grid grid-cols-1 gap-[6px] sm:grid-cols-2">
                      {[
                        "Request access to your information",
                        "Request correction of inaccurate information",
                        "Request deletion where legally appropriate",
                        "Object to or restrict certain processing",
                        "Withdraw consent where processing relies on consent",
                        "Contact us regarding privacy concerns",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-[6px] text-[7.3px] leading-[1.5] text-[#526277]"
                        >
                          <CheckCircle2
                            size={10}
                            className="mt-[1px] shrink-0 text-[#57a14d]"
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  9. THIRD PARTY LINKS
              ================================================== */}
              <motion.article
                id="links"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#ecf5fb] text-[#367da9]">
                    <ExternalLink size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      9. Third-Party Links
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      Our website may contain links to external websites,
                      indexing services, publishing platforms or third-party
                      resources. Global Reviews Press is not responsible for the
                      privacy practices or content of independently operated
                      third-party websites.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  10. CHILDREN
              ================================================== */}
              <motion.article
                id="children"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#fff4ec] text-[#db8345]">
                    <Baby size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      10. Children's Privacy
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      Our publishing services are intended for researchers,
                      professionals, institutions and other appropriate users.
                      We do not knowingly seek to collect personal information
                      from children through the website.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  11. CHANGES
              ================================================== */}
              <motion.article
                id="changes"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#edf7f2] text-[#42926b]">
                    <RefreshCw size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                      11. Changes to This Privacy Policy
                    </h2>

                    <p className="mt-[7px] text-[8px] leading-[1.75] text-[#526277] sm:text-[8.5px]">
                      We may update this Privacy Policy periodically to reflect
                      changes in our services, practices, technologies or legal
                      requirements. Updated versions will be published on this
                      page with a revised effective date.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  12. CONTACT
              ================================================== */}
              <motion.article
                id="contact"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  overflow-hidden
                  rounded-[8px]
                  border
                  border-[#dbe6ee]
                  bg-gradient-to-r
                  from-[#f6fafd]
                  to-[#f5faf6]
                  p-[18px]

                  sm:p-[21px]
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-[15px]

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="flex items-start gap-[12px]">
                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#173f70] text-white">
                      <Mail size={18} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h2 className="text-[12px] font-[800] text-[#173866] sm:text-[13px]">
                        12. Contact Us
                      </h2>

                      <p className="mt-[6px] max-w-[480px] text-[8px] leading-[1.7] text-[#526277] sm:text-[8.5px]">
                        If you have questions, concerns or requests regarding
                        this Privacy Policy or the handling of your personal
                        information, please contact Global Reviews Press.
                      </p>

                      <p className="mt-[6px] text-[8px] font-[700] text-[#3372a0]">
                        info@globalreviewspress.com
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="shrink-0"
                  >
                    <Link
                      to="/contact"
                      className="
                        group
                        inline-flex
                        h-[36px]
                        items-center
                        justify-center
                        gap-[8px]
                        rounded-[4px]
                        bg-[#173f70]
                        px-[15px]

                        text-[8px]
                        font-[700]
                        text-white

                        transition-all
                        duration-300

                        hover:bg-[#25618e]
                      "
                    >
                      Contact Us

                      <ArrowRight
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-[3px]"
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM PRIVACY CTA
        ========================================================== */}
        <section
          className="
            relative
            isolate
            overflow-hidden
            bg-[#06264a]
            text-white
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              bg-gradient-to-r
              from-[#06264a]
              via-[#063c62]
              to-[#18774f]
            "
          />

          <div
            className="
              mx-auto
              flex
              min-h-[110px]
              w-[min(1120px,calc(100%-32px))]
              flex-col
              items-start
              justify-center
              gap-[15px]
              py-[20px]

              sm:w-[min(1120px,calc(100%-48px))]

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-[14px] font-[700] text-white sm:text-[16px]">
                Your Trust Is Important to Us.
              </h2>

              <p className="mt-[5px] text-[8px] leading-[1.6] text-white/80 sm:text-[8.5px]">
                We are committed to responsible, transparent and secure
                handling of your information.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  h-[37px]
                  items-center
                  gap-[9px]
                  rounded-[4px]
                  border
                  border-white/70
                  bg-white/[0.04]
                  px-[15px]

                  text-[8px]
                  font-[700]
                  text-white

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:text-[#173f70]
                "
              >
                Contact Privacy Team

                <ArrowRight
                  size={11}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-[3px]
                  "
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}