import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'OUR STORY', path: '/story' },
    { name: 'SERVICES', path: '/#services' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-serif font-bold tracking-[0.2em] text-navy">ALL SMILES</span>
          <span className="text-[10px] tracking-[0.5em] text-gray-400 font-sans uppercase">Premium Dental Clinic</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xs font-semibold tracking-widest text-navy hover:text-navy/60 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://workspace.google.com/products/calendar/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-navy text-white text-xs font-bold tracking-widest hover:bg-black transition-all"
          >
            BOOK HERE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 py-8 px-6 flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-semibold tracking-widest text-navy"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://workspace.google.com/products/calendar/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-navy text-white text-center text-xs font-bold tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            BOOK HERE
          </a>
        </motion.div>
      )}
    </nav>
  );
}
