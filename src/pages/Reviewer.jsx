import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Network,
  BadgeCheck,
  Scale,
  LockKeyhole,
  Mail,
  CircleCheckBig,
  FileSearch,
  ClipboardCheck,
  Send,
  BookOpen,
  Quote,
  UsersRound,
  LibraryBig,
  Award,
  GraduationCap,
  FileCheck2,
  ListChecks,
  UserRound,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import bgReviewer from "../assets/img/global-reviews-press-peer-reviewer-hero.webp";
import bgcta from "../assets/img/join-global-reviews-press-reviewer-network-cta.webp";

/* Benefit Card Images */
import r1 from "../assets/img/academic-reviewer-profile-development.webp";
import r2 from "../assets/img/outstanding-peer-reviewer-recognition.webp";
import r3 from "../assets/img/reviewer-access-to-latest-research.webp";
import r4 from "../assets/img/reviewer-publication-discounts-and-waivers.webp";
import r5 from "../assets/img/academic-reviewer-networking-opportunities.webp";
import r6 from "../assets/img/peer-review-intellectual-contribution.webp";
import r7 from "../assets/img/academic-reviewer-activity-dashboard.webp";
import r8 from "../assets/img/peer-review-supporting-global-research.webp";

/* Indexing Logos */
import scopusLogo from "../assets/img/scopus-indexing-database-logo.webp";
import clarivateLogo from "../assets/img/clarivate-web-of-science-logo.webp";
import doajLogo from "../assets/img/directory-of-open-access-journals-doaj-logo.webp";
import casLogo from "../assets/img/chemical-abstracts-service-cas-logo.webp";
import dimensionsLogo from "../assets/img/dimensions-research-indexing-logo.webp";
import crossrefLogo from "../assets/img/crossref-doi-registration-agency-logo.webp";
import googleScholarLogo from "../assets/img/google-scholar-academic-indexing-logo.webp";


const reviewBenefits = [
  {
    title: "Ensure Quality",
    description:
      "Help uphold the highest standards of research and publication.",
    icon: ShieldCheck,
    color: "#4D913D",
  },
  {
    title: "Global Impact",
    description:
      "Contribute to research that drives innovation and solves real-world challenges.",
    icon: Globe2,
    color: "#423494",
  },
  {
    title: "Professional Growth",
    description:
      "Enhance your academic profile and stay at the forefront of your field.",
    icon: Network,
    color: "#183A83",
  },
  {
    title: "Recognition",
    description:
      "Receive acknowledgment for your valuable contributions.",
    icon: BadgeCheck,
    color: "#4E913D",
  },
  {
    title: "Flexible & Fair",
    description:
      "Manage reviews at your convenience with transparent timelines.",
    icon: GraduationCap,
    color: "#503092",
  },
  {
    title: "Ethical & Confidential",
    description:
      "We ensure a secure, ethical, and respectful review process.",
    icon: LockKeyhole,
    color: "#263C86",
  },
];


const processSteps = [
  {
    number: "1",
    title: "Invitation",
    description:
      "You will receive an invitation via email to review a manuscript.",
    icon: Mail,
    color: "#3F7F32",
  },
  {
    number: "2",
    title: "Acceptance",
    description:
      "Accept the invitation and confirm your availability.",
    icon: FileCheck2,
    color: "#59328F",
  },
  {
    number: "3",
    title: "Review",
    description:
      "Evaluate the manuscript and provide constructive feedback.",
    icon: FileSearch,
    color: "#124A93",
  },
  {
    number: "4",
    title: "Recommendation",
    description:
      "Submit your recommendation (accept, minor revision, major revision, or reject).",
    icon: ListChecks,
    color: "#3F7F32",
  },
  {
    number: "5",
    title: "Submission",
    description:
      "Submit your review through our secure online system.",
    icon: Send,
    color: "#59328F",
  },
  {
    number: "6",
    title: "Acknowledgment",
    description:
      "Receive acknowledgment and access your review record.",
    icon: CircleCheckBig,
    color: "#15529B",
  },
];


const reviewerBenefitCards = [
  {
    title: "Enhance Your Profile",
    description:
      "Showcase your expertise and contributions to the academic community.",
    image: r1,
  },
  {
    title: "Reviewer Recognition",
    description:
      "Outstanding reviewers are recognized annually on our website and certificates.",
    image: r2,
  },
  {
    title: "Stay Informed",
    description:
      "Gain early access to the latest research and emerging advancements.",
    image: r3,
  },
  {
    title: "Discounts & Waivers",
    description:
      "Enjoy discounts on APCs for your publications in our journals.",
    image: r4,
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with editors, authors, and experts worldwide.",
    image: r5,
  },
  {
    title: "Intellectual Satisfaction",
    description:
      "Play a key role in shaping high-quality research and knowledge dissemination.",
    image: r6,
  },
  {
    title: "Track Your Activity",
    description:
      "Monitor your review history and download certificates from your reviewer dashboard.",
    image: r7,
  },
  {
    title: "Contribute to a Better World",
    description:
      "Support research that addresses global challenges and advances sustainable development.",
    image: r8,
  },
];


const testimonials = [
  {
    quote:
      "Reviewing for Global Reviews Press has been a rewarding experience. The platform is professional, transparent, and truly values reviewers.",
    author: "Prof. Michael Anderson",
    university: "University of Toronto, Canada",
    flag: "🇨🇦",
  },
  {
    quote:
      "The review process is well-structured and the editorial team is very supportive. I appreciate the recognition for reviewers' contributions.",
    author: "Dr. Priya Sharma",
    university: "Indian Institute of Science, India",
    flag: "🇮🇳",
  },
  {
    quote:
      "A great platform to contribute to impactful research while staying updated with the latest advancements in my field.",
    author: "Prof. Li Wei",
    university: "Tsinghua University, China",
    flag: "🇨🇳",
  },
];




export default function Reviewer() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white pt-[75px]">

      {/* =========================================================
    REVIEWER HERO SECTION
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

    xl:min-h-[335px]
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

      lg:min-h-[410px]
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

          sm:text-[32px]

          md:text-[33px]

          lg:text-[33px]

          xl:text-[34px]
        "
      >
        Information for Reviewers
      </motion.h1>

      {/* ==================== TAGLINE ==================== */}
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
          delay: 0.15,
        }}
        className="
          mt-[10px]
          font-['Inter',sans-serif]
          text-[14px]
          font-[500]
          leading-[1.35]
          text-[#B7D329]

          sm:text-[14px]

          lg:text-[15px]
        "
      >
        Your Expertise. Our Impact.
      </motion.p>

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
          lg:max-w-[380px]
          lg:text-[12px]
        "
      >
        At Global Reviews Press, we value the vital role of reviewers
        in maintaining the quality, integrity, and credibility of scholarly
        research. Join our global community of experts and contribute
        to advancing knowledge across diverse disciplines.
      </motion.p>

      {/* =====================================================
          STATISTICS
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
          mt-[28px]
          grid
          max-w-[420px]
          grid-cols-1
          gap-[12px]

          min-[370px]:grid-cols-3
          min-[370px]:gap-[10px]

          sm:gap-[6px]

          lg:mt-[28px]
          lg:max-w-[410px]
        "
      >
        {/* ==================== EXPERT REVIEWERS ==================== */}
        <motion.div
          whileHover={{
            y: -4,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            group
            flex
            items-center
            gap-[9px]
          "
        >
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: -3,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <UsersRound
              size={24}
              strokeWidth={1.45}
              className="
                shrink-0
                text-white/90

                lg:h-[26px]
                lg:w-[26px]
              "
            />
          </motion.div>

          <div>
            <p
              className="
                font-['Inter',sans-serif]
                text-[13px]
                font-[700]
                leading-none
                text-[#CDD82D]

                lg:text-[14px]
              "
            >
              15,000+
            </p>

            <p
              className="
                mt-[4px]
                whitespace-nowrap
                font-['Inter',sans-serif]
                text-[10px]
                font-[500]
                leading-none
                text-white/90
              "
            >
              Expert Reviewers
            </p>
          </div>
        </motion.div>

        {/* ==================== COUNTRIES ==================== */}
        <motion.div
          whileHover={{
            y: -4,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            group
            flex
            items-center
            gap-[9px]
          "
        >
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 4,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Globe2
              size={24}
              strokeWidth={1.45}
              className="
                shrink-0
                text-white/90

                lg:h-[26px]
                lg:w-[26px]
              "
            />
          </motion.div>

          <div>
            <p
              className="
                font-['Inter',sans-serif]
                text-[13px]
                font-[700]
                leading-none
                text-[#CDD82D]

                lg:text-[14px]
              "
            >
              120+
            </p>

            <p
              className="
                mt-[4px]
                font-['Inter',sans-serif]
                text-[10px]
                font-[500]
                leading-none
                text-white/90
              "
            >
              Countries
            </p>
          </div>
        </motion.div>

        {/* ==================== RESEARCH DISCIPLINES ==================== */}
        <motion.div
          whileHover={{
            y: -4,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            group
            flex
            items-center
            gap-[9px]
          "
        >
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: -4,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Network
              size={24}
              strokeWidth={1.45}
              className="
                shrink-0
                text-white/90

                lg:h-[26px]
                lg:w-[26px]
              "
            />
          </motion.div>

          <div>
            <p
              className="
                font-['Inter',sans-serif]
                text-[13px]
                font-[700]
                leading-none
                text-[#CDD82D]

                lg:text-[14px]
              "
            >
              20+
            </p>

            <p
              className="
                mt-[4px]
                whitespace-nowrap
                font-['Inter',sans-serif]
                text-[10px]
                font-[500]
                leading-none
                text-white/90
              "
            >
              Research Disciplines
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>


    {/* =========================================================
    WHY REVIEW WITH US
========================================================== */}
<section
  className="
    border-y
    border-[#eef1f4]
    bg-white
    py-[26px]

    sm:py-[30px]
    lg:py-[31px]
  "
>
  <div
    className="
      mx-auto
      w-[min(1120px,calc(100%-32px))]

      sm:w-[min(1120px,calc(100%-48px))]
    "
  >
    {/* =====================================================
        SECTION HEADING
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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      <h2
        className="
          font-['Inter',sans-serif]
          text-[20px]
          font-[600]
          leading-none
          tracking-[0.01em]
          text-[#172F69]

          sm:text-[20px]
          lg:text-[21px]
        "
      >
        WHY REVIEW WITH US?
      </h2>

      {/* small green underline like reference */}
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 38 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: 0.18,
        }}
        className="
          mx-auto
          mt-[10px]
          block
          h-[2px]
          rounded-full
          bg-[#4C8A42]
        "
      />
    </motion.div>

    {/* =====================================================
        BENEFITS GRID
    ====================================================== */}
    <div
      className="
        mt-[34px]
        grid
        grid-cols-2
        gap-x-0
        gap-y-[30px]

        sm:grid-cols-3

        lg:grid-cols-6
        lg:gap-y-0
      "
    >
      {reviewBenefits.map((benefit, index) => {
        const Icon = benefit.icon;

        return (
          <motion.div
            key={benefit.title}
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
              duration: 0.45,
              delay: index * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group
              relative
              flex
              min-h-[145px]
              flex-col
              items-center
              justify-start
              px-[14px]
              text-center

              sm:min-h-[150px]

              lg:min-h-[135px]
              lg:px-[16px]

              lg:[&:not(:last-child)]:border-r
              lg:[&:not(:last-child)]:border-[#E1E6EB]
            "
          >
            {/* =================================================
                ICON
            ================================================== */}
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: index % 2 === 0 ? -3 : 3,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                flex
                h-[43px]
                items-center
                justify-center

                sm:h-[45px]
                lg:h-[43px]
              "
            >
              <Icon
                size={38}
                strokeWidth={1.55}
                style={{
                  color: benefit.color,
                }}
                className="
                  transition-all
                  duration-300

                  group-hover:drop-shadow-[0_4px_7px_rgba(20,48,87,0.12)]
                "
              />
            </motion.div>

            {/* =================================================
                TITLE
            ================================================== */}
            <h3
              className="
                mt-[9px]
                font-['Inter',sans-serif]
                text-[13.5px]
                font-[600]
                leading-[1.3]
                text-[#213868]

                sm:text-[13px]

                lg:text-[14px]
              "
            >
              {benefit.title}
            </h3>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <p
              className="
                mt-[7px]
                max-w-[135px]
                font-['Inter',sans-serif]
                text-[9.6px]
                font-[500]
                leading-[1.65]
                text-[#31445F]

                sm:max-w-[145px]
                sm:text-[10px]

                lg:max-w-[145px]
                lg:text-[10.5px]
              "
            >
              {benefit.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


      {/* =========================================================
    OUR REVIEW PROCESS
========================================================== */}
<section
  className="
    border-y
    border-[#edf1f4]
    bg-white
    py-[26px]

    sm:py-[30px]

    lg:py-[31px]
  "
>
  <div
    className="
      mx-auto
      w-[min(1120px,calc(100%-32px))]

      sm:w-[min(1120px,calc(100%-48px))]
    "
  >
    {/* =====================================================
        HEADING
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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      <h2
        className="
          font-['Inter',sans-serif]
          text-[20px]
          font-[600]
          leading-none
          tracking-[0.005em]
          text-[#172E66]

          sm:text-[20px]

          lg:text-[21px]
        "
      >
        OUR REVIEW PROCESS
      </h2>

      {/* Green underline */}
      <motion.span
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 38,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
          delay: 0.15,
        }}
        className="
          mx-auto
          mt-[9px]
          block
          h-[2px]
          rounded-full
          bg-[#568D45]
        "
      />
    </motion.div>

    {/* =====================================================
        PROCESS WRAPPER
    ====================================================== */}
    <div
      className="
        relative
        mt-[24px]

        lg:mt-[32px]
      "
    >
      {/* =================================================
          DESKTOP CONNECTING LINE
      ================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-[8.4%]
          right-[8.4%]
          top-[27px]
          z-0
          hidden
          h-px
          bg-[#CED7E1]

          lg:block
        "
      />

      {/* =================================================
          DESKTOP ARROWS
      ================================================== */}
      <div className="pointer-events-none absolute inset-x-0 top-[20px] z-[1] hidden lg:block">
        <ArrowRight
          size={15}
          strokeWidth={1.25}
          className="
            absolute
            left-[16.1%]
            top-0
            text-[#8EA0B3]
          "
        />

        <ArrowRight
          size={15}
          strokeWidth={1.25}
          className="
            absolute
            left-[32.8%]
            top-0
            text-[#8EA0B3]
          "
        />

        <ArrowRight
          size={15}
          strokeWidth={1.25}
          className="
            absolute
            left-[49.4%]
            top-0
            text-[#8EA0B3]
          "
        />

        <ArrowRight
          size={15}
          strokeWidth={1.25}
          className="
            absolute
            left-[66.1%]
            top-0
            text-[#8EA0B3]
          "
        />

        <ArrowRight
          size={15}
          strokeWidth={1.25}
          className="
            absolute
            left-[82.7%]
            top-0
            text-[#8EA0B3]
          "
        />
      </div>

      {/* =================================================
          PROCESS GRID
      ================================================== */}
      <div
        className="
          relative
          z-10
          grid
          grid-cols-2
          gap-x-[12px]
          gap-y-[31px]

          sm:grid-cols-3
          sm:gap-x-[18px]

          lg:grid-cols-6
          lg:gap-x-0
          lg:gap-y-0
        "
      >
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.number}
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
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                flex
                min-h-[158px]
                flex-col
                items-center
                px-[9px]
                text-center

                sm:min-h-[160px]

                lg:min-h-[150px]
                lg:px-[12px]
              "
            >
              {/* =============================================
                  CIRCLE ICON
              ============================================== */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate:
                    index % 2 === 0
                      ? -3
                      : 3,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  relative
                  z-10
                  flex
                  h-[55px]
                  w-[55px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-[3px]
                  border-white
                  text-white

                  shadow-[0_3px_8px_rgba(21,44,76,0.15)]

                  transition-shadow
                  duration-300

                  group-hover:shadow-[0_7px_16px_rgba(21,44,76,0.22)]

                  lg:h-[56px]
                  lg:w-[56px]
                "
                style={{
                  backgroundColor: step.color,
                }}
              >
                <Icon
                  size={25}
                  strokeWidth={1.45}
                  className="
                    text-white
                  "
                />
              </motion.div>

              {/* =============================================
                  NUMBER + TITLE
              ============================================== */}
              <h3
                className="
                  mt-[9px]
                  font-['Inter',sans-serif]
                  text-[13px]
                  font-[600]
                  leading-[1.25]
                  text-[#192F64]

                  sm:text-[13.5px]

                  lg:text-[14px]
                "
              >
                {step.number}. {step.title}
              </h3>

              {/* =============================================
                  DESCRIPTION
              ============================================== */}
              <p
                className="
                  mt-[7px]
                  max-w-[135px]
                  font-['Inter',sans-serif]
                  text-[9.5px]
                  font-[500]
                  leading-[1.65]
                  text-[#2D3C57]

                  sm:max-w-[145px]
                  sm:text-[9.8px]

                  lg:max-w-[160px]
                  lg:text-[10.5px]
                "
              >
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>


     {/* =========================================================
    BENEFITS OF REVIEWING
========================================================== */}
<section
  className="
    border-y
    border-[#eef1f4]
    bg-white
    py-[25px]

    sm:py-[29px]

    lg:py-[30px]
  "
>
  <div
    className="
      mx-auto
      w-[min(1120px,calc(100%-32px))]

      sm:w-[min(1120px,calc(100%-48px))]
    "
  >
    {/* =====================================================
        SECTION HEADING
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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      <h2
        className="
          font-['Inter',sans-serif]
          text-[20px]
          font-[600]
          leading-none
          tracking-[0.005em]
          text-[#172F67]

          sm:text-[20px]

          lg:text-[21px]
        "
      >
        BENEFITS OF REVIEWING
      </h2>

      {/* green underline exactly like reference */}
      <motion.span
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 34,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
          delay: 0.15,
        }}
        className="
          mx-auto
          mt-[8px]
          block
          h-[2px]
          rounded-full
          bg-[#568D45]
        "
      />
    </motion.div>

    {/* =====================================================
        BENEFITS CARDS
    ====================================================== */}
    <div
      className="
        mt-[32px]
        grid
        grid-cols-1
        gap-[10px]

        min-[390px]:grid-cols-2

        md:grid-cols-3

        lg:grid-cols-4
        lg:gap-[11px]
      "
    >
      {reviewerBenefitCards.map((card, index) => (
        <motion.article
          key={card.title}
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
            delay: index * 0.045,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -5,
          }}
          className="
            group
            relative
            overflow-hidden

            rounded-[5px]

            border
            border-[#E2E7EC]

            bg-white

            shadow-[0_3px_10px_rgba(17,44,75,0.035)]

            transition-all
            duration-300

            hover:border-[#D6E0E8]
            hover:shadow-[0_9px_22px_rgba(17,44,75,0.10)]
          "
        >
          {/* =================================================
              IMAGE
          ================================================== */}
          <div
            className="
              relative
              aspect-[2.05/1]
              w-full
              overflow-hidden
              bg-[#071E3F]

              sm:aspect-[2.1/1]

              lg:aspect-[2.12/1]
            "
          >
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="
                h-full
                w-full
                object-cover
                object-center

                transition-transform
                duration-[750ms]
                ease-out

                group-hover:scale-[1.06]
              "
            />

            {/* very small image depth overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#051D3A]/5
                to-transparent
              "
            />
          </div>

          {/* =================================================
              CARD CONTENT
          ================================================== */}
          <div
            className="
              min-h-[74px]
              px-[12px]
              pb-[12px]
              pt-[9px]

              sm:min-h-[78px]
              sm:px-[13px]

              lg:min-h-[82px]
              lg:px-[12px]
              lg:pb-[11px]
              lg:pt-[9px]
            "
          >
            {/* TITLE */}
            <h3
              className="
                font-['Inter',sans-serif]
                text-[14.5px]
                font-[600]
                leading-[1.25]
                text-[#192F60]

                transition-colors
                duration-300

                group-hover:text-[#0F5590]

                sm:text-[14px]

                lg:text-[15px]
              "
            >
              {card.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[5px]
                max-w-[220px]

                font-['Inter',sans-serif]
                text-[9.2px]
                font-[500]
                leading-[1.55]
                text-[#31425A]

                sm:text-[9.5px]

                lg:text-[10.5px]
              "
            >
              {card.description}
            </p>
          </div>

          {/* subtle hover line */}
          <span
            className="
              absolute
              bottom-0
              left-0
              h-[2px]
              w-0
              bg-[#315F94]

              transition-all
              duration-500

              group-hover:w-full
            "
          />
        </motion.article>
      ))}
    </div>
  </div>
</section>


      {/* =========================================================
    REVIEWER GUIDELINES + CODE OF CONDUCT
========================================================== */}
<section
  className="
    border-y
    border-[#edf1f4]
    bg-white
    py-[24px]

    sm:py-[27px]

    lg:py-[30px]
  "
>
  <div
    className="
      mx-auto
      grid
      w-[min(1120px,calc(100%-32px))]
      grid-cols-1
      gap-[12px]

      sm:w-[min(1120px,calc(100%-48px))]

      md:grid-cols-2
      md:gap-[16px]

      lg:gap-[18px]
    "
  >
    {/* =====================================================
        REVIEWER GUIDELINES
    ====================================================== */}
    <motion.article
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
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
        y: -4,
      }}
      className="
        group
        relative
        flex
        min-h-[145px]
        flex-col
        items-start
        gap-[22px]
        overflow-hidden

        rounded-[7px]

        border
        border-[#e3e8ed]

        bg-[#fafbfc]

        px-[18px]
        py-[17px]

        shadow-[0_3px_12px_rgba(21,51,83,0.035)]

        transition-all
        duration-300

        hover:border-[#d8e2e8]
        hover:shadow-[0_9px_22px_rgba(21,51,83,0.08)]

        min-[420px]:flex-row
        min-[420px]:items-center

        sm:px-[20px]

        lg:min-h-[138px]
        lg:px-[22px]
        lg:py-[18px]
      "
    >
      {/* ==================== ICON ==================== */}
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

          bg-[#447D36]
          text-white

          shadow-[0_4px_10px_rgba(68,125,54,0.15)]

          sm:h-[59px]
          sm:w-[59px]
        "
      >
        <BookOpen
          size={34}
          strokeWidth={1.45}
        />
      </motion.div>

      {/* ==================== CONTENT ==================== */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            font-['Inter',sans-serif]
            text-[10px]
            font-[600]
            leading-[1.2]
            tracking-[0.01em]
            text-[#4A7E36]

            sm:text-[10.5px]

            lg:text-[15px]
          "
        >
          REVIEWER GUIDELINES
        </h3>

        <p
          className="
            mt-[6px]
            max-w-[390px]

            font-['Inter',sans-serif]
            text-[10px]
            font-[500]
            leading-[1.6]
            text-[#34465e]

            sm:text-[10.3px]

            lg:text-[10.5px]
          "
        >
          Find detailed guidelines on how to conduct a
          <br className="hidden lg:block" />
          thorough, fair, and constructive peer review.
        </p>

        {/* ==================== BUTTON ==================== */}
        <motion.div
          whileHover={{
            x: 2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-[11px] w-fit"
        >
          <Link
            to="/reviewer"
            className="
              group/button
              inline-flex
              h-[30px]
              items-center
              justify-center
              gap-[8px]

              rounded-[4px]

              border
              border-[#5A9449]

              bg-white

              px-[12px]

              font-['Inter',sans-serif]
              text-[12px]
              font-[600]
              text-[#497D3B]

              shadow-[0_2px_5px_rgba(52,98,42,0.04)]

              transition-all
              duration-300

              hover:bg-[#497D3B]
              hover:text-white
              hover:shadow-[0_5px_12px_rgba(52,98,42,0.15)]
            "
          >
            View Guidelines

            <ArrowRight
              size={14}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover/button:translate-x-[3px]
              "
            />
          </Link>
        </motion.div>
      </div>
    </motion.article>


    {/* =====================================================
        CODE OF CONDUCT
    ====================================================== */}
    <motion.article
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.55,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        flex
        min-h-[145px]
        flex-col
        items-start
        gap-[16px]
        overflow-hidden

        rounded-[7px]

        border
        border-[#e3e8ed]

        bg-[#fafbfc]

        px-[18px]
        py-[17px]

        shadow-[0_3px_12px_rgba(21,51,83,0.035)]

        transition-all
        duration-300

        hover:border-[#ddd8e9]
        hover:shadow-[0_9px_22px_rgba(21,51,83,0.08)]

        min-[420px]:flex-row
        min-[420px]:items-center

        sm:px-[20px]

        lg:min-h-[138px]
        lg:px-[22px]
        lg:py-[18px]
      "
    >
      {/* ==================== ICON ==================== */}
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 3,
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

          bg-[#7044A3]
          text-white

          shadow-[0_4px_10px_rgba(112,68,163,0.16)]

          sm:h-[59px]
          sm:w-[59px]
        "
      >
        <Scale
          size={34}
          strokeWidth={1.45}
        />
      </motion.div>

      {/* ==================== CONTENT ==================== */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            font-['Inter',sans-serif]
            text-[14px]
            font-[600]
            leading-[1.2]
            tracking-[0.01em]
            text-[#6C429C]

            sm:text-[14.5px]

            lg:text-[15px]
          "
        >
          CODE OF CONDUCT
        </h3>

        <p
          className="
            mt-[6px]
            max-w-[390px]

            font-['Inter',sans-serif]
            text-[10px]
            font-[500]
            leading-[1.6]
            text-[#34465e]

            sm:text-[10.3px]

            lg:text-[10.5px]
          "
        >
          We are committed to maintaining the highest ethical
          <br className="hidden lg:block" />
          standards in peer review.
        </p>

        {/* ==================== BUTTON ==================== */}
        <motion.div
          whileHover={{
            x: 2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-[11px] w-fit"
        >
          <Link
            to="/reviewer"
            className="
              group/button
              inline-flex
              h-[30px]
              items-center
              justify-center
              gap-[8px]

              rounded-[4px]

              border
              border-[#7953A6]

              bg-white

              px-[12px]

              font-['Inter',sans-serif]
              text-[12px]
              font-[600]
              text-[#684197]

              shadow-[0_2px_5px_rgba(91,58,137,0.04)]

              transition-all
              duration-300

              hover:bg-[#684197]
              hover:text-white
              hover:shadow-[0_5px_12px_rgba(91,58,137,0.15)]
            "
          >
            Read Our Policies

            <ArrowRight
              size={14}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover/button:translate-x-[3px]
              "
            />
          </Link>
        </motion.div>
      </div>
    </motion.article>
  </div>
</section>


      {/* =========================================================
    OUR TOP REVIEWERS
========================================================== */}
<section
  className="
    border-y
    border-[#eef1f4]
    bg-white
    py-[24px]

    sm:py-[28px]

    lg:py-[30px]
  "
>
  <div
    className="
      mx-auto
      w-[min(1120px,calc(100%-32px))]

      sm:w-[min(1120px,calc(100%-48px))]
    "
  >
    {/* =====================================================
        SECTION HEADING
    ====================================================== */}
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      <h2
        className="
          font-['Inter',sans-serif]
          text-[20px]
          font-[600]
          leading-none
          tracking-[0.005em]
          text-[#172F67]

          sm:text-[20px]

          lg:text-[21px]
        "
      >
        OUR TOP REVIEWERS
      </h2>

      {/* GREEN UNDERLINE */}
      <motion.span
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 34,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
          delay: 0.15,
        }}
        className="
          mx-auto
          mt-[8px]
          block
          h-[2px]
          rounded-full
          bg-[#568D45]
        "
      />
    </motion.div>

    {/* =====================================================
        REVIEWER CARDS
    ====================================================== */}
    <div
      className="
        mt-[18px]
        grid
        grid-cols-1
        gap-[11px]

        md:grid-cols-3

        lg:gap-[14px]
      "
    >
      {testimonials.map((testimonial, index) => (
        <motion.article
          key={testimonial.author}
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
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -4,
          }}
          className="
            group
            relative
            min-h-[145px]
            overflow-hidden

            rounded-[6px]

            border
            border-[#E1E6EB]

            bg-white

            px-[14px]
            pb-[13px]
            pt-[13px]

            shadow-[0_3px_10px_rgba(17,44,75,0.035)]

            transition-all
            duration-300

            hover:border-[#D7E0E7]
            hover:shadow-[0_9px_22px_rgba(17,44,75,0.09)]

            sm:min-h-[150px]

            lg:min-h-[142px]
            lg:px-[15px]
          "
        >
          {/* =================================================
              QUOTE CONTENT
          ================================================== */}
          <div
            className="
              relative
              min-h-[70px]
              pl-[28px]
            "
          >
            {/* LARGE GREEN QUOTE */}
            <Quote
              size={20}
              fill="#4F8E38"
              strokeWidth={0}
              className="
                absolute
                left-0
                top-[0px]
                text-[#4F8E38]

                transition-transform
                duration-300

                group-hover:scale-110
              "
            />

            <p
              className="
                font-['Inter',sans-serif]
                text-[10.5px]
                font-[500]
               
                leading-[1.65]
                text-[#263953]

                sm:text-[10.8px]

                lg:text-[11.5px]
              "
            >
              “{testimonial.quote}”
            </p>
          </div>

          {/* =================================================
              REVIEWER PROFILE
          ================================================== */}
          <div
            className="
              mt-[9px]
              flex
              items-center
              gap-[9px]
            "
          >
            {/* =============================================
                PROFILE ICON
            ============================================== */}
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                flex
                h-[35px]
                w-[35px]
                shrink-0
                items-center
                justify-center

                rounded-full

                border
                border-[#D8E0E8]

                bg-[#F1F4F7]

                text-[#244B73]

                shadow-[0_2px_6px_rgba(23,52,81,0.08)]

                sm:h-[37px]
                sm:w-[37px]
              "
            >
              <UserRound
                size={21}
                strokeWidth={1.45}
              />
            </motion.div>

            {/* =============================================
                NAME + UNIVERSITY
            ============================================== */}
            <div className="min-w-0 flex-1">
              <p
                className="
                  truncate
                  font-['Inter',sans-serif]
                  text-[10.2px]
                  font-[600]
                  leading-[1.3]
                  text-[#243B67]

                  sm:text-[10.5px]

                  lg:text-[11.5px]
                "
              >
                {testimonial.author}
              </p>

              <p
                className="
                  mt-[2px]
                  truncate
                  font-['Inter',sans-serif]
                  text-[9.8px]
                  font-[500]
                  leading-[1.35]
                  text-[#34475F]

                  sm:text-[10px]
                "
              >
                {testimonial.university}
              </p>
            </div>

            
          </div>

       
        </motion.article>
      ))}
    </div>
  </div>
</section>


      {/* =========================================================
    REVIEWER CTA SECTION
========================================================== */}
<section
  className="
    relative
    isolate
    w-full
    overflow-hidden
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

      lg:min-h-[102px]
      lg:py-[10px]
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

          md:text-[15px]

          lg:text-[16px]
        "
      >
        Join our global network of experts
        <br className="hidden min-[390px]:block" />
        and make a difference in research.
      </h2>
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
          h-[42px]
          min-w-[174px]
          items-center
          justify-center
          gap-[18px]

          rounded-[4px]

          border
          border-[#4E872F]

          bg-[#4E872F]

          px-[18px]

          font-['Inter',sans-serif]
          text-[12px]
          font-[600]
          text-white

          shadow-[0_4px_12px_rgba(0,0,0,0.12)]

          transition-all
          duration-300

          hover:border-[#68A33D]
          hover:bg-[#68A33D]
          hover:shadow-[0_8px_18px_rgba(0,0,0,0.18)]

          max-[380px]:w-full

          sm:h-[43px]
          sm:min-w-[180px]

          md:h-[39px]
          md:min-w-[174px]

          lg:h-[40px]
          lg:min-w-[180px]
          lg:text-[12.5px]
        "
      >
        <span className="whitespace-nowrap">
          Join as a Reviewer
        </span>

        <ArrowRight
          size={16}
          strokeWidth={1.8}
          className="
            shrink-0
            transition-transform
            duration-300
            group-hover:translate-x-[5px]
          "
        />
      </Link>
    </motion.div>
  </div>
</section>


         {/* =========================================================
         INDEXED IN LEADING DATABASES
     ========================================================== */}
     <section className="border-y border-[#eef2f5] bg-white py-[22px] sm:py-[25px] lg:py-[29px]">
       <div
         className="
           mx-auto
           w-[min(1120px,calc(100%-32px))]
           sm:w-[min(1120px,calc(100%-48px))]
         "
       >
         {/* ==================== TITLE ==================== */}
         <motion.h2
           initial={{
             opacity: 0,
             y: 10,
           }}
           whileInView={{
             opacity: 1,
             y: 0,
           }}
           viewport={{
             once: true,
             amount: 0.5,
           }}
           transition={{
             duration: 0.45,
             ease: "easeOut",
           }}
           className="
             text-center
             font-['Inter',sans-serif]
             text-[20px]
             font-[600]
             leading-none
             tracking-[0.025em]
             text-[#173f78]
       
             sm:text-[20px]
             lg:text-[21px]
           "
         >
           INDEXED IN LEADING DATABASES
         </motion.h2>
     
         {/* =====================================================
             DATABASE LOGOS
         ====================================================== */}
         <div
           className="
             mt-[32px]
             grid
             grid-cols-2
             items-center
             justify-items-center
             gap-x-[18px]
             gap-y-[25px]
     
             min-[480px]:grid-cols-3
     
             sm:grid-cols-4
             sm:gap-x-[22px]
     
             lg:grid-cols-7
             lg:gap-x-[24px]
             lg:gap-y-0
           "
         >
           {/* ==================== SCOPUS ==================== */}
           <motion.div
             initial={{
               opacity: 0,
               y: 12,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
             }}
             viewport={{ once: true }}
             transition={{
               duration: 0.4,
               delay: 0.02,
             }}
             whileHover={{
               y: -4,
               scale: 1.045,
             }}
             className="
               group
               flex
               min-h-[42px]
               w-full
               items-center
               justify-center
             
             "
           >
             <img
               src={scopusLogo}
               alt="Scopus"
               className="
                 h-auto
                 w-auto
                 max-w-[88px]
                 object-contain
                 transition-all
                 duration-300
     
                 group-hover:drop-shadow-[0_5px_7px_rgba(15,45,75,0.12)]
     
                 lg:max-w-[99px]
               "
             />
           </motion.div>
     
           {/* ==================== CLARIVATE ==================== */}
           <motion.div
             initial={{
               opacity: 0,
               y: 12,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
             }}
             viewport={{ once: true }}
             transition={{
               duration: 0.4,
               delay: 0.07,
             }}
             whileHover={{
               y: -4,
               scale: 1.045,
             }}
             className="
               group
               flex
               min-h-[42px]
               w-full
               items-center
               justify-center
             "
           >
             <img
               src={clarivateLogo}
               alt="Clarivate Web of Science"
               className="
                 h-auto
                 w-auto
                 max-w-[103px]
                 object-contain
                 transition-all
                 duration-300
     
                 group-hover:drop-shadow-[0_5px_7px_rgba(15,45,75,0.12)]
     
                 lg:max-w-[108px]
               "
             />
           </motion.div>
     
           {/* ==================== DOAJ ==================== */}
           <motion.div
             initial={{
               opacity: 0,
               y: 12,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
             }}
             viewport={{ once: true }}
             transition={{
               duration: 0.4,
               delay: 0.12,
             }}
             whileHover={{
               y: -4,
               scale: 1.045,
             }}
             className="
               group
               flex
               min-h-[42px]
               w-full
               items-center
               justify-center
             "
           >
             <img
               src={doajLogo}
               alt="Directory of Open Access Journals"
               className="
                 h-auto
                 w-auto
                 max-w-[102px]
                 object-contain
                 transition-all
                 duration-300
     
                 group-hover:drop-shadow-[0_5px_7px_rgba(15,45,75,0.12)]
     
                 lg:max-w-[108px]
               "
             />
           </motion.div>
     
           {/* ==================== CAS ==================== */}
           <motion.div
             initial={{
               opacity: 0,
               y: 12,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
             }}
             viewport={{ once: true }}
             transition={{
               duration: 0.4,
               delay: 0.17,
             }}
             whileHover={{
               y: -4,
               scale: 1.045,
             }}
             className="
               group
               flex
               min-h-[42px]
               w-full
               items-center
               justify-center
             "
           >
             <img
               src={casLogo}
               alt="CAS"
               className="
                 h-auto
                 w-auto
                 max-w-[82px]
                 object-contain
                 transition-all
                 duration-300
     
                 group-hover:drop-shadow-[0_5px_7px_rgba(15,45,75,0.12)]
     
                 lg:max-w-[87px]
               "
             />
           </motion.div>
     
           {/* ==================== DIMENSIONS ==================== */}
           <motion.div
             initial={{
               opacity: 0,
               y: 12,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
             }}
             viewport={{ once: true }}
             transition={{
               duration: 0.4,
               delay: 0.22,
             }}
             whileHover={{
               y: -4,
               scale: 1.045,
             }}
             className="
               group
               flex
               min-h-[42px]
               w-full
               items-center
               justify-center
             "
           >
             <img
               src={dimensionsLogo}
               alt="Dimensions"
               className="
                 h-auto
                 w-auto
                 max-w-[100px]
                 object-contain
                 transition-all
                 duration-300
     
                 group-hover:drop-shadow-[0_5px_7px_rgba(15,45,75,0.12)]
     
                 lg:max-w-[126px]
               "
             />
           </motion.div>
     
           {/* ==================== CROSSREF ==================== */}
           <motion.div
             initial={{
               opacity: 0,
               y: 12,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
             }}
             viewport={{ once: true }}
             transition={{
               duration: 0.4,
               delay: 0.27,
             }}
             whileHover={{
               y: -4,
               scale: 1.045,
             }}
             className="
               group
               flex
               min-h-[42px]
               w-full
               items-center
               justify-center
             "
           >
             <img
               src={crossrefLogo}
               alt="Crossref"
               className="
                 h-auto
                 w-auto
                 max-w-[96px]
                 object-contain
                 transition-all
                 duration-300
     
                 group-hover:drop-shadow-[0_5px_7px_rgba(15,45,75,0.12)]
     
                 lg:max-w-[101px]
               "
             />
           </motion.div>
     
           {/* ==================== GOOGLE SCHOLAR ==================== */}
           <motion.div
             initial={{
               opacity: 0,
               y: 12,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
             }}
             viewport={{ once: true }}
             transition={{
               duration: 0.4,
               delay: 0.32,
             }}
             whileHover={{
               y: -4,
               scale: 1.045,
             }}
             className="
               group
               col-span-2
               flex
               min-h-[42px]
               w-full
               items-center
               justify-center
     
               min-[480px]:col-span-1
             "
           >
             <img
               src={googleScholarLogo}
               alt="Google Scholar"
               className="
                 h-auto
                 w-auto
                 max-w-[88px]
                 object-contain
                 transition-all
                 duration-300
     
                 group-hover:drop-shadow-[0_5px_7px_rgba(15,45,75,0.12)]
     
                 lg:max-w-[92px]
               "
             />
           </motion.div>
         </div>
       </div>
     </section>

      </main>

      <Footer />
    </>
  );
}