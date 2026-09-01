import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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

/* =========================================================
   HERO / CTA IMAGES
========================================================= */
import bgjournal from "../assets/img/global-reviews-press-academic-journals-hero.webp";
import bgcta from "../assets/img/explore-global-reviews-press-journals-cta.webp";

/* =========================================================
   JOURNAL IMAGES
========================================================= */
import j1 from "../assets/img/artificial-intelligence-engineering-journal.webp";
import j2 from "../assets/img/robotics-automation-technology-journal.webp";
import j3 from "../assets/img/quantum-computing-research-journal.webp";

/* =========================================================
   INDEXING LOGOS
========================================================= */
import scopusLogo from "../assets/img/scopus-indexing-database-logo.webp";
import clarivateLogo from "../assets/img/clarivate-web-of-science-logo.webp";
import doajLogo from "../assets/img/directory-of-open-access-journals-doaj-logo.webp";
import casLogo from "../assets/img/chemical-abstracts-service-cas-logo.webp";
import dimensionsLogo from "../assets/img/dimensions-research-indexing-logo.webp";
import crossrefLogo from "../assets/img/crossref-doi-registration-agency-logo.webp";
import googleScholarLogo from "../assets/img/google-scholar-academic-indexing-logo.webp";

/* =========================================================
   FILTERS
========================================================= */
const filters = [
  {
    id: "all",
    label: "All Journals",
    icon: BookOpen,
    iconColor: "",
    active:
      "border-[#0A3467] bg-[#0A3467] text-white shadow-[0_3px_8px_rgba(10,52,103,0.12)]",
  },
  {
    id: "engineering",
    label: "Engineering & Technology",
    icon: Cpu,
    iconColor: "text-[#3C82C2]",
    active: "border-[#8BB6DF] bg-[#EEF6FD] text-[#286DA7]",
  },
  {
    id: "medicine",
    label: "Medicine & Health Sciences",
    icon: HeartPulse,
    iconColor: "text-[#3C94B5]",
    active: "border-[#8EC6DB] bg-[#EFFAFE] text-[#267E9E]",
  },
  {
    id: "sustainability",
    label: "Sustainability & Environment",
    icon: Leaf,
    iconColor: "text-[#67A74B]",
    active: "border-[#A7CE98] bg-[#F1FAED] text-[#548E3A]",
  },
  {
    id: "interdisciplinary",
    label: "Interdisciplinary",
    icon: Shapes,
    iconColor: "text-[#746FB0]",
    active: "border-[#AAA4D2] bg-[#F5F3FD] text-[#615D99]",
  },
];

/* =========================================================
   ENGINEERING JOURNALS — ONLY 5
========================================================= */
const engineeringJournals = [
  {
    title: "Artificial Intelligence",
    reviews: "Reviews",
    image: j1,
  },
  {
    title: "Robotics & Automation",
    reviews: "Reviews",
    image: j2,
  },
  {
    title: "Quantum Computing",
    reviews: "Reviews",
    image: j3,
  },
  {
    title: "Edge Intelligence & Computing",
    reviews: "Reviews",
    image: j2,
  },
  {
    title: "Digital Twin Technologies",
    reviews: "Reviews",
    image: j1,
  },
];

/* =========================================================
   MEDICINE JOURNALS — ONLY 5
========================================================= */
const medicineJournals = [
  {
    title: "AI-Enabled Medical Imaging",
    reviews: "Reviews",
    image: j3,
  },
  {
    title: "Digital Biomarkers & Wearables",
    reviews: "Reviews",
    image: j2,
  },
  {
    title: "Robotic Surgery",
    reviews: "Reviews",
    image: j1,
  },
  {
    title: "Precision Diagnostics & Digital Pathology",
    reviews: "Reviews",
    image: j2,
  },
  {
    title: "Neurotechnology",
    reviews: "Reviews",
    image: j3,
  },
];

/* =========================================================
   SUSTAINABILITY JOURNALS — ONLY 5
========================================================= */
const sustainabilityJournals = [
  {
    title: "Sustainability",
    reviews: "Reviews",
    image: j2,
  },
  {
    title: "Renewable Energy and Systems",
    reviews: "Reviews",
    image: j1,
  },
  {
    title: "Climate & Urban Resilience",
    reviews: "Reviews",
    image: j3,
  },
  {
    title: "Biosensors & Environmental Tech",
    reviews: "Reviews",
    image: j1,
  },
  {
    title: "Green Materials & Circular Economy",
    reviews: "Reviews",
    image: j2,
  },
];

/* =========================================================
   JOURNAL CATEGORIES
========================================================= */
const journalCategories = [
  {
    id: "engineering",
    title: "Engineering & Technology",
    journals: engineeringJournals,
    overlay:
      "from-[#001833]/70 via-transparent via-[55%] to-[#00162F]/95",
    fallback: "bg-[#062651]",
  },
  {
    id: "medicine",
    title: "Medicine & Health Sciences",
    journals: medicineJournals,
    overlay:
      "from-[#001833]/65 via-transparent via-[55%] to-[#00162F]/95",
    fallback: "bg-[#062651]",
  },
  {
    id: "sustainability",
    title: "Sustainability & Environment",
    journals: sustainabilityJournals,
    overlay:
      "from-[#123E29]/56 via-transparent via-[55%] to-[#092C1A]/92",
    fallback: "bg-[#174A2A]",
  },
];

/* =========================================================
   WHY PUBLISH DATA
========================================================= */
const publishBenefits = [
  {
    title: "International Visibility",
    description: "Wide global dissemination and indexing",
    icon: Globe2,
    background: "bg-[#26a9cd]",
  },
  {
    title: "Rigorous Peer Review",
    description: "Ensuring quality, credibility and integrity",
    icon: BadgeCheck,
    background: "bg-[#ef705a]",
  },
  {
    title: "Open Access Options",
    description: "Maximize reach and impact of your research",
    icon: LockKeyholeOpen,
    background: "bg-[#6eaa42]",
  },
  {
    title: "Author Friendly",
    description: "Transparent process and fast communication",
    icon: UsersRound,
    background: "bg-[#30a1d5]",
  },
  {
    title: "Ethical Publishing",
    description: "Upholding the highest ethical standards",
    icon: Scale,
    background: "bg-[#e94d58]",
  },
];

/* =========================================================
   AT A GLANCE DATA
========================================================= */
const glanceStats = [
  {
    value: "20+",
    label: "Journals & Magazines",
    icon: LibraryBig,
    color: "text-[#5575c9]",
  },
  {
    value: "5000+",
    label: "Global Authors",
    icon: UsersRound,
    color: "text-[#6867b5]",
  },
  {
    value: "120+",
    label: "Countries",
    icon: Globe2,
    color: "text-[#6658ad]",
  },
  {
    value: "15,000+",
    label: "Articles Published",
    icon: FileText,
    color: "text-[#6471b8]",
  },
  {
    value: "50+",
    label: "Indexing Partners",
    icon: Database,
    color: "text-[#6374ba]",
  },
  {
    value: "100+",
    label: "Institutional Collaborations",
    icon: Building2,
    color: "text-[#596bab]",
  },
];

/* =========================================================
   SORT FUNCTION
   IMPORTANT:
   sortOrder is explicitly passed in.
   No out-of-scope "sort" variable.
========================================================= */
const sortJournals = (items, sortOrder) => {
  if (sortOrder === "az") {
    return [...items].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sortOrder === "za") {
    return [...items].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  return items;
};

/* =========================================================
   JOURNALS PAGE SEO
========================================================= */
function useJournalsPageSeo() {
  useEffect(() => {
    const previousTitle = document.title;
    const pageUrl = "https://www.globalreviewspress.com/journals";
    const title = "Academic Journals & Magazines | Global Reviews Press";
    const description =
      "Explore peer-reviewed journals and magazines from Global Reviews Press covering engineering, technology, medicine, health sciences, sustainability and interdisciplinary research.";
    const imageUrl =
      "https://www.globalreviewspress.com/global-reviews-press-journals-social-preview.webp";

    document.title = title;

    const managedElements = [];

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`,
      );
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
      "Global Reviews Press journals, peer-reviewed journals, academic journals, engineering journals, technology journals, medical journals, health sciences journals, sustainability journals, interdisciplinary research, open access journals",
    );
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("name", "googlebot", "index, follow, max-image-preview:large");

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Global Reviews Press");
    setMeta("property", "og:locale", "en_US");
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta(
      "property",
      "og:image:alt",
      "Peer-reviewed academic journals and magazines from Global Reviews Press",
    );

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
    setMeta(
      "name",
      "twitter:image:alt",
      "Global Reviews Press academic journals and magazines",
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
    schema.dataset.pageSchema = "grp-journals";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${pageUrl}#webpage`,
          name: "Academic Journals & Magazines",
          url: pageUrl,
          description,
          inLanguage: "en",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.globalreviewspress.com/#website",
            name: "Global Reviews Press",
            url: "https://www.globalreviewspress.com/",
          },
          about: [
            "Engineering and Technology",
            "Medicine and Health Sciences",
            "Sustainability and Environment",
            "Interdisciplinary Research",
          ],
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
              name: "Journals & Magazines",
              item: pageUrl,
            },
          ],
        },
      ],
    });
    document.head.appendChild(schema);

    return () => {
      document.title = previousTitle;

      managedElements.forEach(
        ({ element, wasCreated, previousContent }) => {
          if (wasCreated) {
            element.remove();
          } else if (previousContent === null) {
            element.removeAttribute("content");
          } else {
            element.setAttribute("content", previousContent);
          }
        },
      );

      if (canonicalWasCreated) {
        canonical.remove();
      } else if (previousCanonical) {
        canonical.setAttribute("href", previousCanonical);
      }

      schema.remove();
    };
  }, []);
}

/* =========================================================
   PAGE
========================================================= */
export default function Journals() {
  useJournalsPageSeo();

  const [activeTab, setActiveTab] = useState("all");
  const [sort, setSort] = useState("default");

  /* =======================================================
     VISIBLE CATEGORIES
  ======================================================= */
  const visibleCategories =
    activeTab === "all" || activeTab === "interdisciplinary"
      ? journalCategories
      : journalCategories.filter(
          (category) => category.id === activeTab
        );

  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white pt-[30px]">

        {/* =========================================================
            HERO SECTION
        ========================================================== */}
        <section
          className="
            relative
            isolate
            flex
            min-h-[520px]
            w-full
            overflow-hidden
            bg-[#031a3d]
            bg-cover
            bg-no-repeat
            text-white

            bg-[position:67%_center]

            min-[390px]:bg-[position:69%_center]

            sm:min-h-[510px]
            sm:bg-[position:66%_center]

            md:min-h-[490px]
            md:bg-[position:62%_center]

            lg:min-h-[490px]
            lg:bg-center
          "
          style={{
            backgroundImage: `url(${bgjournal})`,
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
            "
          />

          <div
            className="
              mx-auto
              flex
              min-h-[520px]
              w-[min(1120px,calc(100%-32px))]
              items-center
              py-[46px]

              sm:min-h-[510px]
              sm:w-[min(1120px,calc(100%-48px))]
              sm:py-[42px]

              md:min-h-[490px]
              md:py-[35px]

              lg:min-h-[490px]
              lg:py-0
            "
          >
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
                max-w-[390px]

                sm:max-w-[410px]
                md:max-w-[420px]
                lg:max-w-[430px]
              "
            >
              {/* HERO TITLE */}
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
                  duration: 0.6,
                  delay: 0.08,
                }}
                className="
               text-[34px] font-[600] uppercase leading-none tracking-[-0.02em] sm:text-[36px] lg:text-[38px]
                "
              >
                <span className="block">
                  JOURNALS
                </span>

                <span className="block">
                  & MAGAZINES
                </span>
              </motion.h1>

              {/* TAGLINE */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.16,
                }}
                className="
                  mt-[15px]
                  font-['Inter',sans-serif]
                  text-[15px]
                  font-[600]
                  leading-[1.35]
                  text-[#f5b823]

                  lg:text-[16px]
                "
              >
                Curated. Peer Reviewed. Global.
              </motion.p>

              {/* DESCRIPTION */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 12,
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
                  mt-[17px]
                  max-w-[360px]
                  font-['Inter',sans-serif]
                  text-[12px]
                  font-[500]
                  leading-[1.7]
                  text-white/90

                  sm:text-[12.5px]
                  lg:text-[13px]
                "
              >
                High-quality review journals and magazines spanning
                Engineering, Medicine and Sustainability published by
                Global Reviews Press.
              </motion.p>

              {/* HERO BUTTONS */}
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
                  duration: 0.55,
                  delay: 0.3,
                }}
                className="
                  mt-[24px]
                  flex
                  flex-wrap
                  items-center
                  gap-[12px]

                  min-[390px]:gap-[14px]
                "
              >
                <motion.button
                  type="button"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => {
                    setActiveTab("all");

                    document
                      .getElementById("journal-content")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  className="
                    group
                    inline-flex
                    h-[42px]
                    items-center
                    justify-center
                    gap-[11px]
                    rounded-[5px]
                    border
                    border-[#eab126]
                    bg-[#f4b928]
                    px-[18px]

                    font-['Inter',sans-serif]
                    text-[13px]
                    font-[600]
                    text-[#08244b]

                    shadow-[0_5px_14px_rgba(0,0,0,0.16)]

                    transition-all
                    duration-300

                    hover:border-[#ffc94d]
                    hover:bg-[#ffc94d]
                    hover:text-white
                    hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]

                    max-[350px]:w-full
                  "
                >
                  Explore All Journals

                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-[4px]
                    "
                  />
                </motion.button>

                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="max-[350px]:w-full"
                >
                  <Link
                    to="/about"
                    className="
                      inline-flex
                      h-[42px]
                      items-center
                      justify-center
                      rounded-[5px]
                      border
                      border-white/80
                      bg-[#071939]/35
                      px-[18px]

                      font-['Inter',sans-serif]
                      text-[13px]
                      font-[600]
                      text-white

                      backdrop-blur-[2px]

                      transition-all
                      duration-300

                      hover:border-white
                      hover:bg-white
                      hover:text-[#08244b]

                      max-[350px]:w-full
                    "
                  >
                    About Our Journals
                  </Link>
                </motion.div>
              </motion.div>
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
            top-[75px]
            z-40
            border-b
            border-[#E5EBF0]
            bg-white/95
            py-[12px]
            backdrop-blur-md
          "
        >
          <div
            className="
              mx-auto
              flex
              w-[min(1120px,calc(100%-32px))]
              flex-col
              gap-[10px]

              sm:w-[min(1120px,calc(100%-48px))]

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap items-center gap-[7px]">
              {filters.map((filter) => {
                const Icon = filter.icon;
                const active = activeTab === filter.id;

                return (
                  <motion.button
                    key={filter.id}
                    type="button"
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() =>
                      setActiveTab(filter.id)
                    }
                    className={`
                      inline-flex
                      h-[31px]
                      items-center
                      justify-center
                      gap-[10px]
                      whitespace-nowrap
                      rounded-[5px]
                      border
                      px-[11px]

                      font-['Inter',sans-serif]
                      text-[12.5px]
                      font-[600]

                      transition-all
                      duration-300

                      ${
                        active
                          ? filter.active
                          : "border-[#E1E7EC] bg-[#FAFBFC] text-[#52637A] hover:border-[#A8B8C8] hover:bg-white hover:text-[#173E6C]"
                      }
                    `}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className={
                        active &&
                        filter.id === "all"
                          ? ""
                          : filter.iconColor
                      }
                    />

                    {filter.label}
                  </motion.button>
                );
              })}
            </div>

            {/* SORT SELECT */}
            <div className="relative w-[100px] shrink-0">
              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
                className="
                  h-[31px]
                  w-full
                  appearance-none
                  rounded-[5px]
                  border
                  border-[#DEE5EB]
                  bg-[#FAFBFC]
                  pl-[12px]
                  pr-[28px]

                  font-['Inter',sans-serif]
                  text-[12.5px]
                  font-[600]
                  text-[#496079]

                  outline-none

                  transition-all
                  duration-300

                  hover:border-[#AABAC8]

                  focus:border-[#48789E]
                  focus:bg-white
                "
              >
                <option value="default">
                  Sort by
                </option>

                <option value="az">
                  A – Z
                </option>

                <option value="za">
                  Z – A
                </option>
              </select>

              <ChevronDown
                size={11}
                strokeWidth={1.8}
                className="
                  pointer-events-none
                  absolute
                  right-[9px]
                  top-1/2
                  -translate-y-1/2
                  text-[#718195]
                "
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            JOURNALS + RIGHT SIDEBAR
        ========================================================== */}
        <section className="bg-white py-[24px] sm:py-[30px]">
          <div
            className="
              mx-auto
              grid
              w-[min(1120px,calc(100%-32px))]
              grid-cols-1
              gap-[20px]

              sm:w-[min(1120px,calc(100%-48px))]

              xl:grid-cols-[minmax(0,1fr)_205px]
              xl:items-start
              xl:gap-[22px]
            "
          >
            {/* =====================================================
                LEFT JOURNALS
            ====================================================== */}
            <div className="min-w-0">
              <AnimatePresence initial={false}>
                {visibleCategories.map(
                  (category, categoryIndex) => (
                    <motion.section
                      layout
                      key={category.id}
                      initial={{
                        opacity: 0,
                        y: 14,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className={
                        categoryIndex === 0
                          ? ""
                          : "mt-[28px]"
                      }
                    >
                      {/* CATEGORY HEADING */}
                      <div
                        className="
                          mb-[8px]
                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >
                        <div
                          className="
                            flex
                            min-w-0
                            items-center
                            gap-[10px]
                          "
                        >
                          <span
                            className="
                              h-[2px]
                              w-[20px]
                              shrink-0
                              bg-[#F2AE20]
                            "
                          />

                          <h2
                            className="
                              truncate
                              font-['Inter',sans-serif]
                              text-[15px]
                              font-[600]
                              text-[#153767]

                              sm:text-[15px]
                              lg:text-[16px]
                            "
                          >
                            {category.title}
                          </h2>
                        </div>

                    
                      </div>

                      {/* =============================================
                          EXACTLY 5 JOURNAL CARDS
                      ============================================= */}
                      <div
                        className="
                          grid
                          grid-cols-1
                          gap-[10px]

                          min-[360px]:grid-cols-2

                          sm:grid-cols-3

                          md:grid-cols-4

                          lg:grid-cols-5
                        "
                      >
                        {sortJournals(
                          category.journals,
                          sort
                        ).map(
                          (
                            journal,
                            index
                          ) => (
                            <motion.article
                              key={
                                journal.title
                              }
                              initial={{
                                opacity: 0,
                                y: 14,
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
                                duration: 0.4,
                                delay:
                                  index *
                                  0.045,
                              }}
                              whileHover={{
                                y: -6,
                              }}
                              className={`
                                group
                                relative
                                isolate
                                min-h-[175px]
                                cursor-pointer
                                overflow-hidden
                                rounded-[5px]

                                ${category.fallback}

                                shadow-[0_4px_12px_rgba(9,37,72,0.10)]

                                sm:min-h-[170px]
                                lg:min-h-[185px]
                              `}
                            >
                              {/* IMAGE */}
                              <img
                                src={
                                  journal.image
                                }
                                alt={
                                  journal.title
                                }
                                loading="lazy"
                                className="
                                  absolute
                                  inset-0
                                  -z-20
                                  h-full
                                  w-full
                                  object-cover

                                  transition-transform
                                  duration-700
                                  ease-out

                                  group-hover:scale-[1.07]
                                "
                              />

                            

                            
                            </motion.article>
                          )
                        )}
                      </div>
                    </motion.section>
                  )
                )}
              </AnimatePresence>
            </div>

            {/* =====================================================
                RIGHT SIDEBAR
            ====================================================== */}
            <aside
              className="
                grid
                h-fit
                grid-cols-1
                gap-[12px]

                md:grid-cols-2

                xl:sticky
                xl:top-[125px]
                xl:grid-cols-1
                xl:self-start
              "
            >
              {/* =================================================
                  WHY PUBLISH
              ================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 18,
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
                whileHover={{
                  y: -3,
                }}
                className="
                  overflow-hidden
                  rounded-[10px]
                  border
                  border-[#e7edf3]
                  bg-white

                  px-[16px]
                  pb-[17px]
                  pt-[17px]

                  shadow-[0_7px_24px_rgba(23,58,96,0.055)]

                  transition-all
                  duration-300

                  hover:border-[#dbe5ee]
                  hover:shadow-[0_11px_28px_rgba(23,58,96,0.09)]
                "
              >
                <h3
                  className="
                    text-[16px]
                    font-[600]
                    leading-none
                    text-[#163d70]
                  "
                >
                  Why Publish With Us?
                </h3>

                <span
                  className="
                    mt-[8px]
                    block
                    h-[2px]
                    w-[27px]
                    rounded-full
                    bg-[#efb32c]
                  "
                />

                <div className="mt-[18px] space-y-[14px]">
                  {publishBenefits.map(
                    (
                      benefit,
                      index
                    ) => {
                      const Icon =
                        benefit.icon;

                      return (
                        <motion.div
                          key={
                            benefit.title
                          }
                          initial={{
                            opacity: 0,
                            x: 8,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay:
                              index *
                              0.04,
                          }}
                          whileHover={{
                            x: 3,
                          }}
                          className="
                            group
                            flex
                            items-start
                            gap-[9px]
                          "
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.1,
                              rotate: 4,
                            }}
                            className={`
                              flex
                              h-[29px]
                              w-[29px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-full

                              ${benefit.background}

                              text-white
                            `}
                          >
                            <Icon
                              size={18}
                              strokeWidth={
                                1.7
                              }
                            />
                          </motion.div>

                          <div className="min-w-0">
                            <p
                              className="
                                text-[12.3px]
                                font-[600]
                                leading-[1.25]
                                text-[#213d61]
                              "
                            >
                              {
                                benefit.title
                              }
                            </p>

                            <p
                              className="
                                mt-[6px]
                                text-[10.5px]
                                font-[500]
                                leading-[1.4]
                                text-[#738095]
                              "
                            >
                              {
                                benefit.description
                              }
                            </p>
                          </div>
                        </motion.div>
                      );
                    }
                  )}
                </div>

             
              </motion.div>

              {/* =================================================
                  AT A GLANCE
              ================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 18,
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
                  delay: 0.08,
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  overflow-hidden
                  rounded-[10px]
                  border
                  border-[#e7edf3]
                  bg-[#fbfcff]

                  px-[16px]
                  pb-[16px]
                  pt-[17px]

                  shadow-[0_7px_24px_rgba(23,58,96,0.05)]

                  transition-all
                  duration-300

                  hover:border-[#dbe5ee]
                  hover:shadow-[0_11px_28px_rgba(23,58,96,0.085)]
                "
              >
                <h3
                  className="
                    text-[16px]
                    font-[600]
                    leading-none
                    text-[#163d70]
                  "
                >
                  At a Glance
                </h3>

                <span
                  className="
                    mt-[8px]
                    block
                    h-[2px]
                    w-[27px]
                    rounded-full
                    bg-[#efb32c]
                  "
                />

                <div
                  className="
                    relative
                    mt-[19px]
                    grid
                    grid-cols-2
                    gap-x-0
                    gap-y-[19px]
                  "
                >
                  {/* CENTER VERTICAL LINE */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-1/2
                      top-0
                      w-px
                      -translate-x-1/2
                      bg-[#e6ebf1]
                    "
                  />

                  {glanceStats.map(
                    (stat, index) => {
                      const Icon =
                        stat.icon;

                      return (
                        <motion.div
                          key={stat.label}
                          whileHover={{
                            y: -2,
                          }}
                          className={`
                            group
                            flex
                            items-start
                            gap-[7px]

                            ${
                              index %
                                2 ===
                              0
                                ? "pr-[8px]"
                                : "pl-[9px]"
                            }
                          `}
                        >
                          <Icon
                            size={22}
                            strokeWidth={
                              1.55
                            }
                            className={`
                              mt-[4px]
                              shrink-0

                              ${stat.color}

                              transition-transform
                              duration-300

                              group-hover:scale-110
                            `}
                          />

                          <div>
                            <p
                              className="
                                text-[12.8px]
                                font-[600]
                                leading-none
                                text-[#38588b]
                              "
                            >
                              {
                                stat.value
                              }
                            </p>

                            <p
                              className="
                                mt-[5px]
                                text-[9.5px]
                                leading-[1.35]
                                text-[#798598]
                              "
                            >
                              {
                                stat.label
                              }
                            </p>
                          </div>
                        </motion.div>
                      );
                    }
                  )}
                </div>

              
              </motion.div>
            </aside>
          </div>
        </section>

     {/* =========================================================
    PUBLISH CTA SECTION
========================================================== */}
<section
  className="
    relative
    isolate
    w-full
    overflow-hidden
    bg-[#06275a]
    bg-cover
    bg-no-repeat
    text-white

    bg-[position:72%_center]

    min-[420px]:bg-[position:76%_center]

    sm:bg-[position:80%_center]

    md:bg-[position:84%_center]

    lg:bg-right
  "
  style={{
    backgroundImage: `url(${bgcta})`,
  }}
>
 

  {/* =====================================================
      MAIN CONTAINER
  ====================================================== */}
  <div
    className="
      mx-auto
      flex
      min-h-[155px]
      w-[min(1120px,calc(100%-32px))]
      flex-col
      items-start
      justify-center
      gap-[20px]
      py-[24px]

      sm:w-[min(1120px,calc(100%-48px))]
      sm:min-h-[145px]

      md:min-h-[120px]
      md:flex-row
      md:items-center
      md:justify-between
      md:gap-[35px]
      md:py-[18px]

      lg:min-h-[122px]
      lg:py-[14px]
    "
  >
    {/* =====================================================
        LEFT TEXT
    ====================================================== */}
    <motion.div
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
        amount: 0.35,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-10
        w-full
        max-w-[475px]
      "
    >
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
          text-[19px]
          font-[600]
          leading-[1.25]
          tracking-[-0.012em]
          text-white/90

          min-[390px]:text-[17px]

          sm:text-[20px]

          lg:text-[22px]
        "
      >
        Publish with Confidence. Reach the World.
      </motion.h2>

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
          delay: 0.14,
        }}
        className="
          mt-[7px]
          max-w-[405px]
          font-['Inter',sans-serif]
          text-[12px]
          font-[500]
          leading-[1.55]
          text-white/85

          sm:text-[12px]

          lg:text-[12.5px]
        "
      >
        Partner with Global Reviews Press to amplify your research
        <br className="hidden sm:block" />
        through trusted peer-reviewed journals.
      </motion.p>
    </motion.div>

    {/* =====================================================
        BUTTONS
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
        amount: 0.35,
      }}
      transition={{
        duration: 0.6,
        delay: 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-10
        flex
        w-full
        flex-wrap
        items-center
        gap-[11px]

        min-[390px]:w-auto
        min-[390px]:gap-[14px]

        md:shrink-0

        lg:mr-[160px]
      "
    >
      {/* =================================================
          SUBMIT MANUSCRIPT
      ================================================== */}
      <motion.div
        whileHover={{
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          max-[389px]:w-full
        "
      >
        <Link
          to="/authors"
          className="
            group
            inline-flex
            h-[39px]
            min-w-[162px]
            items-center
            justify-center
            rounded-[4px]
            border
            border-[#e9aa1f]
            bg-[#062753]/55
            px-[18px]

            font-['Inter',sans-serif]
            text-[12.5px]
            font-[600]
            text-[#ffc126]

            shadow-[0_3px_10px_rgba(0,0,0,0.08)]

            backdrop-blur-[1px]

            transition-all
            duration-300

            hover:border-[#ffc126]
            hover:bg-[#ffc126]
            hover:text-[#08284f]
            hover:shadow-[0_7px_18px_rgba(0,0,0,0.18)]

            max-[389px]:w-full

            sm:h-[40px]
            sm:min-w-[173px]
            sm:text-[13px]

            lg:h-[41px]
            lg:min-w-[180px]
          "
        >
          Submit Your Manuscript
        </Link>
      </motion.div>

      {/* =================================================
          AUTHOR GUIDELINES
      ================================================== */}
      <motion.div
        whileHover={{
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          max-[389px]:w-full
        "
      >
        <Link
          to="/authors"
          className="
            group
            inline-flex
            h-[39px]
            min-w-[126px]
            items-center
            justify-center
            rounded-[4px]
            border
            border-white/65
            bg-[#08295a]/25
            px-[18px]

            font-['Inter',sans-serif]
            text-[12.5px]
            font-[600]
            text-white

            shadow-[0_3px_10px_rgba(0,0,0,0.07)]

            backdrop-blur-[1px]

            transition-all
            duration-300

            hover:border-white
            hover:bg-white
            hover:text-[#08284f]
            hover:shadow-[0_7px_18px_rgba(0,0,0,0.16)]

            max-[389px]:w-full

            sm:h-[40px]
            sm:min-w-[136px]
            sm:text-[13px]

            lg:h-[41px]
            lg:min-w-[143px]
          "
        >
          Author Guidelines
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>

        {/* =========================================================
            INDEXED IN LEADING DATABASES
        ========================================================== */}
        <section
          className="
            border-y
            border-[#eef2f5]
            bg-white
            py-[22px]

            sm:py-[25px]
            lg:py-[29px]
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
              }}
              className="
                text-center
                font-['Inter',sans-serif]
                text-[10px]
                font-[700]
                leading-none
                tracking-[0.025em]
                text-[#173f78]

                sm:text-[11px]
              "
            >
              INDEXED IN LEADING DATABASES
            </motion.h2>

            <div
              className="
                mt-[27px]
                grid
                grid-cols-2
                items-center
                justify-items-center
                gap-x-[18px]
                gap-y-[25px]

                min-[480px]:grid-cols-3

                sm:grid-cols-4

                lg:grid-cols-7
                lg:gap-x-[24px]
                lg:gap-y-0
              "
            >
              {/* SCOPUS */}
              <motion.img
                src={scopusLogo}
                alt="Scopus"
                whileHover={{
                  y: -4,
                  scale: 1.045,
                }}
                className="
                  max-h-[38px]
                  max-w-[99px]
                  object-contain
                "
              />

              {/* CLARIVATE */}
              <motion.img
                src={clarivateLogo}
                alt="Clarivate Web of Science"
                whileHover={{
                  y: -4,
                  scale: 1.045,
                }}
                className="
                  max-h-[40px]
                  max-w-[108px]
                  object-contain
                "
              />

              {/* DOAJ */}
              <motion.img
                src={doajLogo}
                alt="DOAJ"
                whileHover={{
                  y: -4,
                  scale: 1.045,
                }}
                className="
                  max-h-[40px]
                  max-w-[108px]
                  object-contain
                "
              />

              {/* CAS */}
              <motion.img
                src={casLogo}
                alt="CAS"
                whileHover={{
                  y: -4,
                  scale: 1.045,
                }}
                className="
                  max-h-[40px]
                  max-w-[87px]
                  object-contain
                "
              />

              {/* DIMENSIONS */}
              <motion.img
                src={dimensionsLogo}
                alt="Dimensions"
                whileHover={{
                  y: -4,
                  scale: 1.045,
                }}
                className="
                  max-h-[40px]
                  max-w-[126px]
                  object-contain
                "
              />

              {/* CROSSREF */}
              <motion.img
                src={crossrefLogo}
                alt="Crossref"
                whileHover={{
                  y: -4,
                  scale: 1.045,
                }}
                className="
                  max-h-[40px]
                  max-w-[101px]
                  object-contain
                "
              />

              {/* GOOGLE SCHOLAR */}
              <motion.img
                src={googleScholarLogo}
                alt="Google Scholar"
                whileHover={{
                  y: -4,
                  scale: 1.045,
                }}
                className="
                  col-span-2
                  max-h-[40px]
                  max-w-[92px]
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
