import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  Globe2,
  Database,
  Landmark,
  Bot,
  Cpu,
  Atom,
  Cog,
  RadioTower,
  Microchip,
  ScanLine,
  Watch,
  Stethoscope,
  Dna,
  BrainCircuit,
  FlaskConical,
  BadgeCheck,
  Globe,
  LockKeyhole,
  Scale,
  UserRoundCheck,
  Target,
  Newspaper,
  Mail,
  Send,
  Activity,
  CircuitBoard,
  Box,
  Microscope,
  Tablets,
  HeartPulse,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import bghome from "../assets/img/bghome.png";
import h1 from "../assets/img/Home1.png";
import h2 from "../assets/img/Home2.png";
import h3 from "../assets/img/Home3.png";
import bgcta from "../assets/img/cta.png";

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white">

        {/* =========================================================
            HERO SECTION
        ========================================================== */}
        <section
          id="home"
          className="relative isolate min-h-[530px] overflow-hidden bg-[#f7fbff] bg-cover bg-center bg-no-repeat sm:min-h-[570px] lg:min-h-[580px]"
          style={{
            backgroundImage: `url(${bghome})`,
          }}
        >
          {/* left readability overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 via-[42%] to-white/0 lg:via-white/45" />

          <div className="mx-auto flex min-h-[530px] w-[min(1120px,calc(100%-32px))] items-center py-12 sm:min-h-[570px] sm:w-[min(1120px,calc(100%-48px))] lg:min-h-[580px]">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
              }}
              className="w-full max-w-[585px]"
            >
              <h1 className="text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.02] tracking-[-0.035em] text-[#071d3c]">
                <span className="block">Advancing Knowledge.</span>

                <span className="block">
                  Empowering Innovation.
                </span>

                <span className="block text-[#209148]">
                  Improving Lives.
                </span>
              </h1>

              <p className="mt-6 max-w-[520px] text-[14px] font-medium leading-[1.75] text-[#44556c] sm:text-[15px]">
                Global Reviews Press publishes authoritative peer-reviewed
                journals and magazines across{" "}
                <span className="font-bold text-[#1670bd]">
                  Engineering
                </span>
                ,{" "}
                <span className="font-bold text-[#0b7fa5]">
                  Medicine
                </span>{" "}
                and{" "}
                <span className="font-bold text-[#35953c]">
                  Sustainability
                </span>{" "}
                to address global challenges and build a better tomorrow.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-[4px] bg-[#081c3a] px-5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(8,28,58,0.16)] transition-all duration-300 hover:bg-[#123b68]"
                >
                  Explore Our Journals

                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-[4px] border border-[#cdd6e1] bg-white/90 px-5 text-[13px] font-semibold text-[#071d3c] transition-all duration-300 hover:border-[#071d3c] hover:bg-white"
                >
                  About Us

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            STATISTICS SECTION
        ========================================================== */}
        <section className="border-y border-[#e9eef4] bg-white py-7">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">

              {/* 1 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="flex items-center justify-center gap-3 px-2 lg:border-r lg:border-[#e4eaf1]"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#e7f0fc] text-[#15569c]">
                  <BookOpen size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[17px] font-extrabold text-[#17345c]">
                    20+
                  </p>
                  <p className="max-w-[80px] text-[9px] font-semibold leading-[1.25] text-[#627188]">
                    Journals & Magazines
                  </p>
                </div>
              </motion.div>

              {/* 2 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                whileHover={{ y: -4 }}
                className="flex items-center justify-center gap-3 px-2 lg:border-r lg:border-[#e4eaf1]"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#daf4f0] text-[#008c86]">
                  <Users size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[17px] font-extrabold text-[#087f78]">
                    5000+
                  </p>
                  <p className="max-w-[88px] text-[9px] font-semibold leading-[1.25] text-[#627188]">
                    Global Authors & Editors
                  </p>
                </div>
              </motion.div>

              {/* 3 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-center justify-center gap-3 px-2 lg:border-r lg:border-[#e4eaf1]"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#e5f4df] text-[#449544]">
                  <FileText size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[17px] font-extrabold text-[#3c8d42]">
                    15,000+
                  </p>
                  <p className="max-w-[94px] text-[9px] font-semibold leading-[1.25] text-[#627188]">
                    Review Articles Published
                  </p>
                </div>
              </motion.div>

              {/* 4 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                whileHover={{ y: -4 }}
                className="flex items-center justify-center gap-3 px-2 lg:border-r lg:border-[#e4eaf1]"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#ede3f8] text-[#7542a6]">
                  <Globe2 size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[17px] font-extrabold text-[#7542a6]">
                    120+
                  </p>
                  <p className="max-w-[82px] text-[9px] font-semibold leading-[1.25] text-[#627188]">
                    Countries Reached
                  </p>
                </div>
              </motion.div>

              {/* 5 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="flex items-center justify-center gap-3 px-2 lg:border-r lg:border-[#e4eaf1]"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#fff0df] text-[#d77b23]">
                  <Database size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[17px] font-extrabold text-[#d2731e]">
                    50+
                  </p>
                  <p className="max-w-[94px] text-[9px] font-semibold leading-[1.25] text-[#627188]">
                    Indexing & Abstracting DBs
                  </p>
                </div>
              </motion.div>

              {/* 6 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                whileHover={{ y: -4 }}
                className="flex items-center justify-center gap-3 px-2"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#e8edf5] text-[#18375e]">
                  <Landmark size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[17px] font-extrabold text-[#18375e]">
                    100+
                  </p>
                  <p className="max-w-[92px] text-[9px] font-semibold leading-[1.25] text-[#627188]">
                    Institutional Partners
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================================
            MAIN CATEGORY CARDS
        ========================================================== */}
        <section className="bg-[#fbfcfd] py-7 sm:py-9">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

              {/* ENGINEERING */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.45 }}
                className="group relative min-h-[250px] overflow-hidden rounded-[7px] shadow-[0_8px_22px_rgba(4,31,64,0.08)]"
              >
                <img
                  src={h1}
                  alt="Engineering"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#032a56]/95 via-[#03467a]/78 to-[#067bb2]/25" />

                <div className="relative flex min-h-[250px] flex-col justify-between p-6 text-white">
                  <div>
                    <h2 className="text-[19px] font-extrabold tracking-wide">
                      ENGINEERING
                    </h2>

                    <p className="mt-5 max-w-[250px] text-[11px] font-medium leading-[1.6] text-white/90">
                      Cutting-edge reviews in emerging technologies and
                      intelligent systems shaping the future.
                    </p>
                  </div>

                  <button className="group/link flex w-fit items-center gap-2 text-[10px] font-semibold">
                    Explore Engineering Journals
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                    />
                  </button>
                </div>
              </motion.article>

              {/* MEDICINE */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -7 }}
                transition={{
                  duration: 0.45,
                  delay: 0.08,
                }}
                className="group relative min-h-[250px] overflow-hidden rounded-[7px] shadow-[0_8px_22px_rgba(4,31,64,0.08)]"
              >
                <img
                  src={h2}
                  alt="Medicine"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#006b80]/95 via-[#058ca0]/75 to-[#28b8c8]/20" />

                <div className="relative flex min-h-[250px] flex-col justify-between p-6 text-white">
                  <div>
                    <h2 className="text-[19px] font-extrabold tracking-wide">
                      MEDICINE
                    </h2>

                    <p className="mt-5 max-w-[250px] text-[11px] font-medium leading-[1.6] text-white/90">
                      Advancing healthcare through innovative research,
                      diagnostics and digital health.
                    </p>
                  </div>

                  <button className="group/link flex w-fit items-center gap-2 text-[10px] font-semibold">
                    Explore Medicine Journals
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                    />
                  </button>
                </div>
              </motion.article>

              {/* SUSTAINABILITY */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -7 }}
                transition={{
                  duration: 0.45,
                  delay: 0.16,
                }}
                className="group relative min-h-[250px] overflow-hidden rounded-[7px] shadow-[0_8px_22px_rgba(4,31,64,0.08)]"
              >
                <img
                  src={h3}
                  alt="Sustainability"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#356c16]/94 via-[#55971f]/70 to-[#98c63a]/22" />

                <div className="relative flex min-h-[250px] flex-col justify-between p-6 text-white">
                  <div>
                    <h2 className="text-[19px] font-extrabold tracking-wide">
                      SUSTAINABILITY
                    </h2>

                    <p className="mt-5 max-w-[250px] text-[11px] font-medium leading-[1.6] text-white/90">
                      Research solutions for a resilient planet aligned with the
                      UN Sustainable Development Goals.
                    </p>
                  </div>

                  <button className="group/link flex w-fit items-center gap-2 text-[10px] font-semibold">
                    Explore Sustainability Journals
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                    />
                  </button>
                </div>
              </motion.article>

            </div>
          </div>
        </section>

        {/* =========================================================
            OUR JOURNALS & MAGAZINES
        ========================================================== */}
        <section className="bg-white py-8 sm:py-10">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[16px] font-extrabold tracking-[0.02em] text-[#102c55] sm:text-[18px]">
                OUR JOURNALS & MAGAZINES
              </h2>

              <p className="mt-2 text-[10px] font-medium text-[#69778c] sm:text-[11px]">
                High-quality peer-reviewed journals and magazines across
                multidisciplinary domains.
              </p>
            </motion.div>

            <div className="mt-6 overflow-hidden rounded-[5px] border border-[#e8edf2] bg-white shadow-[0_4px_18px_rgba(15,42,76,0.04)]">

              {/* ROW 1 */}
              <div className="grid grid-cols-2 divide-x divide-y divide-[#edf1f5] sm:grid-cols-3 lg:grid-cols-5">

                <motion.div
                  whileHover={{ backgroundColor: "#f7fbff" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <Bot
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#557bd4] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Artificial
                    <br />
                    Intelligence
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f7fffe" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <Cpu
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#39a7a2] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Edge Intelligence
                    <br />& Computing
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f7fbff" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <Atom
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#487ac8] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Quantum
                    <br />
                    Technologies
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f8fcff" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <Cog
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#5988b5] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Robotics &
                    <br />
                    Automation
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f5fffe" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <Box
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#40a9a1] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Extended Reality &
                    <br />
                    Spatial Computing
                  </span>
                </motion.div>

                {/* ROW 2 */}

                <motion.div
                  whileHover={{ backgroundColor: "#f7fbff" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <RadioTower
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#557bd4] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Communication
                    <br />
                    Technologies
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f7fffe" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <Microchip
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#48a3a0] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Semiconductor
                    <br />
                    Technologies
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f7fbff" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <ScanLine
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#5982c5] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Medical
                    <br />
                    Imaging
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f6fffb" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <Watch
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#44a995] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Digital Health &
                    <br />
                    Wearables
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f7fffe" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <HeartPulse
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#39a895] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Surgical Robotics &
                    <br />
                    Intervention
                  </span>
                </motion.div>

                {/* ROW 3 */}

                <motion.div
                  whileHover={{ backgroundColor: "#f7fbff" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <Microscope
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#5983ce] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Diagnostics &
                    <br />
                    Pathology
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f6fffe" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <CircuitBoard
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#48a7a2] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Bioengineering &
                    <br />
                    Organ-on-Chip
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f7fbff" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <BrainCircuit
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#5c80c2] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Neurotechnology &
                    <br />
                    Bioelectronics
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f7fffd" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <Dna
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#49a795] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    Genomics &
                    <br />
                    Gene Editing
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ backgroundColor: "#f6fffe" }}
                  className="group flex min-h-[88px] items-center gap-3 p-4"
                >
                  <FlaskConical
                    size={27}
                    strokeWidth={1.45}
                    className="shrink-0 text-[#42a597] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-[10px] font-semibold leading-[1.35] text-[#43546b]">
                    AI in Drug Discovery &
                    <br />
                    Development
                  </span>
                </motion.div>

              </div>

              <div className="border-t border-[#e9eef3] py-4 text-center">
                <button className="group inline-flex items-center gap-2 text-[10px] font-bold text-[#1c416d]">
                  View All Journals & Magazines
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY PUBLISH WITH US
        ========================================================== */}
        <section className="bg-[#fbfcfe] py-9 sm:py-11">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[16px] font-extrabold text-[#102c55] sm:text-[18px]"
            >
              WHY PUBLISH WITH GLOBAL REVIEWS PRESS?
            </motion.h2>

            <div className="mt-7 grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#edf2ff] text-[#5876cb]">
                  <BadgeCheck size={23} strokeWidth={1.6} />
                </div>
                <p className="mt-3 text-[10px] font-bold text-[#45566d]">
                  Rigorous
                  <br />
                  Peer Review
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#ecfbf9] text-[#3da99f]">
                  <Globe size={23} strokeWidth={1.6} />
                </div>
                <p className="mt-3 text-[10px] font-bold text-[#45566d]">
                  Global
                  <br />
                  Visibility
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#effaf1] text-[#52a667]">
                  <LockKeyhole size={23} strokeWidth={1.6} />
                </div>
                <p className="mt-3 text-[10px] font-bold text-[#45566d]">
                  Open Access
                  <br />
                  Options
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#fff6e9] text-[#d89c42]">
                  <Scale size={23} strokeWidth={1.6} />
                </div>
                <p className="mt-3 text-[10px] font-bold text-[#45566d]">
                  Ethical
                  <br />
                  Publishing
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f0effc] text-[#6c65bc]">
                  <UserRoundCheck size={23} strokeWidth={1.6} />
                </div>
                <p className="mt-3 text-[10px] font-bold text-[#45566d]">
                  Author
                  <br />
                  Support
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#effaf4] text-[#4baa82]">
                  <Target size={23} strokeWidth={1.6} />
                </div>
                <p className="mt-3 text-[10px] font-bold text-[#45566d]">
                  Impactful
                  <br />
                  Reach
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================================
            NEWS / EDITORIAL / NEWSLETTER
        ========================================================== */}
        <section className="bg-white py-9 sm:py-11">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] grid-cols-1 gap-4 sm:w-[min(1120px,calc(100%-48px))] lg:grid-cols-[1fr_1fr_0.95fr]">

            {/* NEWS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[5px] border border-[#e5ebf1] bg-white p-5 shadow-[0_5px_18px_rgba(13,42,74,0.04)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[11px] font-extrabold text-[#15355d]">
                  LATEST NEWS & EVENTS
                </h3>

                <button className="text-[8px] font-semibold text-[#758298] hover:text-[#173c67]">
                  View All
                </button>
              </div>

              <div className="mt-4 space-y-3">

                <article className="group flex gap-3">
                  <div className="flex h-[58px] w-[73px] shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-gradient-to-br from-[#073a63] to-[#1990a0]">
                    <Newspaper
                      size={24}
                      className="text-white/90"
                    />
                  </div>

                  <div>
                    <span className="text-[7px] font-bold uppercase text-[#2382ab]">
                      News
                    </span>

                    <h4 className="mt-1 text-[9px] font-bold leading-[1.45] text-[#293e59] transition-colors group-hover:text-[#0a6ea4]">
                      Global Reviews Press expands portfolio with new journals
                      in emerging technologies.
                    </h4>

                    <p className="mt-1 text-[7px] text-[#8490a0]">
                      May 15, 2026
                    </p>
                  </div>
                </article>

                <article className="group flex gap-3">
                  <div className="flex h-[58px] w-[73px] shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-gradient-to-br from-[#447725] to-[#8fb93d]">
                    <Globe2
                      size={24}
                      className="text-white/90"
                    />
                  </div>

                  <div>
                    <span className="text-[7px] font-bold uppercase text-[#55a235]">
                      Webinar
                    </span>

                    <h4 className="mt-1 text-[9px] font-bold leading-[1.45] text-[#293e59] transition-colors group-hover:text-[#54942d]">
                      Webinar: Open Access and Research Impact in the Global
                      South.
                    </h4>

                    <p className="mt-1 text-[7px] text-[#8490a0]">
                      June 05, 2026
                    </p>
                  </div>
                </article>

                <article className="group flex gap-3">
                  <div className="flex h-[58px] w-[73px] shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-gradient-to-br from-[#0d2449] to-[#1c6a91]">
                    <Database
                      size={24}
                      className="text-white/90"
                    />
                  </div>

                  <div>
                    <span className="text-[7px] font-bold uppercase text-[#3970a8]">
                      News
                    </span>

                    <h4 className="mt-1 text-[9px] font-bold leading-[1.45] text-[#293e59] transition-colors group-hover:text-[#1a5c98]">
                      Our journals now indexed in additional international
                      databases.
                    </h4>

                    <p className="mt-1 text-[7px] text-[#8490a0]">
                      April 28, 2026
                    </p>
                  </div>
                </article>

              </div>
            </motion.div>

            {/* EDITORIAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[5px] border border-[#e5ebf1] bg-gradient-to-br from-[#f9fcff] to-[#edf7ff] p-5 shadow-[0_5px_18px_rgba(13,42,74,0.04)]"
            >
              <span className="text-[8px] font-bold uppercase tracking-wide text-[#4b718d]">
                Editorial Spotlight
              </span>

              <h3 className="mt-4 max-w-[280px] text-[19px] font-extrabold leading-[1.18] text-[#143c68]">
                The Future of Intelligent Technologies for a Sustainable World
              </h3>

              <p className="mt-4 max-w-[290px] text-[10px] font-medium leading-[1.65] text-[#607087]">
                Exploring how convergence of AI, robotics, biotechnology and
                green technologies drives a sustainable future.
              </p>

              <button className="group mt-5 inline-flex items-center gap-2 rounded-[3px] bg-[#123a62] px-4 py-2 text-[9px] font-bold text-white transition-all duration-300 hover:bg-[#205681]">
                Read Editorial

                <ArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <div className="mt-6 flex justify-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#154e7e]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#cad5df]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#cad5df]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#cad5df]" />
              </div>
            </motion.div>

            {/* NEWSLETTER */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[5px] border border-[#e5ebf1] bg-white p-5 shadow-[0_5px_18px_rgba(13,42,74,0.04)]"
            >
              <h3 className="text-[11px] font-extrabold text-[#15355d]">
                STAY CONNECTED
              </h3>

              <p className="mt-5 max-w-[270px] text-[10px] font-medium leading-[1.6] text-[#647389]">
                Subscribe to our newsletter for the latest updates, calls for
                papers and news.
              </p>

              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-[39px] w-full rounded-[3px] border border-[#dde5ed] bg-[#fbfcfd] px-3 text-[9px] text-[#44556b] outline-none transition-all placeholder:text-[#96a0ae] focus:border-[#2f799c] focus:ring-2 focus:ring-[#2f799c]/10"
                />

                <button
                  type="button"
                  className="group mt-3 inline-flex h-[34px] items-center justify-center gap-2 rounded-[3px] bg-[#102d50] px-5 text-[9px] font-bold text-white transition-all duration-300 hover:bg-[#1c517a]"
                >
                  Subscribe

                  <Send
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>

              <Mail
                size={54}
                strokeWidth={0.8}
                className="absolute bottom-3 right-7 rotate-[-16deg] text-[#d8e7ea]"
              />
            </motion.div>

          </div>
        </section>

        {/* =========================================================
            CTA SECTION
        ========================================================== */}
        <section
          className="relative isolate overflow-hidden bg-[#05294a] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgcta})`,
          }}
        >
          <div className="absolute inset-0 -z-10 bg-[#062846]/20" />

          <div className="mx-auto flex min-h-[145px] w-[min(1120px,calc(100%-32px))] flex-col items-start justify-center gap-6 py-7 sm:w-[min(1120px,calc(100%-48px))] md:flex-row md:items-center md:justify-between md:py-5">

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[17px] font-extrabold tracking-[0.03em] text-white sm:text-[20px]">
                BE PART OF A GLOBAL MOVEMENT
              </h2>

              <p className="mt-3 max-w-[575px] text-[10px] font-medium leading-[1.65] text-white/85 sm:text-[11px]">
                Join researchers, experts and institutions worldwide
                <br className="hidden sm:block" />
                in driving knowledge, innovation and sustainable impact.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex h-[48px] min-w-[185px] items-center justify-center gap-4 rounded-[5px] border border-white/80 bg-white/[0.03] px-7 text-[11px] font-semibold text-white backdrop-blur-[1px] transition-colors duration-300 hover:bg-white hover:text-[#113b56]"
            >
              Join Us Today

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </motion.button>

          </div>
        </section>

        {/* =========================================================
            INDEXED DATABASES
        ========================================================== */}
        <section className="bg-white py-8 sm:py-10">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-[10px] font-extrabold tracking-[0.04em] text-[#315173]"
            >
              INDEXED IN LEADING DATABASES
            </motion.h2>

            <div className="mt-7 grid grid-cols-2 items-center gap-x-5 gap-y-8 text-center sm:grid-cols-4 lg:grid-cols-7">

              {/* Scopus */}
              <motion.div
                whileHover={{ y: -4 }}
                className="text-[18px] font-medium text-[#ef791d]"
              >
                Scopus
                <sup className="ml-0.5 text-[7px]">®</sup>
              </motion.div>

              {/* Clarivate */}
              <motion.div
                whileHover={{ y: -4 }}
                className="text-[10px] font-bold leading-[1.15] text-[#252525]"
              >
                Clarivate
                <br />
                <span className="text-[9px] font-semibold">
                  Web of Science
                </span>
              </motion.div>

              {/* DOAJ */}
              <motion.div
                whileHover={{ y: -4 }}
                className="text-[17px] font-extrabold tracking-tight text-[#292929]"
              >
                DOAJ
              </motion.div>

              {/* CAS */}
              <motion.div
                whileHover={{ y: -4 }}
                className="text-[19px] font-extrabold italic text-[#31729c]"
              >
                CAS
              </motion.div>

              {/* Dimensions */}
              <motion.div
                whileHover={{ y: -4 }}
                className="text-[12px] font-semibold text-[#777e88]"
              >
                ◈ Dimensions
              </motion.div>

              {/* Crossref */}
              <motion.div
                whileHover={{ y: -4 }}
                className="text-[15px] font-bold text-[#464646]"
              >
                <span className="mr-1 text-[#f15c2b]">◆</span>
                Crossref
              </motion.div>

              {/* Google */}
              <motion.div
                whileHover={{ y: -4 }}
                className="whitespace-nowrap text-[17px] font-medium tracking-[-0.04em]"
              >
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>
              </motion.div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}