import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const journals = {
  engineering: [
    { title: 'Artificial Intelligence', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Robotics & Automation', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Quantum Computing', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Edge Intelligence & Computing', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Digital Twin Technologies', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: '6G & Future Communication', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
  ],
  medicine: [
    { title: 'AI-Enabled Medical Imaging', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Digital Biomarkers & Wearables', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Robotic-Surgery', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Precision Diagnostics & Digital Pathology', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Neurotechnology', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'AI in Drug Discovery & Development', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
  ],
  sustainability: [
    { title: 'Sustainability Reviews', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Renewable Energy and Systems', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Climate & Urban Resilience', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Biosensors & Environmental Tech', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Green Materials & Circular Economy', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
    { title: 'Water, Air & Earth Sciences Reviews', reviews: 'Reviews', access: 'Open Access • Peer Reviewed' },
  ],
};

const benefits = [
  { title: 'International Visibility', description: 'Global dissemination and reach' },
  { title: 'Rigorous Peer Review', description: 'Quality review and integrity' },
  { title: 'Open Access Options', description: 'Advanced reach and impact' },
  { title: 'Ethical Publishing', description: 'Upholding highest ethical standards' },
];

export default function Journals() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <Header />
      <main>
        {/* ==================== HERO ==================== */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
          </div>
          <div className="container-xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold mb-4">JOURNALS & MAGAZINES</h1>
              <p className="text-yellow-300 text-xl font-semibold mb-6">Curated. Peer Reviewed. Global.</p>
              <p className="text-lg leading-relaxed max-w-3xl mb-8">
                High-quality review journals and magazines spanning Engineering, Medicine and Sustainability published by Global Reviews Press.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-yellow-500 text-blue-900 font-semibold rounded hover:bg-yellow-400 transition-all flex items-center space-x-2">
                  <span>Explore All Journals</span>
                  <ArrowRight size={20} />
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-blue-900 transition-all flex items-center space-x-2">
                  <span>About Our Journals</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== FILTERS ==================== */}
        <section className="py-8 bg-white border-b sticky top-20 z-40">
          <div className="container-xl">
            <div className="flex flex-wrap items-center gap-4">
              {[
                { id: 'all', label: 'All Journals', icon: '📚' },
                { id: 'eng', label: 'Engineering & Technology', icon: '⚙️' },
                { id: 'med', label: 'Medicine & Health Sciences', icon: '🏥' },
                { id: 'sust', label: 'Sustainability & Environment', icon: '🌍' },
                { id: 'inter', label: 'Interdisciplinary', icon: '🔗' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-900 text-white'
                      : 'border-2 border-blue-900 text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  <span>{tab.icon} {tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== JOURNALS GRID ==================== */}
        <section className="py-16 bg-white">
          <div className="container-xl">
            {/* Engineering */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#051830] mb-2 flex items-center space-x-2">
                <span>⚙️</span>
                <span>Engineering & Technology</span>
              </h2>
              <a href="#" className="text-blue-600 font-semibold flex items-center space-x-2 mb-8">
                <span>View all →</span>
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {journals.engineering.map((journal, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 rounded-lg hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition">{journal.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{journal.reviews}</p>
                    <p className="text-xs text-gray-400">{journal.access}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Medicine */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#051830] mb-2 flex items-center space-x-2">
                <span>🏥</span>
                <span>Medicine & Health Sciences</span>
              </h2>
              <a href="#" className="text-teal-600 font-semibold flex items-center space-x-2 mb-8">
                <span>View all →</span>
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {journals.medicine.map((journal, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-gradient-to-br from-teal-700 to-teal-600 text-white p-6 rounded-lg hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition">{journal.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{journal.reviews}</p>
                    <p className="text-xs text-gray-400">{journal.access}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sustainability */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#051830] mb-2 flex items-center space-x-2">
                <span>🌍</span>
                <span>Sustainability & Environment</span>
              </h2>
              <a href="#" className="text-green-600 font-semibold flex items-center space-x-2 mb-8">
                <span>View all →</span>
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {journals.sustainability.map((journal, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-gradient-to-br from-green-700 to-green-600 text-white p-6 rounded-lg hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition">{journal.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{journal.reviews}</p>
                    <p className="text-xs text-gray-400">{journal.access}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== WHY PUBLISH SIDEBAR ==================== */}
        <section className="py-16 bg-gray-50">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2"></div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-[#051830] mb-8">Why Publish With Us?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                      <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                  Learn More →
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
          <div className="container-xl text-center">
            <h2 className="text-4xl font-bold mb-6">Publish with Confidence. Reach the World.</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">Partner with Global Reviews Press to amplify your research through trusted peer-reviewed journals.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all">
                Submit Your Manuscript
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all">
                Author Guidelines
              </button>
            </div>
          </div>
        </section>

        {/* ==================== INDEXING ==================== */}
        <section className="py-16 bg-white">
          <div className="container-xl text-center">
            <h3 className="text-2xl font-bold text-[#051830] mb-12">Indexed & Abstracted In</h3>
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
