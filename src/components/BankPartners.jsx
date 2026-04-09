import { useState } from 'react';
import React from 'react';
const PARTNERS = [
  { name: 'Aditya Birla Capital', type: 'Life Insurance', color: '#c0392b', bg: '#fdf2f2', border: '#fca5a5' },
  { name: 'Ageas Federal', type: 'Life Insurance', color: '#1d4ed8', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'AVIVA', type: 'Life Insurance', color: '#15803d', bg: '#f0fdf4', border: '#86efac' },
  { name: 'Axis Max', type: 'Life Insurance', color: '#7e22ce', bg: '#faf5ff', border: '#d8b4fe' },
  { name: 'Bajaj Life', type: 'Life Insurance', color: '#1e40af', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'Bajaj General', type: 'General Insurance', color: '#4338ca', bg: '#eef2ff', border: '#a5b4fc' },
  { name: 'Bandhan Life', type: 'Life Insurance', color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4' },
  { name: 'Bharti AXA', type: 'Insurance', color: '#b91c1c', bg: '#fef2f2', border: '#fca5a5' },
  { name: 'Canara HSBC', type: 'Life Insurance', color: '#dc2626', bg: '#fef2f2', border: '#fca5a5' },
  { name: 'Care Health', type: 'Health Insurance', color: '#047857', bg: '#ecfdf5', border: '#6ee7b7' },
  { name: 'Chola MS', type: 'General Insurance', color: '#c2410c', bg: '#fff7ed', border: '#fdba74' },
  { name: 'Digit General', type: 'General Insurance', color: '#6d28d9', bg: '#f5f3ff', border: '#c4b5fd' },
  { name: 'Digit Life', type: 'Life Insurance', color: '#5b21b6', bg: '#f5f3ff', border: '#c4b5fd' },
  { name: 'ECGC', type: 'Export Credit', color: '#374151', bg: '#f9fafb', border: '#d1d5db' },
  { name: 'Edelweiss Life', type: 'Life Insurance', color: '#0e7490', bg: '#ecfeff', border: '#a5f3fc' },
  { name: 'Future Generali', type: 'Life Insurance', color: '#d97706', bg: '#fffbeb', border: '#fcd34d' },
  { name: 'Generali Central', type: 'General Insurance', color: '#b91c1c', bg: '#fef2f2', border: '#fca5a5' },
  { name: 'Galaxy Health', type: 'Health Insurance', color: '#1d4ed8', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'HDFC ERGO', type: 'General Insurance', color: '#be123c', bg: '#fff1f2', border: '#fda4af' },
  { name: 'HDFC Life', type: 'Life Insurance', color: '#9f1239', bg: '#fff1f2', border: '#fda4af' },
  { name: 'ICICI Lombard', type: 'General Insurance', color: '#c2410c', bg: '#fff7ed', border: '#fdba74' },
  { name: 'ICICI Prudential', type: 'Life Insurance', color: '#ea580c', bg: '#fff7ed', border: '#fdba74' },
  { name: 'IFFCO-TOKIO', type: 'General Insurance', color: '#166534', bg: '#f0fdf4', border: '#86efac' },
  { name: 'IndiaFirst Life', type: 'Life Insurance', color: '#1e40af', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'IndusInd General', type: 'General Insurance', color: '#3730a3', bg: '#eef2ff', border: '#a5b4fc' },
  { name: 'Kotak Life', type: 'Life Insurance', color: '#b91c1c', bg: '#fef2f2', border: '#fca5a5' },
  { name: 'Liberty General', type: 'General Insurance', color: '#1d4ed8', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'LIC', type: 'Life Insurance', color: '#1e3a8a', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'Magma General', type: 'General Insurance', color: '#c2410c', bg: '#fff7ed', border: '#fdba74' },
  { name: 'Manipal Cigna', type: 'Health Insurance', color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4' },
  { name: 'National Insurance', type: 'General Insurance', color: '#15803d', bg: '#f0fdf4', border: '#86efac' },
  { name: 'Niva Bupa', type: 'Health Insurance', color: '#1d4ed8', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'Oriental Insurance', type: 'General Insurance', color: '#166534', bg: '#f0fdf4', border: '#86efac' },
  { name: 'PNB MetLife', type: 'Life Insurance', color: '#1e40af', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'Pramerica Life', type: 'Life Insurance', color: '#4338ca', bg: '#eef2ff', border: '#a5b4fc' },
  { name: 'Raheja QBE', type: 'General Insurance', color: '#7e22ce', bg: '#faf5ff', border: '#d8b4fe' },
  { name: 'Royal Sundaram', type: 'General Insurance', color: '#b91c1c', bg: '#fef2f2', border: '#fca5a5' },
  { name: 'SBI General', type: 'General Insurance', color: '#1e40af', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'SBI Life', type: 'Life Insurance', color: '#1e3a8a', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'Shriram General', type: 'General Insurance', color: '#c2410c', bg: '#fff7ed', border: '#fdba74' },
  { name: 'Shriram Life', type: 'Life Insurance', color: '#ea580c', bg: '#fff7ed', border: '#fdba74' },
  { name: 'Star Health', type: 'Health Insurance', color: '#dc2626', bg: '#fef2f2', border: '#fca5a5' },
  { name: 'Star Union Dai-ichi', type: 'Life Insurance', color: '#374151', bg: '#f9fafb', border: '#d1d5db' },
  { name: 'Tata AIA', type: 'Life Insurance', color: '#1d4ed8', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'Tata AIG', type: 'General Insurance', color: '#1e40af', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'The New India', type: 'General Insurance', color: '#166534', bg: '#f0fdf4', border: '#86efac' },
  { name: 'United India', type: 'General Insurance', color: '#134e4a', bg: '#f0fdfa', border: '#99f6e4' },
  { name: 'Universal Sompo', type: 'General Insurance', color: '#6d28d9', bg: '#f5f3ff', border: '#c4b5fd' },
];

function PartnerCard({ p }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center gap-2 px-3 py-4 rounded-2xl border cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: hovered ? p.bg : '#ffffff',
        borderColor: hovered ? p.border : '#e2e8f0',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 10px 30px rgba(0,0,0,0.10)' : '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Initial circle */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg transition-all duration-300"
        style={{
          fontFamily: 'Syne, sans-serif',
          backgroundColor: hovered ? p.bg : '#f1f5f9',
          color: hovered ? p.color : '#94a3b8',
          border: hovered ? `1.5px solid ${p.border}` : '1.5px solid transparent',
        }}
      >
        {p.name[0]}
      </div>

      {/* Company name */}
      <p
        className="text-center text-[11px] font-bold leading-tight transition-colors duration-300"
        style={{ color: hovered ? p.color : '#94a3b8' }}
      >
        {p.name}
      </p>

      {/* Type badge — only shows on hover */}
      <span
        className="text-[9px] font-bold px-2 py-0.5 rounded-full border transition-all duration-300"
        style={{
          color: p.color,
          backgroundColor: p.bg,
          borderColor: p.border,
          opacity: hovered ? 1 : 0,
        }}
      >
        {p.type}
      </span>
    </div>
  );
}

export default function BankPartners() {
  return (
    <section className="py-16 bg-[#eef3fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Partners
          </span>
          <h2
            className="text-3xl font-black text-slate-900 mb-2"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            50+ Trusted <span className="text-blue-700">Partner Companies</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            We are tied up with India's leading banks, insurance companies & NBFCs to get you the best rates.
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
          {PARTNERS.map((p) => (
            <PartnerCard key={p.name} p={p} />
          ))}
        </div>

        {/* Count badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            { count: '20+', label: 'Life Insurance', bg: '#eff6ff', color: '#1e40af' },
            { count: '15+', label: 'Health Insurance', bg: '#ecfdf5', color: '#065f46' },
            { count: '18+', label: 'General Insurance', bg: '#f5f3ff', color: '#5b21b6' },
            { count: '12+', label: 'Banking Partners', bg: '#fff7ed', color: '#c2410c' },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
              style={{ backgroundColor: b.bg, color: b.color }}
            >
              <span className="text-base font-black" style={{ fontFamily: 'Syne, sans-serif' }}>
                {b.count}
              </span>
              {b.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}