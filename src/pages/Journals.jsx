import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Cpu,
  HeartPulse,
  Leaf,
  Shapes,
  Globe2,
  BadgeCheck,
  LockKeyholeOpen,
  UsersRound,
  Scale,
  LibraryBig,
  FileText,
  Database,
  Building2,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import bgjournal from "../assets/img/bgjournal.png";
import bgcta from "../assets/img/jcta.png";

import scopusLogo from "../assets/img/scopus.png";
import clarivateLogo from "../assets/img/clarivate.png";
import doajLogo from "../assets/img/doaj.png";
import casLogo from "../assets/img/cas.png";
import dimensionsLogo from "../assets/img/dimensions.png";
import crossrefLogo from "../assets/img/crossref.png";
import googleScholarLogo from "../assets/img/google-scholar.png";

// /* Engineering */
// import eng1 from "../assets/img/journals/eng1.png";
// import eng2 from "../assets/img/journals/eng2.png";
// import eng3 from "../assets/img/journals/eng3.png";
// import eng4 from "../assets/img/journals/eng4.png";
// import eng5 from "../assets/img/journals/eng5.png";
// import eng6 from "../assets/img/journals/eng6.png";

// /* Medicine */
// import med1 from "../assets/img/journals/med1.png";
// import med2 from "../assets/img/journals/med2.png";
// import med3 from "../assets/img/journals/med3.png";
// import med4 from "../assets/img/journals/med4.png";
// import med5 from "../assets/img/journals/med5.png";
// import med6 from "../assets/img/journals/med6.png";

// /* Sustainability */
// import sust1 from "../assets/img/journals/sust1.png";
// import sust2 from "../assets/img/journals/sust2.png";
// import sust3 from "../assets/img/journals/sust3.png";
// import sust4 from "../assets/img/journals/sust4.png";
// import sust5 from "../assets/img/journals/sust5.png";
// import sust6 from "../assets/img/journals/sust6.png";

export default function Journals() {
  const [activeTab, setActiveTab] = useState("all");
  const [sort, setSort] = useState("default");

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
            bg-[#041d44]
            bg-cover
            bg-center
            bg-no-repeat
            text-white

            min-h-[430px]
            sm:min-h-[445px]
            lg:min-h-[490px]
          "
          style={{
            backgroundImage: `url(${bgjournal})`,
          }}
        >
         

          <div
            className="
              mx-auto
              flex
              min-h-[430px]
              w-[min(1120px,calc(100%-32px))]
              items-center
              py-12

              sm:min-h-[445px]
              sm:w-[min(1120px,calc(100%-48px))]

              lg:min-h-[490px]
              lg:py-8
            "
          >
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 max-w-[430px]"
            >
              <h1
                className="
                  font-['Inter',sans-serif]
                  text-[38px]
                  font-[800]
                  leading-[0.98]
                  tracking-[-0.035em]

                  sm:text-[45px]
                  lg:text-[47px]
                "
              >
                JOURNALS
                <br />
                & MAGAZINES
              </h1>

              <p
                className="
                  mt-4
                  text-[14px]
                  font-[700]
                  text-[#f6b928]

                  sm:text-[15px]
                "
              >
                Curated. Peer Reviewed. Global.
              </p>

              <p
                className="
                  mt-5
                  max-w-[370px]
                  text-[11px]
                  font-[500]
                  leading-[1.65]
                  text-white/90

                  sm:text-[11.5px]
                "
              >
                High-quality review journals and magazines spanning
                Engineering, Medicine and Sustainability published by Global
                Reviews Press.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActiveTab("all");
                    document
                      .getElementById("journal-content")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="
                    group
                    inline-flex
                    h-[42px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[4px]
                    bg-[#f7b928]
                    px-5
                    text-[10px]
                    font-[700]
                    text-[#08244b]
                    shadow-[0_5px_14px_rgba(0,0,0,0.14)]
                    transition-all
                    duration-300
                    hover:bg-[#ffc94c]
                  "
                >
                  Explore All Journals

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <motion.a
                  href="/about"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    inline-flex
                    h-[42px]
                    items-center
                    justify-center
                    rounded-[4px]
                    border
                    border-white/80
                    bg-white/[0.04]
                    px-5
                    text-[10px]
                    font-[600]
                    text-white
                    backdrop-blur-[2px]
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#08244b]
                  "
                >
                  About Our Journals
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            FILTER BAR
        ========================================================== */}
        <section
          id="journal-content"
          className="
            sticky
            top-[88px]
            z-40
            border-b
            border-[#e6ecf2]
            bg-white/95
            py-[13px]
            backdrop-blur-md
          "
        >
          <div
            className="
              mx-auto
              flex
              w-[min(1120px,calc(100%-32px))]
              flex-col
              gap-3

              sm:w-[min(1120px,calc(100%-48px))]

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="flex flex-wrap gap-[7px]">

              {/* All */}
              <button
                onClick={() => setActiveTab("all")}
                className={`
                  inline-flex
                  h-[32px]
                  items-center
                  gap-[6px]
                  rounded-[5px]
                  border
                  px-[12px]
                  text-[8.5px]
                  font-[650]
                  transition-all
                  duration-300
                  ${
                    activeTab === "all"
                      ? "border-[#092f65] bg-[#092f65] text-white"
                      : "border-[#dfe6ee] bg-[#fafbfd] text-[#50617a] hover:border-[#9fb0c2] hover:bg-white"
                  }
                `}
              >
                <BookOpen size={12} />
                All Journals
              </button>

              {/* Engineering */}
              <button
                onClick={() => setActiveTab("engineering")}
                className={`
                  inline-flex
                  h-[32px]
                  items-center
                  gap-[6px]
                  rounded-[5px]
                  border
                  px-[12px]
                  text-[8.5px]
                  font-[650]
                  transition-all
                  duration-300
                  ${
                    activeTab === "engineering"
                      ? "border-[#155798] bg-[#eaf3ff] text-[#155798]"
                      : "border-[#dfe6ee] bg-[#fafbfd] text-[#50617a] hover:border-[#9fb0c2] hover:bg-white"
                  }
                `}
              >
                <Cpu size={12} className="text-[#357dc4]" />
                Engineering & Technology
              </button>

              {/* Medicine */}
              <button
                onClick={() => setActiveTab("medicine")}
                className={`
                  inline-flex
                  h-[32px]
                  items-center
                  gap-[6px]
                  rounded-[5px]
                  border
                  px-[12px]
                  text-[8.5px]
                  font-[650]
                  transition-all
                  duration-300
                  ${
                    activeTab === "medicine"
                      ? "border-[#2688ac] bg-[#ecfaff] text-[#20799b]"
                      : "border-[#dfe6ee] bg-[#fafbfd] text-[#50617a] hover:border-[#9fb0c2] hover:bg-white"
                  }
                `}
              >
                <HeartPulse size={12} className="text-[#3e91bf]" />
                Medicine & Health Sciences
              </button>

              {/* Sustainability */}
              <button
                onClick={() => setActiveTab("sustainability")}
                className={`
                  inline-flex
                  h-[32px]
                  items-center
                  gap-[6px]
                  rounded-[5px]
                  border
                  px-[12px]
                  text-[8.5px]
                  font-[650]
                  transition-all
                  duration-300
                  ${
                    activeTab === "sustainability"
                      ? "border-[#559f39] bg-[#f0f9eb] text-[#4d9136]"
                      : "border-[#dfe6ee] bg-[#fafbfd] text-[#50617a] hover:border-[#9fb0c2] hover:bg-white"
                  }
                `}
              >
                <Leaf size={12} className="text-[#63a743]" />
                Sustainability & Environment
              </button>

              {/* Interdisciplinary */}
              <button
                onClick={() => setActiveTab("interdisciplinary")}
                className={`
                  inline-flex
                  h-[32px]
                  items-center
                  gap-[6px]
                  rounded-[5px]
                  border
                  px-[12px]
                  text-[8.5px]
                  font-[650]
                  transition-all
                  duration-300
                  ${
                    activeTab === "interdisciplinary"
                      ? "border-[#6d66b0] bg-[#f3f1ff] text-[#6059a0]"
                      : "border-[#dfe6ee] bg-[#fafbfd] text-[#50617a] hover:border-[#9fb0c2] hover:bg-white"
                  }
                `}
              >
                <Shapes size={12} className="text-[#6d66b0]" />
                Interdisciplinary
              </button>
            </div>

            <div className="relative w-fit">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="
                  h-[32px]
                  appearance-none
                  rounded-[5px]
                  border
                  border-[#dce5ed]
                  bg-[#fafbfd]
                  pb-0
                  pl-3
                  pr-8
                  text-[8.5px]
                  font-[650]
                  text-[#465a73]
                  outline-none
                  transition-colors
                  focus:border-[#426d9a]
                "
              >
                <option value="default">Sort by</option>
                <option value="az">A–Z</option>
                <option value="za">Z–A</option>
                <option value="popular">Most Popular</option>
              </select>

              <ChevronDown
                size={11}
                className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-[#63758a]"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT + SIDEBAR
        ========================================================== */}
        <section className="bg-white py-[24px] sm:py-[30px]">
          <div
            className="
              mx-auto
              grid
              w-[min(1120px,calc(100%-32px))]
              grid-cols-1
              gap-6

              sm:w-[min(1120px,calc(100%-48px))]

              xl:grid-cols-[1fr_220px]
              xl:gap-[20px]
            "
          >
            {/* =====================================================
                LEFT JOURNAL CONTENT
            ====================================================== */}
            <div className="min-w-0">

              <AnimatePresence mode="wait">

                {/* =================================================
                    ENGINEERING & TECHNOLOGY
                ================================================== */}
                {(activeTab === "all" ||
                  activeTab === "engineering" ||
                  activeTab === "interdisciplinary") && (
                  <motion.section
                    key="engineering"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-[11px] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-[2px] w-[18px] bg-[#f1ad22]" />

                        <h2
                          className="
                            text-[12px]
                            font-[800]
                            text-[#163b6b]

                            sm:text-[13px]
                          "
                        >
                          Engineering & Technology
                        </h2>
                      </div>

                      <button className="group flex items-center gap-1 text-[7.5px] font-[650] text-[#356ca4]">
                        View all
                        <ArrowRight
                          size={9}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    </div>

                    <div
                      className="
                        grid
                        grid-cols-2
                        gap-[7px]

                        sm:grid-cols-3

                        md:grid-cols-4

                        lg:grid-cols-6
                      "
                    >
                      {/* CARD 1 */}
                      <motion.article
                        whileHover={{ y: -6 }}
                        className="
                          group
                          relative
                          min-h-[205px]
                          overflow-hidden
                          rounded-[5px]
                          bg-[#062b55]
                          shadow-[0_5px_14px_rgba(7,36,67,0.10)]
                        "
                      >
                        {/* <img
                          src={eng1}
                          alt="Artificial Intelligence Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3c]/75 via-transparent to-[#00152e]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[10px] font-[800] leading-[1.12]">
                              Artificial
                              <br />
                              Intelligence
                            </h3>

                            <p className="mt-1 text-[7px] font-[500] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] font-[500] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      {/* CARD 2 */}
                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px] bg-[#062b55] shadow-[0_5px_14px_rgba(7,36,67,0.10)]"
                      >
                        {/* <img
                          src={eng2}
                          alt="Robotics & Automation Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3c]/65 via-transparent to-[#00152e]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[10px] font-[800] leading-[1.12]">
                              Robotics
                              <br />
                              & Automation
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      {/* CARD 3 */}
                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px] bg-[#062b55] shadow-[0_5px_14px_rgba(7,36,67,0.10)]"
                      >
                        {/* <img
                          src={eng3}
                          alt="Quantum Computing Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3c]/65 via-transparent to-[#00152e]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[10px] font-[800] leading-[1.12]">
                              Quantum
                              <br />
                              Computing
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      {/* CARD 4 */}
                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px] bg-[#062b55] shadow-[0_5px_14px_rgba(7,36,67,0.10)]"
                      >
                        {/* <img
                          src={eng4}
                          alt="Edge Intelligence & Computing"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3c]/65 via-transparent to-[#00152e]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9.5px] font-[800] leading-[1.12]">
                              Edge Intelligence
                              <br />
                              & Computing
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      {/* CARD 5 */}
                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px] bg-[#062b55] shadow-[0_5px_14px_rgba(7,36,67,0.10)]"
                      >
                        {/* <img
                          src={eng5}
                          alt="Digital Twin Technologies"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3c]/65 via-transparent to-[#00152e]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9.5px] font-[800] leading-[1.12]">
                              Digital Twin
                              <br />
                              Technologies
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      {/* CARD 6 */}
                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px] bg-[#062b55] shadow-[0_5px_14px_rgba(7,36,67,0.10)]"
                      >
                        {/* <img
                          src={eng6}
                          alt="6G & Future Communication"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3c]/65 via-transparent to-[#00152e]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9.5px] font-[800] leading-[1.12]">
                              6G & Future
                              <br />
                              Communication
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>
                    </div>
                  </motion.section>
                )}

                {/* =================================================
                    MEDICINE
                ================================================== */}
                {(activeTab === "all" ||
                  activeTab === "medicine" ||
                  activeTab === "interdisciplinary") && (
                  <motion.section
                    key="medicine"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-[30px]"
                  >
                    <div className="mb-[11px] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-[2px] w-[18px] bg-[#f1ad22]" />

                        <h2 className="text-[12px] font-[800] text-[#163b6b] sm:text-[13px]">
                          Medicine & Health Sciences
                        </h2>
                      </div>

                      <button className="group flex items-center gap-1 text-[7.5px] font-[650] text-[#356ca4]">
                        View all
                        <ArrowRight
                          size={9}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-[7px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={med1}
                          alt="AI-Enabled Medical Imaging Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#061e42]/65 via-transparent to-[#031b38]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9px] font-[800] leading-[1.12]">
                              AI-Enabled
                              <br />
                              Medical Imaging
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={med2}
                          alt="Digital Biomarkers & Wearables"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#061e42]/65 via-transparent to-[#031b38]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9px] font-[800] leading-[1.12]">
                              Digital Biomarkers
                              <br />
                              & Wearables
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={med3}
                          alt="Robotic Surgery Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#061e42]/65 via-transparent to-[#031b38]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9.5px] font-[800]">
                              Robotic Surgery
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={med4}
                          alt="Precision Diagnostics & Digital Pathology Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#061e42]/65 via-transparent to-[#031b38]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[8.5px] font-[800] leading-[1.12]">
                              Precision Diagnostics
                              <br />
                              & Digital Pathology
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={med5}
                          alt="Neurotechnology Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#061e42]/65 via-transparent to-[#031b38]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9px] font-[800]">
                              Neurotechnology
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={med6}
                          alt="AI in Drug Discovery & Development Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#061e42]/65 via-transparent to-[#031b38]/95" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[8.5px] font-[800] leading-[1.12]">
                              AI in Drug Discovery
                              <br />
                              & Development
                            </h3>
                            <p className="mt-1 text-[7px] text-white/80">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/80">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>
                    </div>
                  </motion.section>
                )}

                {/* =================================================
                    SUSTAINABILITY
                ================================================== */}
                {(activeTab === "all" ||
                  activeTab === "sustainability" ||
                  activeTab === "interdisciplinary") && (
                  <motion.section
                    key="sustainability"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-[30px]"
                  >
                    <div className="mb-[11px] flex items-center gap-2">
                      <span className="h-[2px] w-[18px] bg-[#f1ad22]" />

                      <h2 className="text-[12px] font-[800] text-[#163b6b] sm:text-[13px]">
                        Sustainability & Environment
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-[7px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={sust1}
                          alt="Sustainability Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#173d1a]/48 via-transparent to-[#082b16]/93" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9.5px] font-[800]">
                              Sustainability
                            </h3>
                            <p className="mt-1 text-[7px] text-white/85">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/85">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={sust2}
                          alt="Renewable Energy and Systems Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#173d1a]/48 via-transparent to-[#082b16]/93" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9px] font-[800] leading-[1.12]">
                              Renewable Energy
                              <br />
                              and Systems
                            </h3>
                            <p className="mt-1 text-[7px] text-white/85">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/85">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={sust3}
                          alt="Climate & Urban Resilience Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#173d1a]/48 via-transparent to-[#082b16]/93" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[9px] font-[800] leading-[1.12]">
                              Climate & Urban
                              <br />
                              Resilience
                            </h3>
                            <p className="mt-1 text-[7px] text-white/85">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/85">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={sust4}
                          alt="Biosensors & Environmental Tech Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#173d1a]/48 via-transparent to-[#082b16]/93" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[8.5px] font-[800] leading-[1.12]">
                              Biosensors &
                              <br />
                              Environmental Tech
                            </h3>
                            <p className="mt-1 text-[7px] text-white/85">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/85">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={sust5}
                          alt="Green Materials & Circular Economy Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#173d1a]/48 via-transparent to-[#082b16]/93" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[8.5px] font-[800] leading-[1.12]">
                              Green Materials
                              <br />
                              & Circular Economy
                            </h3>
                            <p className="mt-1 text-[7px] text-white/85">
                              Reviews
                            </p>
                          </div>

                          <p className="text-[5.5px] text-white/85">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>

                      <motion.article
                        whileHover={{ y: -6 }}
                        className="group relative min-h-[205px] overflow-hidden rounded-[5px]"
                      >
                        {/* <img
                          src={sust6}
                          alt="Water, Air & Earth Sciences Reviews"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}

                        <div className="absolute inset-0 bg-gradient-to-b from-[#173d1a]/48 via-transparent to-[#082b16]/93" />

                        <div className="relative flex min-h-[205px] flex-col justify-between p-[11px] text-white">
                          <div>
                            <h3 className="text-[8.5px] font-[800] leading-[1.12]">
                              Water, Air & Earth
                              <br />
                              Sciences Reviews
                            </h3>
                          </div>

                          <p className="text-[5.5px] text-white/85">
                            Open Access • Peer Reviewed
                          </p>
                        </div>
                      </motion.article>
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </div>

            {/* =====================================================
                RIGHT SIDEBAR
            ====================================================== */}
            <aside
              className="
                grid
                grid-cols-1
                gap-[15px]

                sm:grid-cols-2

                xl:grid-cols-1
              "
            >
              {/* WHY PUBLISH */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="
                  rounded-[7px]
                  border
                  border-[#e7edf2]
                  bg-white
                  p-[15px]
                  shadow-[0_5px_18px_rgba(15,45,78,0.05)]
                "
              >
                <h3 className="text-[11px] font-[800] text-[#163d6c]">
                  Why Publish With Us?
                </h3>

                <div className="mt-[15px] space-y-[13px]">

                  <div className="group flex gap-[9px]">
                    <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#e5f6fa] text-[#1b9dc4] transition-transform group-hover:scale-110">
                      <Globe2 size={14} />
                    </div>

                    <div>
                      <p className="text-[8px] font-[750] text-[#253e5f]">
                        International Visibility
                      </p>
                      <p className="mt-[2px] text-[6.5px] leading-[1.45] text-[#768398]">
                        Wide global dissemination and indexing
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-[9px]">
                    <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#fff0e5] text-[#e08737] transition-transform group-hover:scale-110">
                      <BadgeCheck size={14} />
                    </div>

                    <div>
                      <p className="text-[8px] font-[750] text-[#253e5f]">
                        Rigorous Peer Review
                      </p>
                      <p className="mt-[2px] text-[6.5px] leading-[1.45] text-[#768398]">
                        Ensuring quality, credibility and integrity
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-[9px]">
                    <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#edf7df] text-[#5f9c3a] transition-transform group-hover:scale-110">
                      <LockKeyholeOpen size={14} />
                    </div>

                    <div>
                      <p className="text-[8px] font-[750] text-[#253e5f]">
                        Open Access Options
                      </p>
                      <p className="mt-[2px] text-[6.5px] leading-[1.45] text-[#768398]">
                        Maximize reach and impact of your research
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-[9px]">
                    <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#e8f5ff] text-[#318dc4] transition-transform group-hover:scale-110">
                      <UsersRound size={14} />
                    </div>

                    <div>
                      <p className="text-[8px] font-[750] text-[#253e5f]">
                        Author Friendly
                      </p>
                      <p className="mt-[2px] text-[6.5px] leading-[1.45] text-[#768398]">
                        Transparent process and fast communication
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-[9px]">
                    <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#ffe9e9] text-[#df4f4f] transition-transform group-hover:scale-110">
                      <Scale size={14} />
                    </div>

                    <div>
                      <p className="text-[8px] font-[750] text-[#253e5f]">
                        Ethical Publishing
                      </p>
                      <p className="mt-[2px] text-[6.5px] leading-[1.45] text-[#768398]">
                        Upholding the highest ethical standards
                      </p>
                    </div>
                  </div>
                </div>

                <button className="group mt-[16px] flex items-center gap-2 text-[7px] font-[700] text-[#3473ad]">
                  Learn More
                  <ArrowRight
                    size={9}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </motion.div>

              {/* AT A GLANCE */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="
                  rounded-[7px]
                  border
                  border-[#e7edf2]
                  bg-[#fbfcfe]
                  p-[15px]
                  shadow-[0_5px_18px_rgba(15,45,78,0.04)]
                "
              >
                <h3 className="text-[11px] font-[800] text-[#163d6c]">
                  At a Glance
                </h3>

                <div className="mt-[15px] grid grid-cols-2 gap-x-3 gap-y-[17px]">

                  <div className="flex gap-[7px]">
                    <LibraryBig
                      size={17}
                      className="shrink-0 text-[#547dd0]"
                    />
                    <div>
                      <p className="text-[9px] font-[800] text-[#274c7b]">
                        20+
                      </p>
                      <p className="text-[6px] text-[#7a8799]">
                        Journals &
                        <br />
                        Magazines
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-[7px]">
                    <UsersRound
                      size={17}
                      className="shrink-0 text-[#6377c2]"
                    />
                    <div>
                      <p className="text-[9px] font-[800] text-[#274c7b]">
                        5000+
                      </p>
                      <p className="text-[6px] text-[#7a8799]">
                        Global Authors
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-[7px]">
                    <Globe2
                      size={17}
                      className="shrink-0 text-[#685eb9]"
                    />
                    <div>
                      <p className="text-[9px] font-[800] text-[#274c7b]">
                        120+
                      </p>
                      <p className="text-[6px] text-[#7a8799]">
                        Countries
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-[7px]">
                    <FileText
                      size={17}
                      className="shrink-0 text-[#6372b6]"
                    />
                    <div>
                      <p className="text-[9px] font-[800] text-[#274c7b]">
                        15,000+
                      </p>
                      <p className="text-[6px] text-[#7a8799]">
                        Articles
                        <br />
                        Published
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-[7px]">
                    <Database
                      size={17}
                      className="shrink-0 text-[#6479bd]"
                    />
                    <div>
                      <p className="text-[9px] font-[800] text-[#274c7b]">
                        50+
                      </p>
                      <p className="text-[6px] text-[#7a8799]">
                        Indexing
                        <br />
                        Databases
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-[7px]">
                    <Building2
                      size={17}
                      className="shrink-0 text-[#536da9]"
                    />
                    <div>
                      <p className="text-[9px] font-[800] text-[#274c7b]">
                        100+
                      </p>
                      <p className="text-[6px] text-[#7a8799]">
                        Institutional
                        <br />
                        Collaborations
                      </p>
                    </div>
                  </div>
                </div>

                <button className="group mt-[18px] flex items-center gap-2 text-[7px] font-[700] text-[#3473ad]">
                  <LayoutDashboard size={10} />
                  Publisher Dashboard
                  <ArrowRight
                    size={9}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            </aside>
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
            bg-[#05254a]
            bg-cover
            bg-center
            bg-no-repeat
            text-white
          "
          style={{
            backgroundImage: `url(${bgcta})`,
          }}
        >
          <div className="absolute inset-0 -z-10 bg-[#05234a]/25" />

          <div
            className="
              mx-auto
              flex
              min-h-[120px]
              w-[min(1120px,calc(100%-32px))]
              flex-col
              items-start
              justify-center
              gap-5
              py-6

              sm:w-[min(1120px,calc(100%-48px))]

              md:flex-row
              md:items-center
              md:justify-between
              md:gap-8
            "
          >
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[17px] font-[800] sm:text-[19px]">
                Publish with Confidence. Reach the World.
              </h2>

              <p className="mt-2 max-w-[500px] text-[8.5px] leading-[1.6] text-white/88">
                Partner with Global Reviews Press to amplify your research
                through trusted peer-reviewed journals.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-[10px]">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="
                  inline-flex
                  h-[38px]
                  items-center
                  rounded-[4px]
                  border
                  border-[#e6a91f]
                  bg-transparent
                  px-[18px]
                  text-[8px]
                  font-[700]
                  text-[#ffc133]
                  transition-colors
                  hover:bg-[#ffc133]
                  hover:text-[#08264a]
                "
              >
                Submit Your Manuscript
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="
                  inline-flex
                  h-[38px]
                  items-center
                  rounded-[4px]
                  border
                  border-white/60
                  bg-white/[0.04]
                  px-[18px]
                  text-[8px]
                  font-[650]
                  text-white
                  transition-colors
                  hover:bg-white
                  hover:text-[#08264a]
                "
              >
                Author Guidelines
              </motion.button>
            </div>
          </div>
        </section>

        {/* =========================================================
            INDEXED & ABSTRACTED
        ========================================================== */}
        <section className="border-b border-[#edf1f4] bg-white py-[18px] sm:py-[22px]">
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
                text-[8px]
                font-[800]
                tracking-[0.01em]
                text-[#214575]
              "
            >
              Indexed & Abstracted In
            </motion.h2>

            <div
              className="
                mt-[17px]
                grid
                grid-cols-2
                items-center
                justify-items-center
                gap-x-5
                gap-y-6

                min-[500px]:grid-cols-3

                md:grid-cols-4

                lg:grid-cols-7
                lg:gap-y-0
              "
            >
              <motion.img
                whileHover={{ y: -3, scale: 1.04 }}
                src={scopusLogo}
                alt="Scopus"
                className="max-h-[30px] max-w-[90px] object-contain"
              />

              <motion.img
                whileHover={{ y: -3, scale: 1.04 }}
                src={clarivateLogo}
                alt="Clarivate Web of Science"
                className="max-h-[34px] max-w-[105px] object-contain"
              />

              <motion.img
                whileHover={{ y: -3, scale: 1.04 }}
                src={doajLogo}
                alt="DOAJ"
                className="max-h-[31px] max-w-[100px] object-contain"
              />

              <motion.img
                whileHover={{ y: -3, scale: 1.04 }}
                src={casLogo}
                alt="CAS"
                className="max-h-[35px] max-w-[85px] object-contain"
              />

              <motion.img
                whileHover={{ y: -3, scale: 1.04 }}
                src={dimensionsLogo}
                alt="Dimensions"
                className="max-h-[30px] max-w-[100px] object-contain"
              />

              <motion.img
                whileHover={{ y: -3, scale: 1.04 }}
                src={crossrefLogo}
                alt="Crossref"
                className="max-h-[30px] max-w-[95px] object-contain"
              />

              <motion.img
                whileHover={{ y: -3, scale: 1.04 }}
                src={googleScholarLogo}
                alt="Google Scholar"
                className="
                  col-span-2
                  max-h-[30px]
                  max-w-[88px]
                  object-contain

                  min-[500px]:col-span-1
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