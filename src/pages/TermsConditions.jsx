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

import bgReviewer from "../assets/img/global-reviews-press-terms-hero.webp";
import bgcta from "../assets/img/join-global-reviews-press-privacy-policy-cta.webp";

export default function TermsConditions() {
  return (
    <>
      <Header />

      {/* =========================================================
          IMPORTANT:
          overflow-x-clip keeps sticky sidebar working
      ========================================================== */}
      <main className="overflow-x-clip bg-white pt-[45px]">

        {/* =========================================================
            HERO SECTION
        ========================================================== */}
        <section
          className="
            relative
            isolate
            w-full
            overflow-hidden
            bg-[#04152c]
            bg-cover
            bg-no-repeat
            text-white

            min-h-[500px]
            bg-[position:68%_center]

            min-[390px]:min-h-[480px]
            min-[390px]:bg-[position:70%_center]

            sm:min-h-[455px]
            sm:bg-[position:68%_center]

            md:min-h-[385px]
            md:bg-[position:64%_center]

            lg:min-h-[335px]
            lg:bg-center

            xl:min-h-[365px]
          "
          style={{
            backgroundImage: `url(${bgReviewer})`,
          }}
        >
          {/* =====================================================
              RESPONSIVE OVERLAY
          ====================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10

              bg-gradient-to-r
              from-[#03183c]/98
              via-[#03183c]/92
              via-[58%]
              to-[#03183c]/15

              sm:via-[54%]
              sm:to-[#03183c]/10

              md:from-[#03183c]/96
              md:via-[#03183c]/72
              md:via-[47%]
              md:to-transparent

              lg:from-transparent
              lg:via-transparent
              lg:to-transparent
            "
          />

          {/* =====================================================
              HERO CONTAINER
          ====================================================== */}
          <div
            className="
              mx-auto
              flex
              min-h-[500px]
              w-[min(1120px,calc(100%-32px))]
              items-center
              py-[32px]

              min-[390px]:min-h-[480px]

              sm:min-h-[455px]
              sm:w-[min(1120px,calc(100%-48px))]
              sm:py-[38px]

              md:min-h-[385px]
              md:py-[30px]

              lg:min-h-[440px]
              lg:py-[14px]
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
                duration: 0.72,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                w-full
                max-w-[455px]

                sm:max-w-[470px]
                md:max-w-[430px]
                lg:max-w-[445px]
              "
            >
              {/* ==================== BADGE ==================== */}
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
                  className="text-[#CDD82D]"
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

              {/* ==================== HEADING ==================== */}
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
                  duration: 0.6,
                  delay: 0.08,
                }}
                className="
                  mt-[16px]
                  font-['Inter',sans-serif]
                  text-[28px]
                  font-[600]
                  leading-[1.12]
                  tracking-[-0.025em]
                  text-white

                  min-[390px]:text-[30px]
                  sm:text-[32px]
                  md:text-[33px]
                  lg:text-[33px]
                  xl:text-[34px]
                "
              >
                Terms & Conditions
              </motion.h1>

              {/* ==================== DESCRIPTION ==================== */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.22,
                }}
                className="
                  mt-[18px]
                  max-w-[420px]
                  font-['Inter',sans-serif]
                  text-[10px]
                  font-[450]
                  leading-[1.8]
                  text-white/90

                  sm:text-[10.5px]

                  lg:mt-[16px]
                  lg:text-[12px]
                "
              >
                These Terms and Conditions govern your access to and use of
                the Global Reviews Press website, publishing services,
                manuscript submission systems and related academic resources.
                Please read them carefully before using our services.
              </motion.p>

              {/* ==================== TERMS INFO ==================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="
                  mt-[26px]
                  flex
                  w-full
                  items-center

                  sm:mt-[28px]
                  lg:mt-[30px]
                "
              >
                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group
                    inline-flex
                    max-w-full
                    items-center
                    gap-[9px]

                    rounded-[5px]
                    border
                    border-white/20
                    bg-white/[0.07]

                    px-[11px]
                    py-[4px]

                    backdrop-blur-[2px]

                    min-[390px]:gap-[10px]
                    min-[390px]:px-[12px]

                    sm:gap-[11px]
                    sm:px-[13px]

                    lg:gap-[12px]
                    lg:px-[10px]
                    lg:py-[2px]
                  "
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -3,
                    }}
                    className="
                      flex
                      h-[31px]
                      w-[31px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#CDD82D]/10
                      text-[#CDD82D]

                      min-[390px]:h-[33px]
                      min-[390px]:w-[33px]

                      sm:h-[34px]
                      sm:w-[34px]

                      lg:h-[36px]
                      lg:w-[36px]
                    "
                  >
                    <FileText
                      size={19}
                      strokeWidth={1.6}
                    />
                  </motion.div>

                  <p
                    className="
                      font-['Inter',sans-serif]
                      text-[9px]
                      font-[600]
                      leading-[1.35]
                      text-white/95

                      min-[390px]:whitespace-nowrap
                      min-[390px]:text-[9.5px]

                      sm:text-[10px]
                      lg:text-[11.5px]
                    "
                  >
                    Terms of Use & Publishing Services
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            COMMITMENT SECTION
            SAME STRUCTURE AS PRIVACY POLICY
        ========================================================== */}
        <section
          className="
            bg-white
            py-[24px]

            sm:py-[30px]
            lg:py-[34px]
          "
        >
          <div
            className="
              mx-auto
              w-[min(1120px,calc(100%-32px))]
              sm:w-[min(1120px,calc(100%-48px))]
            "
          >
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
              }}
              className="
                group
                flex
                flex-col
                items-start
                gap-[16px]

                rounded-[10px]
                border
                border-[#d8e4f0]
                bg-[#f4f8fc]

                px-[18px]
                py-[20px]

                shadow-[0_7px_22px_rgba(12,49,88,0.045)]

                transition-all
                duration-300

                hover:border-[#bfd2e3]
                hover:shadow-[0_10px_28px_rgba(12,49,88,0.09)]

                min-[480px]:flex-row
                min-[480px]:items-start
                min-[480px]:gap-[20px]

                sm:px-[24px]
                sm:py-[24px]

                lg:gap-[22px]
                lg:px-[28px]
                lg:py-[27px]
              "
            >
              {/* ICON */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -3,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  flex
                  h-[54px]
                  w-[54px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full

                  bg-[#dce9f5]
                  text-[#174f82]

                  transition-all
                  duration-300

                  group-hover:bg-[#c9dff1]
                  group-hover:text-[#0d3b68]

                  sm:h-[58px]
                  sm:w-[58px]

                  lg:h-[62px]
                  lg:w-[62px]
                "
              >
                <Scale
                  size={28}
                  strokeWidth={1.55}
                />
              </motion.div>

              {/* CONTENT */}
              <div
                className="
                  min-w-0
                  flex-1

                  min-[480px]:pt-[2px]
                "
              >
                <h2
                  className="
                    font-['Inter',sans-serif]
                    text-[18px]
                    font-[700]
                    leading-[1.25]
                    text-[#082d5b]

                    sm:text-[20px]
                    lg:text-[22px]
                  "
                >
                  Our Commitment to Fair & Transparent Terms
                </h2>

                <p
                  className="
                    mt-[9px]
                    max-w-[900px]

                    font-['Inter',sans-serif]
                    text-[11px]
                    font-[500]
                    leading-[1.75]
                    text-[#40566e]

                    sm:text-[12px]
                    lg:text-[13px]
                  "
                >
                  Global Reviews Press is committed to providing clear,
                  transparent and responsible terms for authors, reviewers,
                  editors, researchers and visitors. These conditions help
                  ensure that our publishing services are used fairly,
                  ethically and consistently.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            TERMS & CONDITIONS CONTENT
        ========================================================== */}
        <section
          className="
            bg-white
            pb-[40px]
            pt-[12px]

            sm:pb-[46px]
            lg:pb-[50px]
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

              lg:grid-cols-[245px_minmax(0,1fr)]
              lg:items-start
              lg:gap-[34px]
            "
          >
            {/* =====================================================
                LEFT STICKY NAVIGATION

                IMPORTANT:
                normal aside = sticky
                motion.div inside = animation
            ====================================================== */}
            <aside
              className="
                h-fit
                self-start

                lg:sticky
                lg:top-[90px]
                lg:z-[30]
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
                transition={{
                  duration: 0.5,
                }}
                className="
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-[#fbfcfd]
                  p-[15px]

                  shadow-[0_4px_16px_rgba(16,44,74,0.035)]
                "
              >
                <h2
                  className="
                    font-['Inter',sans-serif]
                    text-[17px]
                    font-[650]
                    leading-[1.25]
                    text-[#173d70]
                  "
                >
                  TERMS & CONDITIONS
                </h2>

                <span
                  className="
                    mt-[6px]
                    block
                    h-[2px]
                    w-[30px]
                    rounded-full
                    bg-[#56a04a]
                  "
                />

                <nav
                  className="
                    mt-[12px]
                    grid
                    grid-cols-2
                    gap-[4px]

                    min-[500px]:grid-cols-3

                    lg:grid-cols-1
                    lg:gap-[1px]
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
                        flex
                        min-h-[28px]
                        items-center

                        rounded-[4px]

                        px-[8px]
                        py-[4px]

                        font-['Inter',sans-serif]
                        text-[11px]
                        font-[600]
                        leading-[1.25]
                        text-[#5c6c80]

                        transition-all
                        duration-300

                        hover:bg-[#edf5fb]
                        hover:pl-[11px]
                        hover:text-[#195d91]

                        sm:text-[11.5px]
                      "
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </motion.div>
            </aside>

            {/* =====================================================
                RIGHT CONTENT
            ====================================================== */}
            <div className="min-w-0 space-y-[10px]">

              {/* =================================================
                  1. ACCEPTANCE
              ================================================== */}
              <motion.article
                id="acceptance"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]

                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]

                  transition-all
                  duration-300

                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]

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
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2
                      className="
                        font-['Inter',sans-serif]
                        text-[15px]
                        font-[650]
                        leading-[1.35]
                        text-[#173866]

                        sm:text-[16px]
                      "
                    >
                      1. Acceptance of Terms
                    </h2>

                    <p
                      className="
                        mt-[7px]
                        font-['Inter',sans-serif]
                        text-[10px]
                        font-[450]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[11.5px]
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
                        font-['Inter',sans-serif]
                        text-[10px]
                        font-[450]
                        leading-[1.75]
                        text-[#526277]

                        sm:text-[11.5px]
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#edf8ef] text-[#4e9850]">
                    <BookOpenCheck
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      2. Our Services
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Global Reviews Press provides scholarly publishing and
                      related academic services that may include:
                    </p>

                    <ul className="mt-[10px] grid grid-cols-1 gap-[7px] md:grid-cols-2">
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

                            font-['Inter',sans-serif]
                            text-[10px]
                            font-[450]
                            leading-[1.65]
                            text-[#526277]

                            sm:text-[11.5px]
                          "
                        >
                          <CheckCircle2
                            size={12}
                            strokeWidth={1.7}
                            className="mt-[2px] shrink-0 text-[#57a14d]"
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#f0edfa] text-[#7353a5]">
                    <UserRoundCheck
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      3. User Responsibilities
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Users are responsible for providing accurate and current
                      information when submitting manuscripts, registering as
                      reviewers or editors, contacting Global Reviews Press or
                      otherwise using our services.
                    </p>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#ecf8f8] text-[#269895]">
                    <UploadCloud
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      4. Manuscript Submissions
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Authors submitting manuscripts to Global Reviews Press
                      confirm that the submitted work complies with applicable
                      journal policies and publishing standards.
                    </p>

                    <div className="mt-[10px] grid grid-cols-1 gap-[6px] sm:grid-cols-2">
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
                            font-['Inter',sans-serif]
                            text-[10px]
                            font-[450]
                            leading-[1.6]
                            text-[#526277]
                            sm:text-[11.5px]
                          "
                        >
                          <CheckCircle2
                            size={12}
                            className="mt-[2px] shrink-0 text-[#57a14d]"
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#eaf4ff] text-[#3278ae]">
                    <BadgeCheck
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      5. Peer Review and Editorial Decisions
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Manuscript submission does not guarantee acceptance or
                      publication. Editorial and peer-review decisions are made
                      according to journal scope, scholarly quality, ethical
                      standards, reviewer recommendations and editorial
                      judgment.
                    </p>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Global Reviews Press reserves the right to reject,
                      request revision, withdraw or discontinue consideration
                      of manuscripts where appropriate.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  6. INTELLECTUAL PROPERTY
              ================================================== */}
              <motion.article
                id="copyright"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#fff6e9] text-[#d99138]">
                    <Copyright
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      6. Intellectual Property Rights
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      The Global Reviews Press name, website design, graphics,
                      logos, original website content, publication interfaces
                      and related materials are protected by applicable
                      intellectual property laws.
                    </p>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#edf7f2] text-[#42926b]">
                    <CircleDollarSign
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      7. Publication Fees and Payments
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Where publication charges, article processing charges or
                      other service fees apply, authors will be informed
                      through the relevant journal or submission process.
                    </p>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Payment of applicable charges does not guarantee
                      manuscript acceptance and does not influence independent
                      editorial or peer-review decisions.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  8. PUBLISHING ETHICS
              ================================================== */}
              <motion.article
                id="ethics"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#dbe9da]
                  bg-[#f9fcf8]
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#e9f5e6] text-[#4d9144]">
                    <Scale
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      8. Publishing Ethics
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Authors, reviewers and editors are expected to maintain
                      high standards of research and publication ethics.
                      Prohibited conduct includes:
                    </p>

                    <div className="mt-[10px] grid grid-cols-1 gap-[6px] sm:grid-cols-2">
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

                            font-['Inter',sans-serif]
                            text-[10px]
                            font-[450]
                            leading-[1.6]
                            text-[#526277]

                            sm:text-[11.5px]
                          "
                        >
                          <CheckCircle2
                            size={12}
                            className="mt-[2px] shrink-0 text-[#57a14d]"
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#fff0ee] text-[#dc6659]">
                    <Ban
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      9. Prohibited Use
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
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
                  10. THIRD-PARTY SERVICES
              ================================================== */}
              <motion.article
                id="third-party"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#ecf5fb] text-[#367da9]">
                    <ExternalLink
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      10. Third-Party Websites and Services
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#eadfc9]
                  bg-[#fffdf8]
                  p-[18px]
                  transition-all
                  duration-300
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#fff3da] text-[#d48b27]">
                    <AlertTriangle
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      11. Disclaimer
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#f2eff9] text-[#7353a5]">
                    <ShieldCheck
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      12. Limitation of Liability
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      To the extent permitted by applicable law, Global Reviews
                      Press will not be responsible for indirect, incidental,
                      consequential or similar losses arising from use of the
                      website, interruptions in service, third-party resources
                      or reliance on website content.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  13. TERMINATION
              ================================================== */}
              <motion.article
                id="termination"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#fff0ef] text-[#d66059]">
                    <Ban
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      13. Suspension or Termination
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      We may suspend, restrict or terminate access to website
                      features or publishing services where users violate these
                      terms, misuse our systems, compromise security or engage
                      in conduct inconsistent with publication ethics.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  14. GOVERNING TERMS
              ================================================== */}
              <motion.article
                id="law"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#edf6f0] text-[#4a9261]">
                    <Globe2
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      14. Governing Terms and Applicable Law
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#e5ebf0]
                  bg-white
                  p-[18px]
                  shadow-[0_3px_14px_rgba(16,44,74,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#dce5ec]
                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]
                  sm:p-[21px]
                "
              >
                <div className="flex items-start gap-[12px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#edf7f2] text-[#42926b]">
                    <RefreshCw
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                      15. Changes to These Terms
                    </h2>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Global Reviews Press may update these Terms and
                      Conditions from time to time to reflect changes in
                      services, publishing policies, technologies or legal
                      requirements.
                    </p>

                    <p className="mt-[7px] font-['Inter',sans-serif] text-[10px] font-[450] leading-[1.75] text-[#526277] sm:text-[11.5px]">
                      Updated terms will be published on this page with the
                      corresponding revision date.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  16. CONTACT US
              ================================================== */}
              <motion.article
                id="contact"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="
                  scroll-mt-[110px]
                  rounded-[8px]
                  border
                  border-[#dbe6ee]

                  bg-gradient-to-r
                  from-[#f6fafd]
                  to-[#f4f8fc]

                  p-[18px]

                  transition-all
                  duration-300

                  hover:shadow-[0_7px_20px_rgba(16,44,74,0.055)]

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
                        size={20}
                        strokeWidth={1.6}
                      />
                    </div>

                    <div className="min-w-0">
                      <h2 className="font-['Inter',sans-serif] text-[15px] font-[650] leading-[1.35] text-[#173866] sm:text-[16px]">
                        16. Contact Us
                      </h2>

                      <p
                        className="
                          mt-[7px]
                          max-w-[520px]

                          font-['Inter',sans-serif]
                          text-[10px]
                          font-[450]
                          leading-[1.75]
                          text-[#526277]

                          sm:text-[11.5px]
                        "
                      >
                        If you have questions about these Terms and Conditions,
                        manuscript policies or the use of Global Reviews Press
                        services, please contact our team.
                      </p>

                      <a
                        href="mailto:info@globalreviewspress.com"
                        className="
                          mt-[7px]
                          inline-block

                          font-['Inter',sans-serif]
                          text-[10px]
                          font-[700]
                          text-[#3372a0]

                          transition-colors
                          duration-300

                          hover:text-[#175781]

                          sm:text-[11.5px]
                        "
                      >
                        info@globalreviewspress.com
                      </a>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      shrink-0
                      max-sm:pl-[50px]
                    "
                  >
                    <Link
                      to="/contact"
                      className="
                        group
                        inline-flex
                        h-[38px]
                        items-center
                        justify-center
                        gap-[8px]
                        rounded-[4px]

                        bg-[#173f70]
                        px-[16px]

                        font-['Inter',sans-serif]
                        text-[11px]
                        font-[650]
                        text-white

                        transition-all
                        duration-300

                        hover:bg-[#25618e]
                        hover:shadow-[0_5px_14px_rgba(23,63,112,0.18)]
                      "
                    >
                      Contact Us

                      <ArrowRight
                        size={13}
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
            CTA SECTION WITH BACKGROUND IMAGE
        ========================================================== */}
        <section
          className="
            relative
            isolate
            w-full
            overflow-hidden

            my-[24px]
            sm:my-[30px]
            lg:my-[36px]

            bg-[#05274f]
            bg-cover
            bg-no-repeat
            text-white

            bg-[position:22%_center]

            sm:bg-[position:18%_center]
            md:bg-center
            lg:bg-center
          "
          style={{
            backgroundImage: `url(${bgcta})`,
          }}
        >
          {/* OVERLAY */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10

              bg-[#062650]/15

              max-md:bg-gradient-to-r
              max-md:from-[#05254d]/45
              max-md:via-[#05254d]/20
              max-md:to-[#05254d]/20
            "
          />

          {/* CONTENT */}
          <div
            className="
              mx-auto
              flex
              min-h-[150px]
              w-[min(1120px,calc(100%-32px))]
              flex-col
              items-start
              justify-center
              gap-[20px]
              py-[22px]

              sm:min-h-[135px]
              sm:w-[min(1120px,calc(100%-48px))]

              md:min-h-[90px]
              md:flex-row
              md:items-center
              md:justify-between
              md:gap-[30px]
              md:py-[12px]

              lg:min-h-[129px]
              lg:py-[14px]
            "
          >
            {/* EMPTY ARTWORK AREA */}
            <div
              className="
                hidden
                shrink-0

                md:block
                md:w-[225px]

                lg:w-[250px]
              "
            />

            {/* TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                flex-1

                md:max-w-[440px]
              "
            >
              <h2
                className="
                  font-['Inter',sans-serif]
                  text-[15px]
                  font-[600]
                  leading-[1.45]
                  tracking-[-0.01em]
                  text-white

                  min-[390px]:text-[16px]
                  sm:text-[17px]
                  md:text-[16px]
                  lg:text-[18px]
                "
              >
                Publishing with Integrity and Transparency.
              </h2>

              <p
                className="
                  mt-[5px]
                  font-['Inter',sans-serif]
                  text-[11px]
                  font-[500]
                  leading-[1.6]
                  text-white/85

                  sm:text-[11.5px]
                "
              >
                Our terms help maintain a fair, ethical and trusted publishing
                environment for authors, reviewers and readers.
              </p>
            </motion.div>

            {/* BUTTON */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.1,
              }}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                relative
                z-10
                shrink-0

                max-[380px]:w-full
              "
            >
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  h-[37px]
                  items-center
                  justify-center
                  gap-[9px]

                  rounded-[4px]

                  border
                  border-white/70

                  bg-white/[0.04]

                  px-[15px]

                  font-['Inter',sans-serif]
                  text-[12px]
                  font-[700]
                  text-white

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:text-[#173f70]

                  max-[380px]:w-full

                  sm:text-[12.5px]
                "
              >
                Contact Our Team

                <ArrowRight
                  size={16}
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