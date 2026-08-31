import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const reviewBenefits = [
  { title: 'Ensure Quality', description: 'Help uphold the highest standards of research and publication.' },
  { title: 'Global Impact', description: 'Contribute to research that drives innovation and solves real-world challenges.' },
  { title: 'Professional Growth', description: 'Enhance your academic and professional footprint in your field.' },
  { title: 'Recognition', description: 'Receive acknowledgment for your contributions.' },
  { title: 'Flexible & Fair', description: 'Manage reviews at your convenience with transparent timelines.' },
  { title: 'Ethical & Confidential', description: 'We ensure a secure, ethical, and respectful review process.' },
];

const processSteps = [
  { num: '1', title: 'Invitation', description: 'You will receive an invitation via email to review a manuscript.' },
  { num: '2', title: 'Acceptance', description: 'Accept or decline based on your availability and expertise.' },
  { num: '3', title: 'Review', description: 'Evaluate and provide constructive feedback on the manuscript.' },
  { num: '4', title: 'Recommendation', description: 'Submit your review and recommendation through our online system.' },
  { num: '5', title: 'Submission', description: 'Your review is submitted through our secure online system.' },
  { num: '6', title: 'Acknowledgment', description: 'Receive acknowledgment and access your review record.' },
];

const benefitCards = [
  { title: 'Enhance Your Profile', description: 'Showcase your expertise and contributions to the academic community.', icon: '👤' },
  { title: 'Reviewer Recognition', description: 'Receive recognition annually on our website and certificates.', icon: '🏆' },
  { title: 'Stay Informed', description: 'Gain early access to the latest research and emerging advancements.', icon: '📚' },
  { title: 'Discounts & Waivers', description: 'Enjoy discounts on APCs for your publications in our journals.', icon: '💰' },
  { title: 'Networking Opportunities', description: 'Connect with editors, authors, and experts across your field.', icon: '🤝' },
  { title: 'Intellectual Satisfaction', description: 'Play a key role in shaping high-quality research and knowledge dissemination.', icon: '💡' },
  { title: 'Track Your Activity', description: 'Monitor your review history and download certificates from your dashboard.', icon: '📊' },
  { title: 'Contribute to a Better World', description: 'Support research that addresses global challenges and advances sustainable development.', icon: '🌍' },
];

const testimonials = [
  {
    quote: 'Reviewing for Global Reviews Press has been a rewarding experience. The platform is professional, and my contributions are truly valued.',
    author: 'Prof. Michael Anderson',
    title: 'University of Toronto, Canada',
    flag: '🇨🇦',
  },
  {
    quote: 'The review process is well-structured and the editorial team is very supportive. I appreciate the recognition for reviewers contributions.',
    author: 'Dr. Priya Sharma',
    title: 'Indian Institute of Science, India',
    flag: '🇮🇳',
  },
  {
    quote: 'A great platform to contribute to impactful research while staying updated with the latest advancements in my field.',
    author: 'Prof. Li Wei',
    title: 'Tsinghua University, China',
    flag: '🇨🇳',
  },
];

export default function Reviewer() {
  return (
    <>
      <Header />
      <main>
        {/* ==================== HERO ==================== */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-20">
          <div className="container-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h1 className="text-5xl font-bold mb-4">Information for Reviewers</h1>
                <p className="text-xl text-yellow-300 font-semibold mb-6">Your Expertise. Our Impact.</p>
                <p className="text-lg leading-relaxed mb-8">
                  At Global Reviews Press, we value the vital role of reviewers in maintaining the quality, integrity, and credibility of scholarly research. Join our global community of experts and contribute to advancing knowledge across diverse disciplines.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 bg-yellow-300 text-blue-900 rounded-lg font-semibold">
                    <span className="text-2xl">15,000+</span>
                    <p className="text-sm">Expert Reviewers</p>
                  </div>
                  <div className="px-6 py-3 bg-yellow-300 text-blue-900 rounded-lg font-semibold">
                    <span className="text-2xl">120+</span>
                    <p className="text-sm">Countries</p>
                  </div>
                  <div className="px-6 py-3 bg-yellow-300 text-blue-900 rounded-lg font-semibold">
                    <span className="text-2xl">20+</span>
                    <p className="text-sm">Research Disciplines</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur p-8 rounded-lg text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-lg">Reviewer Dashboard</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== WHY REVIEW ==================== */}
        <section className="py-20 bg-white">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">WHY REVIEW WITH US?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviewBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>{benefit.title}</span>
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== REVIEW PROCESS ==================== */}
        <section className="py-20 bg-gray-50">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">OUR REVIEW PROCESS</h2>
            <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center mb-8 md:mb-0"
                >
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-center text-gray-800 mb-2 max-w-28">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center max-w-32">{step.description}</p>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block text-3xl text-gray-300 ml-8">›</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== BENEFITS ==================== */}
        <section className="py-20 bg-white">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">BENEFITS OF REVIEWING</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefitCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== GUIDELINES & CODE ==================== */}
        <section className="py-20 bg-gray-50">
          <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border-l-4 border-green-600"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center space-x-2">
                <span>📖</span>
                <span>REVIEWER GUIDELINES</span>
              </h3>
              <p className="text-gray-700 mb-6">Find detailed guidelines on how to conduct a thorough, fair, and constructive peer review.</p>
              <button className="px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all flex items-center space-x-2">
                <span>View Guidelines</span>
                <ArrowRight size={20} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border-l-4 border-purple-600"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center space-x-2">
                <span>⚖️</span>
                <span>CODE OF CONDUCT</span>
              </h3>
              <p className="text-gray-700 mb-6">We are committed to maintaining the highest ethical standards in peer review. Read our policies.</p>
              <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all flex items-center space-x-2">
                <span>Read Our Policies</span>
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ==================== TOP REVIEWERS ==================== */}
        <section className="py-20 bg-white">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">OUR TOP REVIEWERS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border border-gray-200"
                >
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3 pt-6 border-t border-gray-300">
                    <div className="text-3xl">{testimonial.flag}</div>
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
          <div className="container-xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Join our global network of experts and make a difference in research.
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all flex items-center space-x-2 mx-auto"
            >
              <span>Join as Reviewer</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </section>

        {/* ==================== INDEXING ==================== */}
        <section className="py-16 bg-white">
          <div className="container-xl text-center">
            <h3 className="text-2xl font-bold text-[#051830] mb-12">INDEXED IN LEADING DATABASES</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-2xl font-bold text-orange-500">Scopus</div>
              <div className="text-lg font-bold text-blue-600">Clarivate</div>
              <div className="text-xl font-bold">DOAJ</div>
              <div className="text-lg font-bold text-blue-600">CAS</div>
              <div className="text-lg font-bold">Dimensions</div>
              <div className="text-lg font-bold text-red-600">Crossref</div>
              <div className="text-lg font-bold text-blue-600">Google Scholar</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
