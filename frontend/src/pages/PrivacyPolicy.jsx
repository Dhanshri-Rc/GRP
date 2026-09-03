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
  UsersRound,
  Network,
  CheckCircle2,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import bgReviewer from "../assets/img/global-reviews-press-privact-policy-hero.webp";
import bgcta from "../assets/img/join-global-reviews-press-privacy-policy-cta.webp";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="overflow-x-clip bg-white pt-[45px]">
        {/* =========================================================
            PRIVACY POLICY HERO
        ========================================================== */}

<section
  className="
    relative
    isolate
    w-full
    overflow-x-hidden
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

     {/* Mobile / Tablet Readability Overlay */}
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
            " />

  {/* =====================================================
      MAIN CONTAINER
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
    {/* =====================================================
        LEFT CONTENT
    ====================================================== */}
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
          ease: "easeOut",
        }}
        className="
        
          text-[28px]
          font-[600]
          leading-[1.12]
          tracking-[-0.025em]
          text-white

          min-[390px]:text-[30px]
mt-4
          sm:text-[32px]

          md:text-[33px]

          lg:text-[33px]

          xl:text-[34px]
        "
      >
        Privacy Policy
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
          max-w-[410px]
          font-['Inter',sans-serif]
          text-[10px]
          font-[450]
          leading-[1.8]
          text-white/90

          sm:text-[10.5px]

          lg:mt-[16px]
          lg:max-w-[410px]
          lg:text-[12px]
        "
      >
       Global Reviews Press respects your privacy and is committed to
                protecting the personal information you share with us. This
                policy explains how we collect, use, protect and manage your
                information when you interact with our website and publishing
                services.
      </motion.p>

    {/* =====================================================
    PRIVACY & DATA PROTECTION
====================================================== */}
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
    transition={{
      duration: 0.25,
    }}
    className="
      group
      inline-flex
      max-w-full
      items-center
      gap-[9px]

      rounded-[5px]
      border
      border-white/10
      bg-white/[0.07]

      px-[11px]
      py-[4px]

      backdrop-blur-[2px]

      transition-all
      duration-300

      border-white/20
      hover:bg-white/[0.07]

      min-[390px]:gap-[10px]
      min-[390px]:px-[12px]

      sm:gap-[11px]
      sm:px-[13px]

      lg:gap-[12px]
      lg:px-[10px]
      lg:py-[2px]
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
        className="
          shrink-0

          sm:h-[18px]
          sm:w-[18px]

          lg:h-[19px]
          lg:w-[19px]
        "
      />
    </motion.div>

    {/* TEXT */}
    <div className="min-w-0">
      <p
        className="
          whitespace-normal
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
        Privacy & Data Protection
      </p>
    </div>
  </motion.div>
</motion.div>
    </motion.div>
  </div>
</section>


     


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
      {/* =====================================================
          ICON
      ====================================================== */}
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
        <ShieldCheck
          size={28}
          strokeWidth={1.55}
          className="
            sm:h-[30px]
            sm:w-[30px]
          "
        />
      </motion.div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
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
          Our Commitment to Your Privacy
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
          Global Reviews Press respects the privacy of researchers, authors,
          reviewers, editors, visitors and other users of our services. This
          policy explains the general practices we follow when personal
          information is provided through our website and publishing services.
        </p>
      </div>
    </motion.div>
  </div>
</section>

    
    {/* =========================================================
    PRIVACY POLICY CONTENT
========================================================== */}<section
  className="
    bg-white
    py-[2px]

 
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
    LEFT SIDE NAVIGATION
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
    {/* ==================== TITLE ==================== */}
    <h2
      className="
        font-['Inter',sans-serif]
        text-[17px]
        font-[650]
        leading-[1.25]
        text-[#173d70]
      "
    >
      PRIVACY POLICY
    </h2>

    {/* ==================== UNDERLINE ==================== */}
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

    {/* ==================== NAVIGATION ==================== */}
    <nav
      className="
        mt-[12px]
        grid
        grid-cols-2
        gap-[4px]

        min-[500px]:grid-cols-3

        lg:grid-cols-1
        lg:gap-[2px]
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
            flex
            min-h-[30px]
            items-center

            rounded-[4px]

            px-[8px]
            py-[5px]

            font-['Inter',sans-serif]
            text-[11.5px]
            font-[600]
            leading-[1.3]
            text-[#5c6c80]

            transition-all
            duration-300

            hover:bg-[#edf5fb]
            hover:pl-[11px]
            hover:text-[#195d91]

            sm:text-[12px]
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
        whileHover={{
          y: -2,
        }}
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
            <ShieldCheck
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
              1. Overview
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
              This Privacy Policy describes how Global Reviews Press collects
              and processes information when users browse our website, submit
              manuscripts, participate as reviewers or editors, subscribe to
              communications, contact our team, or otherwise interact with our
              publishing services.
            </p>
          </div>
        </div>
      </motion.article>

      {/* =================================================
          2. INFORMATION WE COLLECT
      ================================================== */}
      <motion.article
        id="information"
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
              bg-[#edf8ef]
              text-[#4e9850]
            "
          >
            <Database
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
              2. Information We Collect
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
              Depending on how you use our services, we may collect information
              such as:
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
                    className="
                      mt-[2px]
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
          3. HOW WE USE INFORMATION
      ================================================== */}
      <motion.article
        id="use"
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
              3. How We Use Your Information
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
              We may use collected information to operate our publishing
              platform, process manuscript submissions, coordinate peer review,
              communicate with authors and reviewers, improve website
              functionality, respond to enquiries, maintain academic records,
              prevent misuse and meet applicable legal obligations.
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
              bg-[#fff6e9]
              text-[#dc9239]
            "
          >
            <Cookie
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
              4. Cookies and Similar Technologies
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
              Our website may use cookies and similar technologies to remember
              preferences, support essential functionality, understand website
              usage and improve user experience. You may control cookies
              through your browser settings, although disabling certain cookies
              may affect website functionality.
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
          <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#ecf8f8] text-[#279895]">
            <Share2
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
              5. Information Sharing
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
              Global Reviews Press does not sell personal information.
              Information may be shared with authorized editors, reviewers,
              publishing service providers, technology providers or
              professional partners when required to deliver our services,
              protect legitimate interests or comply with legal requirements.
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
          <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#edf3ff] text-[#4169ad]">
            <LockKeyhole
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
              6. Data Security
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
              We use reasonable administrative, technical and organizational
              safeguards designed to protect information against unauthorized
              access, alteration, disclosure or loss. However, no electronic
              transmission or storage method can be guaranteed to be completely
              secure.
            </p>
          </div>
        </div>
      </motion.article>

      {/* =================================================
          7. DATA RETENTION
      ================================================== */}
      <motion.article
        id="retention"
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
          <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#f4f1fb] text-[#6a55a1]">
            <Clock3
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
              7. Data Retention
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
              Personal information is retained only for as long as reasonably
              necessary for publishing operations, academic record keeping,
              contractual requirements, dispute resolution, legal compliance
              or other legitimate business purposes.
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
            <UserRoundCheck
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
              8. Your Privacy Rights
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
              Subject to applicable law, you may have rights relating to your
              personal information, including:
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
                "Request access to your information",
                "Request correction of inaccurate information",
                "Request deletion where legally appropriate",
                "Object to or restrict certain processing",
                "Withdraw consent where processing relies on consent",
                "Contact us regarding privacy concerns",
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
                    className="
                      mt-[2px]
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
          9. THIRD-PARTY LINKS
      ================================================== */}
      <motion.article
        id="links"
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
              9. Third-Party Links
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
              Our website may contain links to external websites, indexing
              services, publishing platforms or third-party resources. Global
              Reviews Press is not responsible for the privacy practices or
              content of independently operated third-party websites.
            </p>
          </div>
        </div>
      </motion.article>

      {/* =================================================
          10. CHILDREN'S PRIVACY
      ================================================== */}
      <motion.article
        id="children"
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
          <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#fff4ec] text-[#db8345]">
            <Baby
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
              10. Children's Privacy
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
              Our publishing services are intended for researchers,
              professionals, institutions and other appropriate users. We do
              not knowingly seek to collect personal information from children
              through the website.
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
              11. Changes to This Privacy Policy
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
              We may update this Privacy Policy periodically to reflect changes
              in our services, practices, technologies or legal requirements.
              Updated versions will be published on this page with a revised
              effective date.
            </p>
          </div>
        </div>
      </motion.article>

      {/* =================================================
          12. CONTACT US
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
          overflow-x-hidden
          rounded-[8px]
          border
          border-[#dbe6ee]

          bg-gradient-to-r
          from-[#f6fafd]
          to-[#f5faf6]

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
                12. Contact Us
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
                If you have questions, concerns or requests regarding this
                Privacy Policy or the handling of your personal information,
                please contact Global Reviews Press.
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
            BOTTOM PRIVACY CTA
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
  {/* =====================================================
      RESPONSIVE OVERLAY
  ====================================================== */}
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

  {/* =====================================================
      MAIN CONTAINER
  ====================================================== */}
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
    {/* =====================================================
        EMPTY LEFT SPACE FOR GLOBE
    ====================================================== */}
    <div
      className="
        hidden
        shrink-0

        md:block
        md:w-[225px]

        lg:w-[250px]
      "
    />

    {/* =====================================================
        CENTER TEXT
    ====================================================== */}
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
       Your Trust Is Important to Us.
        
      </h2>
         <p className="mt-[5px] text-[11px] leading-[1.6] text-white/85 sm:text-[11.5px]">
                We are committed to responsible, transparent and secure
                handling of your information.
              </p>
    </motion.div>

    {/* =====================================================
        JOIN AS REVIEWER BUTTON
    ====================================================== */}
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
        amount: 0.4,
      }}
      transition={{
        duration: 0.55,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
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
                  gap-[9px]
                  rounded-[4px]
                  border
                  border-white/70
                  bg-white/[0.04]
                  px-[15px]

                  text-[12.5px]
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