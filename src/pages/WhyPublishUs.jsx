import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const benefits = [
  { title: 'Global Visibility', description: 'Reach a worldwide audience', icon: '🌍' },
  { title: 'Publication Excellence', description: 'Rigorous peer review and editorial standards', icon: '✓' },
  { title: 'Open Access Options', description: 'Increase accessibility and citations', icon: '🔓' },
  { title: 'Impactful Research', description: 'Create real-world impact', icon: '📊' },
  { title: 'Author Support', description: 'Dedicated support at every step', icon: '👥' },
];

const reasonsCards = [
  { title: 'Rigorous Peer Review', description: 'Double-blind peer review ensures highest standards of quality.', icon: '✓' },
  { title: 'Global Reach', description: 'Your research is visible to a global audience across 120+ countries and regions.', icon: '🌍' },
  { title: 'Open Access Options', description: 'Flexible Open Access and hybrid options to maximize accessibility and impact.', icon: '🔓' },
  { title: 'High Visibility & Citations', description: 'Indexed in leading databases to enhance discoverability and citations.', icon: '📈' },
  { title: 'Multidisciplinary Platform', description: 'A multi-area covering Engineering, Medicine, Sustainability and emerging fields.', icon: '🔗' },
  { title: 'Trusted Partner', description: 'Collaborating with institutions, organizations and researchers worldwide.', icon: '🏢' },
  { title: 'Efficient Publication', description: 'Streamlined processes for faster, decision and publication without compromising quality.', icon: '⚡' },
  { title: 'Sustainability Focus', description: 'Support research that addresses global challenges and advances sustainable development.', icon: '🌱' },
  { title: 'Author Support', description: 'Dedicated support from submission to publication and beyond.', icon: '🤝' },
  { title: 'Ethical Publishing', description: 'Upholding the highest standards of publication ethics and research integrity.', icon: '⚖️' },
];

const processSteps = [
  { num: '1', title: 'Submit', description: 'Submit your manuscript through our easy online system.' },
  { num: '2', title: 'Peer Review', description: 'Rigorous peer review by experts in the relevant field.' },
  { num: '3', title: 'Editorial Decision', description: 'Timely decision with constructive feedback for improvement.' },
  { num: '4', title: 'Revision', description: 'Authors revise their manuscript based on review comments.' },
  { num: '5', title: 'Acceptance', description: 'Final acceptance after successful revision and approval.' },
  { num: '6', title: 'Publication', description: 'Published online with DOI and indexed in leading databases.' },
];

const testimonials = [
  {
    quote: 'Global Reviews Press provided an excellent platform for our research. The review process was fair, timely and the editorial support was outstanding.',
    author: 'Dr. Arvind Sharma',
    title: 'Indian Institute of Technology, India',
    flag: '🇮🇳',
  },
  {
    quote: 'The visibility and reach of our work increased significantly after publishing with Global Reviews Press. Highly recommended for quality publications.',
    author: 'Prof. Maria Gonzalez',
    title: 'University of Barcelona, Spain',
    flag: '🇪🇸',
  },
  {
    quote: 'I appreciate the transparent process and the commitment to ethical publishing. Global Reviews Press is a great publishing partner.',
    author: 'Dr. David Kim',
    title: 'Seoul National University, South Korea',
    flag: '🇰🇷',
  },
];

export default function WhyPublishUs() {
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
            >
              <h1 className="text-5xl font-bold mb-4">WHY PUBLISH WITH US</h1>
              <p className="text-lg leading-relaxed max-w-3xl">
                Global Reviews Press provides the perfect platform to showcase your research to the world. We combine publication excellence with global visibility and real impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ==================== BENEFITS CARDS ==================== */}
        <section className="py-16 bg-white">
          <div className="container-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== STATS ==================== */}
        <section className="py-12 bg-blue-900 text-white">
          <div className="container-xl">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {[
                { num: '20+', label: 'Journals & Magazines' },
                { num: '15,000+', label: 'Articles Published' },
                { num: '5,000+', label: 'Global Authors & Editors' },
                { num: '120+', label: 'Countries Reached' },
                { num: '50+', label: 'Indexing & Abstracting Databases' },
                { num: '100+', label: 'Institutional Partners' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{stat.num}</div>
                  <p className="text-sm text-gray-200 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== REASONS SECTION ==================== */}
        <section className="py-20 bg-gray-50">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">REASONS RESEARCHERS CHOOSE US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {reasonsCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">{card.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PUBLICATION PROCESS ==================== */}
        <section className="py-20 bg-white">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">OUR PUBLICATION PROCESS</h2>
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-center text-gray-800 mb-2 max-w-24">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center max-w-28">{step.description}</p>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block text-3xl text-gray-300 mx-8 mt-8">›</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS ==================== */}
        <section className="py-20 bg-gray-50">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">WHAT AUTHORS SAY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-lg border border-gray-200"
                >
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3 pt-6 border-t border-gray-200">
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container-xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Ready to share your research with the world?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
            >
              Publish with Global Reviews Press and make a lasting impact.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all flex items-center space-x-2 mx-auto"
            >
              <span>Submit Your Manuscript</span>
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
