import React from "react";
import { WHY_US } from '../data/siteData';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-white/20">
            Why Arth Finance Services?
          </span>
          <h2 className="text-4xl font-black text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            We Don't Just Sell —{' '}
            <span className="text-cyan-400">We Advise</span>
          </h2>
          <p className="text-blue-200 max-w-lg mx-auto text-base leading-relaxed">
            "Hum sirf product nahi bechte — hum customer ko advise karte hain ki unka financial profile ke hisaab se sabse best option kya hai."
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item, i) => (
            <div
              key={i}
              className="group bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl p-6 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-white font-black text-lg mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission Box */}
        <div className="mt-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Our Mission
          </h3>
          <p className="text-2xl font-black text-cyan-400 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            "Right Financial Product at the Right Interest Rate."
          </p>
          <p className="text-blue-200 text-sm max-w-lg mx-auto leading-relaxed">
            Arth Finance Services Finance Service is a trusted platform helping customers choose the best financial products — low interest, maximum benefits, safe options — by partnering with multiple banks and NBFCs.
          </p>
        </div>
      </div>
    </section>
  );
}
