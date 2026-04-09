import React from "react";
import { TESTIMONIALS } from '../data/siteData';

const Star = () => (
  <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Customer Stories
          </span>
          <h2 className="text-4xl font-black text-slate-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Trusted by{' '}
            <span className="text-blue-700">Thousands</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-base">
            Real customers, real savings. See what people are saying about Credarth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array(t.rating).fill(0).map((_, j) => <Star key={j} />)}
              </div>

              {/* Review */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Service tag */}
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full self-start">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">📍 {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-14 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-3xl p-8 flex flex-wrap justify-around gap-6 text-center">
          {[
            { val: '4.9/5', label: 'Average Rating', icon: '⭐' },
            { val: '10,000+', label: 'Happy Customers', icon: '😊' },
            { val: '₹2.4 Cr', label: 'Interest Saved', icon: '💰' },
            { val: '98%', label: 'Approval Rate', icon: '✅' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl mb-1">{s.icon}</div>
              <p className="text-2xl font-black text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>{s.val}</p>
              <p className="text-sm text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}