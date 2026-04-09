import { useState, useEffect } from 'react';
import React from 'react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Compare', href: '#compare' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-white font-black text-lg shadow-md">
            C
          </div>
          <div>
            <p className="font-black text-base leading-none text-slate-900 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Credarth
            </p>
            <p className="text-[10px] text-slate-400 leading-none font-medium">Finance Service</p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919999999999"
            className="text-xs font-bold text-blue-700 border border-blue-200 rounded-full px-4 py-2 hover:bg-blue-50 transition"
          >
            📞 99999 99999
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-blue-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200"
          >
            Free Advice →
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-slate-100`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-bold px-5 py-3 rounded-full"
          >
            Get Free Advice →
          </a>
        </div>
      </div>
    </nav>
  );
}