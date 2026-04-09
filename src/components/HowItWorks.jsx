import React from "react";

import { STEPS } from '../data/siteData';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl font-black text-slate-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            3 Steps to Your{' '}
            <span className="text-blue-700">Best Deal</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-base">
            From enquiry to approval — we make the entire journey simple.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" style={{ left: '20%', right: '20%' }} />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl border border-slate-200 p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-10"
            >
              {/* Step Number */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-6 shadow-lg shadow-blue-200" style={{ fontFamily: 'Syne, sans-serif' }}>
                {step.step}
              </div>

              <h3 className="font-black text-xl text-slate-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>

              {/* Arrow (not last) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-400 font-bold z-20 shadow-sm text-lg">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-blue-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-300 transition-all duration-200"
          >
            Start Now — It's Free 🚀
          </a>
        </div>
      </div>
    </section>
  );
}