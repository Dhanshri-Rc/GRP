import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
  FileText,
  Globe2,
  Database,
  Landmark,
  Bot,
  Cpu,
  Atom,
  Microchip,
  ScanLine,
  Watch,
  Stethoscope,
  Dna,
  BrainCircuit,
  BadgeCheck,
  Globe,
  LockKeyhole,
  Scale,
  UserRoundCheck,
  Target,
  Newspaper,
  Mail,
  Send,
  CircuitBoard,
  Microscope,
  Glasses,
  Wifi,
  Brain,
  Pill,
  UsersRound,
  BookOpenIcon,
  Award,
  LockKeyholeOpen,
  Goal,
   RadioTower,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bghome from "../assets/img/bghome.png";
import h1 from "../assets/img/Home1.png";
import h2 from "../assets/img/Home2.png";
import h3 from "../assets/img/Home3.png";
import bgcta from "../assets/img/cta.png";
import scopusLogo from "../assets/img/scopus.png";
import clarivateLogo from "../assets/img/clarivate.png";
import doajLogo from "../assets/img/doaj.png";
import casLogo from "../assets/img/cas.png";
import dimensionsLogo from "../assets/img/dimensions.png";
import crossrefLogo from "../assets/img/crossref.png";
import googleScholarLogo from "../assets/img/google-scholar.png";

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white pt-[75px]">

 {/* ==================== HERO SECTION ==================== */}
<section
  id="home"
  className="
    relative
    isolate
    flex
    min-h-[500px]
    overflow-hidden
    bg-[#f8fbfd]
    bg-cover
    bg-no-repeat

    bg-[position:64%_center]

    min-[360px]:min-h-[560px]
    min-[390px]:bg-[position:66%_center]
    min-[430px]:bg-[position:68%_center]

    sm:min-h-[560px]
    sm:bg-[position:70%_center]

    md:min-h-[500px]
    md:bg-[position:66%_center]

    lg:min-h-[510px]
    lg:bg-center

    xl:min-h-[510px]
  "
  style={{
    backgroundImage: `url(${bghome})`,
  }}
>


  {/* =====================================================
      MAIN CONTAINER
  ====================================================== */}
  <div
    className="
      mx-auto
      flex
      min-h-[480px]
      w-[min(1120px,calc(100%-32px))]
      items-center

      py-[10px]

      sm:min-h-[560px]
      sm:w-[min(1120px,calc(100%-48px))]
      sm:py-[52px]

      md:min-h-[500px]
      md:py-[42px]

      lg:min-h-[498px]
      lg:py-0
    "
  >
    {/* ===================================================
        LEFT CONTENT
    ==================================================== */}
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-10
        w-full
        max-w-[465px]

        sm:max-w-[480px]
        md:max-w-[470px]
        lg:max-w-[490px]
      "
    >
      {/* ==================== HEADING ==================== */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.65,
          delay: 0.08,
          ease: "easeOut",
        }}
        className="
          font-['Inter',sans-serif]
          text-[30px]
          font-[700]
          leading-[1.13]
          tracking-[-0.035em]
          text-[#08234b]

          min-[360px]:text-[31px]
          min-[390px]:text-[32px]
          min-[430px]:text-[34px]

          sm:text-[38px]
          md:text-[37px]
          lg:text-[39px]
          xl:text-[44px]
        "
      >
        <span className="block">
          Advancing Knowledge.
        </span>

        <span className="mt-[1px] block">
          Empowering Innovation.
        </span>

        <span className="mt-[1px] block text-[#11933f]">
          Improving Lives.
        </span>
      </motion.h1>

      {/* ==================== DESCRIPTION ==================== */}
      <motion.p
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
          delay: 0.18,
        }}
        className="
          mt-[20px]
          max-w-[410px]
          font-['Inter',sans-serif]
          text-[12px]
          font-[500]
          leading-[1.85]
          text-[#334a68]

          sm:text-[13px]

          lg:mt-[19px]
          lg:text-[14px]
        "
      >
        Global Reviews Press publishes authoritative peer-reviewed
        journals and magazines across{" "}
        <span className="font-[700] text-[#075eab]">
          Engineering
        </span>
        ,{" "}
        <span className="font-[700] text-[#108b9a]">
          Medicine
        </span>{" "}
        and{" "}
        <span className="font-[700] text-[#2b9348]">
          Sustainability
        </span>{" "}
        to address global challenges and build a better tomorrow.
      </motion.p>

      {/* ==================== BUTTONS ==================== */}
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
          delay: 0.28,
        }}
        className="
          mt-[25px]
          flex
          flex-wrap
          items-center
          gap-[12px]

          min-[390px]:gap-[18px]
        "
      >
        {/* ==================== EXPLORE BUTTON ==================== */}
        <motion.div
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="max-[345px]:w-full"
        >
          <Link
            to="/journals"
            className="
              group
              inline-flex
              h-[46px]
              items-center
              justify-center
              gap-[13px]
              rounded-[5px]
              border
              border-[#082849]
              bg-[#06264b]
              px-[20px]

              font-['Inter',sans-serif]
              text-[13px]
              font-[600]
              text-white

              shadow-[0_4px_10px_rgba(5,37,74,0.16)]

              transition-all
              duration-300

              hover:border-[#0b4675]
              hover:bg-[#0b4675]
              hover:shadow-[0_8px_22px_rgba(5,37,74,0.24)]

              max-[345px]:w-full
            "
          >
            <span className="whitespace-nowrap">
              Explore Our Journals
            </span>

            <ArrowRight
              size={17}
              strokeWidth={2.2}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-[4px]
              "
            />
          </Link>
        </motion.div>

        {/* ==================== ABOUT BUTTON ==================== */}
        <motion.div
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="max-[345px]:w-full"
        >
          <Link
            to="/about"
            className="
              group
              inline-flex
              h-[46px]
              items-center
              justify-center
              gap-[13px]
              rounded-[5px]
              border
              border-[#aebdc8]
              bg-white/85
              px-[19px]

              font-['Inter',sans-serif]
              text-[13px]
              font-[600]
              text-[#163556]

              shadow-[0_2px_6px_rgba(20,55,83,0.03)]

              backdrop-blur-[2px]

              transition-all
              duration-300

              hover:border-[#153d63]
              hover:bg-white
              hover:text-[#0a3158]
              hover:shadow-[0_7px_18px_rgba(20,55,83,0.12)]

              max-[345px]:w-full
            "
          >
            <span className="whitespace-nowrap">
              About Us
            </span>

            <ArrowRight
              size={17}
              strokeWidth={2.2}
              className="
                shrink-0
                text-[#183b62]
                transition-transform
                duration-300
                group-hover:translate-x-[4px]
              "
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>

    
      {/* ==================== STATS SECTION ==================== */}<section className="relative border-y border-[#e8edf2] bg-white">
  <div
    className="
      mx-auto
      w-[min(1120px,calc(100%-32px))]
      sm:w-[min(1120px,calc(100%-48px))]
    "
  >
    <div
      className="
        grid
        grid-cols-2
        gap-x-4
        gap-y-7
        py-7

        sm:grid-cols-3
        sm:gap-x-5
        sm:py-8

        lg:grid-cols-6
        lg:gap-x-0
        lg:py-[23px]
      "
    >

      {/* ==================== 20+ JOURNALS ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        whileHover={{ y: -4 }}
        className="
          group
          flex
          min-h-[62px]
          items-center
          justify-start
          gap-[11px]

          sm:justify-center

          lg:justify-start
          lg:px-[9px]

          xl:px-[10px]
        "
      >
        {/* Icon */}
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: -3,
          }}
          transition={{ duration: 0.25 }}
          className="
            flex
            h-[47px]
            w-[47px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#06438E]
            shadow-[0_4px_10px_rgba(6,67,142,0.16)]

            sm:h-[49px]
            sm:w-[49px]

            lg:h-[47px]
            lg:w-[47px]
          "
        >
          <BookOpenIcon
            size={24}
            strokeWidth={1.7}
            className="text-white"
          />
        </motion.div>

        {/* Content */}
        <div className="min-w-0">
          <p
            className="
              font-['Inter',sans-serif]
              text-[18px]
              font-[700]
              leading-none
              tracking-[-0.02em]
              text-[#073B77]
            "
          >
            20+
          </p>

          <p
            className="
              mt-[7px]
              max-w-[82px]
              font-['Inter',sans-serif]
              text-[11.5px]
              font-[600]
              leading-[1.45]
              text-[#243B5A]
            "
          >
            Journals &
            <br />
            Magazines
          </p>
        </div>
      </motion.div>

      {/* ==================== 5000+ AUTHORS ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.45,
          delay: 0.06,
          ease: "easeOut",
        }}
        whileHover={{ y: -4 }}
        className="
          group
          flex
          min-h-[62px]
          items-center
          justify-start
          gap-[11px]

          sm:justify-center

          lg:justify-start
          lg:px-[9px]

          xl:px-[10px]
        "
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          transition={{ duration: 0.25 }}
          className="
            flex
            h-[47px]
            w-[47px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#0896A6]
            shadow-[0_4px_10px_rgba(8,150,166,0.16)]

            sm:h-[49px]
            sm:w-[49px]

            lg:h-[47px]
            lg:w-[47px]
          "
        >
          <UsersRound
            size={25}
            strokeWidth={1.65}
            className="text-white"
          />
        </motion.div>

        <div className="min-w-0">
          <p
            className="
              font-['Inter',sans-serif]
              text-[18px]
              font-[800]
              leading-none
              tracking-[-0.02em]
              text-[#05899A]
            "
          >
            5000+
          </p>

          <p
            className="
              mt-[7px]
              max-w-[88px]
              font-['Inter',sans-serif]
              text-[11.5px]
              font-[600]
              leading-[1.45]
              text-[#243B5A]
            "
          >
            Global Authors
            <br />
            & Editors
          </p>
        </div>
      </motion.div>

      {/* ==================== 15,000+ ARTICLES ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.45,
          delay: 0.12,
          ease: "easeOut",
        }}
        whileHover={{ y: -4 }}
        className="
          group
          flex
          min-h-[62px]
          items-center
          justify-start
          gap-[11px]

          sm:justify-center

          lg:justify-start
          lg:px-[9px]

          xl:px-[10px]
        "
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: -3,
          }}
          transition={{ duration: 0.25 }}
          className="
            flex
            h-[47px]
            w-[47px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#4B9C38]
            shadow-[0_4px_10px_rgba(75,156,56,0.16)]

            sm:h-[49px]
            sm:w-[49px]

            lg:h-[47px]
            lg:w-[47px]
          "
        >
          <FileText
            size={23}
            strokeWidth={1.7}
            className="text-white"
          />
        </motion.div>

        <div className="min-w-0">
          <p
            className="
              font-['Inter',sans-serif]
              text-[18px]
              font-[800]
              leading-none
              tracking-[-0.02em]
              text-[#479638]
            "
          >
            15,000+
          </p>

          <p
            className="
              mt-[7px]
              max-w-[94px]
              font-['Inter',sans-serif]
              text-[11.5px]
              font-[600]
              leading-[1.45]
              text-[#243B5A]
            "
          >
            Review Articles
            <br />
            Published
          </p>
        </div>
      </motion.div>

      {/* ==================== 120+ COUNTRIES ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.45,
          delay: 0.18,
          ease: "easeOut",
        }}
        whileHover={{ y: -4 }}
        className="
          group
          flex
          min-h-[62px]
          items-center
          justify-start
          gap-[11px]

          sm:justify-center

          lg:justify-start
          lg:px-[9px]

          xl:px-[10px]
        "
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          transition={{ duration: 0.25 }}
          className="
            flex
            h-[47px]
            w-[47px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#7545A8]
            shadow-[0_4px_10px_rgba(117,69,168,0.16)]

            sm:h-[49px]
            sm:w-[49px]

            lg:h-[47px]
            lg:w-[47px]
          "
        >
          <Globe2
            size={24}
            strokeWidth={1.7}
            className="text-white"
          />
        </motion.div>

        <div className="min-w-0">
          <p
            className="
              font-['Inter',sans-serif]
              text-[18px]
              font-[800]
              leading-none
              tracking-[-0.02em]
              text-[#7040A2]
            "
          >
            120+
          </p>

          <p
            className="
              mt-[7px]
              max-w-[78px]
              font-['Inter',sans-serif]
              text-[11.5px]
              font-[600]
              leading-[1.45]
              text-[#243B5A]
            "
          >
            Countries
            <br />
            Reached
          </p>
        </div>
      </motion.div>

      {/* ==================== 50+ INDEXING ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.45,
          delay: 0.24,
          ease: "easeOut",
        }}
        whileHover={{ y: -4 }}
        className="
          group
          flex
          min-h-[62px]
          items-center
          justify-start
          gap-[11px]

          sm:justify-center

          lg:justify-start
          lg:px-[9px]

          xl:px-[10px]
        "
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: -3,
          }}
          transition={{ duration: 0.25 }}
          className="
            flex
            h-[47px]
            w-[47px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#DF780F]
            shadow-[0_4px_10px_rgba(223,120,15,0.16)]

            sm:h-[49px]
            sm:w-[49px]

            lg:h-[47px]
            lg:w-[47px]
          "
        >
          <Database
            size={23}
            strokeWidth={1.7}
            className="text-white"
          />
        </motion.div>

        <div className="min-w-0">
          <p
            className="
              font-['Inter',sans-serif]
              text-[18px]
              font-[800]
              leading-none
              tracking-[-0.02em]
              text-[#D6740B]
            "
          >
            50+
          </p>

          <p
            className="
              mt-[7px]
              max-w-[100px]
              font-['Inter',sans-serif]
              text-[11.5px]
              font-[600]
              leading-[1.45]
              text-[#243B5A]
            "
          >
            Indexing &
            <br />
            Abstracting DBs
          </p>
        </div>
      </motion.div>

      {/* ==================== 100+ PARTNERS ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.45,
          delay: 0.3,
          ease: "easeOut",
        }}
        whileHover={{ y: -4 }}
        className="
          group
          flex
          min-h-[62px]
          items-center
          justify-start
          gap-[11px]

          sm:justify-center

          lg:justify-start
          lg:px-[9px]

          xl:px-[10px]
        "
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          transition={{ duration: 0.25 }}
          className="
            flex
            h-[47px]
            w-[47px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#062D60]
            shadow-[0_4px_10px_rgba(6,45,96,0.16)]

            sm:h-[49px]
            sm:w-[49px]

            lg:h-[47px]
            lg:w-[47px]
          "
        >
          <Landmark
            size={24}
            strokeWidth={1.65}
            className="text-white"
          />
        </motion.div>

        <div className="min-w-0">
          <p
            className="
              font-['Inter',sans-serif]
              text-[18px]
              font-[800]
              leading-none
              tracking-[-0.02em]
              text-[#092F5C]
            "
          >
            100+
          </p>

          <p
            className="
              mt-[7px]
              max-w-[86px]
              font-['Inter',sans-serif]
              text-[11.5px]
              font-[600]
              leading-[1.45]
              text-[#243B5A]
            "
          >
            Institutional
            <br />
            Partners
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>

  
     {/* ==================== CATEGORY CARDS SECTION ==================== */}<section className="bg-[#fbfcfd] py-[10px] sm:py-[14px] lg:py-[35px]">
  <div
    className="
      mx-auto
      w-[min(1120px,calc(100%-32px))]
      sm:w-[min(1120px,calc(100%-48px))]
    "
  >
    <div
      className="
        grid
        grid-cols-1
        gap-[8px]

        sm:grid-cols-2
        sm:gap-[10px]

        lg:grid-cols-3
        lg:gap-[7px]
      "
    >

      {/* =========================================================
          ENGINEERING
      ========================================================== */}
      <motion.article
        initial={{
          opacity: 0,
          y: 22,
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
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -5,
        }}
        className="
          group
          relative
          isolate
          min-h-[260px]
          overflow-hidden
          rounded-[6px]
          bg-[#05305e]
          shadow-[0_8px_22px_rgba(7,31,62,0.10)]

          sm:min-h-[275px]

          lg:min-h-[247px]

          xl:min-h-[250px]
        "
      >
        {/* Background Image */}
        <img
          src={h1}
          alt="Engineering"
          className="
            absolute
            inset-0
            -z-20
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-[800ms]
            ease-out
            group-hover:scale-[1.055]
          "
        />

       


        {/* Content */}
        <div
          className="
            relative
            flex
            min-h-[260px]
            flex-col
            justify-between
            px-[20px]
            py-[32px]
            text-white

            sm:min-h-[275px]
            sm:px-[22px]
            sm:py-[34px]

            lg:min-h-[247px]
            lg:px-[20px]
            lg:py-[30px]

            xl:min-h-[250px]
            xl:px-[21px]
            xl:py-[39px]
          "
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.08,
              }}
              className="
                font-['Inter',sans-serif]
                text-[17px]
                font-[700]
                leading-none
                tracking-[0.015em]
                text-white
                 mt-8
                sm:text-[17px]

                lg:text-[18px]

                xl:text-[19px]
              "
            >
              ENGINEERING
            </motion.h2>

            <p
              className="
                mt-[18px]
                max-w-[225px]
                font-['Inter',sans-serif]
                text-[12px]
                font-[500]
                leading-[1.72]
                text-white/90

                sm:max-w-[245px]
                sm:text-[12px]

                lg:mt-[17px]
                lg:max-w-[190px]
                lg:text-[12px]
                lg:leading-[1.7]

                xl:max-w-[210px]
                xl:text-[12px]
              "
            >
              Cutting-edge reviews in emerging technologies and intelligent
              systems shaping the future.
            </p>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            className="
              group/link
              flex
              w-fit
              items-center
              gap-[10px]
              font-['Inter',sans-serif]
              text-[11px]
              font-[600]
              text-white
              transition-all
              duration-300

              sm:text-[11px]

              lg:text-[11px]

              xl:text-[11.5px]
            "
          >
            <span className="relative">
              Explore Engineering Journals

              <span
                className="
                  absolute
                  -bottom-[3px]
                  left-0
                  h-px
                  w-0
                  bg-white/80
                  transition-all
                  duration-300
                  group-hover/link:w-full
                "
              />
            </span>

            <ArrowRight
              size={14}
              strokeWidth={1.8}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover/link:translate-x-[4px]
              "
            />
          </motion.button>
        </div>
      </motion.article>

      {/* =========================================================
          MEDICINE
      ========================================================== */}
      <motion.article
        initial={{
          opacity: 0,
          y: 22,
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
          duration: 0.55,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -5,
        }}
        className="
          group
          relative
          isolate
          min-h-[260px]
          overflow-hidden
          rounded-[6px]
          bg-[#006e7f]
          shadow-[0_8px_22px_rgba(7,31,62,0.10)]

          sm:min-h-[275px]

          lg:min-h-[247px]

          xl:min-h-[250px]
        "
      >
        <img
          src={h2}
          alt="Medicine"
          className="
            absolute
            inset-0
            -z-20
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-[800ms]
            ease-out
            group-hover:scale-[1.055]
          "
        />

   

        <div
          className="
            relative
            flex
            min-h-[260px]
            flex-col
            justify-between
            px-[20px]
            py-[32px]
            text-white

            sm:min-h-[275px]
            sm:px-[22px]
            sm:py-[34px]

            lg:min-h-[247px]
            lg:px-[20px]
            lg:py-[30px]

            xl:min-h-[250px]
            xl:px-[21px]
            xl:py-[39px]
          "
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.14,
              }}
              className="
                font-['Inter',sans-serif]
                text-[17px]
                font-[700]
                leading-none
                tracking-[0.015em]
                text-white
                 mt-8
                sm:text-[17px]

                lg:text-[18px]

                xl:text-[19px]
              "
            >
              MEDICINE
            </motion.h2>

            <p
              className="
                mt-[18px]
                max-w-[225px]
                font-['Inter',sans-serif]
                text-[12px]
                font-[500]
                leading-[1.72]
                text-white/95

                sm:max-w-[245px]
                sm:text-[12px]

                lg:mt-[17px]
                lg:max-w-[190px]
                lg:text-[12px]
                lg:leading-[1.7]

                xl:max-w-[210px]
                xl:text-[12px]
              "
            >
              Advancing healthcare through innovative research, diagnostics and
              digital health.
            </p>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            className="
              group/link
              flex
              w-fit
              items-center
              gap-[10px]
              font-['Inter',sans-serif]
              text-[11px]
              font-[600]
              text-white
              transition-all
              duration-300

              sm:text-[11px]

              lg:text-[11px]

              xl:text-[11.5px]
            "
          >
            <span className="relative">
              Explore Medicine Journals

              <span
                className="
                  absolute
                  -bottom-[3px]
                  left-0
                  h-px
                  w-0
                  bg-white/80
                  transition-all
                  duration-300
                  group-hover/link:w-full
                "
              />
            </span>

            <ArrowRight
              size={14}
              strokeWidth={1.8}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover/link:translate-x-[4px]
              "
            />
          </motion.button>
        </div>
      </motion.article>

      {/* =========================================================
          SUSTAINABILITY
      ========================================================== */}
      <motion.article
        initial={{
          opacity: 0,
          y: 22,
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
          duration: 0.55,
          delay: 0.16,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -5,
        }}
        className="
          group
          relative
          isolate
          min-h-[260px]
          overflow-hidden
          rounded-[6px]
          bg-[#34721b]
          shadow-[0_8px_22px_rgba(7,31,62,0.10)]

          sm:col-span-2
          sm:min-h-[275px]

          lg:col-span-1
          lg:min-h-[247px]

          xl:min-h-[250px]
        "
      >
        <img
          src={h3}
          alt="Sustainability"
          className="
            absolute
            inset-0
            -z-20
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-[800ms]
            ease-out
            group-hover:scale-[1.055]
          "
        />

   

        <div
          className="
            relative
            flex
            min-h-[260px]
            flex-col
            justify-between
            px-[20px]
            py-[32px]
            text-white

            sm:min-h-[275px]
            sm:px-[22px]
            sm:py-[34px]

            lg:min-h-[247px]
            lg:px-[20px]
            lg:py-[30px]

            xl:min-h-[250px]
            xl:px-[21px]
            xl:py-[39px]
          "
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.2,
              }}
               className="
                font-['Inter',sans-serif]
                text-[17px]
                font-[700]
                leading-none
                tracking-[0.015em]
                text-white
                 mt-8
                sm:text-[17px]

                lg:text-[18px]

                xl:text-[19px]
              "
            >
              SUSTAINABILITY
            </motion.h2>

            <p
              className="
                mt-[18px]
                max-w-[225px]
                font-['Inter',sans-serif]
                text-[12px]
                font-[500]
                leading-[1.72]
                text-white/95

                sm:max-w-[245px]
                sm:text-[12px]

                lg:mt-[17px]
                lg:max-w-[190px]
                lg:text-[12px]
                lg:leading-[1.7]

                xl:max-w-[210px]
                xl:text-[12px]
              "
            >
              Research solutions for a resilient planet aligned with the UN
              Sustainable Development Goals.
            </p>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            className="
              group/link
              flex
              w-fit
              items-center
              gap-[10px]
              font-['Inter',sans-serif]
              text-[11px]
              font-[600]
              text-white
              transition-all
              duration-300

              sm:text-[11px]

              lg:text-[11px]

              xl:text-[11.5px]
            "
          >
            <span className="relative">
              Explore Sustainability Journals

              <span
                className="
                  absolute
                  -bottom-[3px]
                  left-0
                  h-px
                  w-0
                  bg-white/80
                  transition-all
                  duration-300
                  group-hover/link:w-full
                "
              />
            </span>

            <ArrowRight
              size={14}
              strokeWidth={1.8}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover/link:translate-x-[4px]
              "
            />
          </motion.button>
        </div>
      </motion.article>

    </div>
  </div>
</section>

      
  {/* ==================== OUR JOURNALS & MAGAZINES ==================== */}<section className="bg-white py-[28px] sm:py-[34px] lg:py-[38px]">
  <div
    className="
      mx-auto
      w-[min(1120px,calc(100%-32px))]
      sm:w-[min(1120px,calc(100%-48px))]
    "
  >
    {/* ==================== SECTION HEADING ==================== */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      <h2
        className="
          font-['Inter',sans-serif]
          text-[15px]
          font-[800]
          leading-none
          tracking-[0.01em]
          text-[#123F7C]

          sm:text-[17px]
          lg:text-[18px]
        "
      >
        OUR JOURNALS & MAGAZINES
      </h2>

      <p
        className="
          mt-[9px]
          font-['Inter',sans-serif]
          text-[9.5px]
          font-[500]
          leading-[1.5]
          text-[#405472]

          sm:text-[10.5px]
          lg:text-[11px]
        "
      >
        High-quality peer-reviewed journals and magazines across
        multidisciplinary domains.
      </p>
    </motion.div>

    {/* ==================== MAIN JOURNAL PANEL ==================== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mt-[17px]
        overflow-hidden
        rounded-[6px]
        border
        border-[#e5ebf0]
        bg-white
        shadow-[0_4px_18px_rgba(18,50,81,0.045)]
      "
    >
      {/* =========================================================
          JOURNAL GRID
      ========================================================== */}
      <div
        className="
          grid
          grid-cols-1
          gap-px
          bg-[#e6edf2]

          min-[380px]:grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-5
        "
      >
        {/* =====================================================
            1. ARTIFICIAL INTELLIGENCE
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F9FCFF",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <BrainCircuit
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#276CB5]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:text-[#164F93]
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Artificial
            <br />
            Intelligence
          </p>
        </motion.div>

        {/* =====================================================
            2. EDGE INTELLIGENCE & COMPUTING
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F7FEFD",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Cpu
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#29A3A5]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:text-[#16888C]
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Edge Intelligence
            <br />
            & Computing
          </p>
        </motion.div>

        {/* =====================================================
            3. QUANTUM TECHNOLOGIES
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F8FCFF",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Atom
            size={35}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#3678BA]
              transition-all
              duration-300
              group-hover:rotate-[8deg]
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Quantum
            <br />
            Technologies
          </p>
        </motion.div>

        {/* =====================================================
            4. ROBOTICS & AUTOMATION
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F9FCFF",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Bot
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#387DB8]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:-rotate-[3deg]
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Robotics &
            <br />
            Automation
          </p>
        </motion.div>

        {/* =====================================================
            5. EXTENDED REALITY
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F7FEFC",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Glasses
            size={35}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#26A08D]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Extended Reality &
            <br />
            Spatial Computing
          </p>
        </motion.div>

        {/* =====================================================
            6. COMMUNICATION TECHNOLOGIES
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F8FCFF",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Wifi
            size={34}
            strokeWidth={1.55}
            className="
              shrink-0
              text-[#367BC0]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Communication
            <br />
            Technologies
          </p>
        </motion.div>

        {/* =====================================================
            7. SEMICONDUCTOR TECHNOLOGIES
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F7FEFD",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Microchip
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#27A4A3]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Semiconductor
            <br />
            Technologies
          </p>
        </motion.div>

        {/* =====================================================
            8. MEDICAL IMAGING
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F8FCFF",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <ScanLine
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#3A8EB8]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Medical
            <br />
            Imaging
          </p>
        </motion.div>

        {/* =====================================================
            9. DIGITAL HEALTH & WEARABLES
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F7FEFA",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Watch
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#31AA78]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Digital Health &
            <br />
            Wearables
          </p>
        </motion.div>

        {/* =====================================================
            10. SURGICAL ROBOTICS
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F8FEFC",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Stethoscope
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#289A91]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:rotate-[3deg]
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Surgical Robotics &
            <br />
            Interventions
          </p>
        </motion.div>

        {/* =====================================================
            11. DIAGNOSTICS & PATHOLOGY
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F9FCFF",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Microscope
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#377EB4]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Diagnostics &
            <br />
            Pathology
          </p>
        </motion.div>

        {/* =====================================================
            12. BIOENGINEERING
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F7FEFD",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <CircuitBoard
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#269FA1]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Bioengineering &
            <br />
            Organ-on-Chip
          </p>
        </motion.div>

        {/* =====================================================
            13. NEUROTECHNOLOGY
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F8FCFF",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Brain
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#408AB8]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Neurotechnology &
            <br />
            Bioelectronics
          </p>
        </motion.div>

        {/* =====================================================
            14. GENOMICS & GENE EDITING
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F8FEFA",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          <Dna
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#52A95D]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            Genomics &
            <br />
            Gene Editing
          </p>
        </motion.div>

        {/* =====================================================
            15. AI IN DRUG DISCOVERY
        ====================================================== */}
        <motion.div
          whileHover={{
            y: -2,
            backgroundColor: "#F7FEFD",
          }}
          transition={{ duration: 0.22 }}
          className="
            group
            flex
            min-h-[84px]
            items-center
            gap-[17px]
            bg-white
            px-[18px]
            py-[15px]

            sm:min-h-[88px]
            lg:min-h-[89px]
            lg:px-[21px]
          "
        >
          {/* double capsule style icon */}
          <div
            className="
              relative
              h-[35px]
              w-[39px]
              shrink-0
              text-[#259D9C]
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            <Pill
              size={26}
              strokeWidth={1.45}
              className="absolute left-0 top-[7px] rotate-[-35deg]"
            />

            <Pill
              size={25}
              strokeWidth={1.45}
              className="absolute right-0 top-0 rotate-[35deg]"
            />
          </div>

          <p
            className="
              font-['Inter',sans-serif]
              text-[10px]
              font-[600]
              leading-[1.55]
              text-[#17395F]

              lg:text-[10.5px]
            "
          >
            AI in Drug Discovery &
            <br />
            Development
          </p>
        </motion.div>
      </div>

      {/* =========================================================
          VIEW ALL JOURNALS BUTTON
      ========================================================== */}
      <div
        className="
          flex
          min-h-[47px]
          items-center
          justify-center
          border-t
          border-[#e5ebf0]
          bg-white
          px-4
          py-[10px]
        "
      >
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/journals"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-[13px]

              font-['Inter',sans-serif]
              text-[9.5px]
              font-[700]
              text-[#173A65]

              transition-colors
              duration-300

              hover:text-[#156799]

              sm:text-[12.5px]
            "
          >
         <BookOpen
  size={15}
  strokeWidth={1.7}
/>

            <span className="relative">
              View All Journals & Magazines

              <span
                className="
                  absolute
                  -bottom-[3px]
                  left-0
                  h-px
                  w-0
                  bg-[#156799]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </span>

            <ArrowRight
              size={16}
              strokeWidth={1.7}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-[5px]
              "
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>

     {/* ==================== WHY PUBLISH SECTION ==================== */}
<section className="bg-white py-[22px] sm:py-[26px] lg:py-[10px]">
  <div
    className="
      mx-auto
      w-[min(1120px,calc(100%-32px))]
      sm:w-[min(1120px,calc(100%-48px))]
    "
  >
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        overflow-hidden
        rounded-[7px]
        border
        border-[#e7edf2]
        bg-white
        shadow-[0_3px_16px_rgba(18,49,80,0.035)]
      "
    >
      {/* ==================== TITLE ==================== */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay: 0.08,
        }}
        className="
          px-4
          pb-[13px]
          pt-[15px]
          text-center
          font-['Inter',sans-serif]
          text-[15px]
          font-[800]
          leading-[1.2]
          tracking-[0.01em]
          text-[#123f7c]

          sm:text-[15px]
          lg:pb-[15px]
          lg:pt-[17px]
          lg:text-[16px]
        "
      >
        WHY PUBLISH WITH GLOBAL REVIEWS PRESS?
      </motion.h2>

      {/* ==================== BENEFITS ==================== */}
      <div
        className="
          grid
          grid-cols-1
          border-t
          border-[#f0f3f6]

          min-[380px]:grid-cols-2
          md:grid-cols-3

          lg:grid-cols-6
          lg:border-t-0
          lg:px-[18px]
          lg:pb-[21px]
        "
      >
        {/* =====================================================
            1. RIGOROUS PEER REVIEW
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.05,
          }}
          whileHover={{ y: -4 }}
          className="
            group
            relative
            flex
            min-h-[82px]
            items-center
            justify-center
            gap-[13px]
            border-b
            border-[#edf1f4]
            px-[15px]
            py-[14px]

            transition-colors
            duration-300

            hover:bg-[#fafcff]

            min-[380px]:border-r

            md:min-h-[84px]

            lg:min-h-[67px]
            lg:border-b-0
            lg:border-r
            lg:border-[#e4e9ee]
            lg:px-[13px]
            lg:py-[7px]
          "
        >
          <Award
            size={35}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#3d70be]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:-rotate-[4deg]

              lg:h-[34px]
              lg:w-[34px]
            "
          />

          <p
            className="
              min-w-0
              font-['Inter',sans-serif]
              text-[11px]
              font-[650]
              leading-[1.55]
              text-[#18375f]

              sm:text-[11.5px]
              lg:text-[11.5px]
              xl:text-[12px]
            "
          >
            Rigorous
            <br />
            Peer Review
          </p>
        </motion.div>

        {/* =====================================================
            2. GLOBAL VISIBILITY
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.1,
          }}
          whileHover={{ y: -4 }}
          className="
            group
            relative
            flex
            min-h-[82px]
            items-center
            justify-center
            gap-[13px]
            border-b
            border-[#edf1f4]
            px-[15px]
            py-[14px]

            transition-colors
            duration-300

            hover:bg-[#f8fefe]

            md:min-h-[84px]

            lg:min-h-[67px]
            lg:border-b-0
            lg:border-r
            lg:border-[#e4e9ee]
            lg:px-[13px]
            lg:py-[7px]
          "
        >
          <Globe2
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#2397a1]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:rotate-[5deg]
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
               text-[11px]
              font-[650]
              leading-[1.55]
              text-[#18375f]

              sm:text-[11.5px]
              lg:text-[11.5px]
              xl:text-[12px]
            "
          >
            Global
            <br />
            Visibility
          </p>
        </motion.div>

        {/* =====================================================
            3. OPEN ACCESS OPTIONS
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.15,
          }}
          whileHover={{ y: -4 }}
          className="
            group
            relative
            flex
            min-h-[82px]
            items-center
            justify-center
            gap-[13px]
            border-b
            border-[#edf1f4]
            px-[15px]
            py-[14px]

            transition-colors
            duration-300

            hover:bg-[#f9fff9]

            min-[380px]:border-r

            md:min-h-[84px]
            md:border-r-0

            lg:min-h-[67px]
            lg:border-b-0
            lg:border-r
            lg:border-[#e4e9ee]
            lg:px-[13px]
            lg:py-[7px]
          "
        >
          <LockKeyholeOpen
            size={35}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#4eaa68]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[11px]
              font-[650]
              leading-[1.55]
              text-[#18375f]

              sm:text-[11.5px]
              lg:text-[11.5px]
              xl:text-[12px]
            "
          >
            Open Access
            <br />
            Options
          </p>
        </motion.div>

        {/* =====================================================
            4. ETHICAL PUBLISHING
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          whileHover={{ y: -4 }}
          className="
            group
            relative
            flex
            min-h-[82px]
            items-center
            justify-center
            gap-[13px]
            border-b
            border-[#edf1f4]
            px-[15px]
            py-[14px]

            transition-colors
            duration-300

            hover:bg-[#fffdfa]

            md:min-h-[84px]
            md:border-r

            lg:min-h-[67px]
            lg:border-b-0
            lg:border-r
            lg:border-[#e4e9ee]
            lg:px-[13px]
            lg:py-[7px]
          "
        >
          <Scale
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#e49a2f]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:-rotate-[3deg]
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[11px]
              font-[650]
              leading-[1.55]
              text-[#18375f]

              sm:text-[11.5px]
              lg:text-[11.5px]
              xl:text-[12px]
            "
          >
            Ethical
            <br />
            Publishing
          </p>
        </motion.div>

        {/* =====================================================
            5. AUTHOR SUPPORT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.25,
          }}
          whileHover={{ y: -4 }}
          className="
            group
            relative
            flex
            min-h-[82px]
            items-center
            justify-center
            gap-[13px]
            border-b
            border-[#edf1f4]
            px-[15px]
            py-[14px]

            transition-colors
            duration-300

            hover:bg-[#fafcff]

            min-[380px]:border-r

            md:min-h-[84px]
            md:border-b-0

            lg:min-h-[67px]
            lg:border-r
            lg:border-[#e4e9ee]
            lg:px-[13px]
            lg:py-[7px]
          "
        >
          <UsersRound
            size={35}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#5276bd]
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[11px]
              font-[650]
              leading-[1.55]
              text-[#18375f]

              sm:text-[11.5px]
              lg:text-[11.5px]
              xl:text-[12px]
            "
          >
            Author
            <br />
            Support
          </p>
        </motion.div>

        {/* =====================================================
            6. IMPACTFUL REACH
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.3,
          }}
          whileHover={{ y: -4 }}
          className="
            group
            relative
            flex
            min-h-[82px]
            items-center
            justify-center
            gap-[13px]
            border-b
            border-[#edf1f4]
            px-[15px]
            py-[14px]

            transition-colors
            duration-300

            hover:bg-[#f9fffaf5]

            md:min-h-[84px]
            md:border-b-0

            lg:min-h-[67px]
            lg:border-b-0
            lg:px-[13px]
            lg:py-[7px]
          "
        >
          <Goal
            size={34}
            strokeWidth={1.45}
            className="
              shrink-0
              text-[#47a77a]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:rotate-[4deg]
            "
          />

          <p
            className="
              font-['Inter',sans-serif]
              text-[11px]
              font-[650]
              leading-[1.55]
              text-[#18375f]

              sm:text-[11.5px]
              lg:text-[11.5px]
              xl:text-[12px]
            "
          >
            Impactful
            <br />
            Reach
          </p>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>

      {/* =========================================================
    NEWS / EDITORIAL / NEWSLETTER SECTION
========================================================== */}
<section className="bg-white py-[16px] sm:py-[20px] lg:py-[24px]">
  <div
    className="
      mx-auto
      grid
      w-[min(1120px,calc(100%-32px))]
      grid-cols-1
      gap-[14px]

      sm:w-[min(1120px,calc(100%-48px))]

      md:grid-cols-2

      lg:grid-cols-[1.06fr_0.95fr_0.98fr]
      lg:gap-[16px]
    "
  >
    {/* =====================================================
        LATEST NEWS & EVENTS
    ====================================================== */}
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className="
        group
        min-h-[285px]
        rounded-[7px]
        border
        border-[#e4eaf0]
        bg-white
        px-[17px]
        py-[16px]
        shadow-[0_4px_18px_rgba(20,48,78,0.035)]

        sm:px-[18px]

        lg:min-h-[268px]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h3
          className="
            font-['Inter',sans-serif]
            text-[12.5px]
            font-[800]
            tracking-[0.01em]
            text-[#173E72]

            sm:text-[13px]
          "
        >
          LATEST NEWS & EVENTS
        </h3>

        <button
          type="button"
          className="
            group/view
            inline-flex
            shrink-0
            items-center
            gap-[3px]
            border-b
            border-[#8290a1]
            pb-[1px]
            font-['Inter',sans-serif]
            text-[10px]
            font-[600]
            text-[#576a83]
            transition-all
            duration-300
            hover:border-[#184e7d]
            hover:text-[#184e7d]
          "
        >
          View All

          <ArrowRight
            size={8}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover/view:translate-x-[2px]"
          />
        </button>
      </div>

      {/* ==================== NEWS ITEM 1 ==================== */}
      <motion.article
        whileHover={{ x: 3 }}
        transition={{ duration: 0.25 }}
        className="group/news mt-[16px] flex items-start gap-[11px]"
      >
        <div
          className="
            relative
            flex
            h-[58px]
            w-[67px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-[4px]
            bg-gradient-to-br
            from-[#06224b]
            via-[#07547d]
            to-[#11a2b4]
            shadow-[0_3px_8px_rgba(7,42,77,0.14)]
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(47,195,228,0.5),transparent_35%)]" />

          <Bot
            size={30}
            strokeWidth={1.2}
            className="relative text-white/90"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span
            className="
              block
              font-['Inter',sans-serif]
              text-[11px]
              font-[800]
              uppercase
              leading-none
              text-[#24669f]
            "
          >
            NEWS
          </span>

          <h4
            className="
              mt-[5px]
              font-['Inter',sans-serif]
              text-[10.5px]
              font-[650]
              leading-[1.48]
              text-[#203a59]
              transition-colors
              duration-300
              group-hover/news:text-[#0a6394]

              sm:text-[11px]
            "
          >
            Global Reviews Press expands portfolio with new journals in
            emerging technologies.
          </h4>

          <p
            className="
              mt-[4px]
              font-['Inter',sans-serif]
              text-[11px]
              font-[500]
              text-[#8a97a7]
            "
          >
            May 15, 2026
          </p>
        </div>
      </motion.article>

      {/* ==================== NEWS ITEM 2 ==================== */}
      <motion.article
        whileHover={{ x: 3 }}
        transition={{ duration: 0.25 }}
        className="group/news mt-[13px] flex items-start gap-[11px]"
      >
        <div
          className="
            relative
            flex
            h-[58px]
            w-[67px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-[4px]
            bg-gradient-to-br
            from-[#245b20]
            via-[#5a982e]
            to-[#89bd47]
            shadow-[0_3px_8px_rgba(42,91,32,0.14)]
          "
        >
          <div className="absolute inset-x-0 bottom-0 h-[50%] bg-black/8" />

          <RadioTower
            size={29}
            strokeWidth={1.25}
            className="relative text-white"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span
            className="
              block
              font-['Inter',sans-serif]
              text-[10.5px]
              font-[800]
              uppercase
              leading-none
              text-[#59a045]
            "
          >
            EVENT
          </span>

          <h4
            className="
              mt-[5px]
              font-['Inter',sans-serif]
              text-[10.5px]
              font-[650]
              leading-[1.48]
              text-[#203a59]
              transition-colors
              duration-300
              group-hover/news:text-[#4a8e31]

              sm:text-[11px]
            "
          >
            Webinar: Open Access and Research Impact in the Global South.
          </h4>

          <p
            className="
              mt-[4px]
              font-['Inter',sans-serif]
              text-[11px]
              font-[500]
              text-[#8a97a7]
            "
          >
            June 05, 2026
          </p>
        </div>
      </motion.article>

      {/* ==================== NEWS ITEM 3 ==================== */}
      <motion.article
        whileHover={{ x: 3 }}
        transition={{ duration: 0.25 }}
        className="group/news mt-[13px] flex items-start gap-[11px]"
      >
        <div
          className="
            relative
            flex
            h-[58px]
            w-[67px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-[4px]
            bg-gradient-to-br
            from-[#051f46]
            via-[#064f7f]
            to-[#0e8fb5]
            shadow-[0_3px_8px_rgba(7,42,77,0.14)]
          "
        >
          <Database
            size={27}
            strokeWidth={1.25}
            className="relative text-white/95"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span
            className="
              block
              font-['Inter',sans-serif]
              text-[10.5px]
              font-[800]
              uppercase
              leading-none
              text-[#24669f]
            "
          >
            NEWS
          </span>

          <h4
            className="
              mt-[5px]
              font-['Inter',sans-serif]
              text-[10.5px]
              font-[650]
              leading-[1.48]
              text-[#203a59]
              transition-colors
              duration-300
              group-hover/news:text-[#0a6394]

              sm:text-[11px]
            "
          >
            Our journals now indexed in additional international databases.
          </h4>

          <p
            className="
              mt-[4px]
              font-['Inter',sans-serif]
              text-[11px]
              font-[500]
              text-[#8a97a7]
            "
          >
            April 28, 2026
          </p>
        </div>
      </motion.article>
    </motion.div>

    {/* =====================================================
        EDITORIAL SPOTLIGHT
    ====================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className="
        relative
        flex
        min-h-[285px]
        flex-col
        overflow-hidden
        rounded-[7px]
        border
        border-[#e4eaf0]
        bg-white
        px-[20px]
        py-[16px]
        shadow-[0_4px_18px_rgba(20,48,78,0.035)]

        lg:min-h-[268px]
      "
    >
      <span
        className="
          font-['Inter',sans-serif]
          text-[11px]
          font-[800]
          uppercase
          tracking-[0.01em]
          text-[#17869a]
        "
      >
        EDITORIAL SPOTLIGHT
      </span>

      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="
          mt-[14px]
          max-w-[255px]
          font-['Inter',sans-serif]
          text-[19px]
          font-[800]
          leading-[1.18]
          tracking-[-0.025em]
          text-[#122f5c]

          sm:text-[20px]

          lg:text-[19px]

          xl:text-[20px]
        "
      >
        The Future of Intelligent Technologies for a Sustainable World
      </motion.h3>

      <p
        className="
          mt-[15px]
          max-w-[280px]
          font-['Inter',sans-serif]
          text-[12px]
          font-[500]
          leading-[1.75]
          text-[#455a73]

          sm:text-[12.5px]
        "
      >
        Exploring how convergence of AI, robotics, biotechnology and green
        technologies drives a sustainable future.
      </p>

      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="
          group
          mt-[17px]
          inline-flex
          h-[34px]
          w-fit
          items-center
          justify-center
          gap-[8px]
          rounded-[4px]
          bg-[#082d5c]
          px-[15px]
          font-['Inter',sans-serif]
          text-[12.5px]
          font-[650]
          text-white
          shadow-[0_4px_10px_rgba(8,45,92,0.14)]
          transition-all
          duration-300
          hover:bg-[#154f7a]
          hover:shadow-[0_7px_16px_rgba(8,45,92,0.2)]
        "
      >
        Read Editorial

        <ArrowRight
          size={13}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:translate-x-[4px]"
        />
      </motion.button>

      {/* Slider dots */}
      <div className="mt-auto flex items-center justify-center gap-[15px] pt-[17px]">
        <motion.button
          whileHover={{ scale: 1.3 }}
          className="h-[6px] w-[6px] rounded-full bg-[#073c68]"
        />

        <motion.button
          whileHover={{ scale: 1.3 }}
          className="h-[6px] w-[6px] rounded-full bg-[#bdc7d2]"
        />

        <motion.button
          whileHover={{ scale: 1.3 }}
          className="h-[6px] w-[6px] rounded-full bg-[#bdc7d2]"
        />

        <motion.button
          whileHover={{ scale: 1.3 }}
          className="h-[6px] w-[6px] rounded-full bg-[#bdc7d2]"
        />
      </div>
    </motion.div>

    {/* =====================================================
        STAY CONNECTED
    ====================================================== */}
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className="
        relative
        min-h-[285px]
        overflow-hidden
        rounded-[7px]
        border
        border-[#e4eaf0]
        bg-white
        px-[20px]
        py-[16px]
        shadow-[0_4px_18px_rgba(20,48,78,0.035)]

        md:col-span-2

        lg:col-span-1
        lg:min-h-[268px]
      "
    >
      <h3
        className="
          font-['Inter',sans-serif]
          text-[12.5px]
          font-[800]
          tracking-[0.01em]
          text-[#173E72]

          sm:text-[13px]
        "
      >
        STAY CONNECTED
      </h3>

      <p
        className="
          mt-[29px]
          max-w-[255px]
          font-['Inter',sans-serif]
          text-[12px]
          font-[500]
          leading-[1.75]
          text-[#435770]

          sm:text-[12.5px]
        "
      >
        Subscribe to our newsletter for the latest updates, calls for papers
        and news.
      </p>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 mt-[22px]"
      >
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="
            h-[38px]
            w-full
            rounded-[4px]
            border
            border-[#dce5eb]
            bg-white
            px-[14px]
            font-['Inter',sans-serif]
            text-[11px]
            font-[500]
            text-[#354a63]
            outline-none
            transition-all
            duration-300
            placeholder:text-[#8d99a8]

            focus:border-[#2a7697]
            focus:shadow-[0_0_0_3px_rgba(42,118,151,0.08)]
          "
        />

        <motion.button
          type="submit"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            group
            mt-[12px]
            inline-flex
            h-[34px]
            min-w-[90px]
            items-center
            justify-center
            rounded-[4px]
            bg-[#062d5c]
            px-[16px]
            font-['Inter',sans-serif]
            text-[10.5px]
            font-[650]
            text-white
            shadow-[0_4px_10px_rgba(6,45,92,0.13)]
            transition-all
            duration-300
            hover:bg-[#145178]
          "
        >
          Subscribe
        </motion.button>
      </form>

      {/* ==================== PAPER PLANE DECORATION ==================== */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[8px]
          right-[18px]
          hidden
          h-[94px]
          w-[125px]

          min-[420px]:block
        "
      >
        {/* curved dotted path */}
        <svg
          viewBox="0 0 130 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          fill="none"
        >
          <path
            d="M8 73C24 89 47 84 48 68C49 54 34 48 26 58C17 69 38 84 61 73C83 62 89 35 107 17"
            stroke="#72C9DC"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeDasharray="2.2 3.7"
          />
        </svg>

        <motion.div
          animate={{
            y: [0, -3, 0],
            x: [0, 2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[0px]
            top-[0px]
            rotate-[-22deg]
            text-[#075076]
          "
        >
          <Send
            size={34}
            strokeWidth={1.25}
            fill="#075076"
          />
        </motion.div>
      </div>
    </motion.div>
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
    bg-[#05294a]
    bg-cover
    bg-center
    bg-no-repeat

    min-h-[190px]

    sm:min-h-[170px]

    md:min-h-[145px]
  "
  style={{
    backgroundImage: `url(${bgcta})`,
  }}
>
  {/* ==================== SUBTLE OVERLAY ==================== */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      -z-10
      bg-[#05284a]/[0.08]
    "
  />

  {/* =====================================================
      CONTENT CONTAINER
  ====================================================== */}
  <div
    className="
      mx-auto
      flex
      min-h-[190px]
      w-[min(1120px,calc(100%-32px))]
      flex-col
      items-start
      justify-center
      gap-[22px]
      py-[25px]

      sm:min-h-[170px]
      sm:w-[min(1120px,calc(100%-48px))]
      sm:py-[22px]

      md:min-h-[145px]
      md:flex-row
      md:items-center
      md:justify-between
      md:gap-[40px]
      md:py-[18px]

      lg:min-h-[145px]
    "
  >
    {/* =====================================================
        LEFT CONTENT
    ====================================================== */}
    <motion.div
      initial={{
        opacity: 0,
        x: -22,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-10
        max-w-[590px]
      "
    >
      {/* Heading */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.08,
        }}
        className="
          font-['Inter',sans-serif]
          text-[17px]
          font-[800]
          leading-[1.25]
          tracking-[0.02em]
          text-white

          min-[390px]:text-[16px]

          sm:text-[18px]

          lg:text-[19px]
        "
      >
        BE PART OF A GLOBAL MOVEMENT
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{
          opacity: 0,
          y: 8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.15,
        }}
        className="
          mt-[9px]
          max-w-[500px]
          font-['Inter',sans-serif]
          text-[12px]
          font-[500]
          leading-[1.75]
          text-white/90

          min-[390px]:text-[12.5px]

          sm:text-[13px]

          lg:text-[13px]
        "
      >
        Join researchers, experts and institutions worldwide
        <br className="hidden sm:block" />
        in driving knowledge, innovation and sustainable impact.
      </motion.p>
    </motion.div>

    {/* =====================================================
        CTA BUTTON
    ====================================================== */}
    <motion.div
      initial={{
        opacity: 0,
        x: 22,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay: 0.12,
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
          h-[47px]
          min-w-[182px]
          items-center
          justify-center
          gap-[22px]

          rounded-[5px]

          border
          border-white/80

          bg-white/[0.02]

          px-[22px]

          font-['Inter',sans-serif]
          text-[12px]
          font-[600]
          text-white

          shadow-[0_4px_14px_rgba(0,0,0,0.08)]

          backdrop-blur-[1px]

          transition-all
          duration-300

          hover:border-white
          hover:bg-white
          hover:text-[#082c4d]
          hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]

          max-[380px]:w-full

          sm:min-w-[185px]

          md:h-[46px]
          md:min-w-[190px]

          lg:min-w-[193px]
        "
      >
        <span className="whitespace-nowrap">
          Join Us Today
        </span>

        <ArrowRight
          size={17}
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
<section className="border-y border-[#eef2f5] bg-white py-[22px] sm:py-[25px] lg:py-[27px]">
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
        text-[16px]
        font-[800]
        leading-none
        tracking-[0.025em]
        text-[#173f78]

        sm:text-[15.5px]
        lg:text-[16px]
      "
    >
      INDEXED IN LEADING DATABASES
    </motion.h2>

    {/* =====================================================
        DATABASE LOGOS
    ====================================================== */}
    <div
      className="
        mt-[21px]
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

            lg:max-w-[92px]
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

            lg:max-w-[106px]
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