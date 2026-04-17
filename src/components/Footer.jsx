import React from "react";
import logo from '../assets/logo-nav.jpg'
const FOOTER_LINKS = {
  Services: ['Credit Cards', 'Personal Loan', 'Home Loan', 'Business Loan', 'Insurance', 'Account Opening'],
  Company: ['About Us', 'Our Advisors', 'Careers', 'Blog', 'Press'],
  Support: ['FAQs', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Grievance Redressal'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg">
                <img src={logo} className="rounded"/>
              </div>
              <div>
                <p className="font-black text-white text-base" style={{ fontFamily: 'Syne, sans-serif' }}>Arth</p>
                <p className="text-[10px] text-slate-500">Finance Service</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
              A trusted financial advisory platform helping you choose the best products — low interest, maximum benefits, safe options.
            </p>
            <p className="text-sm font-bold text-white mb-1">🎯 Our Mission</p>
            <p className="text-sm text-cyan-400 italic">"Right Financial Product at the Right Interest Rate."</p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {['f', 'in', 'tw', 'yt'].map((s) => (
                <div key={s} className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold hover:bg-blue-600 hover:text-white cursor-pointer transition">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-black text-sm mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Partners strip */}
      <div className="border-y border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Our Banking Partners</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['HDFC Bank', 'SBI', 'ICICI Bank', 'Axis Bank', 'Kotak', 'PNB', 'Bank of Baroda', 'IDFC First'].map((b) => (
              <span key={b} className="text-xs text-slate-500 bg-slate-800 px-3 py-1.5 rounded-full font-medium hover:text-white transition">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-slate-500">© 2025 Arth Finance Service. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>🔒 SSL Secured</span>
          <span>·</span>
          <span>RBI Regulated Partners</span>
          <span>·</span>
          <span>Made with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
}
