import React from 'react';

// ─── Replace with your actual import: import { SERVICES } from '../data/siteData';
const SERVICES = [
  {
    id: 1,
    icon: '🏠',
    title: 'Home Loans',
    desc: 'Turn your dream home into reality with competitive interest rates and flexible tenures.',
    features: ['Up to ₹5 Cr loan amount', 'Tenure up to 30 years', 'Balance transfer facility'],
    border: 'border-blue-200',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600',
    ctaStyle: 'bg-blue-50 text-blue-600 border border-blue-200',
  },
  {
    id: 2,
    icon: '🚗',
    title: 'Auto Loans',
    desc: 'Drive home your dream vehicle with instant approvals and minimal documentation.',
    features: ['100% on-road funding', 'Same-day approval', 'Flexible EMI options'],
    border: 'border-emerald-200',
    lightBg: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    ctaStyle: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  },
  {
    id: 3,
    icon: '💳',
    title: 'Credit Cards',
    desc: 'Unlock rewards, cashback and exclusive privileges tailored to your lifestyle.',
    features: ['Zero joining fee cards', 'Lifetime free options', 'Instant virtual card'],
    border: 'border-purple-200',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600',
    ctaStyle: 'bg-purple-50 text-purple-600 border border-purple-200',
  },
  {
    id: 4,
    icon: '💼',
    title: 'Business Loans',
    desc: 'Power your business growth with unsecured loans, overdrafts, and working capital.',
    features: ['Collateral-free loans', 'Disbursal in 48 hrs', 'Flexible repayment'],
    border: 'border-orange-200',
    lightBg: 'bg-orange-50',
    textColor: 'text-orange-600',
    ctaStyle: 'bg-orange-50 text-orange-600 border border-orange-200',
  },
];

const BAJAJ_FEATURES = [
  { icon: '💰', title: 'Pre-approved Limit', desc: 'Get up to ₹4 Lakh pre-approved credit limit instantly.' },
  { icon: '🏪', title: '1.5 Lakh+ Stores',  desc: 'Shop at India\'s largest EMI network across all categories.' },
  { icon: '0️⃣',  title: 'Zero Cost EMI',    desc: 'Pay in easy installments with absolutely 0% interest charge.' },
  { icon: '⬇️',  title: 'No Down Payment',  desc: 'Walk out with your product today — zero upfront payment.' },
  { icon: '📱',  title: 'Instant Digital Card', desc: 'Get your virtual EMI card approved and active in minutes.' },
  { icon: '✈️',  title: 'Travel & Lifestyle', desc: 'Use across electronics, fashion, travel bookings and more.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-black text-slate-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Everything You Need,{' '}
            <span className="text-blue-700">One Platform</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            We connect you with 50+ banks &amp; NBFCs to find the perfect financial product for your profile.
          </p>
        </div>

        {/* ── 4 Service Cards — original height preserved ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className={`group bg-white rounded-3xl border ${svc.border} p-6 flex flex-col gap-4
                hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default`}
            >
              <div className={`w-14 h-14 ${svc.lightBg} rounded-2xl flex items-center justify-center text-3xl`}>
                {svc.icon}
              </div>
              <h3 className="font-black text-lg text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
                {svc.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{svc.desc}</p>
              <ul className="flex flex-col gap-2 flex-1">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className={`mt-0.5 text-xs font-bold ${svc.textColor}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-2 inline-flex items-center justify-center gap-1.5 ${svc.ctaStyle}
                  text-sm font-bold px-4 py-2.5 rounded-full group-hover:opacity-80 transition`}
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>

        {/* ── Bajaj EMI Card — Full-Width Featured Banner ── */}
        <div className="mt-6 rounded-3xl overflow-hidden shadow-xl shadow-sky-100"
          style={{ background: 'linear-gradient(135deg, #0b1f5e 0%, #1a3f8f 45%, #0369a1 100%)' }}>

          {/* Decorative circles */}
          <div className="relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.05)' }} />
            <div className="absolute top-4 right-32 w-24 h-24 rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.04)' }} />
            <div className="absolute -bottom-8 left-1/3 w-36 h-36 rounded-full pointer-events-none"
              style={{ background: 'rgba(14,165,233,0.15)' }} />

            <div className="relative z-10 px-6 sm:px-10 py-7">

              {/* Top row: brand info + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                {/* Left: badges + title + desc */}
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                    ⚡
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-white text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full"
                        style={{ background: '#0ea5e9' }}>
                        No Cost EMI
                      </span>
                      <span className="text-white text-[9px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
                        Bajaj Finserv
                      </span>
                    </div>
                    <h3 className="text-white font-black text-xl sm:text-2xl leading-tight"
                      style={{ fontFamily: 'Syne, sans-serif' }}>
                      Bajaj Finserv EMI Card
                    </h3>
                    <p className="text-sky-200 text-xs mt-1 max-w-sm">
                      India's most accepted EMI network — shop anywhere, pay in easy zero-interest installments.
                    </p>
                  </div>
                </div>

                {/* Right: stats + CTA */}
                <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
                  {/* Stats pills */}
                  <div className="flex gap-2">
                    {[
                      { value: '1.5L+', label: 'Stores' },
                      { value: '₹4L',   label: 'Limit' },
                      { value: '0%',    label: 'Interest' },
                    ].map((s) => (
                      <div key={s.label} className="text-center px-3 py-2 rounded-xl"
                        style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <p className="text-white font-black text-sm">{s.value}</p>
                        <p className="text-sky-200 text-[9px] font-medium">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  {/* CTA */}
                  <a href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-extrabold px-6 py-3 rounded-full transition hover:opacity-90"
                    style={{ background: 'white', color: '#0f2c6b', boxShadow: '0 4px 20px rgba(14,165,233,0.4)' }}>
                    Get EMI Card →
                  </a>
                </div>
              </div>

              {/* ── Horizontally scrollable feature tiles ── */}
              <div
                className="flex gap-3 overflow-x-auto pb-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style>{`.bajaj-scroll::-webkit-scrollbar { display: none; }`}</style>

                {BAJAJ_FEATURES.map((feat) => (
                  <div
                    key={feat.title}
                    className="shrink-0 rounded-2xl px-4 py-3 flex items-start gap-3"
                    style={{
                      minWidth: '180px',
                      maxWidth: '200px',
                      background: 'rgba(255,255,255,0.10)',
                      border: '1px solid rgba(255,255,255,0.18)',
                    }}
                  >
                    <span className="text-xl mt-0.5 shrink-0">{feat.icon}</span>
                    <div>
                      <p className="text-white text-xs font-bold leading-snug">{feat.title}</p>
                      <p className="text-sky-200 text-[10px] leading-relaxed mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ── Trust strip ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">🔒 RBI Regulated Partners</span>
          <span className="flex items-center gap-1.5">⚡ Instant Digital Approval</span>
          <span className="flex items-center gap-1.5">🏦 50+ Banks &amp; NBFCs</span>
          <span className="flex items-center gap-1.5">📋 100% Paperless Process</span>
        </div>

      </div>
    </section>
  );
}
