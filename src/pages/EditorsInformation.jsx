import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const editorRoles = [
  { title: 'Editorial Leadership', description: 'Provide strategic direction for the journal and uphold editorial standards and integrity.' },
  { title: 'Manuscript Oversight', description: 'Manage the peer review process efficiently and make fair, balanced decisions.' },
  { title: 'Quality Assurance', description: 'Ensure the scientific quality, ethical standards, and relevance of published content.' },
  { title: 'Community Building', description: 'Promote the journal, attract quality submissions, and engage with the research community.' },
];

const benefits = [
  { title: 'Global visibility and academic recognition', description: '', icon: '🌍' },
  { title: 'Opportunity to shape the future of your field', description: '', icon: '🎯' },
  { title: 'Editorial certificate and profile on the journal website', description: '', icon: '📜' },
  { title: 'Access to a global network of researchers and experts', description: '', icon: '🤝' },
  { title: 'Discounts on APCs for your publications', description: '', icon: '💰' },
  { title: 'Eligible for annual editorial awards and appreciation', description: '', icon: '🏆' },
];

const responsibilities = [
  { title: 'Manuscript Management', description: 'Oversee the submission, peer review, and decision-making process in a timely manner.', image: '📋' },
  { title: 'Uphold Ethical Standards', description: 'Ensure adherence to publication ethics, COPE guidelines, and conflict of interest policies.', image: '⚖️' },
  { title: 'Maintain Quality', description: 'Ensure publications meet the journal\'s scope, standards, and scientific rigor.', image: '✓' },
  { title: 'Collaborate Actively', description: 'Work steadily with the editorial board, reviewers, and publisher to achieve journal\'s goals.', image: '🤝' },
  { title: 'Promote the Journal', description: 'Encourage high-quality submissions and expand the journal\'s reach within the community.', image: '📣' },
  { title: 'Provide Strategic Input', description: 'Contribute ideas for special issues, thematic topics, and journal improvement.', image: '💡' },
];

const joinSteps = [
  { num: '1', title: 'Express Interest', description: 'Fill out the Editor Interest Form on our website.' },
  { num: '2', title: 'Application Review', description: 'Our team will review your qualifications and experience.' },
  { num: '3', title: 'Editorial Discussion', description: 'A short discussion with our editorial team.' },
  { num: '4', title: 'Confirmation', description: 'Receive your appointment letter and welcome kit.' },
  { num: '5', title: 'Onboarding', description: 'Get onboarded and start your editorial journey with us.' },
];

const resources = [
  { title: 'Editorial Guidelines', description: 'Detailed policies and editorial standards.', icon: '📖' },
  { title: 'Best Practices for Peer Review', description: 'Best practices for selecting and working with reviewers.', icon: '👥' },
  { title: 'Editorial Ethics', description: 'A short guideline and ethical publishing resources.', icon: '⚖️' },
  { title: 'Editorial Forms', description: 'Access editorial templates, forms, and checklists.', icon: '📋' },
  { title: 'Expert & Webinars', description: 'Regular sessions to support editors in their role.', icon: '🎓' },
  { title: 'Dashboard', description: 'Manage submissions, track performance, and monitor performance.', icon: '📊' },
];

export default function EditorsInformation() {
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
                <h1 className="text-5xl font-bold mb-4">Information to Editor</h1>
                <p className="text-yellow-300 text-xl font-semibold mb-6">Partner in Scholarly Excellence</p>
                <p className="text-lg leading-relaxed">
                  Editors are at the heart of our mission to deliver high-quality, peer-reviewed publications that advance knowledge and drive global impact.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur p-8 rounded-lg text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <p className="text-lg">Editorial Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== EDITOR ROLES ==================== */}
        <section className="py-20 bg-white">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">ROLES OF EDITORS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {editorRoles.map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg border-l-4 border-blue-600"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{role.title}</h3>
                  <p className="text-gray-700 text-sm">{role.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== BENEFITS ==================== */}
        <section className="py-20 bg-gray-50">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">BENEFITS OF JOINING AS EDITOR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all text-center"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== RESPONSIBILITIES ==================== */}
        <section className="py-20 bg-white">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">RESPONSIBILITIES OF EDITORS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {responsibilities.map((resp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{resp.image}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{resp.title}</h3>
                      <p className="text-gray-700">{resp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== JOIN PROCESS ==================== */}
        <section className="py-20 bg-gray-50">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">HOW TO JOIN OUR EDITORIAL BOARD</h2>
            <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-4">
              {joinSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center mb-8 md:mb-0"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-center text-gray-800 mb-2 max-w-28">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center max-w-32">{step.description}</p>
                  {idx < joinSteps.length - 1 && (
                    <div className="hidden md:block text-3xl text-gray-300 ml-8">›</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== RESOURCES ==================== */}
        <section className="py-20 bg-white">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">RESOURCES FOR EDITORS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{resource.description}</p>
                  <a href="#" className="text-green-600 font-semibold text-sm hover:text-green-700">
                    Access →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
          <div className="container-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Be a part of our mission to advance knowledge and create real-world impact.</h2>
              <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all flex items-center space-x-2 mx-auto">
                <span>Become an Editor</span>
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
