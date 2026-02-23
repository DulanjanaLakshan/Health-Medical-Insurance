import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Plans', path: '/plans' },
    { name: 'Find a Doctor', path: '/providers' },
    { name: 'Member Resources', path: '/portal' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-white/20" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-vitalis-teal rounded-full flex items-center justify-center text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" className="opacity-90"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-vitalis-teal tracking-tight leading-none">VITALIS</span>
              <span className="text-[10px] uppercase tracking-widest text-vitalis-grey font-medium">Health</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-vitalis-navy hover:text-vitalis-teal font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/portal" className="text-vitalis-teal hover:text-vitalis-coral transition-colors">
              <User className="w-6 h-6" />
            </Link>
            <button className="bg-vitalis-coral text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Covered
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-vitalis-navy hover:text-vitalis-teal p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-vitalis-ivory border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-3 text-lg font-serif text-vitalis-navy hover:text-vitalis-teal hover:bg-vitalis-sage/50 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-4">
                <Link to="/portal" className="flex items-center gap-3 px-3 py-2 text-vitalis-navy">
                  <User className="w-5 h-5" /> Member Login
                </Link>
                <button className="w-full bg-vitalis-coral text-white py-3 rounded-full font-bold shadow-md">
                  Get Covered
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-vitalis-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-vitalis-teal rounded-full flex items-center justify-center text-white">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold">VITALIS HEALTH</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Care that connects. We're reimagining health insurance to be simpler, kinder, and more effective for everyone.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vitalis-coral transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-vitalis-blue">Plans</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Individual & Family</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Medicare</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Employer Plans</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Dental & Vision</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-vitalis-blue">Members</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/portal" className="hover:text-white transition-colors">Member Login</Link></li>
              <li><Link to="/providers" className="hover:text-white transition-colors">Find a Doctor</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Drug Formulary</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Claims & Forms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-vitalis-blue">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">1-800-VITALIS</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Live Chat</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Billing Help</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Tech Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-vitalis-blue">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Impact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Vitalis Health. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Use</Link>
            <Link to="#" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
