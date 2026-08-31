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
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutBg from "../assets/img/aboutBG.png";
import whoAreWe from "../assets/img/whoAreWe.png";
import focus from "../assets/img/focus.png";
import commitment from "../assets/img/commitment.png";
import cta from "../assets/img/aboutCta.png";

export default function About() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden bg-white font-sans text-[#071b3d] pt-[75px]">
        {/* ==================== HERO SECTION ==================== */}
        <section
          className="relative isolate min-h-[360px] overflow-hidden bg-[#031a3e] bg-cover bg-[68%_center] bg-no-repeat sm:min-h-[380px] lg:min-h-[410px] lg:bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03152f]/95 via-[#031a3e]/58 to-transparent sm:via-[#031a3e]/28 lg:via-transparent" />

          <div className="mx-auto flex min-h-[360px] w-[min(1120px,calc(100%-32px))] items-center py-12 sm:min-h-[380px] sm:w-[min(1120px,calc(100%-48px))] lg:min-h-[410px]">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="max-w-[440px] text-white"
            >
              <h1 className="text-[34px] font-[600] uppercase leading-none tracking-[-0.02em] sm:text-[36px] lg:text-[38px]">
                About Us
              </h1>
              <div className="mt-6 h-[3px] w-12 rounded-full bg-[#8fc63f]" />
              <p className="mt-6 text-[14px] font-medium leading-7 text-white/95 sm:text-[16px] w-[380px]">
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
                className="flex min-h-[126px] items-start gap-4 border-b border-[#e1e6ed] p-5 md:border-b-0 md:border-r lg:px-7"
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
                className="flex min-h-[126px] items-start gap-4 border-b border-[#e1e6ed] p-5 md:border-b-0 md:border-r lg:px-7"
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
                className="flex min-h-[126px] items-start gap-4 p-5 lg:px-7"
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
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-9 sm:w-[min(1120px,calc(100%-48px))] lg:grid-cols-[0.98fr_1.05fr] lg:gap-11">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65 }}
              className="group overflow-hidden rounded-[7px] shadow-[0_12px_32px_rgba(3,24,55,0.14)]"
            >
              <img
                src={whoAreWe}
                alt="Global Reviews Press headquarters"
                className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-[1.035] sm:h-[378px] lg:h-[398px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-[13px] pt-2  font-[550] uppercase tracking-[0.04em] text-[#278642]">
                Who We Are
              </p>
              <div className="mt-1 h-[2px] w-10 bg-[#52ac59]" />
              <h2 className="mt-3 max-w-[510px] text-[26px] font-[600] leading-[1.14] tracking-[-0.02em] text-[#09235a] sm:text-[28]px]">
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
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] grid-cols-2 gap-y-8 sm:w-[min(1120px,calc(100%-48px))] md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center justify-center gap-3 px-3 lg:border-r lg:border-white/20"
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
              className="flex items-center justify-center gap-3 px-3 md:border-r md:border-white/20"
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
              className="flex items-center justify-center gap-3 px-3 lg:border-r lg:border-white/20"
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
              className="flex items-center justify-center gap-3 px-3 md:border-r md:border-white/20"
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
              className="flex items-center justify-center gap-3 px-3 lg:border-r lg:border-white/20"
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
              className="flex items-center justify-center gap-3 px-3"
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
              className="p-7 sm:p-9 lg:p-8"
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
                className="mt-5 inline-flex items-center gap-4 rounded-[4px] bg-[#062553] px-4 py-3 text-[12px] font-[550] text-white shadow-md transition-colors hover:bg-[#0b3b7a]"
              >
                Explore Our Journals <ArrowRight size={17} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group min-h-[300px] overflow-hidden lg:min-h-[340px] rounded-[7px]"
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
              className="group min-h-[290px] overflow-hidden rounded-[7px] lg:min-h-[330px]"
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
              className="p-5 sm:p-5 lg:p-6"
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
              <div className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-7">
                <div className="grid aspect-square place-items-center rounded-[4px] bg-[#4c9f38] p-1 text-center text-[8px] font-bold leading-tight text-white">
                  3<br />
                  GOOD HEALTH
                </div>
                <div className="grid aspect-square place-items-center rounded-[4px] bg-[#c5192d] p-1 text-center text-[8px] font-bold leading-tight text-white">
                  4<br />
                  QUALITY EDUCATION
                </div>
                <div className="grid aspect-square place-items-center rounded-[4px] bg-[#fcc30b] p-1 text-center text-[8px] font-bold leading-tight text-white">
                  7<br />
                  CLEAN ENERGY
                </div>
                <div className="grid aspect-square place-items-center rounded-[4px] bg-[#fd6925] p-1 text-center text-[8px] font-bold leading-tight text-white">
                  9<br />
                  INNOVATION
                </div>
                <div className="grid aspect-square place-items-center rounded-[4px] bg-[#fd9d24] p-1 text-center text-[8px] font-bold leading-tight text-white">
                  11
                  <br />
                  SUSTAINABLE CITIES
                </div>
                <div className="grid aspect-square place-items-center rounded-[4px] bg-[#3f7e44] p-1 text-center text-[8px] font-bold leading-tight text-white">
                  13
                  <br />
                  CLIMATE ACTION
                </div>
                <div className="grid aspect-square place-items-center rounded-[4px] bg-[#19486a] p-1 text-center text-[8px] font-bold leading-tight text-white">
                  17
                  <br />
                  PARTNERSHIPS
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section
          className="relative isolate overflow-hidden bg-[#062b60] bg-cover bg-center bg-no-repeat py-8 text-white sm:py-10"
          style={{ backgroundImage: `url(${cta})` }}
        >
          <div className="absolute inset-0 -z-10 bg-[#03275a]/38" />
          <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col items-start justify-between gap-6 sm:w-[min(1120px,calc(100%-48px))] md:flex-row md:items-center">
            <motion.h2
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-[560px] text-[21px] font-semibold leading-[1.35] sm:text-[24px]"
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
              className="flex min-w-[270px] items-center justify-center gap-6 rounded-[5px] border border-white px-7 py-4 text-[16px] font-semibold"
            >
              Join Us in Our Mission <ArrowRight size={20} />
            </motion.a>
          </div>
        </section>

        {/* ==================== INDEXING SECTION ==================== */}
        <section className="bg-white py-9 sm:py-11">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] text-center sm:w-[min(1120px,calc(100%-48px))]">
            <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-[#09235a] sm:text-[17px]">
              Indexed in Leading Databases
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
              <span className="text-[27px] font-medium text-[#f47b20]">
                Scopus
              </span>
              <span className="text-[15px] font-extrabold leading-tight text-[#252525]">
                Clarivate™
                <br />
                Web of Science™
              </span>
              <span className="text-[27px] font-bold text-[#242424]">DOAJ</span>
              <span className="text-[29px] font-extrabold text-[#254fa1]">
                CAS
              </span>
              <span className="text-[21px] font-light text-[#676767]">
                Dimensions
              </span>
              <span className="text-[20px] font-semibold text-[#555]">
                Crossref
              </span>
              <span className="text-[20px] font-semibold">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>{" "}
                <span className="text-[#4285f4]">Scholar</span>
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
