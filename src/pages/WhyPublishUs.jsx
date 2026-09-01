import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChartNoAxesCombined,
  ChevronRight,
  CircleCheckBig,
  ClipboardList,
  FileText,
  Globe2,
  Leaf,
  Lightbulb,
  LockKeyhole,
  Puzzle,
  Quote,
  Search,
  ShieldCheck,
  SquarePen,
  Timer,
  Trophy,
  Upload,
  Users,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pubBg from "../assets/img/why-publish-with-global-reviews-press-hero.webp";
import pubCta from "../assets/img/submit-manuscript-global-reviews-press-cta.webp";
import c1 from "../assets/img/rigorous-double-blind-peer-review.webp";
import c2 from "../assets/img/global-research-publication-reach.webp";
import c3 from "../assets/img/open-access-publishing-options.webp";
import c4 from "../assets/img/research-visibility-and-citation-impact.webp";
import c5 from "../assets/img/multidisciplinary-research-publishing-platform.webp";
import c6 from "../assets/img/efficient-academic-publication-process.webp";
import c7 from "../assets/img/dedicated-research-author-support.webp";
import c8 from "../assets/img/ethical-scholarly-publishing-standards.webp";
import c9 from "../assets/img/sustainable-development-research-publishing.webp";
import c10 from "../assets/img/trusted-global-academic-publishing-partner.webp";
import scopusLogo from "../assets/img/scopus-indexing-database-logo.webp";
import clarivateLogo from "../assets/img/clarivate-web-of-science-logo.webp";
import doajLogo from "../assets/img/directory-of-open-access-journals-doaj-logo.webp";
import casLogo from "../assets/img/chemical-abstracts-service-cas-logo.webp";
import dimensionsLogo from "../assets/img/dimensions-research-indexing-logo.webp";
import crossrefLogo from "../assets/img/crossref-doi-registration-agency-logo.webp";
import googleScholarLogo from "../assets/img/google-scholar-academic-indexing-logo.webp";

const benefits = [
  {
    title: "Global Visibility",
    description: "Reach a worldwide audience",
    icon: Globe2,
    color: "#173f78",
  },
  {
    title: "Publication Excellence",
    description: "Rigorous peer review and editorial standards",
    icon: ShieldCheck,
    color: "#173f78",
  },
  {
    title: "Open Access Options",
    description: "Increase accessibility and citations",
    icon: LockKeyhole,
    color: "#4c9137",
  },
  {
    title: "Impactful Research",
    description: "Create real-world impact in research",
    icon: ChartNoAxesCombined,
    color: "#173f78",
  },
  {
    title: "Author Support",
    description: "Dedicated support at every step",
    icon: Users,
    color: "#173f78",
  },
];

const reasons = [
  {
    title: "Rigorous Peer Review",
    description:
      "Double-blind peer review by experts ensures the highest standards of quality.",
    image: c1,
    icon: Puzzle,
    color: "#174a94",
  },
  {
    title: "Global Reach",
    description:
      "Your research is visible to a global audience across 120+ countries and regions.",
    image: c2,
    icon: Globe2,
    color: "#168b91",
  },
  {
    title: "Open Access Options",
    description:
      "Flexible Open Access and hybrid options to maximize accessibility and impact.",
    image: c3,
    icon: LockKeyhole,
    color: "#4c9137",
  },
  {
    title: "High Visibility & Citations",
    description:
      "Indexed in leading databases to enhance discoverability and citations.",
    image: c4,
    icon: ChartNoAxesCombined,
    color: "#65379a",
  },
  {
    title: "Multidisciplinary Platform",
    description:
      "A wide scope covering Engineering, Medicine, Sustainability and emerging technologies.",
    image: c5,
    icon: Lightbulb,
    color: "#d49a00",
  },
  {
    title: "Efficient Publication",
    description:
      "Streamlined processes for faster review, decision and publication without compromising quality.",
    image: c6,
    icon: Timer,
    color: "#168b91",
  },
  {
    title: "Author Support",
    description: "Dedicated support from submission to publication and beyond.",
    image: c7,
    icon: Users,
    color: "#ce3d74",
  },
  {
    title: "Ethical Publishing",
    description:
      "Upholding the highest standards of publication ethics and research integrity.",
    image: c8,
    icon: FileText,
    color: "#ed6b12",
  },
  {
    title: "Sustainability Focus",
    description:
      "Advancing research that contributes to the UN Sustainable Development Goals.",
    image: c9,
    icon: Leaf,
    color: "#4c9137",
  },
  {
    title: "Trusted Partner",
    description:
      "Collaborating with institutions, organizations and researchers worldwide.",
    image: c10,
    icon: Trophy,
    color: "#174a94",
  },
];

const processSteps = [
  {
    step: "STEP 1",
    title: "Submit",
    description: "Submit your manuscript through our easy online system.",
    icon: Upload,
    color: "#092b61",
  },
  {
    step: "STEP 2",
    title: "Peer Review",
    description: "Rigorous peer review by experts in the relevant field.",
    icon: Search,
    color: "#16713c",
  },
  {
    step: "STEP 3",
    title: "Editorial Decision",
    description: "Timely decision with constructive feedback for improvement.",
    icon: ClipboardList,
    color: "#65379a",
  },
  {
    step: "STEP 4",
    title: "Revision",
    description: "Authors revise their manuscripts based on reviewer comments.",
    icon: SquarePen,
    color: "#ed6b12",
  },
  {
    step: "STEP 5",
    title: "Acceptance",
    description: "Final acceptance after successful revision and approval.",
    icon: CircleCheckBig,
    color: "#5f9f29",
  },
  {
    step: "STEP 6",
    title: "Publication",
    description: "Published online with DOI and indexed in leading databases.",
    icon: Globe2,
    color: "#1760ad",
  },
];

const testimonials = [
  {
    quote:
      "Global Reviews Press provided an excellent platform for our research. The review process was fair, timely and the editorial support was outstanding.",
    author: "Dr. Arvind Sharma",
    title: "Indian Institute of Technology, India",
    initials: "AS",
  },
  {
    quote:
      "The visibility and reach of our work increased significantly after publishing with Global Reviews Press. Highly recommended for quality publications.",
    author: "Prof. Maria Gonzalez",
    title: "University of Barcelona, Spain",
    initials: "MG",
  },
  {
    quote:
      "I appreciate the transparent process and the commitment to ethical publishing. Global Reviews Press is a trusted publishing partner.",
    author: "Dr. David Kim",
    title: "Seoul National University, South Korea",
    initials: "DK",
  },
];

export default function WhyPublishUs() {
  useWhyPublishUsSeo();

  const testimonialsPerPage = 3;
  const [testimonialPage, setTestimonialPage] = useState(0);

  const totalTestimonialPages = Math.ceil(
    testimonials.length / testimonialsPerPage,
  );

  const visibleTestimonials = testimonials.slice(
    testimonialPage * testimonialsPerPage,
    testimonialPage * testimonialsPerPage + testimonialsPerPage,
  );

  return (
    <>
      <Header />

      <main className="overflow-x-hidden bg-white pt-[70px] font-sans text-[#071b3d] sm:pt-[75px]">
        {/* ==================== HERO SECTION ==================== */}
        <section
          className="relative isolate min-h-[360px] overflow-hidden bg-[#031a3e] bg-cover bg-[72%_center] bg-no-repeat sm:min-h-[380px] sm:bg-[68%_center] lg:min-h-[410px] lg:bg-center"
          style={{ backgroundImage: `url(${pubBg})` }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03152f]/94 via-[#031a3e]/56 to-transparent sm:via-[#031a3e]/30 lg:via-transparent" />

          <div className="mx-auto flex min-h-[385px] w-[min(1120px,calc(100%-32px))] items-center py-12 sm:min-h-[405px] sm:w-[min(1120px,calc(100%-48px))] lg:min-h-[425px]">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="w-full max-w-[420px] text-white"
            >
              <h1 className="text-[27px] font-[600] uppercase leading-none tracking-[-0.02em] sm:text-[29px] lg:text-[32px]">
                Why Publish With Us
              </h1>
              <div className="mt-5 h-[2px] w-12 bg-[#8fc63f]" />
              <p className="mt-5 w-full max-w-[480px] text-[14px] font-medium leading-6 text-white/95 sm:text-[15px] sm:leading-7">
                Global Reviews Press provides the perfect platform to showcase
                your research to the world. We combine publication{" "}
                <span className="text-[#24b8eb]">excellence</span> with global{" "}
                <span className="text-[#8fc63f]">visibility</span> and real{" "}
                <span className="text-[#8fc63f]">impact</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ==================== BENEFITS STRIP ==================== */}
        <section className="border-b border-[#e1e7ee] bg-white py-5 sm:py-6">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] grid-cols-1 gap-y-5 min-[420px]:grid-cols-2 sm:w-[min(1120px,calc(100%-48px))] md:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.article
                  key={benefit.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                  className="flex min-h-[76px] items-center gap-4 px-3 lg:border-r lg:border-[#dfe5ec] lg:last:border-r-0"
                >
                  <Icon
                    size={39}
                    strokeWidth={1.55}
                    className="shrink-0"
                    style={{ color: benefit.color }}
                  />
                  <div>
                    <h2 className="text-[13px] font-[550] text-[#09235a]">
                      {benefit.title}
                    </h2>
                    <p className="mt-1 text-[11.5px] leading-5 text-[#425066]">
                      {benefit.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ==================== STATISTICS ==================== */}
        <section className="relative overflow-hidden bg-[#052656] py-7 text-white">
          <div className="pointer-events-none absolute -left-12 top-1/2 size-44 -translate-y-1/2 rounded-full border border-[#1684d2]/20" />
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] grid-cols-2 gap-y-7 sm:w-[min(1120px,calc(100%-48px))] md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
            <div className="px-3 text-center lg:border-r lg:border-white/20">
              <strong className="text-[24px] font-[550] text-[#9ade34]">
                20+
              </strong>
              <p className="mt-1 text-[12px] leading-5">
                Journals &amp;
                <br />
                Magazines
              </p>
            </div>
            <div className="px-3 text-center lg:border-r lg:border-white/20">
              <strong className="text-[24px] font-[550] text-[#9ade34]">
                15,000+
              </strong>
              <p className="mt-1 text-[12px] leading-5">
                Articles
                <br />
                Published
              </p>
            </div>
            <div className="px-3 text-center lg:border-r lg:border-white/20">
              <strong className="text-[24px] font-[550] text-[#9ade34]">
                5,000+
              </strong>
              <p className="mt-1 text-[12px] leading-5">
                Global Authors
                <br />
                &amp; Editors
              </p>
            </div>
            <div className="px-3 text-center lg:border-r lg:border-white/20">
              <strong className="text-[24px] font-[550] text-[#f1d732]">
                120+
              </strong>
              <p className="mt-1 text-[11px] leading-5">
                Countries
                <br />
                Reached
              </p>
            </div>
            <div className="px-3 text-center lg:border-r lg:border-white/20">
              <strong className="text-[24px] font-[550] text-[#f1d732]">
                50+
              </strong>
              <p className="mt-1 text-[12px] leading-5">
                Indexing &amp;
                <br />
                Abstracting Databases
              </p>
            </div>
            <div className="px-3 text-center">
              <strong className="text-[24px] font-[550] text-[#f1d732]">
                100+
              </strong>
              <p className="mt-1 text-[12px] leading-5">
                Institutional
                <br />
                Partners
              </p>
            </div>
          </div>
        </section>

        {/* ==================== REASONS ==================== */}
        <section className="bg-[#f8f9fb] py-9 sm:py-5">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[18px] font-[550] text-[#09235a] sm:text-[21px]">
                REASONS RESEARCHERS CHOOSE US
              </h2>
              <div className="mx-auto mt-2 h-[2px] w-10 bg-[#52ac59]" />
              <p className="mt-4 text-[14px] text-[#46546a]">
                Our commitment to quality and innovation sets us apart.
              </p>
            </motion.div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.article
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.14 }}
                    transition={{
                      duration: 0.44,
                      delay: index * 0.04,
                    }}
                    whileHover={{ y: -7 }}
                    className="group relative overflow-hidden rounded-[7px] border border-[#d9e1e9] bg-white shadow-[0_4px_14px_rgba(4,28,61,0.05)] hover:shadow-[0_14px_30px_rgba(4,28,61,0.14)]"
                  >
                    {/* ==================== CARD IMAGE ==================== */}
                    <div className="h-[128px] overflow-hidden">
                      <img
                        src={reason.image}
                        alt={reason.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                    </div>

                    {/* ==================== OVERLAPPING ICON ==================== */}
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.08 }}
                      className="absolute left-3 top-[107px] z-20 grid size-[43px] place-items-center rounded-full border-2 border-white text-white shadow-[0_4px_9px_rgba(3,28,64,0.25)]"
                      style={{
                        backgroundColor: reason.color,
                      }}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </motion.div>

                    {/* ==================== TEXT CONTENT ==================== */}
                    <div className="min-h-[132px] px-4 pb-2 pt-6 text-center">
                      <h3 className="text-[13px] font-[550] text-[#09235a]">
                        {reason.title}
                      </h3>

                      <p className="mt-2 text-[11px] leading-[1.55] text-[#425066]">
                        {reason.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== PUBLICATION PROCESS ==================== */}
        <section className="bg-white py-4 sm:py-4">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[18px] font-[550] text-[#09235a] sm:text-[21px]">
                OUR PUBLICATION PROCESS
              </h2>
              <div className="mx-auto mt-2 h-[2px] w-10 bg-[#52ac59]" />
            </motion.div>

            <div className="mt-7 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
              {processSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.step}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, delay: index * 0.07 }}
                    whileHover={{ y: -5 }}
                    className="relative flex flex-col items-center px-3 text-center"
                  >
                    <div
                      className="grid size-[56px] place-items-center rounded-full text-white shadow-md"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                    {index < processSteps.length - 1 && (
                      <ChevronRight
                        className="absolute -right-3 top-5 hidden text-[#09235a] lg:block"
                        size={19}
                      />
                    )}
                    <span className="mt-3 text-[10px] font-medium text-[#46546a]">
                      {item.step}
                    </span>
                    <h3 className="mt-1 text-[13px] font-[550] text-[#09235a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[150px] text-[11.5px] leading-[1.55] text-[#46546a]">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS ==================== */}
        <section className="bg-[#f8f9fb] py-7 sm:py-8">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[18px] font-[550] text-[#09235a] sm:text-[21px]">
                WHAT AUTHORS SAY
              </h2>

              <div className="mx-auto mt-2 h-[2px] w-10 bg-[#52ac59]" />
            </motion.div>

            {/* Testimonial Cards */}
            <motion.div
              key={testimonialPage}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6 grid gap-5 md:grid-cols-3"
            >
              {visibleTestimonials.map((item, index) => (
                <motion.article
                  key={`${testimonialPage}-${item.author}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.44,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="
            rounded-[7px]
            border
            border-[#dce3ea]
            bg-white
            p-5
            shadow-[0_4px_14px_rgba(4,28,61,0.04)]
            transition-shadow
            duration-300
            hover:shadow-[0_10px_25px_rgba(4,28,61,0.1)]
          "
                >
                  <Quote size={26} fill="#63a735" className="text-[#63a735]" />

                  <p className="mt-3 min-h-[76px] text-[12.5px] leading-[1.65] text-[#334258]">
                    {item.quote}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#173f78] text-[12px] font-[550] text-white">
                      {item.initials}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[12.5px] font-[550] text-[#09235a]">
                        {item.author}
                      </h3>

                      <p className="mt-1 text-[11.5px] text-[#536176]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Working Pagination Dots */}
            {totalTestimonialPages > 1 && (
              <div
                className="mt-5 flex items-center justify-center gap-2"
                role="navigation"
                aria-label="Testimonials pagination"
              >
                {Array.from({ length: totalTestimonialPages }).map(
                  (_, pageIndex) => (
                    <button
                      key={pageIndex}
                      type="button"
                      onClick={() => setTestimonialPage(pageIndex)}
                      aria-label={`Show testimonials page ${pageIndex + 1}`}
                      aria-current={
                        testimonialPage === pageIndex ? "page" : undefined
                      }
                      className={`
                h-2
                rounded-full
                transition-all
                duration-300
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#278642]
                focus-visible:ring-offset-2
                ${
                  testimonialPage === pageIndex
                    ? "w-6 bg-[#278642]"
                    : "w-2 bg-[#c4cbd3] hover:bg-[#76aa81]"
                }
              `}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </section>
        {/* ==================== CTA SECTION ==================== */}
        <section
          className="relative isolate overflow-hidden bg-[#052656] bg-cover bg-[18%_center] bg-no-repeat text-white sm:bg-center"
          style={{
            backgroundImage: `url(${pubCta})`,
          }}
        >
          {/* Mobile readability overlay */}
          {/* <div className="absolute inset-0 -z-10 bg-[#032451]/45 sm:bg-[#032451]/15" /> */}

          <div
            className="
      mx-auto
      flex
      min-h-[112px]
      w-[min(1120px,calc(100%-32px))]
      flex-col
      items-start
      justify-center
      gap-5
      py-5

      sm:w-[min(1120px,calc(100%-48px))]
      sm:min-h-[105px]

      md:flex-row
      md:items-center
      md:justify-between
      md:gap-8
      md:py-4
      md:pl-[245px]

      lg:min-h-[100px]
      lg:pl-[260px]
    "
          >
            {/* ==================== CTA CONTENT ==================== */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="max-w-[510px]"
            >
              <h2
                className="
          text-[18px]
          font-[550]
          leading-[1.3]
          tracking-[-0.01em]
          text-white

          sm:text-[20px]
          lg:text-[21px]
        "
              >
                Ready to share your research with the world?
              </h2>

              <p
                className="
          mt-1.5
          text-[11px]
          font-medium
          leading-5
          text-white/95

          sm:text-[12px]
          lg:text-[12.5px]
        "
              >
                Publish with{" "}
                <span className="font-semibold text-[#d9df31]">
                  Global Reviews Press
                </span>{" "}
                and make a lasting impact.
              </p>
            </motion.div>

            {/* ==================== CTA BUTTON ==================== */}
            <motion.a
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              whileHover={{
                y: -3,
                scale: 1.025,
                boxShadow: "0 10px 24px rgba(0,0,0,0.22)",
              }}
              whileTap={{ scale: 0.97 }}
              href="/submit-manuscript"
              className="
        group
        flex
        w-full
        items-center
        justify-center
        gap-4
        rounded-[4px]
        border
        border-[#dce2eb]
        bg-white
        px-4
        py-3
        text-[11px]
        font-semibold
        text-[#09235a]
        shadow-[0_4px_12px_rgba(0,0,0,0.16)]
        transition-colors
        hover:bg-[#f5f8fc]

        min-[430px]:w-auto
        min-[430px]:min-w-[205px]

        md:shrink-0
        lg:min-w-[215px]
      "
            >
              <span>Submit Your Manuscript</span>

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </section>

        {/* ==================== INDEXED DATABASES ==================== */}
        <section className="border-y border-[#edf1f4] bg-white py-4 sm:py-4">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <h2 className="text-center text-[18px] font-[550] text-[#09235a] sm:text-[21px]">
              INDEXED IN LEADING DATABASES
            </h2>
            <div className="mt-5 grid grid-cols-2 items-center justify-items-center gap-x-5 gap-y-7 min-[480px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 lg:gap-y-0">
              <img
                src={scopusLogo}
                alt="Scopus"
                className="max-h-10 max-w-[110px] object-contain"
              />
              <img
                src={clarivateLogo}
                alt="Clarivate Web of Science"
                className="max-h-10 max-w-[125px] object-contain"
              />
              <img
                src={doajLogo}
                alt="DOAJ"
                className="max-h-10 max-w-[120px] object-contain"
              />
              <img
                src={casLogo}
                alt="CAS"
                className="max-h-10 max-w-[100px] object-contain"
              />
              <img
                src={dimensionsLogo}
                alt="Dimensions"
                className="max-h-10 max-w-[120px] object-contain"
              />
              <img
                src={crossrefLogo}
                alt="Crossref"
                className="max-h-10 max-w-[110px] object-contain"
              />
              <img
                src={googleScholarLogo}
                alt="Google Scholar"
                className="col-span-2 max-h-10 max-w-[105px] object-contain min-[480px]:col-span-1"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   WHY PUBLISH WITH US PAGE SEO
========================================================= */
function useWhyPublishUsSeo() {
  useEffect(() => {
    const previousTitle = document.title;
    const pageUrl = "https://www.globalreviewspress.com/why-publish-us";
    const title = "Why Publish With Global Reviews Press | Author Benefits";
    const description =
      "Discover why researchers publish with Global Reviews Press, including rigorous peer review, global visibility, open access options, ethical publishing, author support and efficient publication.";
    const imageUrl =
      "https://www.globalreviewspress.com/why-publish-with-global-reviews-press-social-preview.webp";

    document.title = title;

    const managedElements = [];

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      const wasCreated = !element;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      const previousContent = element.getAttribute("content");
      element.setAttribute("content", content);
      managedElements.push({ element, wasCreated, previousContent });
    };

    setMeta("name", "description", description);
    setMeta(
      "name",
      "keywords",
      "why publish with Global Reviews Press, peer-reviewed journals, research publication benefits, open access publishing, global research visibility, ethical academic publishing, author support, submit research manuscript",
    );
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("name", "googlebot", "index, follow, max-image-preview:large");

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Global Reviews Press");
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta(
      "property",
      "og:image:alt",
      "Reasons to publish research with Global Reviews Press",
    );

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
    setMeta(
      "name",
      "twitter:image:alt",
      "Global Reviews Press research publication benefits",
    );

    let canonical = document.head.querySelector('link[rel="canonical"]');
    const canonicalWasCreated = !canonical;
    const previousCanonical = canonical?.getAttribute("href");

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", pageUrl);

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.dataset.pageSchema = "grp-why-publish-us";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          name: "Why Publish With Global Reviews Press",
          headline: "Why Publish With Global Reviews Press",
          url: pageUrl,
          description,
          inLanguage: "en",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.globalreviewspress.com/#website",
            name: "Global Reviews Press",
            url: "https://www.globalreviewspress.com/",
          },
          about: {
            "@type": "Organization",
            name: "Global Reviews Press",
            alternateName: "GRP",
            url: "https://www.globalreviewspress.com/",
            logo: "https://www.globalreviewspress.com/global-reviews-press-logo.webp",
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: imageUrl,
            width: 1200,
            height: 630,
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.globalreviewspress.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Why Publish With Us",
              item: pageUrl,
            },
          ],
        },
      ],
    });
    document.head.appendChild(schema);

    return () => {
      document.title = previousTitle;

      managedElements.forEach(({ element, wasCreated, previousContent }) => {
        if (wasCreated) {
          element.remove();
        } else if (previousContent === null) {
          element.removeAttribute("content");
        } else {
          element.setAttribute("content", previousContent);
        }
      });

      if (canonicalWasCreated) {
        canonical.remove();
      } else if (previousCanonical) {
        canonical.setAttribute("href", previousCanonical);
      }

      schema.remove();
    };
  }, []);
}
