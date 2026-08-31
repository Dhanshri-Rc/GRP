import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Target, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* ==================== HERO SECTION ==================== */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-20">
          <div className="container-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl font-bold mb-6">ABOUT US</h1>
              <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-xl leading-relaxed max-w-3xl">
                Global Reviews Press is an international publishing company committed to advancing knowledge through high-quality, peer-reviewed journals and magazines in <span className="font-semibold">Engineering, Medicine</span> and <span className="text-green-300 font-semibold">Sustainability.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ==================== MISSION, VISION, VALUES ==================== */}
        <section className="py-20 bg-gray-50">
          <div className="container-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border-l-4 border-green-600"
              >
                <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center space-x-2">
                  <Target size={28} />
                  <span>OUR MISSION</span>
                </h3>
                <p className="text-gray-700">To publish influential and rigorous reviews that drive innovation, inform policy, and improve lives worldwide.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-lg border-l-4 border-blue-600"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center space-x-2">
                  <Globe size={28} />
                  <span>OUR VISION</span>
                </h3>
                <p className="text-gray-700">To be a global leader in scholarly publishing, recognized for quality, integrity, and impact.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-lg border-l-4 border-purple-600"
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center space-x-2">
                  <Shield size={28} />
                  <span>OUR VALUES</span>
                </h3>
                <p className="text-gray-700">Integrity, Quality, Innovation, Inclusivity, Sustainability and Global Collaboration.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== WHO WE ARE ==================== */}
        <section className="py-20">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-teal-100 h-80 rounded-lg flex items-center justify-center text-7xl">
                  🏢
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-[#051830] mb-6">WHO WE ARE</h2>
                <h3 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
                  Advancing Knowledge. Empowering the Future.
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Global Reviews Press is an international, independent publisher of peer-reviewed journals and magazines in the fields of Engineering, Medicine and Sustainability. We provide a trusted platform for researchers, professionals and institutions to share groundbreaking discoveries, comprehensive reviews and multidisciplinary insights that shape a better future.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Globe className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">International Presence</h4>
                      <p className="text-gray-600 text-sm">Connecting researchers and readers in 120+ countries.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Quality & Integrity</h4>
                      <p className="text-gray-600 text-sm">Rigorous peer review and ethical publishing standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Multidisciplinary Scope</h4>
                      <p className="text-gray-600 text-sm">Covering emerging and established fields across critical domains.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== STATS SECTION ==================== */}
        <section className="py-16 bg-blue-50">
          <div className="container-xl">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {[
                { icon: '📚', number: '20+', label: 'Journals & Magazines' },
                { icon: '📄', number: '15,000+', label: 'Articles Published' },
                { icon: '👥', number: '5,000+', label: 'Global Authors & Editors' },
                { icon: '🌐', number: '120+', label: 'Countries Reached' },
                { icon: '📑', number: '50+', label: 'Indexing & Abstracting DBs' },
                { icon: '🏛️', number: '100+', label: 'Institutional Partners' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-[#051830] mb-1">{stat.number}</div>
                  <p className="text-sm text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== OUR FOCUS ==================== */}
        <section className="py-20">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-[#051830] mb-8">OUR FOCUS</h2>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Research. Reviews. Real Impact.</h3>
                <p className="text-gray-700 mb-6">
                  We publish authoritative reviews and original research that accelerate innovation and address real-world challenges. Our commitment to sustainability and ethical research ensures we contribute positively to global progress.
                </p>
                <ul className="space-y-3">
                  {[
                    'High-quality, peer-reviewed publications',
                    'Rapid and transparent editorial processes',
                    'Global reach and visibility',
                    'Commitment to sustainability and ethical research',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 px-6 py-3 bg-[#051830] text-white font-semibold rounded hover:bg-[#0d47a1] transition-all flex items-center space-x-2">
                  <span>Explore Our Journals</span>
                  <ArrowRight size={20} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 h-96 rounded-lg flex items-center justify-center text-6xl">
                  📚
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== OUR COMMITMENT ==================== */}
        <section className="py-20 bg-green-50">
          <div className="container-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-bold text-[#051830] mb-6">OUR COMMITMENT</h2>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Sustainable Publishing for a Better World</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We are committed to responsible publishing practices that minimize our environmental footprint and support the UN Sustainable Development Goals. Our open access models increase research accessibility and societal impact.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">Goal 3: Good Health</span>
                  <span className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">Goal 9: Innovation</span>
                  <span className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">Goal 13: Climate Action</span>
                  <span className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">Goal 17: Partnerships</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-80 rounded-lg flex items-center justify-center text-6xl">
                🌱
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
          <div className="container-xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Together, let's advance knowledge and create a positive impact for future generations.
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all flex items-center space-x-2 mx-auto"
            >
              <span>Join Us in Our Mission</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </section>

        {/* ==================== INDEXING ==================== */}
        <section className="py-16 bg-white">
          <div className="container-xl">
            <h3 className="text-center text-2xl font-bold text-[#051830] mb-12">INDEXED IN LEADING DATABASES</h3>
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
