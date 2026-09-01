import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  FileText,
  BookOpenCheck,
  UserRoundCheck,
  Copyright,
  UploadCloud,
  Scale,
  CreditCard,
  ShieldCheck,
  Ban,
  Globe2,
  ExternalLink,
  AlertTriangle,
  RefreshCw,
  Mail,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  Gavel,
  BadgeCheck,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsConditions() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white pt-[75px]">
        {/* =========================================================
            HERO SECTION
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
          {/* BACKGROUND */}
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

          {/* DECORATIVE CIRCLES */}
          <div
            className="
              pointer-events-none
              absolute
              -right-[100px]
              -top-[150px]
              -z-10
              h-[440px]
              w-[440px]
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
              top-[28px]
              -z-10
              h-[195px]
              w-[195px]
              rounded-full
              border
              border-[#69b77a]/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-90px]
              left-[38%]
              -z-10
              h-[250px]
              w-[250px]
              rounded-full
              bg-[#13a27b]/10
              blur-3xl
            "
          />

          {/* HERO CONTENT */}
          <div
            className="
              mx-auto
              flex
              min-h-[310px]
              w-[min(1120px,calc(100%-32px))]
              items-center
              py-[48px]

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
                max-w-[720px]
              "
            >
              {/* BADGE */}
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
                <Gavel
                  size={14}
                  strokeWidth={1.7}
                  className="text-[#8bd28c]"
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
                  Website Terms of Use
                </span>
              </motion.div>

              {/* TITLE */}
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
                Terms & Conditions
              </motion.h1>

              {/* DESCRIPTION */}
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
                  max-w-[620px]
                  font-['Inter',sans-serif]
                  text-[11px]
                  font-[450]
                  leading-[1.75]
                  text-white/85

                  sm:text-[12px]
                "
              >
                These Terms and Conditions govern your access to and use of
                the Global Reviews Press website, publishing services,
                manuscript submission systems and related academic resources.
                Please read them carefully before using our services.
              </motion.p>

              {/* META */}
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
                  Terms of Use & Publishing Services
                </span>

                <span
                  className="
                    hidden
                    h-[3px]
                    w-[3px]
                    rounded-full
                    bg-white/40

                    sm:block
                  "
                />

                <span>
                  Last Updated: September 2026
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            ACCEPTANCE STRIP
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
                className="
                  mt-[1px]
                  shrink-0
                  text-[#4d9448]
                "
              />

              <p
                className="
                  max-w-[710px]
                  font-['Inter',sans-serif]
                  text-[8.5px]
                  font-[500]
                  leading-[1.65]
                  text-[#465970]

                  sm:text-[9px]
                "
              >
                By accessing or using Global Reviews Press, you agree to be
                bound by these Terms and Conditions and all applicable laws
                and regulations.
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
              Terms Enquiries

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
            MAIN TERMS CONTENT
        ========================================================== */}
        <section
          className="
            bg-white
            py-[30px]

            sm:py-[38px]

            lg:py-[44px]
          "
        >
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
                LEFT STICKY NAVIGATION
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
                TERMS & CONDITIONS
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
                  ["acceptance", "1. Acceptance"],
                  ["services", "2. Our Services"],
                  ["eligibility", "3. User Responsibilities"],
                  ["submissions", "4. Manuscript Submissions"],
                  ["peer-review", "5. Peer Review"],
                  ["copyright", "6. Intellectual Property"],
                  ["fees", "7. Fees & Payments"],
                  ["ethics", "8. Publishing Ethics"],
                  ["prohibited", "9. Prohibited Use"],
                  ["third-party", "10. Third-Party Services"],
                  ["disclaimer", "11. Disclaimer"],
                  ["liability", "12. Limitation of Liability"],
                  ["termination", "13. Termination"],
                  ["law", "14. Governing Terms"],
                  ["changes", "15. Changes"],
                  ["contact", "16. Contact Us"],
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
                    <span>
                      {label}
                    </span>

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
                  1. ACCEPTANCE
              ================================================== */}
              <motion.article
                id="acceptance"
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
                    <FileCheck2
                      size={18}
                      strokeWidth={1.6}
                    />
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
                      1. Acceptance of Terms
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
                      By accessing, browsing, registering with or using the
                      Global Reviews Press website or its services, you
                      acknowledge that you have read, understood and agreed to
                      these Terms and Conditions.
                    </p>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      If you do not agree with these terms, you should not use
                      the website or related publishing services.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  2. OUR SERVICES
              ================================================== */}
              <motion.article
                id="services"
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
                    <BookOpenCheck
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      2. Our Services
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Global Reviews Press provides scholarly publishing and
                      related academic services that may include:
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
                        "Peer-reviewed journals and magazines",
                        "Online manuscript submission services",
                        "Editorial and peer-review coordination",
                        "Author and reviewer resources",
                        "Research dissemination services",
                        "Academic publishing information and updates",
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
                            className="
                              mt-[1px]
                              shrink-0
                              text-[#57a14d]
                            "
                          />

                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  3. USER RESPONSIBILITIES
              ================================================== */}
              <motion.article
                id="eligibility"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f0edfa]
                      text-[#7353a5]
                    "
                  >
                    <UserRoundCheck
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      3. User Responsibilities
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Users are responsible for providing accurate and current
                      information when submitting manuscripts, registering as
                      reviewers or editors, contacting Global Reviews Press or
                      otherwise using our services.
                    </p>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Users must not impersonate another individual, provide
                      misleading affiliations, misuse another person's account,
                      interfere with website functionality or attempt
                      unauthorized access to our systems.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  4. MANUSCRIPT SUBMISSIONS
              ================================================== */}
              <motion.article
                id="submissions"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#ecf8f8]
                      text-[#269895]
                    "
                  >
                    <UploadCloud
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      4. Manuscript Submissions
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Authors submitting manuscripts to Global Reviews Press
                      confirm that the submitted work complies with applicable
                      journal policies and publishing standards.
                    </p>

                    <div
                      className="
                        mt-[10px]
                        grid
                        grid-cols-1
                        gap-[6px]

                        sm:grid-cols-2
                      "
                    >
                      {[
                        "The manuscript represents original scholarly work",
                        "All authors have approved the submission",
                        "Conflicts of interest are disclosed where applicable",
                        "Third-party material has appropriate permission",
                        "Research ethics requirements have been followed",
                        "Submission information is complete and accurate",
                      ].map((item) => (
                        <div
                          key={item}
                          className="
                            flex
                            items-start
                            gap-[6px]
                            text-[7.3px]
                            leading-[1.5]
                            text-[#526277]
                          "
                        >
                          <CheckCircle2
                            size={10}
                            className="
                              mt-[1px]
                              shrink-0
                              text-[#57a14d]
                            "
                          />

                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  5. PEER REVIEW
              ================================================== */}
              <motion.article
                id="peer-review"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#eaf4ff]
                      text-[#3278ae]
                    "
                  >
                    <BadgeCheck
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      5. Peer Review and Editorial Decisions
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Manuscript submission does not guarantee acceptance or
                      publication. Editorial and peer-review decisions are made
                      according to journal scope, scholarly quality, ethical
                      standards, reviewer recommendations and editorial
                      judgment.
                    </p>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Global Reviews Press reserves the right to reject,
                      request revision, withdraw or discontinue consideration
                      of manuscripts where appropriate.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  6. COPYRIGHT
              ================================================== */}
              <motion.article
                id="copyright"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fff6e9]
                      text-[#d99138]
                    "
                  >
                    <Copyright
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      6. Intellectual Property Rights
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      The Global Reviews Press name, website design, graphics,
                      logos, original website content, publication interfaces
                      and related materials are protected by applicable
                      intellectual property laws.
                    </p>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Published academic content remains subject to the
                      copyright, licensing and open-access terms applicable to
                      the relevant journal and article.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  7. FEES
              ================================================== */}
              <motion.article
                id="fees"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#edf7f2]
                      text-[#42926b]
                    "
                  >
                    <CircleDollarSign
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      7. Publication Fees and Payments
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Where publication charges, article processing charges or
                      other service fees apply, authors will be informed
                      through the relevant journal or submission process.
                    </p>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Payment of applicable charges does not guarantee
                      manuscript acceptance and does not influence independent
                      editorial or peer-review decisions.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  8. ETHICS
              ================================================== */}
              <motion.article
                id="ethics"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e9f5e6]
                      text-[#4d9144]
                    "
                  >
                    <Scale
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      8. Publishing Ethics
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Authors, reviewers and editors are expected to maintain
                      high standards of research and publication ethics.
                      Prohibited conduct includes:
                    </p>

                    <div
                      className="
                        mt-[10px]
                        grid
                        grid-cols-1
                        gap-[6px]

                        sm:grid-cols-2
                      "
                    >
                      {[
                        "Plagiarism or unauthorized copying",
                        "Fabrication or falsification of research",
                        "Improper manipulation of images or data",
                        "Undisclosed competing interests",
                        "Duplicate or inappropriate simultaneous submission",
                        "Manipulation of peer review or authorship",
                      ].map((item) => (
                        <div
                          key={item}
                          className="
                            flex
                            items-start
                            gap-[6px]
                            text-[7.3px]
                            leading-[1.5]
                            text-[#526277]
                          "
                        >
                          <CheckCircle2
                            size={10}
                            className="
                              mt-[1px]
                              shrink-0
                              text-[#57a14d]
                            "
                          />

                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  9. PROHIBITED USE
              ================================================== */}
              <motion.article
                id="prohibited"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fff0ee]
                      text-[#dc6659]
                    "
                  >
                    <Ban
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      9. Prohibited Use
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      You may not use the website or publishing systems for
                      unlawful, fraudulent, abusive, misleading or malicious
                      purposes. Automated extraction, unauthorized system
                      access, disruption of services or misuse of confidential
                      manuscript information is prohibited.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  10. THIRD PARTY
              ================================================== */}
              <motion.article
                id="third-party"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#ecf5fb]
                      text-[#367da9]
                    "
                  >
                    <ExternalLink
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      10. Third-Party Websites and Services
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Our website may contain links to indexing databases,
                      external journals, research resources and other
                      third-party websites. These services operate
                      independently and may be governed by their own terms,
                      policies and practices.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  11. DISCLAIMER
              ================================================== */}
              <motion.article
                id="disclaimer"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="
                  scroll-mt-[120px]
                  rounded-[8px]
                  border
                  border-[#eadfc9]
                  bg-[#fffdf8]
                  p-[18px]

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
                      bg-[#fff3da]
                      text-[#d48b27]
                    "
                  >
                    <AlertTriangle
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      11. Disclaimer
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      While we aim to provide reliable and accurate
                      information, website content is provided for general
                      informational and publishing purposes. Availability,
                      journal information, indexing status, timelines and
                      related content may change over time.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  12. LIABILITY
              ================================================== */}
              <motion.article
                id="liability"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f2eff9]
                      text-[#7353a5]
                    "
                  >
                    <ShieldCheck
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      12. Limitation of Liability
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      To the extent permitted by applicable law, Global
                      Reviews Press will not be responsible for indirect,
                      incidental, consequential or similar losses arising from
                      use of the website, interruptions in service,
                      third-party resources or reliance on website content.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  13. TERMINATION
              ================================================== */}
              <motion.article
                id="termination"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fff0ef]
                      text-[#d66059]
                    "
                  >
                    <Ban
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      13. Suspension or Termination
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      We may suspend, restrict or terminate access to website
                      features or publishing services where users violate
                      these terms, misuse our systems, compromise security or
                      engage in conduct inconsistent with publication ethics.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  14. GOVERNING TERMS
              ================================================== */}
              <motion.article
                id="law"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#edf6f0]
                      text-[#4a9261]
                    "
                  >
                    <Globe2
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      14. Governing Terms and Applicable Law
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      These Terms and Conditions are interpreted together with
                      applicable publishing policies, journal-specific
                      guidelines and relevant laws. Where a journal policy
                      contains more specific requirements, those requirements
                      may also apply to the relevant submission or service.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  15. CHANGES
              ================================================== */}
              <motion.article
                id="changes"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#edf7f2]
                      text-[#42926b]
                    "
                  >
                    <RefreshCw
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-[12px]
                        font-[800]
                        text-[#173866]

                        sm:text-[13px]
                      "
                    >
                      15. Changes to These Terms
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Global Reviews Press may update these Terms and
                      Conditions from time to time to reflect changes in
                      services, publishing policies, technologies or legal
                      requirements.
                    </p>

                    <p
                      className="
                        mt-[7px]
                        text-[8px]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[8.5px]
                      "
                    >
                      Updated terms will be published on this page with the
                      corresponding revision date.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  16. CONTACT
              ================================================== */}
              <motion.article
                id="contact"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                    <div
                      className="
                        flex
                        h-[38px]
                        w-[38px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#173f70]
                        text-white
                      "
                    >
                      <Mail
                        size={18}
                        strokeWidth={1.6}
                      />
                    </div>

                    <div>
                      <h2
                        className="
                          text-[12px]
                          font-[800]
                          text-[#173866]

                          sm:text-[13px]
                        "
                      >
                        16. Contact Us
                      </h2>

                      <p
                        className="
                          mt-[6px]
                          max-w-[480px]
                          text-[8px]
                          leading-[1.7]
                          text-[#526277]

                          sm:text-[8.5px]
                        "
                      >
                        If you have questions about these Terms and Conditions,
                        manuscript policies or the use of Global Reviews Press
                        services, please contact our team.
                      </p>

                      <p
                        className="
                          mt-[6px]
                          text-[8px]
                          font-[700]
                          text-[#3372a0]
                        "
                      >
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
                        className="
                          transition-transform
                          duration-300

                          group-hover:translate-x-[3px]
                        "
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM CTA
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
              viewport={{
                once: true,
              }}
            >
              <h2
                className="
                  text-[14px]
                  font-[700]
                  text-white

                  sm:text-[16px]
                "
              >
                Publishing with Integrity and Transparency.
              </h2>

              <p
                className="
                  mt-[5px]
                  text-[8px]
                  leading-[1.6]
                  text-white/80

                  sm:text-[8.5px]
                "
              >
                Our terms help maintain a fair, ethical and trusted publishing
                environment for authors, reviewers and readers.
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
                Contact Our Team

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