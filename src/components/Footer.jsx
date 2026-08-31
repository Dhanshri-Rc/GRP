import { Link } from 'react-router-dom';
import { Share2, Mail, Share, Play } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051830] text-white">
      <div className="container-xl py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0d47a1] font-bold text-xs">GRP</span>
              </div>
              <div>
                <div className="text-xs font-bold">GLOBAL REVIEWS</div>
                <div className="text-xs font-bold">PRESS</div>
              </div>
            </div>
            <p className="text-xs text-gray-400">Research. Reviews. Real Impact.</p>
          </div>

          {/* Publisher */}
          <div>
            <h4 className="font-semibold text-sm mb-4 border-b border-gray-700 pb-2">PUBLISHER</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition">Editorial Board</a></li>
              <li><a href="#" className="hover:text-white transition">Policies</a></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Journals */}
          <div>
            <h4 className="font-semibold text-sm mb-4 border-b border-gray-700 pb-2">JOURNALS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/journals" className="hover:text-white transition">All Journals</Link></li>
              <li><a href="#" className="hover:text-white transition">New Journals</a></li>
              <li><a href="#" className="hover:text-white transition">Journal Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition">Publication Ethics</a></li>
              <li><a href="#" className="hover:text-white transition">Open Access Policy</a></li>
            </ul>
          </div>

          {/* For Authors */}
          <div>
            <h4 className="font-semibold text-sm mb-4 border-b border-gray-700 pb-2">FOR AUTHORS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Author Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition">Submit Manuscript</a></li>
              <li><a href="#" className="hover:text-white transition">Track Submission</a></li>
              <li><a href="#" className="hover:text-white transition">APC & Waivers</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* For Reviewers / Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 border-b border-gray-700 pb-2">CONTACT US</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>202, Planet Apt., Onkarnagar, Besa Road, Near Sahayd Lawn, Nagpur - 440037, Maharashtra, India.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@globalreviewspress.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 9970294396</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © {currentYear} Global Reviews Press. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Share2 size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Share size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Mail size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Play size={18} />
              </a>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
