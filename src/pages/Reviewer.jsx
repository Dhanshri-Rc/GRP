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
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import bgReviewer from "../assets/img/bgreveiwer.png";
import bgcta from "../assets/img/rcta.png";

/* Benefit Card Images */
import r1 from "../assets/img/eng1.png";
import r2 from "../assets/img/eng2.png";
import r3 from "../assets/img/eng3.png";
import r4 from "../assets/img/eng4.png";
import r5 from "../assets/img/eng5.png";
import r6 from "../assets/img/eng6.png";
import r7 from "../assets/img/eng7.png";
import r8 from "../assets/img/eng8.png";

/* Indexing Logos */
import scopusLogo from "../assets/img/scopus.png";
import clarivateLogo from "../assets/img/clarivate.png";
import doajLogo from "../assets/img/doaj.png";
import casLogo from "../assets/img/cas.png";
import dimensionsLogo from "../assets/img/dimensions.png";
import crossrefLogo from "../assets/img/crossref.png";
import googleScholarLogo from "../assets/img/google-scholar.png";


const reviewBenefits = [
  {
    title: "Ensure Quality",
    description:
      "Help uphold the highest standards of research and publication.",
    icon: ShieldCheck,
    color: "#559D42",
    bg: "#EDF8E9",
  },
  {
    title: "Global Impact",
    description:
      "Contribute to research that drives innovation and solves real-world challenges.",
    icon: Globe2,
    color: "#3B72C5",
    bg: "#EDF4FC",
  },
  {
    title: "Professional Growth",
    description:
      "Enhance your academic profile and stay at the forefront of your field.",
    icon: Network,
    color: "#7150A8",
    bg: "#F2EEFA",
  },
  {
    title: "Recognition",
    description:
      "Receive acknowledgment for your valuable contributions.",
    icon: BadgeCheck,
    color: "#4A9B5F",
    bg: "#EDF8F0",
  },
  {
    title: "Flexible & Fair",
    description:
      "Manage reviews at your convenience with transparent timelines.",
    icon: Scale,
    color: "#7650A7",
    bg: "#F4EFFA",
  },
  {
    title: "Ethical & Confidential",
    description:
      "We ensure a secure, ethical, and respectful review process.",
    icon: LockKeyhole,
    color: "#3A68B0",
    bg: "#EDF3FC",
  },
];


const processSteps = [
  {
    number: "1",
    title: "Invitation",
    description:
      "You will receive an invitation via email to review a manuscript.",
    icon: Mail,
    color: "#467E35",
  },
  {
    number: "2",
    title: "Acceptance",
    description:
      "Accept or decline based on your availability and expertise.",
    icon: CircleCheckBig,
    color: "#6847A0",
  },
  {
    number: "3",
    title: "Review",
    description:
      "Evaluate the manuscript and provide constructive feedback.",
    icon: FileSearch,
    color: "#315FA9",
  },
  {
    number: "4",
    title: "Recommendation",
    description:
      "Submit your recommendation: accept, minor revision, major revision, or reject.",
    icon: ClipboardCheck,
    color: "#478A3A",
  },
  {
    number: "5",
    title: "Submission",
    description:
      "Submit your review through our secure online system.",
    icon: Send,
    color: "#6946A3",
  },
  {
    number: "6",
    title: "Acknowledgment",
    description:
      "Receive acknowledgment and access your reviewer record.",
    icon: BadgeCheck,
    color: "#255CA8",
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
    initials: "MA",
  },
  {
    quote:
      "The review process is well-structured and the editorial team is very supportive. I appreciate the recognition for reviewers' contributions.",
    author: "Dr. Priya Sharma",
    university: "Indian Institute of Science, India",
    initials: "PS",
  },
  {
    quote:
      "A great platform to contribute to impactful research while staying updated with the latest advancements in my field.",
    author: "Prof. Li Wei",
    university: "Tsinghua University, China",
    initials: "LW",
  },
];


export default function Reviewer() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white">

        {/* =========================================================
            HERO SECTION
        ========================================================== */}
        <section
          className="
            relative
            isolate
            min-h-[455px]
            overflow-hidden
            bg-[#071426]
            bg-cover
            bg-center
            bg-no-repeat
            text-white

            sm:min-h-[470px]
            lg:min-h-[410px]
          "
          style={{
            backgroundImage: `url(${bgReviewer})`,
          }}
        >
          {/* Readability overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              bg-gradient-to-r
              from-[#061322]/98
              via-[#071625]/88
              via-[48%]
              to-transparent
            "
          />

          <div
            className="
              mx-auto
              flex
              min-h-[455px]
              w-[min(1120px,calc(100%-32px))]
              items-center
              py-10

              sm:min-h-[470px]
              sm:w-[min(1120px,calc(100%-48px))]

              lg:min-h-[410px]
              lg:py-8
            "
          >
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.72,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                w-full
                max-w-[510px]

                lg:max-w-[485px]
              "
            >
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.08,
                }}
                className="
                  font-['Inter',sans-serif]
                  text-[30px]
                  font-[700]
                  leading-[1.12]
                  tracking-[-0.03em]
                  text-white

                  sm:text-[35px]
                  lg:text-[36px]
                "
              >
                Information for Reviewers
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.15,
                }}
                className="
                  mt-[10px]
                  font-['Inter',sans-serif]
                  text-[11px]
                  font-[650]
                  text-[#E2B448]

                  sm:text-[12px]
                "
              >
                Your Expertise. Our Impact.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.22,
                }}
                className="
                  mt-[19px]
                  max-w-[455px]
                  font-['Inter',sans-serif]
                  text-[10px]
                  font-[450]
                  leading-[1.75]
                  text-white/90

                  sm:text-[10.5px]
                "
              >
                At Global Reviews Press, we value the vital role of reviewers
                in maintaining the quality, integrity, and credibility of
                scholarly research. Join our global community of experts and
                contribute to advancing knowledge across diverse disciplines.
              </motion.p>

              {/* Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="
                  mt-[24px]
                  grid
                  max-w-[430px]
                  grid-cols-1
                  gap-4

                  min-[380px]:grid-cols-3
                  min-[380px]:gap-3
                "
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-[8px]"
                >
                  <UsersRound
                    size={23}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#D5AA4A]"
                  />

                  <div>
                    <p className="text-[12px] font-[750] text-[#D5AA4A]">
                      15,000+
                    </p>

                    <p className="text-[7px] font-[500] text-white/85">
                      Expert Reviewers
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-[8px]"
                >
                  <Globe2
                    size={23}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#D5AA4A]"
                  />

                  <div>
                    <p className="text-[12px] font-[750] text-[#D5AA4A]">
                      120+
                    </p>

                    <p className="text-[7px] font-[500] text-white/85">
                      Countries
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-[8px]"
                >
                  <LibraryBig
                    size={23}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#D5AA4A]"
                  />

                  <div>
                    <p className="text-[12px] font-[750] text-[#D5AA4A]">
                      20+
                    </p>

                    <p className="text-[7px] font-[500] text-white/85">
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
        <section className="bg-white py-[26px] sm:py-[32px]">
          <div
            className="
              mx-auto
              w-[min(1120px,calc(100%-32px))]
              sm:w-[min(1120px,calc(100%-48px))]
            "
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                text-center
                font-['Inter',sans-serif]
                text-[13px]
                font-[800]
                text-[#173768]

                sm:text-[15px]
              "
            >
              WHY REVIEW WITH US?
            </motion.h2>

            <div
              className="
                mt-[22px]
                grid
                grid-cols-2
                gap-x-2
                gap-y-7

                sm:grid-cols-3

                lg:grid-cols-6
                lg:gap-0
              "
            >
              {reviewBenefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.42,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      group
                      relative
                      flex
                      flex-col
                      items-center
                      px-[12px]
                      text-center

                      lg:min-h-[125px]

                      lg:[&:not(:last-child)]:border-r
                      lg:[&:not(:last-child)]:border-[#e5ebf0]
                    "
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      className="
                        flex
                        h-[39px]
                        w-[39px]
                        items-center
                        justify-center
                        rounded-full
                      "
                      style={{
                        color: benefit.color,
                        backgroundColor: benefit.bg,
                      }}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.45}
                      />
                    </motion.div>

                    <h3
                      className="
                        mt-[9px]
                        text-[8px]
                        font-[750]
                        text-[#213b5c]

                        sm:text-[8.5px]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p
                      className="
                        mt-[5px]
                        max-w-[125px]
                        text-[6px]
                        font-[450]
                        leading-[1.55]
                        text-[#68768a]

                        sm:text-[6.5px]
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
        <section className="bg-[#fbfcfd] py-[26px] sm:py-[31px]">
          <div
            className="
              mx-auto
              w-[min(1120px,calc(100%-32px))]
              sm:w-[min(1120px,calc(100%-48px))]
            "
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                text-center
                text-[13px]
                font-[800]
                text-[#173768]

                sm:text-[15px]
              "
            >
              OUR REVIEW PROCESS
            </motion.h2>

            <div
              className="
                relative
                mt-[22px]
                grid
                grid-cols-2
                gap-x-5
                gap-y-8

                sm:grid-cols-3

                lg:grid-cols-6
                lg:gap-x-[10px]
              "
            >
              {/* Desktop connecting line */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-[8%]
                  right-[8%]
                  top-[21px]
                  hidden
                  h-px
                  bg-[#d7e0e8]

                  lg:block
                "
              />

              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      relative
                      z-10
                      flex
                      flex-col
                      items-center
                      text-center
                    "
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-[43px]
                        w-[43px]
                        items-center
                        justify-center
                        rounded-full
                        border-[3px]
                        border-white
                        text-white
                        shadow-[0_2px_8px_rgba(25,49,77,0.12)]
                      "
                      style={{
                        backgroundColor: step.color,
                      }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                      />
                    </motion.div>

                    <p
                      className="
                        mt-[8px]
                        text-[7px]
                        font-[700]
                        text-[#253f61]
                      "
                    >
                      {step.number}. {step.title}
                    </p>

                    <p
                      className="
                        mt-[5px]
                        max-w-[130px]
                        text-[5.8px]
                        font-[450]
                        leading-[1.5]
                        text-[#798598]
                      "
                    >
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* =========================================================
            BENEFITS OF REVIEWING
        ========================================================== */}
        <section className="bg-white py-[27px] sm:py-[32px]">
          <div
            className="
              mx-auto
              w-[min(1120px,calc(100%-32px))]
              sm:w-[min(1120px,calc(100%-48px))]
            "
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                text-center
                text-[13px]
                font-[800]
                text-[#173768]

                sm:text-[15px]
              "
            >
              BENEFITS OF REVIEWING
            </motion.h2>

            <div
              className="
                mt-[18px]
                grid
                grid-cols-1
                gap-[10px]

                min-[420px]:grid-cols-2

                md:grid-cols-3

                lg:grid-cols-4
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
                    duration: 0.42,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-[6px]
                    border
                    border-[#e3e9ef]
                    bg-white
                    shadow-[0_3px_12px_rgba(15,42,75,0.04)]
                  "
                >
                  <div className="h-[100px] overflow-hidden sm:h-[112px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <div className="px-[13px] pb-[13px] pt-[11px]">
                    <h3
                      className="
                        text-[8.5px]
                        font-[750]
                        text-[#1d3e66]

                        sm:text-[9px]
                      "
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        mt-[5px]
                        text-[6px]
                        font-[450]
                        leading-[1.55]
                        text-[#6e7b8d]

                        sm:text-[6.5px]
                      "
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================
            REVIEWER GUIDELINES + CODE OF CONDUCT
        ========================================================== */}
        <section className="bg-[#fbfcfd] py-[24px] sm:py-[30px]">
          <div
            className="
              mx-auto
              grid
              w-[min(1120px,calc(100%-32px))]
              grid-cols-1
              gap-[12px]

              sm:w-[min(1120px,calc(100%-48px))]

              md:grid-cols-2
            "
          >
            {/* Guidelines */}
            <motion.article
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                flex
                flex-col
                items-start
                gap-4
                rounded-[7px]
                border
                border-[#e7ebef]
                bg-white
                p-[17px]
                shadow-[0_4px_14px_rgba(14,45,75,0.035)]

                min-[430px]:flex-row
              "
            >
              <div
                className="
                  flex
                  h-[48px]
                  w-[48px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#447D36]
                  text-white
                "
              >
                <BookOpen
                  size={25}
                  strokeWidth={1.5}
                />
              </div>

              <div className="flex-1">
                <h3
                  className="
                    text-[9px]
                    font-[800]
                    text-[#4A7E36]

                    sm:text-[10px]
                  "
                >
                  REVIEWER GUIDELINES
                </h3>

                <p
                  className="
                    mt-[5px]
                    max-w-[390px]
                    text-[6.5px]
                    leading-[1.6]
                    text-[#667487]
                  "
                >
                  Find detailed guidelines on how to conduct a thorough, fair,
                  and constructive peer review.
                </p>

                <motion.div
                  whileHover={{ x: 2 }}
                  className="mt-[11px]"
                >
                  <Link
                    to="/reviewer"
                    className="
                      group
                      inline-flex
                      h-[28px]
                      items-center
                      gap-[7px]
                      rounded-[3px]
                      border
                      border-[#58944A]
                      px-[10px]
                      text-[6.5px]
                      font-[700]
                      text-[#497D3B]
                      transition-colors
                      hover:bg-[#497D3B]
                      hover:text-white
                    "
                  >
                    View Guidelines

                    <ArrowRight
                      size={9}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.article>

            {/* Conduct */}
            <motion.article
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                flex
                flex-col
                items-start
                gap-4
                rounded-[7px]
                border
                border-[#e7ebef]
                bg-white
                p-[17px]
                shadow-[0_4px_14px_rgba(14,45,75,0.035)]

                min-[430px]:flex-row
              "
            >
              <div
                className="
                  flex
                  h-[48px]
                  w-[48px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#7044A3]
                  text-white
                "
              >
                <Scale
                  size={25}
                  strokeWidth={1.5}
                />
              </div>

              <div className="flex-1">
                <h3
                  className="
                    text-[9px]
                    font-[800]
                    text-[#6C429C]

                    sm:text-[10px]
                  "
                >
                  CODE OF CONDUCT
                </h3>

                <p
                  className="
                    mt-[5px]
                    max-w-[390px]
                    text-[6.5px]
                    leading-[1.6]
                    text-[#667487]
                  "
                >
                  We are committed to maintaining the highest ethical
                  standards in peer review.
                </p>

                <motion.div
                  whileHover={{ x: 2 }}
                  className="mt-[11px]"
                >
                  <Link
                    to="/reviewer"
                    className="
                      group
                      inline-flex
                      h-[28px]
                      items-center
                      gap-[7px]
                      rounded-[3px]
                      border
                      border-[#744AA2]
                      px-[10px]
                      text-[6.5px]
                      font-[700]
                      text-[#684197]
                      transition-colors
                      hover:bg-[#684197]
                      hover:text-white
                    "
                  >
                    Read Our Policies

                    <ArrowRight
                      size={9}
                      className="
                        transition-transform
                        group-hover:translate-x-1
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
        <section className="bg-white py-[25px] sm:py-[30px]">
          <div
            className="
              mx-auto
              w-[min(1120px,calc(100%-32px))]
              sm:w-[min(1120px,calc(100%-48px))]
            "
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                text-center
                text-[13px]
                font-[800]
                text-[#173768]

                sm:text-[15px]
              "
            >
              OUR TOP REVIEWERS
            </motion.h2>

            <div
              className="
                mt-[18px]
                grid
                grid-cols-1
                gap-[10px]

                md:grid-cols-3
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
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    relative
                    rounded-[6px]
                    border
                    border-[#e5ebef]
                    bg-white
                    p-[13px]
                    shadow-[0_3px_12px_rgba(16,44,75,0.035)]
                  "
                >
                  <Quote
                    size={18}
                    fill="#53934A"
                    strokeWidth={0}
                    className="
                      absolute
                      left-[12px]
                      top-[11px]
                      text-[#53934A]
                    "
                  />

                  <p
                    className="
                      min-h-[55px]
                      pl-[24px]
                      text-[6.3px]
                      font-[500]
                      italic
                      leading-[1.6]
                      text-[#485c73]
                    "
                  >
                    “{testimonial.quote}”
                  </p>

                  <div
                    className="
                      mt-[10px]
                      flex
                      items-center
                      gap-[8px]
                      border-t
                      border-[#edf1f4]
                      pt-[10px]
                    "
                  >
                    <div
                      className="
                        flex
                        h-[31px]
                        w-[31px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#e9eef5]
                        text-[7px]
                        font-[800]
                        text-[#2D527D]
                      "
                    >
                      {testimonial.initials}
                    </div>

                    <div>
                      <p
                        className="
                          text-[6.8px]
                          font-[750]
                          text-[#253f61]
                        "
                      >
                        {testimonial.author}
                      </p>

                      <p
                        className="
                          mt-[2px]
                          text-[5.5px]
                          text-[#7b8797]
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
            CTA SECTION
        ========================================================== */}
        <section
          className="
            relative
            isolate
            overflow-hidden
            bg-[#06264a]
            bg-cover
            bg-center
            bg-no-repeat
            text-white
          "
          style={{
            backgroundImage: `url(${bgcta})`,
          }}
        >
          <div
            className="
              absolute
              inset-0
              -z-10
              bg-[#062448]/20
            "
          />

          <div
            className="
              mx-auto
              flex
              min-h-[115px]
              w-[min(1120px,calc(100%-32px))]
              flex-col
              items-start
              justify-center
              gap-[17px]
              py-[20px]

              sm:w-[min(1120px,calc(100%-48px))]

              md:flex-row
              md:items-center
              md:justify-between
              md:gap-7
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
              <h2
                className="
                  text-[13px]
                  font-[700]
                  leading-[1.4]
                  text-white

                  sm:text-[14px]
                "
              >
                Join our global network of experts
                <br className="hidden sm:block" />
                and make a difference in research.
              </h2>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="max-[360px]:w-full"
            >
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  h-[36px]
                  min-w-[142px]
                  items-center
                  justify-center
                  gap-[10px]
                  rounded-[4px]
                  bg-[#4E8D35]
                  px-[15px]
                  text-[7px]
                  font-[700]
                  text-white
                  shadow-[0_4px_10px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-300
                  hover:bg-[#63A444]
                  hover:shadow-[0_7px_16px_rgba(0,0,0,0.18)]

                  max-[360px]:w-full
                "
              >
                Join as Reviewer

                <ArrowRight
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>
        </section>


        {/* =========================================================
            INDEXING SECTION
        ========================================================== */}
        <section
          className="
            border-b
            border-[#edf1f4]
            bg-white
            py-[17px]

            sm:py-[21px]
          "
        >
          <div
            className="
              mx-auto
              w-[min(1120px,calc(100%-32px))]
              sm:w-[min(1120px,calc(100%-48px))]
            "
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="
                text-center
                text-[7px]
                font-[800]
                tracking-[0.02em]
                text-[#244873]

                sm:text-[8px]
              "
            >
              INDEXED IN LEADING DATABASES
            </motion.h2>

            <div
              className="
                mt-[15px]
                grid
                grid-cols-2
                items-center
                justify-items-center
                gap-x-5
                gap-y-6

                min-[480px]:grid-cols-3

                sm:grid-cols-4

                lg:grid-cols-7
                lg:gap-y-0
              "
            >
              <motion.img
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                src={scopusLogo}
                alt="Scopus"
                className="
                  max-h-[30px]
                  max-w-[88px]
                  object-contain
                "
              />

              <motion.img
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                src={clarivateLogo}
                alt="Clarivate Web of Science"
                className="
                  max-h-[33px]
                  max-w-[105px]
                  object-contain
                "
              />

              <motion.img
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                src={doajLogo}
                alt="DOAJ"
                className="
                  max-h-[31px]
                  max-w-[102px]
                  object-contain
                "
              />

              <motion.img
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                src={casLogo}
                alt="CAS"
                className="
                  max-h-[35px]
                  max-w-[82px]
                  object-contain
                "
              />

              <motion.img
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                src={dimensionsLogo}
                alt="Dimensions"
                className="
                  max-h-[30px]
                  max-w-[100px]
                  object-contain
                "
              />

              <motion.img
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                src={crossrefLogo}
                alt="Crossref"
                className="
                  max-h-[30px]
                  max-w-[95px]
                  object-contain
                "
              />

              <motion.img
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                src={googleScholarLogo}
                alt="Google Scholar"
                className="
                  col-span-2
                  max-h-[29px]
                  max-w-[88px]
                  object-contain

                  min-[480px]:col-span-1
                "
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}