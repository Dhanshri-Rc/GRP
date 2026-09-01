import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgePercent,
  BookOpen,
  BookOpenCheck,
  ClipboardCheck,
  FileCheck,
  FileText,
  Gavel,
  Globe2,
  Handshake,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  Network,
  Rocket,
  Scale,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import editorBg from "../assets/img/global-reviews-press-editor-information-hero.webp";
import editorCta from "../assets/img/join-global-reviews-press-editorial-board-cta.webp";
import e1 from "../assets/img/editor-manuscript-management-responsibility.webp";
import e2 from "../assets/img/editorial-quality-assurance-responsibility.webp";
import e3 from "../assets/img/academic-journal-promotion-responsibility.webp";
import e4 from "../assets/img/editor-publication-ethics-responsibility.webp";
import e5 from "../assets/img/editor-reviewer-publisher-collaboration.webp";
import e6 from "../assets/img/editor-strategic-journal-development.webp";

const roles = [
  {
    title: "Editorial Leadership",
    description:
      "Provide strategic direction for the journal and uphold editorial standards and integrity.",
    icon: Gavel,
    bg: "#4c9137",
  },
  {
    title: "Manuscript Oversight",
    description:
      "Manage the peer review process efficiently and make fair, balanced decisions.",
    icon: Users,
    bg: "#174a94",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensure the scientific quality, ethical standards, and relevance of published content.",
    icon: ShieldCheck,
    bg: "#168b91",
  },
  {
    title: "Community Building",
    description:
      "Promote the journal, attract quality submissions, and engage with the research community.",
    icon: Megaphone,
    bg: "#65379a",
  },
];

const benefits = [
  { title: "Global visibility and academic recognition", icon: Globe2 },
  { title: "Opportunity to shape the future of your field", icon: Network },
  {
    title: "Editorial certificate and profile on the journal website",
    icon: FileCheck,
    green: true,
  },
  {
    title: "Access to a global network of researchers and experts",
    icon: Network,
  },
  { title: "Discounts on APCs for your publications", icon: BookOpen },
  {
    title: "Eligible for annual editorial awards and appreciation",
    icon: Award,
  },
];

const responsibilities = [
  {
    title: "Manuscript Management",
    description:
      "Oversee the submission, peer review, and decision-making process in a timely manner.",
    image: e1,
  },
  {
    title: "Uphold Ethical Standards",
    description:
      "Ensure adherence to publication ethics, COPE guidelines, and conflict of interest policies.",
    image: e4,
  },
  {
    title: "Maintain Quality",
    description:
      "Ensure publications meet the journal’s scope, standards, and scientific rigor.",
    image: e2,
  },
  {
    title: "Collaborate Actively",
    description:
      "Work closely with the editorial board, reviewers, and publisher to achieve the journal’s goals.",
    image: e5,
  },
  {
    title: "Promote the Journal",
    description:
      "Encourage high-quality submissions and expand the journal’s reach within the community.",
    image: e3,
  },
  {
    title: "Provide Strategic Input",
    description:
      "Contribute ideas for special issues, thematic topics, and continuous journal improvement.",
    image: e6,
  },
];

const steps = [
  {
    number: "1.",
    title: "Express Interest",
    description: "Fill out the Editor Interest Form on our website.",
    icon: UserCheck,
    bg: "#398743",
  },
  {
    number: "2.",
    title: "Application Review",
    description: "Our team will review your qualifications and experience.",
    icon: ClipboardCheck,
    bg: "#174a94",
  },
  {
    number: "3.",
    title: "Editorial Discussion",
    description: "A short discussion with our editorial team.",
    icon: MessageCircle,
    bg: "#168b91",
  },
  {
    number: "4.",
    title: "Confirmation",
    description: "Receive your appointment letter and welcome kit.",
    icon: Handshake,
    bg: "#65379a",
  },
  {
    number: "5.",
    title: "Onboarding",
    description: "Get onboarded and start your editorial journey with us.",
    icon: Rocket,
    bg: "#4c9137",
  },
];

const resources = [
  {
    title: "Editorial Guidelines",
    description: "Detailed policies and editorial standards.",
    icon: UserCheck,
    bg: "#4c9137",
  },
  {
    title: "Reviewer Guidelines",
    description: "Best practices for selecting and working with reviewers.",
    icon: BookOpenCheck,
    bg: "#174a94",
  },
  {
    title: "Publication Ethics",
    description: "A short guideline on ethical publishing resources.",
    icon: Scale,
    bg: "#65379a",
  },
  {
    title: "Templates & Forms",
    description: "Access editorial templates, forms, and checklists.",
    icon: FileText,
    bg: "#168b91",
  },
  {
    title: "Training & Webinars",
    description: "Regular sessions to support editors in their role.",
    icon: LayoutDashboard,
    bg: "#923a96",
  },
  {
    title: "Editor Dashboard",
    description: "Manage submissions, track reviews, and monitor performance.",
    icon: Target,
    bg: "#168b91",
  },
];

export default function EditorsInformation() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden bg-white pt-[70px] font-sans text-[#071b3d] sm:pt-[75px]">
        {/* ==================== HERO SECTION ==================== */}
        <section
          className="relative isolate min-h-[360px] overflow-hidden bg-[#031a3e] bg-cover bg-[72%_center] bg-no-repeat sm:min-h-[380px] sm:bg-[68%_center] lg:min-h-[410px] lg:bg-center"
          style={{ backgroundImage: `url(${editorBg})` }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03152f]/94 via-[#031a3e]/58 to-transparent sm:via-[#031a3e]/32 lg:via-transparent" />

          <div className="mx-auto flex min-h-[360px] w-[min(1120px,calc(100%-32px))] items-center py-12 sm:min-h-[380px] sm:w-[min(1120px,calc(100%-48px))] lg:min-h-[410px]">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="w-full max-w-[465px] text-white"
            >
              <h1 className="text-[27px] font-[600] uppercase leading-none tracking-[-0.02em] sm:text-[29px] lg:text-[32px]">
                Information to Editor
              </h1>
              <p className="mt-4 text-[16px] font-semibold text-[#8fc63f] sm:text-[18px]">
                Partner in Scholarly Excellence
              </p>
              <p className="mt-5 w-full max-w-[440px] text-[14px] font-medium leading-6 text-white/95 sm:text-[15px] sm:leading-7">
                Editors are at the heart of our mission to deliver high-quality,
                peer-reviewed publications that advance knowledge and drive
                global impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ==================== ROLES OF EDITORS ==================== */}
        <section className="bg-white py-5 sm:py-5">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[19px] font-[550] text-[#09235a] sm:text-[21px]">
                ROLES OF EDITORS
              </h2>
              <div className="mx-auto mt-2 h-[2px] w-9 bg-[#52ac59]" />
            </motion.div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <motion.article
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.42, delay: index * 0.07 }}
                    whileHover={{ y: -6 }}
                    className="flex min-h-[142px] items-start gap-4 rounded-[7px] border border-[#dce4ec] bg-white p-5 shadow-[0_5px_16px_rgba(4,28,61,0.04)] hover:shadow-[0_12px_28px_rgba(4,28,61,0.12)]"
                  >
                    <div
                      className="grid size-[48px] shrink-0 place-items-center rounded-full text-white"
                      style={{ backgroundColor: role.bg }}
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-[550] text-[#09235a]">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-[12.5px] leading-5 text-[#3f4c60]">
                        {role.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== BENEFITS ==================== */}
        <section className="bg-white pb-8 sm:pb-10">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[18px] font-[550] text-[#09235a] sm:text-[21px]">
                BENEFITS OF JOINING AS EDITOR
              </h2>
              <div className="mx-auto mt-2 h-[2px] w-9 bg-[#52ac59]" />
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    whileHover={{ y: -5 }}
                    className="flex min-h-[118px] flex-col items-center border-[#dde4eb] px-2 text-center lg:border-r lg:last:border-r-0"
                  >
                    <Icon
                      size={37}
                      strokeWidth={1.65}
                      className={
                        benefit.green ? "text-[#278642]" : "text-[#173f78]"
                      }
                    />
                    <p className="mt-4 text-[12px] font-medium leading-5 text-[#253a5c]">
                      {benefit.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== RESPONSIBILITIES ==================== */}
        <section className="bg-white pb-9 sm:pb-11">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[18px] font-[550] text-[#09235a] sm:text-[21px]">
                RESPONSIBILITIES OF EDITORS
              </h2>
              <div className="mx-auto mt-2 h-[2px] w-9 bg-[#52ac59]" />
            </motion.div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {responsibilities.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group grid min-h-[130px] overflow-hidden rounded-[7px] bg-[#f8f9fb] shadow-[0_4px_14px_rgba(4,28,61,0.04)] min-[460px]:grid-cols-[0.94fr_1fr]"
                >
                  <div className="h-[175px] overflow-hidden min-[460px]:h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5">
                    <h3 className="text-[15px] font-[550] text-[#09235a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-5 text-[#3f4c60]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== JOIN PROCESS ==================== */}
        <section className="bg-white pb-9 sm:pb-11">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[18px] font-[550] text-[#09235a] sm:text-[21px]">
                HOW TO JOIN OUR EDITORIAL BOARD
              </h2>
              <div className="mx-auto mt-2 h-[2px] w-9 bg-[#52ac59]" />
            </motion.div>

            <div className="relative mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              <div className="absolute left-[10%] right-[10%] top-[27px] hidden border-t border-dashed border-[#b7c5d5] lg:block" />
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, delay: index * 0.07 }}
                    whileHover={{ y: -5 }}
                    className="relative z-10 flex flex-col items-center px-3 text-center"
                  >
                    <div
                      className="grid size-[56px] place-items-center rounded-full border-4 border-white text-white shadow-[0_0_0_1px_#d4dde6]"
                      style={{ backgroundColor: step.bg }}
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 text-[14px] font-[550] text-[#09235a]">
                      {step.number} {step.title}
                    </h3>
                    <p className="mt-2 max-w-[175px] text-[12px] leading-[1.55] text-[#47556a]">
                      {step.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== RESOURCES ==================== */}
        <section className="bg-white pb-10 sm:pb-12">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[18px] font-[550] text-[#09235a] sm:text-[21px]">
                RESOURCES FOR EDITORS
              </h2>
              <div className="mx-auto mt-2 h-[2px] w-9 bg-[#52ac59]" />
            </motion.div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.article
                    key={resource.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    whileHover={{ y: -6 }}
                    className="min-h-[155px] rounded-[7px] border border-[#dce4ec] bg-white p-3 shadow-[0_4px_14px_rgba(4,28,61,0.04)] hover:shadow-[0_12px_26px_rgba(4,28,61,0.11)]"
                  >
                    <div
                      className="grid size-[43px] place-items-center rounded-full text-white"
                      style={{ backgroundColor: resource.bg }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-3 text-[13px] font-[550] text-[#09235a]">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-[1.55] text-[#47556a]">
                      {resource.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section
          className="relative isolate overflow-hidden bg-[#052656] bg-cover bg-center bg-no-repeat py-7 text-white sm:py-8"
          style={{ backgroundImage: `url(${editorCta})` }}
        >
          <div className="absolute inset-0 -z-10 bg-[#03275a]/22" />
          <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col items-start justify-between gap-6 sm:w-[min(1120px,calc(100%-48px))] md:flex-row md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <Users
                size={38}
                strokeWidth={1.7}
                className="hidden shrink-0 sm:block"
              />
              <h2 className="max-w-[590px] text-[16px] font-[550] leading-[1.4] sm:text-[18px]">
                Be a part of our mission to advance knowledge
                <br className="hidden sm:block" /> and create real-world impact.
              </h2>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, backgroundColor: "#337e34" }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true }}
              href="/contact"
              className="flex w-full items-center justify-center gap-5 rounded-[5px] bg-[#4c9137] px-4 py-3 text-[12.5px] font-[550] text-white shadow-lg min-[430px]:w-auto min-[430px]:min-w-[210px]"
            >
              Become an Editor <ArrowRight size={18} />
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
