import React from "react";
import { useState } from 'react';

const SERVICES_OPTIONS = [
  'Credit Card',
  'Personal Loan',
  'Home Loan',
  'Business Loan',
  'Loan Against Property',
  'Insurance',
  'Account Opening',
];

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', city: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      // Demo mode — no backend yet
      setTimeout(() => setStatus('success'), 1000);
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="text-7xl mb-6">🎉</div>
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Request Received!
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Our advisor will call you within <strong className="text-white">24 hours</strong>. Keep your phone handy!
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:shadow-lg transition"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: Info */}
          <div>
            <span className="inline-block bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/20">
              Free Consultation
            </span>
            <h2 className="text-4xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Get Expert Financial<br />Advice — For Free
            </h2>
            <p className="text-blue-200 text-base leading-relaxed mb-8">
              Our advisors analyse your profile and suggest the best products tailored just for you. No charges. No spam. Just honest advice.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {[
                { icon: '✅', text: 'Zero charges, no hidden fees' },
                { icon: '⚡', text: 'Response within 24 hours' },
                { icon: '🎓', text: 'Experts with 5+ years experience' },
                { icon: '🔒', text: 'Your data is 100% safe' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-white">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-5 py-3 rounded-2xl hover:bg-white/20 transition text-sm"
              >
                📞 99999 99999
              </a>
              <a
                href="mailto:info@arthfinanceservices.com"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-5 py-3 rounded-2xl hover:bg-white/20 transition text-sm"
              >
                ✉️ info@arthfinanceservices.com
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-black text-slate-900 mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Request a Callback
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rahul Sharma"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Mobile Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    required
                    pattern="[6-9][0-9]{9}"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>
              </div>

              {/* Service + City */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">I Need Help With *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-white"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Your City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Mumbai"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Any Specific Requirement?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. Need a home loan of ₹30 lakhs with low EMI..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white font-black text-base py-4 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {status === 'loading' ? '⏳ Sending...' : 'Get Free Callback 🚀'}
              </button>

              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to our <span className="underline cursor-pointer">Privacy Policy</span>. We never spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
