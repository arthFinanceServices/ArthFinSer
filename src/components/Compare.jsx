import { useState } from "react";
import { COMPARE_DATA } from "../data/siteData";
import React from "react";

const TABS = [
  { id: "loans", label: "🏦 Loans" },
  { id: "cards", label: "💳 Credit Cards" },
  { id: "insurance", label: "🛡️ Insurance" },
];

const HEADERS = {
  loans: ["Bank", "Interest Rate", "Max Tenure", "Processing Fee", ""],
  cards: ["Card", "Rewards", "Joining Fee", "Annual Fee", ""],
  insurance: ["Plan", "Coverage", "Policy Term", "Premium", ""],
};

export default function Compare() {
  const [active, setActive] = useState("cards");
  const rows = COMPARE_DATA[active];
  const headers = HEADERS[active];

  return (
    <section id="compare" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Live Comparison
          </span>
          <h2
            className="text-4xl font-black text-slate-900 mb-3"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Compare & Choose <span className="text-blue-700">Best Rates</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-base">
            Real rates from real banks. No inflated numbers. No surprises.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          
          <div className="inline-flex bg-slate-100 rounded-2xl p-1 gap-1">
            {TABS.map((t) => {
              return (
                <button
                key={t.id}
                onClick={()=>setActive(t.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${active === t.id ? "bg-white text-blue-700" : "text-slate-500 hover:text-slate-700"}`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-100 hover:bg-blue-50/40 transition-colors ${
                    row.tag ? "bg-blue-50/30" : ""
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600">
                        {row.bank[0]}
                      </div>
                      <span className="font-semibold text-slate-900 text-sm">
                        {row.bank}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-blue-700 font-black text-sm">
                      {row.rate}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {row.tenure}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {row.processing}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {row.tag && (
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {row.tag}
                        </span>
                      )}
                      <a
                        href="#contact"
                        className="bg-blue-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-full hover:bg-blue-800 transition whitespace-nowrap"
                      >
                        Apply
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-slate-400 mt-5">
          * Rates are indicative. Final rate depends on your credit profile. Our
          advisors will get you the best possible rate.
        </p>
      </div>
    </section>
  );
}
