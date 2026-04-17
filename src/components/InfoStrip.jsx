import React from "react";
export default function InfoStrip() {
  return (
    <section className="bg-[#eef3fb] py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* ── Card 1: Claims Assistance 24x7 ─────────────────── */}
        <div className="bg-white rounded-2xl border border-slate-200 flex items-center gap-4 px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200">
          {/* Illustration */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden">
              {/* CSS lady at desk illustration */}
              <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Desk */}
                <rect x="8" y="42" width="48" height="4" rx="2" fill="#d1d5db"/>
                {/* Monitor */}
                <rect x="20" y="26" width="22" height="16" rx="2" fill="#6b7280"/>
                <rect x="22" y="28" width="18" height="11" rx="1" fill="#93c5fd"/>
                <rect x="29" y="42" width="4" height="3" fill="#9ca3af"/>
                <rect x="26" y="44" width="10" height="2" rx="1" fill="#9ca3af"/>
                {/* Body */}
                <ellipse cx="32" cy="52" rx="6" ry="4" fill="#f59e0b"/>
                <rect x="27" y="38" width="10" height="14" rx="3" fill="#f59e0b"/>
                {/* Head */}
                <circle cx="32" cy="32" r="6" fill="#fde68a"/>
                {/* Hair */}
                <path d="M26 30 Q27 22 32 22 Q38 22 38 30" fill="#78350f"/>
                <path d="M26 30 Q24 33 26 36" stroke="#78350f" strokeWidth="1.5" fill="none"/>
                {/* Headset */}
                <path d="M26 30 Q26 26 32 26 Q38 26 38 30" stroke="#374151" strokeWidth="1.5" fill="none"/>
                <rect x="25" y="29" width="3" height="4" rx="1.5" fill="#374151"/>
                <rect x="36" y="29" width="3" height="4" rx="1.5" fill="#374151"/>
                <path d="M28 34 L28 36 Q29 38 30 37" stroke="#374151" strokeWidth="1" fill="none"/>
              </svg>
            </div>
          </div>
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-[#22c55e] font-bold text-sm leading-snug">
              Our claims assistance<br />
              experts are available{' '}
              <span className="bg-[#22c55e] text-white text-xs font-black px-2 py-0.5 rounded ml-0.5 inline-block">
                24x7*
              </span>
            </p>
            <p className="text-slate-400 text-[11px] mt-1.5 leading-tight">
              *Assistance available for Health &amp; Motor insurance
            </p>
          </div>
        </div>

        {/* ── Card 2: Ask Credarth (like Ask PB) ─────────────── */}
        <div className="bg-gradient-to-br from-[#eef3fb] to-[#dbeafe] rounded-2xl border border-blue-200 flex items-center gap-4 px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group">
          {/* Illustration */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 relative">
              {/* Big question mark figures */}
              <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Question mark */}
                <circle cx="28" cy="20" r="10" fill="#f97316" opacity="0.9"/>
                <text x="24" y="25" fontSize="14" fontWeight="bold" fill="white">?</text>
                {/* Person 1 */}
                <circle cx="18" cy="42" r="5" fill="#fbbf24"/>
                <rect x="14" y="47" width="8" height="10" rx="3" fill="#f97316"/>
                {/* Person 2 */}
                <circle cx="44" cy="42" r="5" fill="#fde68a"/>
                <rect x="40" y="47" width="8" height="10" rx="3" fill="#3b82f6"/>
                {/* arms reaching question mark */}
                <path d="M22 47 Q25 40 28 38" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M40 47 Q37 40 34 38" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          {/* Text */}
          <div className="flex-1">
            {/* Logo badge */}
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6l-4 4V5z"/></svg>
              </div>
              <span className="text-blue-700 text-xs font-black tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                ask arthfinanceservices
              </span>
            </div>
            <p className="text-slate-900 font-black text-sm leading-tight">
              Got a question about insurance?
            </p>
            <p className="text-slate-500 text-xs mt-1 leading-snug">
              Drop a message and we will help you quickly.
            </p>
          </div>
          {/* Arrow */}
          <div className="text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-lg flex-shrink-0">→</div>
        </div>

        {/* ── Card 3: Beware of Fraudsters ───────────────────── */}
        <div className="bg-white rounded-2xl border border-slate-200 flex items-center gap-4 px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group">
          {/* Text */}
          <div className="flex-1">
            <p className="text-slate-400 text-xs font-medium mb-0.5">Beware of</p>
            <p className="text-slate-800 font-black text-base leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Insurance<br />Fraudsters
            </p>
            <p className="text-blue-600 text-xs font-semibold mt-2 group-hover:underline">Know more →</p>
          </div>
          {/* Hacker illustration */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-amber-300 flex items-center justify-center overflow-hidden relative">
              <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hoodie body */}
                <path d="M12 64 Q16 48 32 46 Q48 48 52 64Z" fill="#4b5563"/>
                {/* Hood */}
                <path d="M18 36 Q14 28 18 20 Q22 12 32 12 Q42 12 46 20 Q50 28 46 36 Q42 44 32 44 Q22 44 18 36Z" fill="#374151"/>
                {/* Face */}
                <ellipse cx="32" cy="30" rx="10" ry="11" fill="#f9fafb"/>
                {/* Guy Fawkes mask lines */}
                <path d="M24 28 Q26 26 28 28" stroke="#6b7280" strokeWidth="1" fill="none"/>
                <path d="M36 28 Q38 26 40 28" stroke="#6b7280" strokeWidth="1" fill="none"/>
                {/* Moustache */}
                <path d="M28 33 Q30 35 32 33 Q34 35 36 33" stroke="#6b7280" strokeWidth="1.2" fill="none"/>
                {/* Goatee */}
                <path d="M30 35 Q32 39 34 35" stroke="#6b7280" strokeWidth="1" fill="none"/>
                {/* Eyes */}
                <ellipse cx="27" cy="28" rx="2.5" ry="2" fill="#1e293b"/>
                <ellipse cx="37" cy="28" rx="2.5" ry="2" fill="#1e293b"/>
                {/* Hood shadow */}
                <path d="M18 24 Q16 20 20 16" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
                <path d="M46 24 Q48 20 44 16" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
