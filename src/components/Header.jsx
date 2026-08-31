import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Journals & Magazines', href: '/journals' },
  { name: 'For Authors', href: '/authors' },
  { name: 'For Reviewers', href: '/reviewer' },
  { name: 'Indexing', href: '/indexing' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#051830] text-white text-xs py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <span>✉️</span>
            <span>info@globalreviewspress.com</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <span className="text-gray-400">Resources | FAQ | Careers | Newsroom</span>
          <span>🌐 English</span>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="container-xl flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-[#0d47a1] border-b-2 border-[#0d47a1] pb-2'
                    : 'text-gray-700 hover:text-[#0d47a1]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons and menu toggle */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-block px-6 py-2 bg-[#0d47a1] text-white text-sm font-medium rounded hover:bg-[#0a3a8f] transition-all">
              Submit Manuscript
            </button>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container-xl py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 rounded text-sm font-medium ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-[#0d47a1]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 px-4 py-2 bg-[#0d47a1] text-white text-sm font-medium rounded hover:bg-[#0a3a8f] transition-all">
                Submit Manuscript
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
