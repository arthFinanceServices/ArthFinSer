import { SERVICES } from '../data/siteData';
import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-black text-slate-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Everything You Need,{' '}
            <span className="text-blue-700">One Platform</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            We connect you with 50+ banks & NBFCs to find the perfect financial product for your profile.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className={`group bg-white rounded-3xl border ${svc.border} p-6 flex flex-col gap-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${svc.lightBg} rounded-2xl flex items-center justify-center text-3xl`}>
                {svc.icon}
              </div>

              {/* Title */}
              <h3 className="font-black text-lg text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
                {svc.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-slate-500 leading-relaxed">{svc.desc}</p>

              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className={`mt-0.5 text-xs font-bold ${svc.textColor}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-2 inline-flex items-center justify-center gap-1.5 ${svc.lightBg} ${svc.textColor} border ${svc.border} text-sm font-bold px-4 py-2.5 rounded-full group-hover:opacity-80 transition`}
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}