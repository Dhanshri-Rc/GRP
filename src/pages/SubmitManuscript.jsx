import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileText,
  Globe2,
  Mail,
  MessageSquare,
  Pencil,
  Search,
  Send,
  ShieldCheck,
  Upload,
  User,
  X,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import submitHero from "../assets/img/global-reviews-press-academic-submit-manuscript-hero.webp";
import submitCta from "../assets/img/explore-global-reviews-press-journals-cta.webp";

/* =========================================================
   JOURNALS
========================================================= */
const journals = [
  "Artificial Intelligence Reviews",
  "Robotics & Automation Reviews",
  "Quantum Computing Reviews",
  "Edge Intelligence & Computing Reviews",
  "Digital Twin Technologies Reviews",
  "6G & Future Communication Reviews",
  "AI-Enabled Medical Imaging Reviews",
  "Digital Biomarkers & Wearables Reviews",
  "Robotic Surgery Reviews",
  "Precision Diagnostics & Digital Pathology Reviews",
  "Neurotechnology Reviews",
  "AI in Drug Discovery & Development Reviews",
  "Sustainability Reviews",
  "Renewable Energy & Systems Reviews",
  "Climate & Urban Resilience Reviews",
  "Biosensors & Environmental Tech Reviews",
  "Green Materials & Circular Economy Reviews",
  "Water, Air & Earth Sciences Reviews",
];

const articleTypes = [
  "Review Article",
  "Systematic Review",
  "Meta-Analysis",
  "Research Article",
  "Short Communication",
  "Perspective Article",
  "Case Study",
  "Editorial",
];

const initialValues = {
  title: "",
  journal: "",
  articleType: "",
  authorName: "",
  email: "",
  affiliation: "",
  country: "",
  orcid: "",
  abstract: "",
  keywords: "",
  comments: "",
  declaration: false,
};

export default function SubmitManuscript() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const [manuscriptFile, setManuscriptFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const container =
    "mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]";

  const inputClass = `
    h-[38px]
    w-full
    rounded-[4px]
    border
    border-[#dce4eb]
    bg-white
    px-[14px]
    font-['Inter',sans-serif]
    text-[11px]
    font-[500]
    text-[#1b3655]
    outline-none
    transition-all
    duration-300

    placeholder:text-[#909ca9]

    hover:border-[#b9c8d5]

    focus:border-[#23843d]
    focus:shadow-[0_0_0_3px_rgba(35,132,61,0.08)]
  `;

  const labelClass = `
    mb-[7px]
    block
    font-['Inter',sans-serif]
    text-[11.5px]
    font-[600]
    text-[#102d59]
  `;

  /* =========================================================
     HANDLE INPUT
  ========================================================= */
  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  }

  /* =========================================================
     FILE VALIDATION
  ========================================================= */
  function validateFile(file, fieldName) {
    if (!file) return null;

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const maxSize = 10 * 1024 * 1024;

    const extension = file.name
      .toLowerCase()
      .slice(file.name.lastIndexOf("."));

    if (!allowedExtensions.includes(extension)) {
      setErrors((current) => ({
        ...current,
        [fieldName]: "Please upload PDF, DOC or DOCX only.",
      }));

      return null;
    }

    if (file.size > maxSize) {
      setErrors((current) => ({
        ...current,
        [fieldName]: "Maximum file size is 10 MB.",
      }));

      return null;
    }

    setErrors((current) => ({
      ...current,
      [fieldName]: "",
    }));

    return file;
  }

  function handleManuscriptFile(event) {
    const file = validateFile(
      event.target.files?.[0],
      "manuscriptFile"
    );

    if (file) {
      setManuscriptFile(file);
    }

    event.target.value = "";
  }

  function handleCoverLetter(event) {
    const file = validateFile(
      event.target.files?.[0],
      "coverLetter"
    );

    if (file) {
      setCoverLetter(file);
    }

    event.target.value = "";
  }

  /* =========================================================
     VALIDATION
  ========================================================= */
  function validateForm() {
    const nextErrors = {};

    if (!values.title.trim()) {
      nextErrors.title = "Manuscript title is required.";
    }

    if (!values.journal) {
      nextErrors.journal = "Please select a journal.";
    }

    if (!values.articleType) {
      nextErrors.articleType = "Please select article type.";
    }

    if (!values.authorName.trim()) {
      nextErrors.authorName = "Author name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.affiliation.trim()) {
      nextErrors.affiliation = "Affiliation is required.";
    }

    if (!values.country.trim()) {
      nextErrors.country = "Country is required.";
    }

    if (!values.abstract.trim()) {
      nextErrors.abstract = "Abstract is required.";
    }

    if (!values.keywords.trim()) {
      nextErrors.keywords = "Keywords are required.";
    }

    if (!manuscriptFile) {
      nextErrors.manuscriptFile =
        "Please upload your manuscript file.";
    }

    if (!values.declaration) {
      nextErrors.declaration =
        "Please accept the manuscript declaration.";
    }

    return nextErrors;
  }

  /* =========================================================
     SUBMIT
  ========================================================= */
  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);

      document
        .getElementById("submission-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      return;
    }

    setSubmitting(true);

    try {
      /*
      ==========================================================
      CONNECT YOUR API HERE

      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formData.append("manuscript", manuscriptFile);

      if (coverLetter) {
        formData.append("coverLetter", coverLetter);
      }

      const response = await fetch(
        "YOUR_API_URL/api/manuscripts",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }
      ==========================================================
      */

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      setSuccess(true);

      setValues(initialValues);
      setManuscriptFile(null);
      setCoverLetter(null);
      setErrors({});
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white pt-[75px]">
        {/* =====================================================
            HERO SECTION
        ====================================================== */}

<section section
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

            lg:min-h-[400px]
            lg:bg-center
          "
          style={{
            backgroundImage: `url(${submitHero})`,
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

              lg:min-h-[400px]
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
                 SUBMIT MANUSCRIPT
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
                   text-[#B7D329]

                  lg:text-[16px]
                "
              >
                Begin Your Publication Journey.
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
                 Submit your research to Global Reviews Press
                through our simple and secure manuscript
                submission process. Our editorial team is
                committed to quality, transparency and timely
                communication.
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
                  mt-[10px]
                  flex
                  flex-wrap
                  items-center
                  gap-[12px]

                  min-[390px]:gap-[14px]
                "
              >

                  <div
                className="
                  mt-[23px]
                  flex
                  flex-wrap
                  items-center
                  gap-[12px]
                "
              >
                <motion.a
                  href="#submission-form"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group
                    inline-flex
                    h-[43px]
                    items-center
                    justify-center
                    gap-[9px]
                    rounded-[4px]
                    bg-[#8cbf27]
                    px-[18px]
                    text-[13px]
                    font-[600]
                    text-white
                    shadow-[0_5px_14px_rgba(81,139,32,0.18)]
                    transition-all
                    duration-300

                    hover:bg-[#73a51c]
                  "
                >
                  Start Submission

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-[4px]
                    "
                  />
                </motion.a>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    h-[43px]
                    items-center
                    justify-center
                    rounded-[4px]
                    border
                    border-white/55
                    bg-white/[0.04]
                    px-[18px]
                    text-[13px]
                    font-[600]
                    text-white
                    transition-all
                    duration-300

                    hover:border-white
                    hover:bg-white
                    hover:text-[#052650]
                    gap-[10px]
                  "
                >
                  Contact Us
                   <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-[4px]
                    "
                  />
                </Link>
              </div>
              
              </motion.div>
            </motion.div>
          </div>
        </section>


    

        {/* =====================================================
            QUICK BENEFITS STRIP
        ====================================================== */}
        <section
          className="
            border-b
            border-[#e5ebf0]
            bg-white
          "
        >
          <div className={container}>
            <div
              className="
                grid
                grid-cols-2

                md:grid-cols-5
              "
            >
              {/* 1 */}
              <motion.div
                whileHover={{ y: -3 }}
                className="
                  group
                  flex
                  min-h-[112px]
                  items-center
                  gap-[11px]
                  border-b
                  border-r
                  border-[#e8edf2]
                  px-[10px]

                  md:border-b-0
                "
              >
                <div
                  className="
                    flex
                    h-[44px]
                    w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    transition-all
                    duration-300

                    bg-[#153f83]
                    group-hover:text-white
                  "
                >
                  <Upload size={24} strokeWidth={1.45} />
                </div>

                <div>
                  <p
                    className="
                      text-[13.5px]
                      font-[600]
                      text-[#082c5c]
                    "
                  >
                    Easy Submission
                  </p>

                  <p
                    className="
                      mt-[3px]
                      text-[10.5px]
                      leading-[1.4]
                      text-[#6f7e8e]
                    "
                  >
                    Simple online process
                  </p>
                </div>
              </motion.div>

              {/* 2 */}
              <motion.div
                whileHover={{ y: -3 }}
                className="
                  group
                  flex
                  min-h-[92px]
                  items-center
                  gap-[11px]
                  border-b
                  border-[#e8edf2]
                  px-[10px]

                  md:border-b-0
                  md:border-r
                "
              >
                <div
                  className="
                    flex
                    h-[44px]
                    w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    transition-all
                    duration-300

                    bg-[#288938]
                    group-hover:text-white
                  "
                >
                  <ShieldCheck
                    size={24}
                    strokeWidth={1.45}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[13.5px]
                      font-[600]
                      text-[#082c5c]
                    "
                  >
                    Secure Process
                  </p>

                  <p
                    className="
                      mt-[3px]
                      text-[10.5px]
                      leading-[1.4]
                      text-[#6f7e8e]
                    "
                  >
                    Confidential submission
                  </p>
                </div>
              </motion.div>

              {/* 3 */}
              <motion.div
                whileHover={{ y: -3 }}
                className="
                  group
                  flex
                  min-h-[92px]
                  items-center
                  gap-[11px]
                  border-b
                  border-r
                  border-[#e8edf2]
                  px-[10px]

                  md:border-b-0
                "
              >
                <div
                  className="
                    flex
                    h-[44px]
                    w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    transition-all
                    duration-300

                    bg-[#173d86]
                    group-hover:text-white
                  "
                >
                  <ClipboardCheck
                    size={24}
                    strokeWidth={1.45}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[13.5px]
                      font-[600]
                      text-[#082c5c]
                    "
                  >
                    Peer Review
                  </p>

                  <p
                    className="
                      mt-[3px]
                      text-[10.5px]
                      leading-[1.4]
                      text-[#6f7e8e]
                    "
                  >
                    Rigorous assessment
                  </p>
                </div>
              </motion.div>

              {/* 4 */}
              <motion.div
                whileHover={{ y: -3 }}
                className="
                  group
                  flex
                  min-h-[92px]
                  items-center
                  gap-[11px]
                  border-b
                  border-[#e8edf2]
                  px-[10px]

                  md:border-b-0
                  md:border-r
                "
              >
                <div
                  className="
                    flex
                    h-[44px]
                    w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    transition-all
                    duration-300

                    bg-[#852c89]
                    group-hover:text-white
                  "
                >
                  <Clock
                    size={24}
                    strokeWidth={1.45}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[13.5px]
                      font-[600]
                      text-[#082c5c]
                    "
                  >
                    Timely Updates
                  </p>

                  <p
                    className="
                      mt-[3px]
                      text-[10.5px]
                      leading-[1.4]
                      text-[#6f7e8e]
                    "
                  >
                    Transparent communication
                  </p>
                </div>
              </motion.div>

              {/* 5 */}
              <motion.div
                whileHover={{ y: -3 }}
                className="
                  group
                  col-span-2
                  flex
                  min-h-[92px]
                  items-center
                  justify-center
                  gap-[11px]
                  px-[10px]

                  md:col-span-1
                  md:justify-start
                "
              >
                <div
                  className="
                    flex
                    h-[44px]
                    w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    transition-all
                    duration-300

                    bg-[#2c8a3d]
                    group-hover:text-white
                  "
                >
                  <Globe2
                    size={24}
                    strokeWidth={1.45}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[13.5px]
                      font-[600]
                      text-[#082c5c]
                    "
                  >
                    Global Reach
                  </p>

                  <p
                    className="
                      mt-[3px]
                      text-[10.5px]
                      leading-[1.4]
                      text-[#6f7e8e]
                    "
                  >
                    Worldwide visibility
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PAGE INTRO
        ====================================================== */}
        <section
          className="
            bg-white
            py-[31px]

            sm:py-[38px]
          "
        >
          <div className={container}>
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center"
            >
              <h2
                className="
                  text-[19px]
                  font-[750]
                  uppercase
                  text-[#092b5f]

                  sm:text-[22px]
                "
              >
                SUBMIT YOUR MANUSCRIPT
              </h2>

              <div
                className="
                  mx-auto
                  mt-[8px]
                  h-[2px]
                  w-[38px]
                  bg-[#328441]
                "
              />

              <p
                className="
                  mx-auto
                  mt-[8px]
                  max-w-[650px]
                  text-[10.5px]
                  font-[600]
                  leading-[1.7]
                  text-[#66788b]

                  sm:text-[11px]
                "
              >
                Please complete the form carefully. Fields
                marked with an asterisk are mandatory.
                Before submission, ensure your manuscript
                follows the journal's author guidelines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            SUBMISSION FORM
        ====================================================== */}
        <section
          id="submission-form"
          className="
            scroll-mt-[100px]
            bg-[#f8fafc]
            py-[16px]
            pb-[40px]

         
          "
        >
          <div
            className={`
              ${container}

              grid
              grid-cols-1
              items-start
              gap-[20px]

              lg:grid-cols-[minmax(0,1fr)_300px]
            `}
          >
            {/* =================================================
                LEFT FORM
            ================================================== */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.03,
              }}
              className="
                rounded-[6px]
                border
                border-[#dfe6ec]
                bg-white
                p-[17px]
                shadow-[0_4px_20px_rgba(10,40,75,0.035)]

                sm:p-[23px]
              "
            >
              {/* FORM HEADER */}
              <div
                className="
                  flex
                  flex-col
                  gap-[10px]
               
                  pb-[17px]

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[15px]
                      font-[650]
                      uppercase
                      tracking-[0.08em]
                      text-[#31823e]
                    "
                  >
                    Manuscript Information
                  </p>

               
                </div>

              
              </div>

              {/* =================================================
                  SECTION 01
              ================================================== */}
              <FormHeading
                number="01"
                title="Manuscript Details"
              />

              <div
                className="
                  grid
                  grid-cols-1
                  gap-[14px]

                  sm:grid-cols-2
                "
              >
                <div className="sm:col-span-2">
                  <label className={labelClass}>
                    Manuscript Title
                    <span className="text-[#d24e4e]">
                      {" "}
                      *
                    </span>
                  </label>

                  <input
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    placeholder="Enter complete manuscript title"
                    className={`
                      ${inputClass}

                      ${
                        errors.title
                          ? "border-[#d86868]"
                          : ""
                      }
                    `}
                  />

                  <ErrorText>
                    {errors.title}
                  </ErrorText>
                </div>

                <div>
                  <label className={labelClass}>
                    Select Journal
                    <span className="text-[#d24e4e]">
                      {" "}
                      *
                    </span>
                  </label>

                  <select
                    name="journal"
                    value={values.journal}
                    onChange={handleChange}
                    className={`
                      ${inputClass}
                      cursor-pointer

                      ${
                        errors.journal
                          ? "border-[#d86868]"
                          : ""
                      }
                    `}
                  >
                    <option value="">
                      Choose a journal
                    </option>

                    {journals.map((journal) => (
                      <option
                        key={journal}
                        value={journal}
                      >
                        {journal}
                      </option>
                    ))}
                  </select>

                  <ErrorText>
                    {errors.journal}
                  </ErrorText>
                </div>

                <div>
                  <label className={labelClass}>
                    Article Type
                    <span className="text-[#d24e4e]">
                      {" "}
                      *
                    </span>
                  </label>

                  <select
                    name="articleType"
                    value={values.articleType}
                    onChange={handleChange}
                    className={`
                      ${inputClass}
                      cursor-pointer

                      ${
                        errors.articleType
                          ? "border-[#d86868]"
                          : ""
                      }
                    `}
                  >
                    <option value="">
                      Select article type
                    </option>

                    {articleTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                      >
                        {type}
                      </option>
                    ))}
                  </select>

                  <ErrorText>
                    {errors.articleType}
                  </ErrorText>
                </div>
              </div>

              {/* =================================================
                  SECTION 02
              ================================================== */}
              <FormHeading
                number="02"
                title="Corresponding Author Details"
              />

              <div
                className="
                  grid
                  grid-cols-1
                  gap-[14px]

                  sm:grid-cols-2
                "
              >
                {/* NAME */}
                <div>
                  <label className={labelClass}>
                    Full Name
                    <span className="text-[#d24e4e]">
                      {" "}
                      *
                    </span>
                  </label>

                  <div className="relative">
                    <User
                      size={14}
                      className="
                        absolute
                        left-[13px]
                        top-1/2
                        -translate-y-1/2
                        text-[#929eaa]
                      "
                    />

                    <input
                      name="authorName"
                      value={values.authorName}
                      onChange={handleChange}
                      placeholder="Corresponding author name"
                      className={`
                        ${inputClass}
                        pl-[37px]

                        ${
                          errors.authorName
                            ? "border-[#d86868]"
                            : ""
                        }
                      `}
                    />
                  </div>

                  <ErrorText>
                    {errors.authorName}
                  </ErrorText>
                </div>

                {/* EMAIL */}
                <div>
                  <label className={labelClass}>
                    Email Address
                    <span className="text-[#d24e4e]">
                      {" "}
                      *
                    </span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={14}
                      className="
                        absolute
                        left-[13px]
                        top-1/2
                        -translate-y-1/2
                        text-[#929eaa]
                      "
                    />

                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="author@email.com"
                      className={`
                        ${inputClass}
                        pl-[37px]

                        ${
                          errors.email
                            ? "border-[#d86868]"
                            : ""
                        }
                      `}
                    />
                  </div>

                  <ErrorText>
                    {errors.email}
                  </ErrorText>
                </div>

                {/* AFFILIATION */}
                <div>
                  <label className={labelClass}>
                    Institution / Affiliation
                    <span className="text-[#d24e4e]">
                      {" "}
                      *
                    </span>
                  </label>

                  <div className="relative">
                    <Building2
                      size={14}
                      className="
                        absolute
                        left-[13px]
                        top-1/2
                        -translate-y-1/2
                        text-[#929eaa]
                      "
                    />

                    <input
                      name="affiliation"
                      value={values.affiliation}
                      onChange={handleChange}
                      placeholder="University or institution"
                      className={`
                        ${inputClass}
                        pl-[37px]

                        ${
                          errors.affiliation
                            ? "border-[#d86868]"
                            : ""
                        }
                      `}
                    />
                  </div>

                  <ErrorText>
                    {errors.affiliation}
                  </ErrorText>
                </div>

                {/* COUNTRY */}
                <div>
                  <label className={labelClass}>
                    Country
                    <span className="text-[#d24e4e]">
                      {" "}
                      *
                    </span>
                  </label>

                  <div className="relative">
                    <Globe2
                      size={14}
                      className="
                        absolute
                        left-[13px]
                        top-1/2
                        -translate-y-1/2
                        text-[#929eaa]
                      "
                    />

                    <input
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      placeholder="Country"
                      className={`
                        ${inputClass}
                        pl-[37px]

                        ${
                          errors.country
                            ? "border-[#d86868]"
                            : ""
                        }
                      `}
                    />
                  </div>

                  <ErrorText>
                    {errors.country}
                  </ErrorText>
                </div>

                {/* ORCID */}
                <div className="sm:col-span-2">
                  <label className={labelClass}>
                    ORCID ID
                  </label>

                  <input
                    name="orcid"
                    value={values.orcid}
                    onChange={handleChange}
                    placeholder="0000-0000-0000-0000"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* =================================================
                  SECTION 03
              ================================================== */}
              <FormHeading
                number="03"
                title="Research Information"
              />

              {/* ABSTRACT */}
              <div>
                <label className={labelClass}>
                  Abstract
                  <span className="text-[#d24e4e]">
                    {" "}
                    *
                  </span>
                </label>

                <textarea
                  name="abstract"
                  value={values.abstract}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Enter manuscript abstract..."
                  className={`
                    min-h-[70px]
                    w-full
                    resize-y
                    rounded-[4px]
                    border
                    bg-white
                    px-[14px]
                    py-[11px]
                    text-[11.5px]
                    font-[500]
                    leading-[1.7]
                    text-[#1b3655]
                    outline-none
                    transition-all
                    duration-300

                    placeholder:text-[#909ca9]

                    hover:border-[#b9c8d5]

                    focus:border-[#23843d]
                    focus:shadow-[0_0_0_3px_rgba(35,132,61,0.08)]

                    ${
                      errors.abstract
                        ? "border-[#d86868]"
                        : "border-[#dce4eb]"
                    }
                  `}
                />

                <ErrorText>
                  {errors.abstract}
                </ErrorText>
              </div>

              {/* KEYWORDS */}
              <div className="mt-[14px]">
                <label className={labelClass}>
                  Keywords
                  <span className="text-[#d24e4e]">
                    {" "}
                    *
                  </span>
                </label>

                <input
                  name="keywords"
                  value={values.keywords}
                  onChange={handleChange}
                  placeholder="Example: artificial intelligence; machine learning; healthcare"
                  className={`
                    ${inputClass}

                    ${
                      errors.keywords
                        ? "border-[#d86868]"
                        : ""
                    }
                  `}
                />

                <ErrorText>
                  {errors.keywords}
                </ErrorText>
              </div>

              {/* =================================================
                  SECTION 04
              ================================================== */}
              <FormHeading
                number="04"
                title="Upload Files"
              />

              <div
                className="
                  grid
                  grid-cols-1
                  gap-[13px]

                  sm:grid-cols-2
                "
              >
                {/* MANUSCRIPT */}
                <UploadBox
                  title="Manuscript File"
                  required
                  file={manuscriptFile}
                  description="PDF, DOC or DOCX • Max 10 MB"
                  error={errors.manuscriptFile}
                  onChange={handleManuscriptFile}
                  onRemove={() =>
                    setManuscriptFile(null)
                  }
                />

                {/* COVER LETTER */}
                <UploadBox
                  title="Cover Letter"
                  file={coverLetter}
                  description="Optional • PDF, DOC or DOCX"
                  error={errors.coverLetter}
                  onChange={handleCoverLetter}
                  onRemove={() =>
                    setCoverLetter(null)
                  }
                />
              </div>

        
              {/* DECLARATION */}
              <div
                className={`
                  mt-[17px]
                  rounded-[4px]
                  border
                  bg-[#f8fafc]
                  p-[12px]

                  ${
                    errors.declaration
                      ? "border-[#dc7a7a]"
                      : "border-[#e2e8ed]"
                  }
                `}
              >
                <label
                  className="
                    flex
                    cursor-pointer
                    items-start
                    gap-[9px]
                  "
                >
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={values.declaration}
                    onChange={handleChange}
                    className="
                      mt-[2px]
                      h-[14px]
                      w-[14px]
                      shrink-0
                      accent-[#27863b]
                    "
                  />

                  <span
                    className="
                      text-[10.5px]
                      font-[500]
                      leading-[1.65]
                      text-[#5c6f81]
                    "
                  >
                    I confirm that this manuscript is
                    original, is not currently under
                    consideration by another journal,
                    all authors have approved the
                    submission, and all relevant
                    conflicts of interest have been
                    disclosed.
                  </span>
                </label>

                <ErrorText>
                  {errors.declaration}
                </ErrorText>
              </div>

              {/* SUBMIT BUTTON */}
              <div
                className="
                  mt-[20px]
                  flex
                  flex-col
                  gap-[10px]

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p
                  className="
                    text-[10.5px]
                    leading-[1.5]
                    text-[#7c8b99]
                  "
                >
                  Please review all information before
                  submitting your manuscript.
                </p>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={
                    submitting
                      ? {}
                      : {
                          y: -2,
                        }
                  }
                  whileTap={
                    submitting
                      ? {}
                      : {
                          scale: 0.98,
                        }
                  }
                  className="
                    group
                    inline-flex
                    h-[44px]
                    w-full
                    items-center
                    justify-center
                    gap-[8px]
                    rounded-[4px]
                    bg-[#2c8137]
                    px-[20px]
                    text-[13px]
                    font-[650]
                    text-white
                    shadow-[0_4px_12px_rgba(44,129,55,0.17)]
                    transition-all
                    duration-300

                    hover:bg-[#216c2b]

                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    sm:w-auto
                    sm:min-w-[170px]
                  "
                >
                  {submitting ? (
                    <>
                      <span
                        className="
                          h-[14px]
                          w-[14px]
                          animate-spin
                          rounded-full
                          border-2
                          border-white/35
                          border-t-white
                        "
                      />

                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Manuscript

                      <Send
                        size={17}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-[3px]
                        "
                      />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>

            {/* =================================================
                RIGHT SIDEBAR
            ================================================== */}
            <div
              className="
                space-y-[16px]

                lg:sticky
                lg:top-[95px]
              "
            >
              {/* BEFORE SUBMIT */}
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
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  rounded-[6px]
                  border
                  border-[#e0e6eb]
                  bg-white
                  p-[16px]
                  shadow-[0_4px_18px_rgba(10,40,75,0.035)]
                "
              >
                <div
                  className="
                    flex
                    h-[44px]
                    w-[44px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#eff7ec]
                    text-[#39893e]
                  "
                >
                  <ClipboardCheck
                    size={24}
                    strokeWidth={1.6}
                  />
                </div>

                <h3
                  className="
                    mt-[12px]
                    text-[17px]
                    font-[750]
                    text-[#0b2d5b]
                  "
                >
                  Before You Submit
                </h3>

                <div className="mt-[16px] space-y-[13px]">
                  {[
                    "Manuscript fits the journal scope",
                    "Author information is complete",
                    "Abstract and keywords are included",
                    "Figures and tables are numbered",
                    "References are formatted consistently",
                    "Ethical declarations are complete",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-[7px]
                        text-[12.5px]
                        leading-[1.5]
                        text-[#647789]
                      "
                    >
                      <CheckCircle2
                        size={16}
                        className="
                          mt-[1px]
                          shrink-0
                          text-[#3b9447]
                        "
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* GUIDELINES */}
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
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  rounded-[6px]
                  bg-[#062d5c]
                  p-[17px]
                  text-white
                  shadow-[0_6px_20px_rgba(6,45,92,0.14)]
                "
              >
                <BookOpen
                  size={29}
                  className="text-[#a8c634]"
                />

                <h3
                  className="
                    mt-[15px]
                    text-[17px]
                    font-[750]
                  "
                >
                  Author Guidelines
                </h3>

                <p
                  className="
                    mt-[12px]
                    text-[12.5px]
                    leading-[1.65]
                    text-white/85
                  "
                >
                  Review manuscript preparation,
                  formatting, ethical and submission
                  requirements before uploading.
                </p>

              
              </motion.div>

              {/* HELP */}
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
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  rounded-[6px]
                  border
                  border-[#e0e6eb]
                  bg-white
                  p-[16px]
                  shadow-[0_4px_18px_rgba(10,40,75,0.035)]
                "
              >
                <MessageSquare
                  size={29}
                  className="text-[#318b3d]"
                />

                <h3
                  className="
                    mt-[16px]
                    text-[17px]
                    font-[600]
                    text-[#0b2d5b]
                  "
                >
                  Need Assistance?
                </h3>

                <p
                  className="
                    mt-[12px]
                    text-[12.5px]
                    leading-[1.65]
                    text-[#68798a]
                  "
                >
                  Our editorial support team can help
                  you with submission-related queries.
                </p>

                <a
                  href="mailto:editorial@globalreviewspress.com"
                  className="
                    mt-[18px]
                    block
                    break-all
                    text-[13.5px]
                    font-[600]
                    text-[#2d833a]
                    transition-colors

                    hover:text-[#062d5c]
                  "
                >
                  editorial@globalreviewspress.com
                </a>
              </motion.div>

              {/* =================================================
    WHAT HAPPENS NEXT
================================================== */}
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
  }}
  transition={{
    duration: 0.5,
  }}
  whileHover={{
    y: -3,
  }}
  className="
    group
    rounded-[6px]
    border
    border-[#e0e6eb]
    bg-white
    p-[16px]
    shadow-[0_4px_18px_rgba(10,40,75,0.035)]
    transition-all
    duration-300

    hover:border-[#d4e0e7]
    hover:shadow-[0_8px_24px_rgba(10,40,75,0.075)]
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
      h-[44px]
      w-[44px]
      items-center
      justify-center
      rounded-full
      bg-[#eef4fb]
      text-[#174d86]
    "
  >
    <Search
      size={23}
      strokeWidth={1.55}
    />
  </motion.div>

  {/* TITLE */}
  <h3
    className="
      mt-[16px]
      text-[19px]
      font-[600]
      text-[#0b2d5b]
    "
  >
    What Happens Next?
  </h3>

  {/* DESCRIPTION */}
  <p
    className="
      mt-[14px]
      text-[13px]
      font-[500]
      leading-[1.65]
      text-[#68798a]
    "
  >
    After submission, your manuscript will undergo an
    initial editorial assessment before being sent for
    peer review.
  </p>

  {/* STEPS */}
  <div className="mt-[18px] space-y-[14px]">
    {/* STEP 1 */}
    <div
      className="
        flex
        items-start
        gap-[11px]
      "
    >
      <div
        className="
          flex
          h-[24px]
          w-[24px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#edf7ec]
          text-[9px]
          font-[800]
          text-[#37863e]
        "
      >
        01
      </div>

      <div>
        <p
          className="
            text-[12.5px]
            font-[600]
            text-[#183958]
          "
        >
          Initial Screening
        </p>

        <p
          className="
            mt-[2px]
            text-[11.5px]
            leading-[1.5]
            text-[#84919e]
          "
        >
          Scope and submission checks.
        </p>
      </div>
    </div>

    {/* STEP 2 */}
    <div
      className="
        flex
        items-start
        gap-[11px]
      "
    >
      <div
        className="
          flex
          h-[24px]
          w-[24px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#eef4fb]
          text-[9px]
          font-[800]
          text-[#174d86]
        "
      >
        02
      </div>

      <div>
        <p
          className="
            text-[13.5px]
            font-[600]
            text-[#183958]
          "
        >
          Peer Review
        </p>

        <p
          className="
            mt-[2px]
            text-[11.5px]
            leading-[1.5]
            text-[#84919e]
          "
        >
          Evaluation by subject experts.
        </p>
      </div>
    </div>

    {/* STEP 3 */}
    <div
      className="
        flex
        items-start
        gap-[11px]
      "
    >
      <div
        className="
          flex
          h-[24px]
          w-[24px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#f4eef9]
          text-[9px]
          font-[800]
          text-[#7b4387]
        "
      >
        03
      </div>

      <div>
        <p
          className="
            text-[12.5px]
            font-[600]
            text-[#183958]
          "
        >
          Editorial Decision
        </p>

        <p
          className="
            mt-[2px]
            text-[11.5px]
            leading-[1.5]
            text-[#84919e]
          "
        >
          Decision and next-step communication.
        </p>
      </div>
    </div>
  </div>
</motion.div>
            </div>
          </div>
        </section>

    

   

             {/* =========================================================
            CTA SECTION
        ========================================================== */}
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

    mb-[30px]
    sm:mb-[38px]
    lg:mb-[45px]
  "
  style={{
    backgroundImage: `url(${submitCta})`,
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
                
                  text-[19px]
                  font-[650]
                  leading-[1.25]
                  tracking-[0.02em]
                  text-white
        
                  min-[390px]:text-[16px]
        
                  sm:text-[19px]
        
                  lg:text-[22px]
                "
              >
                  Ready to share your research with
                the world?
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
                  
                  text-[12px]
                  font-[500]
                  leading-[1.75]
                  text-white/90
        
                  min-[390px]:text-[12.5px]
        
                  sm:text-[13px]
        
                  lg:text-[13px]
                "
              >
               Publish with Global Reviews Press and
                become 
                <br className="hidden sm:block" />
             part of a growing global
                research community.
              </motion.p>
            </motion.div>
      
        
          </div>
        </section>
      </main>

      <Footer />

      {/* =====================================================
          SUCCESS MODAL
      ====================================================== */}
      <AnimatePresence>
        {success && (
          <div
            className="
              fixed
              inset-0
              z-[250]
              flex
              items-center
              justify-center
              bg-[#021734]/70
              px-[16px]
              backdrop-blur-[3px]
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              className="
                relative
                w-full
                max-w-[410px]
                rounded-[7px]
                bg-white
                p-[25px]
                text-center
                shadow-[0_25px_80px_rgba(0,0,0,0.28)]
              "
            >
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="
                  absolute
                  right-[12px]
                  top-[12px]
                  flex
                  h-[30px]
                  w-[30px]
                  items-center
                  justify-center
                  rounded-full
                  text-[#7d8995]
                  transition-colors

                  hover:bg-[#f0f4f6]
                  hover:text-[#082d5b]
                "
              >
                <X size={16} />
              </button>

              <div
                className="
                  mx-auto
                  flex
                  h-[62px]
                  w-[62px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#edf8e7]
                  text-[#37893e]
                "
              >
                <CheckCircle2
                  size={31}
                  strokeWidth={1.6}
                />
              </div>

              <h3
                className="
                  mt-[15px]
                  text-[19px]
                  font-[750]
                  text-[#082d5b]
                "
              >
                Manuscript Submitted
              </h3>

              <div
                className="
                  mx-auto
                  mt-[8px]
                  h-[2px]
                  w-[34px]
                  bg-[#7eac29]
                "
              />

              <p
                className="
                  mx-auto
                  mt-[11px]
                  max-w-[325px]
                  text-[9.5px]
                  leading-[1.7]
                  text-[#6c7c8c]
                "
              >
                Thank you for submitting your
                manuscript to Global Reviews Press.
                Your submission has been received for
                initial editorial assessment.
              </p>

              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="
                  mt-[17px]
                  inline-flex
                  h-[39px]
                  items-center
                  justify-center
                  rounded-[4px]
                  bg-[#2d8139]
                  px-[20px]
                  text-[9.5px]
                  font-[700]
                  text-white
                  transition-all

                  hover:bg-[#216b2c]
                "
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   FORM HEADING
========================================================= */
function FormHeading({ number, title }) {
  return (
    <div
      className="
        mb-[14px]
        mt-[12px]
     
        flex
        items-center
        gap-[9px]
   
      "
    >
      <div
        className="
          flex
          h-[23px]
          w-[23px]
          items-center
          justify-center
          rounded-full
          bg-[#edf7ec]
          text-[8px]
          font-[800]
          text-[#32823d]
        "
      >
        {number}
      </div>

      <h3
        className="
          text-[14px]
          font-[750]
          text-[#0b2e5d]
        "
      >
        {title}
      </h3>
    </div>
  );
}

/* =========================================================
   ERROR TEXT
========================================================= */
function ErrorText({ children }) {
  if (!children) return null;

  return (
    <p
      className="
        mt-[5px]
        text-[8px]
        font-[500]
        text-[#c84f4f]
      "
    >
      {children}
    </p>
  );
}

/* =========================================================
   UPLOAD BOX
========================================================= */
function UploadBox({
  title,
  required = false,
  file,
  description,
  error,
  onChange,
  onRemove,
}) {
  return (
    <div>
      <label
        className="
          mb-[7px]
          block
          text-[12px]
          font-[600]
          text-[#102d59]
        "
      >
        {title}

        {required && (
          <span className="text-[#d24e4e]">
            {" "}
            *
          </span>
        )}
      </label>

      {file ? (
        <div
          className="
            flex
            min-h-[100px]
            items-center
            gap-[10px]
            rounded-[4px]
            border
            border-[#d9e3e9]
            bg-[#f8fbfc]
            p-[12px]
          "
        >
          <div
            className="
              flex
              h-[42px]
              w-[42px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#edf7ec]
              text-[#37863e]
            "
          >
            <FileText size={19} />
          </div>

          <div className="min-w-0 flex-1">
            <p
              className="
                truncate
                text-[10.5px]
                font-[600]
                text-[#183958]
              "
            >
              {file.name}
            </p>

            <p
              className="
                mt-[3px]
                text-[10.5px]
                text-[#84919e]
              "
            >
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>

          <button
            type="button"
            onClick={onRemove}
            className="
              flex
              h-[27px]
              w-[27px]
              items-center
              justify-center
              rounded-full
              text-[#778694]
              transition-colors

              hover:bg-[#edf1f3]
              hover:text-[#c64c4c]
            "
          >
            <X size={13} />
          </button>
        </div>
      ) : (
        <label
          className={`
            group
            flex
            min-h-[90px]
            cursor-pointer
            items-center
            gap-[11px]
            rounded-[4px]
            border
            border-dashed
            bg-[#fafcfd]
            p-[12px]
            transition-all
            duration-300

            hover:border-[#398840]
            hover:bg-[#f7fbf6]

            ${
              error
                ? "border-[#dc6b6b]"
                : "border-[#cbd7df]"
            }
          `}
        >
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={onChange}
            className="hidden"
          />

          <div
            className="
              flex
              h-[42px]
              w-[42px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#eef7eb]
              text-[#37863e]
              transition-transform
              duration-300

              group-hover:-translate-y-[2px]
            "
          >
            <Upload size={19} />
          </div>

          <div>
            <p
              className="
                text-[11.5px]
                font-[600]
                text-[#173956]
              "
            >
              Click to upload
            </p>

            <p
              className="
                mt-[3px]
                text-[10.5px]
                leading-[1.4]
                text-[#8895a1]
              "
            >
              {description}
            </p>
          </div>
        </label>
      )}

      <ErrorText>{error}</ErrorText>
    </div>
  );
}

/* =========================================================
   PROCESS STEP
========================================================= */
function ProcessStep({
  number,
  icon: Icon,
  title,
  text,
  color,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        relative
        z-10
        text-center
      "
    >
      <div
        className={`
          mx-auto
          flex
          h-[55px]
          w-[55px]
          items-center
          justify-center
          rounded-full
          text-white
          shadow-[0_5px_13px_rgba(8,40,80,0.12)]

          ${color}
        `}
      >
        <Icon
          size={22}
          strokeWidth={1.55}
        />
      </div>

      <span
        className="
          mt-[9px]
          block
          text-[7px]
          font-[800]
          uppercase
          text-[#7c8a98]
        "
      >
        Step {number}
      </span>

      <h3
        className="
          mt-[3px]
          text-[10px]
          font-[750]
          text-[#0c2f5f]
        "
      >
        {title}
      </h3>

      <p
        className="
          mx-auto
          mt-[5px]
          max-w-[130px]
          text-[7.8px]
          leading-[1.55]
          text-[#657789]
        "
      >
        {text}
      </p>
    </motion.div>
  );
}