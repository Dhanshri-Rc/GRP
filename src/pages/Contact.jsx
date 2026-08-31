import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'general',
    message: '',
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message && formData.privacy) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          type: 'general',
          message: '',
          privacy: false,
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* ==================== HERO ==================== */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="container-xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold mb-4">CONTACT US</h1>
              <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-lg leading-relaxed max-w-3xl">
                We are here to assist you. Reach out to us for any queries related to submissions, partnerships, journal collaborations, or general information.
              </p>

              {/* Quick benefits */}
              <div className="flex flex-wrap gap-6 mt-12">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">🎧</div>
                  <div>
                    <p className="font-semibold">Quick Support</p>
                    <p className="text-sm text-gray-300">Fast response</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">📧</div>
                  <div>
                    <p className="font-semibold">Prompt Response</p>
                    <p className="text-sm text-gray-300">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">🔒</div>
                  <div>
                    <p className="font-semibold">Trusted Assistance</p>
                    <p className="text-sm text-gray-300">Confidential</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <p className="font-semibold">Global Presence</p>
                    <p className="text-sm text-gray-300">Available worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== CONTACT FORM & INFO ==================== */}
        <section className="py-20 bg-white">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#051830] mb-2">SEND US A MESSAGE</h2>
                <div className="w-16 h-1 bg-yellow-400 mb-8"></div>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold mb-2">✓ Thank You!</p>
                    <p>Your message has been sent successfully. We will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />

                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                      <option value="general">Select Enquiry Type *</option>
                      <option value="manuscript">Manuscript Submission</option>
                      <option value="journal">Journal Inquiry</option>
                      <option value="review">Reviewer Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>

                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    ></textarea>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        required
                        className="w-4 h-4"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and
                        <a href="#" className="text-blue-600 hover:underline"> Terms of Use</a>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>✈️</span>
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#051830] mb-2">GET IN TOUCH</h2>
                <div className="w-16 h-1 bg-yellow-400 mb-8"></div>

                <div className="space-y-6">
                  {/* Head Office */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Head Office</h3>
                      <p className="text-gray-700">202, Planet Apt., Onkarnagar, Besa Road, Near Sahayd Lawn, Nagpur - 440037, Maharashtra, India.</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-700">+91 99702 94396 | +91 70208 92894</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-700">info@globalreviewspress.com</p>
                      <p className="text-gray-700">editorial@globalreviewspress.com</p>
                    </div>
                  </div>

                  {/* Business & Partnerships */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Business & Partnerships</h3>
                      <p className="text-gray-700">partnerships@globalreviewspress.com</p>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Support</h3>
                      <p className="text-gray-700">support@globalreviewspress.com</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Working Hours</h3>
                      <p className="text-gray-700">Monday – Friday: 9:30 AM – 6:30 PM (IST)</p>
                      <p className="text-gray-700">Saturday: 10:00 AM – 2:00 PM (IST)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== GLOBAL PRESENCE ==================== */}
        <section className="py-20 bg-gray-50">
          <div className="container-xl">
            <h2 className="text-4xl font-bold text-center text-[#051830] mb-16">OUR GLOBAL PRESENCE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'India', city: 'Nagpur (Head Office)' },
                { name: 'Malaysia', city: 'Kuala Lumpur' },
                { name: 'Philippines', city: 'Manila' },
                { name: 'Singapore', city: 'Singapore' },
                { name: 'United Kingdom', city: 'London' },
                { name: 'United States', city: 'New Jersey' },
              ].map((location, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all text-center"
                >
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{location.name}</h3>
                  <p className="text-gray-600 flex items-center justify-center space-x-2">
                    <span>📍</span>
                    <span>{location.city}</span>
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="px-8 py-3 border-2 border-[#051830] text-[#051830] font-semibold rounded-lg hover:bg-gray-100 transition-all">
                View All Locations →
              </button>
            </div>
          </div>
        </section>

        {/* ==================== FAQ ==================== */}
        <section className="py-20 bg-white">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-[#051830] mb-6">FREQUENTLY ASKED QUESTIONS</h3>
                <p className="text-gray-600 mb-8">Find quick answers to common queries.</p>
                <button className="px-6 py-3 border-2 border-[#051830] text-[#051830] font-semibold rounded-lg hover:bg-gray-50 transition-all flex items-center space-x-2">
                  <span>View All FAQs</span>
                  <span>→</span>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <p className="font-semibold text-gray-800">How do I submit my manuscript?</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <p className="font-semibold text-gray-800">What is the publication process?</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <p className="font-semibold text-gray-800">How long does peer review take?</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <p className="font-semibold text-gray-800">Do you offer waivers on APCs?</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
          <div className="container-xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Let's collaborate to advance knowledge and create a better future.</h2>
              <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all">
                Get in Touch →
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
