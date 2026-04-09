import { useState, useEffect } from 'react';
import React from 'react';

const LOAN_RATES = [
  { label: 'Personal Loan', rate: '10.50%', icon: '👤', best: true },
  { label: 'Home Loan', rate: '8.40%', icon: '🏠', best: false },
  { label: 'Business Loan', rate: '12.00%', icon: '💼', best: false },
  { label: 'Loan Against Property', rate: '9.50%', icon: '🏢', best: false },
];

const FLOAT_CARDS = [
  { icon: '💳', label: 'Credit Card', value: '5% Cashback', color: 'text-violet-600' },
  { icon: '🏠', label: 'Home Loan', value: '8.40% p.a.', color: 'text-blue-600' },
  { icon: '🛡️', label: 'Term Plan', value: '₹1 Cr Cover', color: 'text-emerald-600' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(15,76,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,76,129,0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Gradient Blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-orange-300/20 blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT CONTENT ─────────────────────────────── */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              🏆 Trusted by 10,000+ Customers Across India
            </div>

            {/* Headline */}
            <h1
              className="text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-slate-900"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Right Financial{' '}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Product
              </span>
              <br />at the Right{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  Interest Rate
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
                  <path d="M2 6 Q75 2 150 5 Q225 8 298 4" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              Compare Credit Cards, Loans, Insurance & Accounts from <span className="font-bold text-slate-700">50+ Banks & NBFCs</span>. 
              Expert advisory — 100% free, zero hidden charges.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold text-base px-7 py-3.5 rounded-full shadow-xl shadow-blue-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-300 transition-all duration-200 flex items-center gap-2"
              >
                Get Free Advice <span>→</span>
              </a>
              <a
                href="#compare"
                className="border-2 border-slate-200 text-slate-700 font-bold text-base px-7 py-3.5 rounded-full hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
              >
                Compare Rates
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-6">
              {[
                { icon: '🏦', val: '50+', label: 'Bank Partners' },
                { icon: '👥', val: '10K+', label: 'Happy Customers' },
                { icon: '✅', val: '100%', label: 'Free Advisory' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <p className="text-xl font-black text-slate-900 leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>{s.val}</p>
                    <p className="text-xs text-slate-400 font-medium">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust */}
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              🔒 SSL Secured &nbsp;·&nbsp; RBI Regulated Partners &nbsp;·&nbsp; Zero Spam
            </p>
          </div>

          {/* ── RIGHT VISUAL ─────────────────────────────── */}
          <div
            className={`relative flex justify-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Phone Mockup */}
            <div className="relative w-64 bg-white rounded-[32px] shadow-2xl shadow-blue-200/50 border border-slate-200 overflow-hidden z-10">
              {/* Notch */}
              <div className="w-16 h-1.5 bg-slate-200 rounded-full mx-auto mt-3 mb-0" />
              {/* Header */}
              <div className="px-5 pt-4 pb-3 border-b border-slate-100">
                <p className="font-black text-blue-700 text-base" style={{ fontFamily: 'Syne, sans-serif' }}>Credarth</p>
                <p className="text-[10px] text-slate-400">Live Best Rates</p>
              </div>
              {/* Rates */}
              <div className="p-3 flex flex-col gap-2">
                {LOAN_RATES.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs ${
                      item.best
                        ? 'bg-blue-50 border border-blue-200'
                        : 'bg-slate-50'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="flex-1 font-medium text-slate-700">{item.label}</span>
                    <span className={`font-black ${item.best ? 'text-blue-700' : 'text-slate-700'}`}>
                      {item.rate}
                    </span>
                    {item.best && (
                      <span className="text-[9px] bg-blue-700 text-white px-1.5 py-0.5 rounded-full font-bold">BEST</span>
                    )}
                  </div>
                ))}
              </div>
              {/* Apply Button */}
              <div className="m-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center text-sm font-bold py-3 rounded-2xl shadow-lg shadow-blue-200">
                Apply Now — Free
              </div>
            </div>

            {/* Floating Cards */}
            {FLOAT_CARDS.map((card, i) => (
              <div
                key={card.label}
                className={`absolute flex items-center gap-2.5 bg-white border border-slate-200 rounded-2xl shadow-lg px-3.5 py-2.5 z-20 ${
                  i === 0 ? 'top-4 -left-12 animate-bounce-slow' :
                  i === 1 ? 'bottom-20 -right-8 animate-float' :
                  'top-1/2 -left-16 -translate-y-1/2 animate-bounce-slow delay-300'
                }`}
                style={{
                  animation: `float ${3 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <p className="text-[10px] text-slate-500 leading-none font-medium">{card.label}</p>
                  <p className={`text-sm font-black leading-none mt-0.5 ${card.color}`}>{card.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}