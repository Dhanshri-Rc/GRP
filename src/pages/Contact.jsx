import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  FileText,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import contactBg from "../assets/img/contactBg.png";
import contactCta from "../assets/img/contactCta.png";
import faqImage from "../assets/img/faq.png";
import indiaImage from "../assets/img/india.png";
import malaysiaImage from "../assets/img/malasiya.png";
import philippinesImage from "../assets/img/phillippines.png";
import singaporeImage from "../assets/img/singapure.png";
import unitedKingdomImage from "../assets/img/unitedKingdom.png";

const container =
  "mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]";

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const heroBenefits = [
  { icon: Headphones, label: "Quick\nSupport" },
  { icon: Mail, label: "Prompt\nResponse" },
  { icon: ShieldCheck, label: "Trusted\nAssistance" },
  { icon: Globe2, label: "Global\nPresence" },
];

const locations = [
  { country: "India", city: "Nagpur (Head Office)", image: indiaImage },
  { country: "Malaysia", city: "Kuala Lumpur", image: malaysiaImage },
  { country: "Philippines", city: "Manila", image: philippinesImage },
  { country: "Singapore", city: "Singapore", image: singaporeImage },
  { country: "United Kingdom", city: "London", image: unitedKingdomImage },
];

const faqs = [
  {
    question: "How do I submit my manuscript?",
    answer:
      "Use the Submit Manuscript page, complete the author details, and upload your manuscript and supporting files.",
  },
  {
    question: "What is the publication process?",
    answer:
      "Each submission passes through editorial screening, peer review, revision, acceptance, and final publication.",
  },
  {
    question: "How long does peer review take?",
    answer:
      "The review period depends on the journal and reviewer availability. The editorial team will keep you informed of progress.",
  },
  {
    question: "Do you offer waivers or discounts on APC?",
    answer:
      "Waivers and discounts may be available according to the selected journal's policy and the author's circumstances.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    type: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      type: "",
      message: "",
      privacy: false,
    });
  };

  return (
    <>
      <Header />
      <main className="overflow-hidden bg-white text-[#07163e] pt-[70px] sm:pt-[75px]">
        {/* ==================== HERO SECTION ==================== */}
        <section
          className="relative isolate min-h-[360px] bg-[#031b38] bg-cover bg-[position:58%_center] bg-no-repeat text-white sm:min-h-[380px] lg:min-h-[410px]] lg:bg-center"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          {/* <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#021831]/95 via-[#031d38]/72 to-transparent lg:via-[#031d38]/30" /> */}
          <div
            className={`${container} flex min-h-[360px] items-center py-10 sm:min-h-[380px] sm:min-h-[410px]`}
          >
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="w-full max-w-[445px]"
            >
              <h1 className="text-[27px] font-[600] uppercase leading-none tracking-[-0.02em] sm:text-[29px] lg:text-[32px]">
                CONTACT US
              </h1>
              <div className="mt-3 h-[2px] w-10 bg-[#7ba927]" />
              <p className="mt-5 w-full max-w-[480px] text-[14px] font-medium leading-6 text-white/95 sm:text-[15px] sm:leading-7">
                We are here to assist you. Reach out to us for any queries
                related to submissions, partnerships, journal collaborations, or
                general information.
              </p>

              <div className="mt-7 grid max-w-[440px] grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
                {heroBenefits.map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -4 }}
                    className={`flex min-h-[72px] flex-col items-center justify-center px-2 text-center ${index ? "sm:border-l sm:border-white/20" : ""}`}
                  >
                    <Icon className="mb-2 h-8 w-8 stroke-[1.5] text-[#91b52b]" />
                    <span className="whitespace-pre-line text-[12px] font-medium leading-[15px]">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== CONTACT FORM AND DETAILS ==================== */}
        <section id="contact-form" className="scroll-mt-24 py-7 sm:py-10">
          <div
            className={`${container} grid gap-7 lg:grid-cols-[1.42fr_0.92fr]`}
          >
            <motion.div
              {...reveal}
              className="rounded-[7px] border border-[#dce2e8] bg-white p-5 shadow-[0_8px_24px_rgba(7,22,62,0.04)] sm:p-8"
            >
              <SectionHeading>Send Us a Message</SectionHeading>

              {submitted ? (
                <div
                  role="status"
                  className="mt-5 rounded-md border border-[#9ac16b] bg-[#f2f9ea] p-6 text-center text-[12px] font-medium text-[#236321]"
                >
                  Thank you! Your message has been sent successfully.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormInput
                      name="name"
                      type="text"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormInput
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <FormInput
                    name="subject"
                    type="text"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <select
                    required
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="h-[46px] w-full rounded-[5px] border border-[#d8dee6] bg-white px-4 text-[13px] text-[#5c6470] outline-none transition focus:border-[#397b2e] focus:ring-2 focus:ring-[#397b2e]/10"
                  >
                    <option value="" disabled>
                      Select Enquiry Type *
                    </option>
                    <option value="manuscript">Manuscript Submission</option>
                    <option value="journal">Journal Inquiry</option>
                    <option value="reviewer">Reviewer Inquiry</option>
                    <option value="partnership">
                      Business &amp; Partnership
                    </option>
                    <option value="general">General Information</option>
                  </select>
                  <textarea
                    required
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="min-h-[140px] w-full resize-y rounded-[5px] border border-[#d8dee6] px-4 py-3 text-[12px] text-[#18223d] outline-none transition placeholder:text-[#707680] focus:border-[#397b2e] focus:ring-2 focus:ring-[#397b2e]/10"
                  />
                  <label className="flex cursor-pointer items-start gap-2 text-[12px] leading-5 text-[#4d5664]">
                    <input
                      required
                      name="privacy"
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 h-3.5 w-3.5 accent-[#347529]"
                    />
                    <span>
                      I agree to the{" "}
                      <a
                        href="/privacy-policy"
                        className="font-medium text-[#0c5591] hover:underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="/terms"
                        className="font-medium text-[#0c5591] hover:underline"
                      >
                        Terms of Use
                      </a>
                      .
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="group flex h-[44px] w-full items-center justify-center gap-2 rounded-[5px] bg-gradient-to-r from-[#176422] to-[#69a82a] text-[13px] font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(51,124,37,0.25)]"
                  >
                    <Send className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{" "}
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            <motion.aside
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.08 }}
              className="rounded-[7px] bg-gradient-to-br from-[#fbfcfd] to-[#f4f6f7] p-5 sm:p-8"
            >
              <SectionHeading>Get in Touch</SectionHeading>
              <div className="mt-5 space-y-4">
                <ContactItem icon={MapPin} title="Head Office">
                  202, Planet Apt., Omkarnagar, Besa Road,
                  <br />
                  Near Sahyadri Lawn, Nagpur - 440037,
                  <br />
                  Maharashtra, India.
                </ContactItem>
                <ContactItem icon={Phone} title="Phone">
                  +91 99702 94396&nbsp;&nbsp; | &nbsp;&nbsp;+91 70208 92896
                </ContactItem>
                <ContactItem icon={Mail} title="Email">
                  contact@globalreviewspress.com
                  <br />
                  editorial@globalreviewspress.com
                </ContactItem>
                <ContactItem icon={Users} title="Business & Partnerships">
                  partnerships@globalreviewspress.com
                </ContactItem>
                <ContactItem icon={Headphones} title="Support">
                  support@globalreviewspress.com
                </ContactItem>
                <ContactItem icon={Clock3} title="Working Hours">
                  Monday - Friday: 9:30 AM - 6:30 PM (IST)
                  <br />
                  Saturday: 10:00 AM - 2:00 PM (IST)
                </ContactItem>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* ==================== GLOBAL PRESENCE ==================== */}
        <section className="relative bg-[#fbfcfd] py-4 sm:py-0">
          <div className={container}>
            <motion.div {...reveal} className="text-center">
              <h2 className="text-[18px] font-[550] uppercase text-[#0b1b50] sm:text-[21px]">
                Our Global Presence
              </h2>
              <div className="mx-auto mt-1 h-[2px] w-9 bg-[#61a33d]" />
            </motion.div>
            <div className="mt-6 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {locations.map((location, index) => (
                <motion.article
                  key={location.country}
                  {...reveal}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-[6px] border border-[#d8dfe7] bg-white shadow-[0_4px_14px_rgba(7,22,62,0.03)] transition-shadow hover:shadow-[0_12px_25px_rgba(7,22,62,0.13)]"
                >
                  <div className="h-[132px] overflow-hidden">
                    <img
                      src={location.image}
                      alt={`${location.country} office location`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <h3 className="text-[14px] font-[550] text-[#0b1b50]">
                      {location.country}
                    </h3>
                    <p className="mt-1.5 flex items-center gap-1 text-[12px] text-[#4f5867]">
                      <MapPin className="h-3 w-3 fill-[#398537] text-[#398537]" />
                      {location.city}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== FAQ SECTION ==================== */}
        <section className="py-7 sm:py-8">
          <motion.div
            {...reveal}
            className={`${container} grid overflow-hidden rounded-[7px] border border-[#e1e5e9] bg-gradient-to-r from-[#f7f9f9] to-white p-5 shadow-[0_7px_22px_rgba(7,22,62,0.04)] md:grid-cols-[0.72fr_1.25fr_0.62fr] md:items-center md:p-6`}
          >
            <div className="border-b border-[#dfe4e8] pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-6">
              <p className="text-[11px] font-[550] uppercase tracking-wide text-[#347529]">
                Quick Answers
              </p>
              <h2 className="mt-3 text-[18px] font-[550] text-[#0b1b50] sm:text-[21px]">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-[12px] text-[#4f5867]">
                Find quick answers to common queries.
              </p>
              <a
                href="/faq"
                className="group mt-5 inline-flex h-9 items-center gap-2 rounded-[4px] border border-[#4e8b48] px-4 text-[11px] font-semibold text-[#2d6f2c] transition hover:bg-[#347529] hover:text-white"
              >
                View All FAQs{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
            <div className="space-y-2 py-5 md:px-5 md:py-0">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[5px] border border-[#e2e6ea] bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-3 px-3 py-2.5 text-left text-[12px] font-semibold text-[#12204b] transition hover:bg-[#f5f8f4]"
                    >
                      <FileText className="h-4 w-4 shrink-0 text-[#378039]" />
                      <span className="flex-1">{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <p className="border-t border-[#edf0f2] px-10 py-3 text-[12px] leading-5 text-[#596170]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="hidden justify-center md:flex">
              <img
                src={faqImage}
                alt="Contact and frequently asked questions"
                className="h-auto max-h-[160px] w-full max-w-[190px] object-contain"
              />
            </div>
          </motion.div>
        </section>

        {/* ==================== CONTACT CTA ==================== */}
        <section
          className="
    relative
    isolate
    overflow-hidden
    bg-[#061e39]
    bg-cover
    bg-[position:18%_center]
    bg-no-repeat
    text-white
  "
          style={{
            backgroundImage: `url(${contactCta})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 -z-10 bg-[#031a34]/10" />

          <motion.div
            {...reveal}
            className={`
      ${container}
      flex
      min-h-[112px]
      flex-col
      justify-center
      gap-5
      py-6

      md:grid
      md:grid-cols-[155px_minmax(0,1fr)_280px]
      md:items-center
      md:gap-7
      md:py-4

      lg:grid-cols-[175px_minmax(0,1fr)_300px]
    `}
          >
            {/* Empty area for left-side hand image */}
            <div className="hidden md:block" />

            {/* CTA heading */}
            <motion.h2
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="
        max-w-[520px]
        text-[16px]
        font-medium
        leading-[1.4]
        tracking-[-0.01em]
        text-white

        sm:text-[16px]
        lg:text-[18px]
      "
            >
              Let’s collaborate to advance knowledge
              <br className="hidden sm:block" />
              and create a better future.
            </motion.h2>

            {/* Right-side CTA content */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              className="
        flex
        w-full
        items-center

        md:min-h-[68px]
        md:border-l
        md:border-[#7f9b72]/70
        md:pl-8
      "
            >
              <div className="w-full">
                <p className="mb-2 text-[12px] font-medium text-white sm:text-[13px]">
                  Connect with us today!
                </p>

                <a
                  href="#contact-form"
                  className="
            group
            flex
            h-[38px]
            w-full
            items-center
            justify-between
            rounded-[4px]
            bg-gradient-to-r
            from-[#347b24]
            to-[#6da728]
            px-4
            text-[12px]
            font-[550]
            text-white
            shadow-[0_5px_14px_rgba(28,86,28,0.25)]
            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:from-[#2d6f20]
            hover:to-[#5f9822]
            hover:shadow-[0_8px_18px_rgba(28,86,28,0.35)]

            sm:h-[38px]
          "
                >
                  <span>Get in Touch</span>

                  <ArrowRight
                    className="
              h-4
              w-4
              stroke-[1.8]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionHeading({ children }) {
  return (
    <div>
      <h2 className="text-[18px] font-[550] uppercase text-[#0b1b50] sm:text-[21px]">
        {children}
      </h2>
      <div className="mt-1 h-[2px] w-10 bg-[#4a963d]" />
    </div>
  );
}

function FormInput(props) {
  return (
    <input
      required
      {...props}
      className="h-[46px] w-full rounded-[5px] border border-[#d8dee6] px-4 text-[12px] text-[#18223d] outline-none transition placeholder:text-[#707680] focus:border-[#397b2e] focus:ring-2 focus:ring-[#397b2e]/10"
    />
  );
}

function ContactItem({ icon: Icon, title, children }) {
  return (
    <div className="group flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#69a35c] bg-white text-[#347529] transition duration-300 group-hover:bg-[#347529] group-hover:text-white">
        <Icon className="h-5 w-5 stroke-[1.8]" />
      </div>
      <div className="min-w-0 pt-0.5">
        <h3 className="text-[12px] font-semibold text-[#101c43]">{title}</h3>
        <div className="mt-1 break-words text-[11px] leading-[18px] text-[#3e4755]">
          {children}
        </div>
      </div>
    </div>
  );
}
