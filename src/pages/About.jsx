import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  CircleDot,
  Database,
  FileText,
  Gem,
  Globe2,
  Landmark,
  LockKeyhole,
  Network,
  ShieldCheck,
  Target,
  Users,
    Activity,
  Atom,
  Boxes,
  Building2,
  Eye,
  Sun,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutBg from "../assets/img/aboutBG.png";
import whoAreWe from "../assets/img/whoAreWe.png";
import focus from "../assets/img/focus.png";
import commitment from "../assets/img/commitment.png";
import cta from "../assets/img/aboutCta.png";
import scopusLogo from "../assets/img/scopus.png";
import clarivateLogo from "../assets/img/clarivate.png";
import doajLogo from "../assets/img/doaj.png";
import casLogo from "../assets/img/cas.png";
import dimensionsLogo from "../assets/img/dimensions.png";
import crossrefLogo from "../assets/img/crossref.png";
import googleScholarLogo from "../assets/img/google-scholar.png";

export default function About() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden bg-white pt-[70px] font-sans text-[#071b3d] sm:pt-[75px]">
        {/* ==================== HERO SECTION ==================== */}
        <section
          className="relative isolate min-h-[360px] overflow-hidden bg-[#031a3e] bg-cover bg-[72%_center] bg-no-repeat sm:min-h-[380px] sm:bg-[68%_center] lg:min-h-[410px] lg:bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03152f]/95 via-[#031a3e]/58 to-transparent sm:via-[#031a3e]/28 lg:via-transparent" />

          <div className="mx-auto flex min-h-[360px] w-[min(1120px,calc(100%-32px))] items-center py-12 sm:min-h-[380px] sm:w-[min(1120px,calc(100%-48px))] lg:min-h-[410px]">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="w-full max-w-[440px] text-white"
            >
              <h1 className="text-[34px] font-[600] uppercase leading-none tracking-[-0.02em] sm:text-[36px] lg:text-[38px]">
                About Us
              </h1>
              <div className="mt-6 h-[3px] w-12 rounded-full bg-[#8fc63f]" />
              <p className="mt-6 w-full max-w-[380px] text-[14px] font-medium leading-6 text-white/95 sm:text-[16px] sm:leading-7">
                Global Reviews Press is an international publishing company
                committed to advancing knowledge through high-quality,
                peer-reviewed journals and magazines in{" "}
                <span className="font-semibold text-[#24b8eb]">
                  Engineering
                </span>
                , <span className="font-semibold text-[#8fc63f]">Medicine</span>{" "}
                and{" "}
                <span className="font-semibold text-[#8fc63f]">
                  Sustainability
                </span>
                .
              </p>
            </motion.div>
          </div>
        </section>

        {/* ==================== MISSION, VISION, VALUES ==================== */}
        <section className="bg-[#f8fafc] pt-0 pb-5">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <div className="grid overflow-hidden rounded-[7px] border border-[#dfe5ed] bg-white shadow-[0_8px_24px_rgba(4,28,61,0.06)] md:grid-cols-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -5, backgroundColor: "#f8fbff" }}
                transition={{ duration: 0.4 }}
                className="flex min-h-[126px] min-w-0 items-start gap-4 border-b border-[#e1e6ed] p-5 md:border-b-0 md:border-r lg:px-7"
              >
                <div className="grid size-[54px] shrink-0 place-items-center rounded-full border border-[#d8e0ea] text-[#103276]">
                  <Target size={35} strokeWidth={1.7} />
                </div>
                <div>
                  <h2 className="text-[15px] font-[600] uppercase tracking-wide text-[#09235a]">
                    Our Mission
                  </h2>
                  <p className="mt-2 text-[13px] leading-5 text-[#26364c]">
                    To publish influential research and reviews that drive
                    innovation, inform policy, and improve lives worldwide.
                  </p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -5, backgroundColor: "#f8fff9" }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="flex min-h-[126px] min-w-0 items-start gap-4 border-b border-[#e1e6ed] p-5 md:border-b-0 md:border-r lg:px-7"
              >
                <div className="grid size-[54px] shrink-0 place-items-center rounded-full border border-[#b8dcbf] text-[#35a24a]">
                  <CircleDot size={35} strokeWidth={1.7} />
                </div>
                <div>
                  <h2 className="text-[15px] font-[600] uppercase tracking-wide text-[#09235a]">
                    Our Vision
                  </h2>
                  <p className="mt-2 text-[13px] leading-5 text-[#26364c]">
                    To be a global leader in scholarly publishing, recognized
                    for quality, integrity, and impact.
                  </p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -5, backgroundColor: "#f8fbff" }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="flex min-h-[126px] min-w-0 items-start gap-4 p-5 lg:px-7"
              >
                <div className="grid size-[54px] shrink-0 place-items-center rounded-full border border-[#d8e0ea] text-[#103276]">
                  <Gem size={35} strokeWidth={1.7} />
                </div>
                <div>
                  <h2 className="text-[15px] font-[600] uppercase tracking-wide text-[#09235a]">
                    Our Values
                  </h2>
                  <p className="mt-2 text-[13px] leading-5 text-[#26364c]">
                    Integrity, Quality, Innovation, Inclusivity, Sustainability
                    and Global Collaboration.
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* ==================== WHO WE ARE ==================== */}
        <section className="pt-[0px] pb-8">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-8 sm:w-[min(1120px,calc(100%-48px))] sm:gap-9 lg:grid-cols-[0.98fr_1.05fr] lg:gap-11">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65 }}
              className="group min-w-0 overflow-hidden rounded-[7px] shadow-[0_12px_32px_rgba(3,24,55,0.14)]"
            >
              <img
                src={whoAreWe}
                alt="Global Reviews Press headquarters"
                className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.035] min-[480px]:h-[330px] sm:h-[378px] lg:h-[398px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65 }}
              className="min-w-0"
            >
              <p className="text-[13px] pt-2  font-[550] uppercase tracking-[0.04em] text-[#278642]">
                Who We Are
              </p>
              <div className="mt-1 h-[2px] w-10 bg-[#52ac59]" />
              <h2 className="mt-3 max-w-[510px] text-[26px] font-[600] leading-[1.14] tracking-[-0.02em] text-[#09235a] sm:text-[28px]">
                Advancing Knowledge.
                <br />
                Empowering the Future.
              </h2>
              <p className="mt-4 text-[14px] leading-6 text-[#34435a]">
                Global Reviews Press is an international, independent publisher
                of peer-reviewed journals and magazines in the fields of
                Engineering, Medicine and Sustainability. We provide a trusted
                platform for researchers, professionals and institutions to
                share groundbreaking discoveries, comprehensive reviews and
                multidisciplinary insights that shape a better future.
              </p>

              <div className="mt-6 grid gap-x-6 gap-y-6 sm:grid-cols-2">
                <div className="flex gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[#d7e2dc] text-[#239047]">
                    <Globe2 size={24} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-[550] text-[#09235a]">
                      International Presence
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-[1.55] text-[#4a576b]">
                      Connecting researchers and readers in 120+ countries.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[#d7e2dc] text-[#239047]">
                    <ShieldCheck size={24} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-[550] text-[#09235a]">
                      Quality &amp; Integrity
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-[1.55] text-[#4a576b]">
                      Rigorous peer review and ethical publishing standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[#d7e2dc] text-[#239047]">
                    <LockKeyhole size={23} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-[550] text-[#09235a]">
                      Open Access Options
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-[1.55] text-[#4a576b]">
                      Wider dissemination and greater visibility for research.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[#d7e2dc] text-[#243c88]">
                    <Network size={23} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-[550] text-[#09235a]">
                      Multidisciplinary Scope
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-[1.55] text-[#4a576b]">
                      Covering emerging and established fields across critical
                      domains.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== STATISTICS ==================== */}
        <section className="bg-[#052656] py-7 text-white sm:py-8">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] grid-cols-1 gap-x-3 gap-y-7 min-[360px]:grid-cols-2 sm:w-[min(1120px,calc(100%-48px))] md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
            <motion.div
              whileHover={{ y: -5 }}
              className="flex min-w-0 items-center justify-start gap-3 px-3 min-[480px]:justify-center lg:border-r lg:border-white/20"
            >
              <BookOpen size={35} strokeWidth={1.5} />
              <div>
                <h4 className="font-[550] text-[23px] leading-none text-[#f2ed2f]">
                  20+
                </h4>
                <span className="mt-2 block text-[10.5px] leading-4">
                  Journals &amp;
                  <br />
                  Magazines
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex min-w-0 items-center justify-start gap-3 px-3 min-[480px]:justify-center md:border-r md:border-white/20"
            >
              <FileText size={35} strokeWidth={1.5} />
              <div>
                <h4 className="font-[550] text-[23px] leading-none text-[#f2ed2f]">
                  15,000+
                </h4>
                <span className="mt-2 block text-[10.5px] leading-4">
                  Articles
                  <br />
                  Published
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex min-w-0 items-center justify-start gap-3 px-3 min-[480px]:justify-center lg:border-r lg:border-white/20"
            >
              <Users size={35} strokeWidth={1.5} />
              <div>
                <h4 className="font-[550] text-[23px] leading-none text-[#f2ed2f]">
                  5,000+
                </h4>
                <span className="mt-2 block text-[10.5px] leading-4">
                  Global Authors
                  <br />
                  &amp; Editors
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex min-w-0 items-center justify-start gap-3 px-3 min-[480px]:justify-center md:border-r md:border-white/20"
            >
              <Globe2 size={35} strokeWidth={1.5} />
              <div>
                <h4 className="font-[550] text-[23px] leading-none text-[#f2ed2f]">
                  120+
                </h4>
                <span className="mt-2 block text-[10.5px] leading-4">
                  Countries
                  <br />
                  Reached
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex min-w-0 items-center justify-start gap-3 px-3 min-[480px]:justify-center lg:border-r lg:border-white/20"
            >
              <Database size={35} strokeWidth={1.5} />
              <div>
                <h4 className="font-[550] text-[23px] leading-none text-[#f2ed2f]">
                  50+
                </h4>
                <span className="mt-2 block text-[10.5px] leading-4">
                  Indexing &amp;
                  <br />
                  Abstracting DBs
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex min-w-0 items-center justify-start gap-3 px-3 min-[480px]:justify-center"
            >
              <Landmark size={35} strokeWidth={1.5} />
              <div>
                <h4 className="font-[550] text-[23px] leading-none text-[#f2ed2f]">
                  100+
                </h4>
                <span className="mt-2 block text-[10.5px] leading-4">
                  Institutional
                  <br />
                  Partners
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== OUR FOCUS ==================== */}
        <section className="py-5 sm:py-5 lg:py-5">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] overflow-hidden rounded-[7px] bg-[#f7f8fa] shadow-[0_5px_18px_rgba(4,25,56,0.07)] sm:w-[min(1120px,calc(100%-48px))] lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="min-w-0 p-5 min-[480px]:p-7 sm:p-9 lg:p-8"
            >
              <p className="text-[12px] font-[550] uppercase tracking-[0.04em] text-[#278642]">
                Our Focus
              </p>
              <div className="mt-1 h-[2px] w-9 bg-[#52ac59]" />
              <h2 className="mt-4 text-[24px] font-[600] leading-tight text-[#09235a] sm:text-[26px]">
                Research. Reviews. Real Impact.
              </h2>
              <p className="mt-4 text-[13px] leading-6 text-[#3f4b5c]">
                We publish authoritative reviews and original research that
                accelerate innovation and address real-world challenges.
              </p>
              <div className="mt-4 space-y-2 text-[12px] font-medium text-[#28384d]">
                <p className="flex items-center gap-3">
                  <span className="grid size-[19px] place-items-center rounded-full border border-[#38a453] text-[#278642]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  High-quality, peer-reviewed publications
                </p>
                <p className="flex items-center gap-3">
                  <span className="grid size-[19px] place-items-center rounded-full border border-[#38a453] text-[#278642]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  Rapid and transparent editorial processes
                </p>
                <p className="flex items-center gap-3">
                  <span className="grid size-[19px] place-items-center rounded-full border border-[#38a453] text-[#278642]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  Global reach and visibility
                </p>
                <p className="flex items-center gap-3">
                  <span className="grid size-[19px] place-items-center rounded-full border border-[#38a453] text-[#278642]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  Commitment to sustainability and ethical research
                </p>
              </div>
              <motion.a
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                href="/journals"
                className="mt-5 inline-flex w-full items-center justify-center gap-4 rounded-[4px] bg-[#062553] px-4 py-3 text-[12px] font-[550] text-white shadow-md transition-colors hover:bg-[#0b3b7a] min-[430px]:w-auto"
              >
                Explore Our Journals <ArrowRight size={17} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group min-h-[240px] min-w-0 overflow-hidden rounded-[7px] min-[480px]:min-h-[300px] lg:min-h-[340px]"
            >
              <img
                src={focus}
                alt="Researchers working in a global library"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
              />
            </motion.div>
          </div>
        </section>

        {/* ==================== OUR COMMITMENT ==================== */}
        <section className="pb-5 sm:pb-7 lg:pb-8">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] overflow-hidden rounded-[7px] bg-white shadow-[0_5px_18px_rgba(4,25,56,0.07)] sm:w-[min(1120px,calc(100%-48px))] lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group min-h-[240px] min-w-0 overflow-hidden rounded-[7px] min-[480px]:min-h-[290px] lg:min-h-[330px]"
            >
              <img
                src={commitment}
                alt="Sustainable publishing commitment"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="min-w-0 p-5 sm:p-6 lg:p-6"
            >
              <p className="text-[12px] font-[550] uppercase tracking-[0.04em] text-[#278642]">
                Our Commitment
              </p>
              <div className="mt-1 h-[2px] w-9 bg-[#52ac59]" />
              <h2 className="mt-3 text-[24px] font-[600] leading-tight text-[#09235a] sm:text-[26px]">
                Sustainable Publishing for a Better World
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-[#3f4b5c]">
                We are committed to responsible publishing practices that
                minimize our environmental footprint and support the UN
                Sustainable Development Goals.
              </p>
             {/* ==================== SDG GOALS ==================== */}
<div className="mt-6 grid grid-cols-3 justify-items-center gap-2 min-[480px]:grid-cols-4 sm:grid-cols-7 lg:gap-2.5">
  {/* GOAL 3 */}
  <motion.div
    whileHover={{ y: -5, scale: 1.04 }}
    transition={{ duration: 0.25 }}
    className="relative aspect-[0.92] w-full max-w-[84px] overflow-hidden rounded-[4px] bg-[#4c9f38] p-2 text-white shadow-[0_4px_10px_rgba(0,0,0,0.16)]"
  >
    <div className="flex items-start gap-1">
      <span className="text-[18px] font-[550] leading-none">3</span>

      <p className="text-[6px] font-[600] uppercase leading-[1.15]">
        Good Health
        <br />
        and Well-Being
      </p>
    </div>

    <div className="absolute inset-x-0 bottom-2 flex justify-center">
      <Activity size={31} strokeWidth={2.2} />
    </div>
  </motion.div>

  {/* GOAL 4 */}
  <motion.div
    whileHover={{ y: -5, scale: 1.04 }}
    transition={{ duration: 0.25 }}
    className="relative aspect-[0.92] w-full max-w-[84px] overflow-hidden rounded-[4px] bg-[#c5192d] p-2 text-white shadow-[0_4px_10px_rgba(0,0,0,0.16)]"
  >
    <div className="flex items-start gap-1">
      <span className="text-[18px] font-[550] leading-none">4</span>

      <p className="text-[6px] font-[600] uppercase leading-[1.15]">
        Quality
        <br />
        Education
      </p>
    </div>

    <div className="absolute inset-x-0 bottom-2 flex justify-center">
      <BookOpen size={31} strokeWidth={2} />
    </div>
  </motion.div>

  {/* GOAL 7 */}
  <motion.div
    whileHover={{ y: -5, scale: 1.04 }}
    transition={{ duration: 0.25 }}
    className="relative aspect-[0.92] w-full max-w-[84px] overflow-hidden rounded-[4px] bg-[#fcc30b] p-2 text-white shadow-[0_4px_10px_rgba(0,0,0,0.16)]"
  >
    <div className="flex items-start gap-1">
      <span className="text-[18px] font-[550] leading-none">7</span>

      <p className="text-[6px] font-[600] uppercase leading-[1.15]">
        Affordable and
        <br />
        Clean Energy
      </p>
    </div>

    <div className="absolute inset-x-0 bottom-2 flex justify-center">
      <Sun size={32} strokeWidth={2} />
    </div>
  </motion.div>

  {/* GOAL 9 */}
  <motion.div
    whileHover={{ y: -5, scale: 1.04 }}
    transition={{ duration: 0.25 }}
    className="relative aspect-[0.92] w-full max-w-[84px] overflow-hidden rounded-[4px] bg-[#fd6925] p-2 text-white shadow-[0_4px_10px_rgba(0,0,0,0.16)]"
  >
    <div className="flex items-start gap-1">
      <span className="text-[18px] font-[550] leading-none">9</span>

      <p className="text-[5.5px] font-[600] uppercase leading-[1.12]">
        Industry, Innovation
        <br />
        and Infrastructure
      </p>
    </div>

    <div className="absolute inset-x-0 bottom-2 flex justify-center">
      <Boxes size={31} strokeWidth={2} />
    </div>
  </motion.div>

  {/* GOAL 11 */}
  <motion.div
    whileHover={{ y: -5, scale: 1.04 }}
    transition={{ duration: 0.25 }}
    className="relative aspect-[0.92] w-full max-w-[84px] overflow-hidden rounded-[4px] bg-[#fd9d24] p-2 text-white shadow-[0_4px_10px_rgba(0,0,0,0.16)]"
  >
    <div className="flex items-start gap-1">
      <span className="text-[18px] font-[550] leading-none">11</span>

      <p className="text-[5.5px] font-[600] uppercase leading-[1.12]">
        Sustainable Cities
        <br />
        and Communities
      </p>
    </div>

    <div className="absolute inset-x-0 bottom-2 flex justify-center">
      <Building2 size={31} strokeWidth={2} />
    </div>
  </motion.div>

  {/* GOAL 13 */}
  <motion.div
    whileHover={{ y: -5, scale: 1.04 }}
    transition={{ duration: 0.25 }}
    className="relative aspect-[0.92] w-full max-w-[84px] overflow-hidden rounded-[4px] bg-[#3f7e44] p-2 text-white shadow-[0_4px_10px_rgba(0,0,0,0.16)]"
  >
    <div className="flex items-start gap-1">
      <span className="text-[18px] font-[550] leading-none">13</span>

      <p className="text-[6px] font-[600] uppercase leading-[1.15]">
        Climate
        <br />
        Action
      </p>
    </div>

    <div className="absolute inset-x-0 bottom-2 flex justify-center">
      <Eye size={31} strokeWidth={2} />
    </div>
  </motion.div>

  {/* GOAL 17 */}
  <motion.div
    whileHover={{ y: -5, scale: 1.04 }}
    transition={{ duration: 0.25 }}
    className="relative aspect-[0.92] w-full max-w-[84px] overflow-hidden rounded-[4px] bg-[#19486a] p-2 text-white shadow-[0_4px_10px_rgba(0,0,0,0.16)]"
  >
    <div className="flex items-start gap-1">
      <span className="text-[18px] font-[550] leading-none">17</span>

      <p className="text-[5.5px] font-[600] uppercase leading-[1.12]">
        Partnerships
        <br />
        for the Goals
      </p>
    </div>

    <div className="absolute inset-x-0 bottom-2 flex justify-center">
      <Atom size={32} strokeWidth={2} />
    </div>
  </motion.div>
</div>
            </motion.div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section
          className="relative isolate overflow-hidden bg-[#062b60] bg-cover bg-center bg-no-repeat py-8 text-white sm:py-7"
          style={{ backgroundImage: `url(${cta})` }}
        >
          <div className="absolute inset-0 -z-10 bg-[#03275a]/38" />
          <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col items-start justify-between gap-6 sm:w-[min(1120px,calc(100%-48px))] md:flex-row md:items-center">
            <motion.h2
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-[460px] text-[16px] font-[550] leading-[1.35] sm:text-[18px]"
            >
              Together, let&apos;s advance knowledge and
              <br className="hidden sm:block" /> create a positive impact for
              future generations.
            </motion.h2>
            <motion.a
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true }}
              href="/contact"
              className="flex w-full items-center justify-center gap-6 rounded-[5px] border border-white px-4 py-3 text-[12px] font-[550] min-[430px]:w-auto min-[430px]:min-w-[200px]"
            >
              Join Us in Our Mission <ArrowRight size={20} />
            </motion.a>
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
