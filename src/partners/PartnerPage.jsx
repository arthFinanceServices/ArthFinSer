import { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../api/axiosInstance";
import logo from "../assets/logo-nav.jpg";
import React from "react";

// ── Static Data ──────────────────────────────────────────
const WHY_DATA = [
  {
    icon: "💰",
    title: "Zero Investment",
    en: "No registration fee, no hidden charges.",
    hi: "बिना किसी बड़े निवेश के अपनी दुकान को 'डिजिटल बैंक' में बदलें।",
  },
  {
    icon: "📈",
    title: "High Commission",
    en: "Best-in-class earnings on every file.",
    hi: "हर सफल लोन, क्रेडिट कार्ड या इंश्योरेंस फाइल पर आकर्षक कमीशन।",
  },
  {
    icon: "🏦",
    title: "150+ Banking Partners",
    en: "Direct tie-up with HDFC, ICICI, SBI, Axis & more.",
    hi: "भारत के सबसे बड़े बैंकों के साथ काम करने का मौका।",
  },
  {
    icon: "🎓",
    title: "Dedicated Support",
    en: "Full training + Posters, Banners & ID Cards.",
    hi: "आपको और आपकी टीम को पूरी Training और Marketing Material।",
  },
  {
    icon: "📱",
    title: "Digital Portal",
    en: "Manage everything from your phone.",
    hi: "फाइलों को ट्रैक करने के लिए हाई-टेक और आसान Dashboard।",
  },
  {
    icon: "🛡️",
    title: "100% Legal & Trusted",
    en: "Work with RBI-registered NBFCs as an authorized partner.",
    hi: "पूरी तरह से कानूनी और सुरक्षित।",
  },
];


const year = new Date().getFullYear();

const WHO_DATA = [
  {
    emoji: "💻",
    title: "Cyber Cafes & CSC Centers",
    desc: "Digital seva already dete ho — financial services add karo",
  },
  {
    emoji: "📱",
    title: "Mobile & Recharge Shops",
    desc: "Daily footfall ka use karo aur extra income kamao",
  },
  {
    emoji: "🔒",
    title: "Insurance Agents",
    desc: "Existing clients ko loan & card bhi offer karo",
  },
  {
    emoji: "👔",
    title: "Business Consultants",
    desc: "Independent professionals jo finance field mein hain",
  },
];

const STEPS_DATA = [
  {
    num: "01",
    title: "Sign Up",
    desc: "Form fill karo — naam, dukaan, city aur contact. Sirf 2 minutes.",
    icon: "📝",
  },
  {
    num: "02",
    title: "Verify",
    desc: "Hamara Field Officer aapki dukaan visit karega aur verification complete karega.",
    icon: "✅",
  },
  {
    num: "03",
    title: "Earn",
    desc: "Turant start — Loans, Cards & Insurance process karo aur commission pao.",
    icon: "💸",
  },
];

const RATE_DATA = [
  { icon: "👤", label: "Personal Loan", val: "₹500–₹2,000", best: true },
  { icon: "🏠", label: "Home Loan", val: "₹1,000–₹5,000", best: false },
  { icon: "💼", label: "Business Loan", val: "₹800–₹3,000", best: false },
  { icon: "🏗️", label: "LAP", val: "₹1,200–₹4,000", best: false },
];

const BANKS = [
  "HDFC Bank",
  "ICICI Bank",
  "SBI",
  "Axis Bank",
  "Kotak Mahindra",
  "IDFC First",
  "PNB",
  "Bank of Baroda",
  "Bajaj Finance",
  "Tata Capital",
];
const BADGES = [
  "✅ RBI Compliant",
  "🏦 150+ Bank Partners",
  "📍 Bihar & Jharkhand",
  "🔐 Authorized QR Verified",
];
const PERKS = [
  "Zero registration fee — bilkul free",
  "Training & marketing material milega",
  "150+ banks ke saath direct tie-up",
  "High commission on every successful file",
  "Dedicated support team available",
];
const MINI_STATS = [
  { num: "50+", label: "Bank Partners" },
  { num: "10K+", label: "Happy Customers" },
  { num: "100%", label: "Free Advisory" },
];
const HERO_STATS = [
  { num: "150+", label: "Bank Partners" },
  { num: "1,000+", label: "Partners" },
  { num: "100%", label: "Free to Join" },
];

// ── Reusable Input Component ─────────────────────────────
const Field = ({ label, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-gray-600">{label}</label>
    {children}
    {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
  </div>
);

const inputCls = (hasError) =>
  `w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-colors ${
    hasError
      ? "border-red-400 focus:border-red-400"
      : "border-gray-200 focus:border-blue-400"
  }`;

// ── Main Component ────────────────────────────────────────
const PartnerPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const scrollToForm = () => {
    const el = document.getElementById("partner-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const onSubmit = async (data) => {
    setServerError("");
    try {
      await axiosInstance.post("/addDealer", {
        fullName: data.fullName,
        dealerCode: "AUTO-" + Date.now(),
        email: data.phone + "@partner.arthfinance.in",
        sentence: `${data.shopName || ""} | ${data.city} | ${data.businessType}`,
        isActive: false,
      });
      setSubmitted(true);
    } catch (err) {
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {/* ── NAVBAR ───────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md">
              <img src={logo} alternate="ArthFinance Logo" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm sm:text-base leading-none">
                Arth
              </div>
              <div className="text-gray-400 text-xs leading-none">
                Finance Service
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="/" className="hover:text-blue-600 transition-colors">
              Compare
            </a>
            <a href="/" className="hover:text-blue-600 transition-colors">
              Why Us
            </a>
            <a href="/" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
            <span className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-0.5">
              Partner
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden lg:block text-pink-500 text-sm font-semibold">
              📞 99999 99999
            </span>
            <button
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors"
            >
              Register →
            </button>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1 p-1"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-600">
            <a
              href="/"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Compare
            </a>
            <a
              href="/"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="/"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <span className="text-pink-500 font-semibold">📞 99999 99999</span>
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-3 sm:px-4 py-1.5 text-xs font-semibold text-gray-600 shadow-sm mb-6 sm:mb-8">
            🏆 Trusted by 1,000+ Partners Across Bihar & Jharkhand
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
                Empower Your
                <br />
                <span className="text-blue-600">Business.</span>
                <br />
                Become a <span className="text-orange-500">Financial Hub.</span>
              </h1>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-2 max-w-md">
                Partner with India's Fastest Growing Fintech Network. Become an
                Authorized{" "}
                <strong className="text-gray-700">
                  Arth Finance Dealer Point
                </strong>{" "}
                and earn commissions on Loans, Cards & Insurance.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm italic mb-6 sm:mb-8">
                अपनी दुकान को डिजिटल बैंक बनाएं और हर महीने एक्स्ट्रा कमाएं।
              </p>
              <div className="flex gap-3 flex-wrap mb-8 sm:mb-10">
                <button
                  onClick={scrollToForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-lg text-sm transition-colors"
                >
                  Register as Partner →
                </button>
                <button
                  onClick={scrollToForm}
                  className="border border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm bg-white transition-colors"
                >
                  Learn More
                </button>
              </div>
              <div className="flex gap-4 sm:gap-6 flex-wrap">
                {HERO_STATS.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <div className="w-1 h-8 sm:h-10 bg-blue-600 rounded-full" />
                    <div>
                      <div className="text-lg sm:text-xl font-extrabold text-gray-900">
                        {s.num}
                      </div>
                      <div className="text-xs text-gray-400">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Rate Card (hidden on small mobile, shown sm+) */}
            <div className="hidden sm:flex justify-center relative py-8">
              <div className="absolute top-2 left-4 bg-white rounded-2xl shadow-lg px-3 py-2.5 flex items-center gap-2 z-10">
                <span className="text-base">💳</span>
                <div>
                  <div className="text-gray-400 text-xs">Credit Card</div>
                  <div className="text-sm font-bold text-gray-800">
                    5% Cashback
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-5 w-64 lg:w-72 border border-gray-100">
                <div className="text-blue-700 font-bold text-sm sm:text-base mb-0.5">
                  Arth Finance Services
                </div>
                <div className="text-xs text-gray-400 mb-3 sm:mb-4">
                  Live Commission Rates
                </div>
                {RATE_DATA.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0"
                  >
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <span>{r.icon}</span>
                      {r.label}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">
                        {r.val}
                      </span>
                      {r.best && (
                        <span className="bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                          BEST
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <button
                  onClick={scrollToForm}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                >
                  Join as Partner — Free
                </button>
              </div>
              <div className="absolute bottom-2 right-4 bg-white rounded-2xl shadow-lg px-3 py-2.5 flex items-center gap-2 z-10">
                <span className="text-base">🏠</span>
                <div>
                  <div className="text-gray-400 text-xs">Home Loan</div>
                  <div className="text-sm font-bold text-gray-800">
                    8.40% p.a.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANKS ────────────────────────────────── */}
      <section className="py-6 sm:py-8 border-y border-gray-100 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4 sm:mb-5">
            Direct Tie-up with India's Leading Banks & NBFCs
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {BANKS.map((b) => (
              <span
                key={b}
                className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN ─────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Why Partner With Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 sm:mt-4 mb-2 sm:mb-3">
              दुकानदार हमारे साथ{" "}
              <span className="text-blue-600">क्यों जुड़ें?</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Join 100+ partners transforming their business with zero upfront
              investment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {WHY_DATA.map((w) => (
              <div
                key={w.title}
                className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 transition-colors">
                  {w.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                  {w.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{w.en}</p>
                <p className="text-xs text-gray-400 italic">{w.hi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ─────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="bg-orange-50 text-orange-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Who Can Join
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 sm:mt-4 mb-2 sm:mb-3">
              Kiske Liye Hai <span className="text-orange-500">Yeh?</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Koi bhi jiske paas local presence hai — partner ban sakte hain.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {WHO_DATA.map((w) => (
              <div
                key={w.title}
                className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {w.emoji}
                </div>
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1 sm:mb-2">
                  {w.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed hidden sm:block">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 STEPS ──────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="bg-blue-900 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 sm:mt-4 mb-2 sm:mb-3">
              Sirf <span className="text-blue-400">3 Steps</span> Mein Shuru
              Karo
            </h2>
            <p className="text-gray-500 text-sm">
              Simple process — koi complex paperwork nahi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STEPS_DATA.map((s, i) => (
              <div
                key={s.num}
                className="bg-gray-800 rounded-2xl p-6 sm:p-8 relative"
              >
                <div className="text-5xl sm:text-6xl font-extrabold text-gray-700 leading-none mb-3 sm:mb-4">
                  {s.num}
                </div>
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                  {s.icon}
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
                {i < 2 && (
                  <div className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full items-center justify-center text-white text-sm z-10">
                    →
                  </div>
                )}
                {/* Mobile step connector */}
                {i < 2 && (
                  <div className="sm:hidden flex justify-center mt-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                      ↓
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BANNER ─────────────────────────── */}
      <section className="bg-blue-700 py-12 sm:py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">
            Coming to Your City Soon!
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">
            Arth Finance is rapidly expanding across Bihar and Jharkhand. We are
            onboarding 1,000+ trusted local partners to bring banking services
            closer to you.
          </p>
          <p className="text-blue-300 text-xs sm:text-sm italic mb-6 sm:mb-8">
            Arth Finance तेजी से बिहार और झारखंड में अपना विस्तार कर रहा है।
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
            {BADGES.map((b) => (
              <span
                key={b}
                className="bg-white bg-opacity-20 border border-white border-opacity-30 text-white text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>
          <button
            onClick={scrollToForm}
            className="bg-white text-blue-700 font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm hover:bg-blue-50 transition-colors"
          >
            Register as a Partner Now →
          </button>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────── */}
      <section
        className="py-14 sm:py-20 px-4 sm:px-6 bg-white"
        id="partner-form"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Info */}
          <div>
            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Register Now
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight">
              Partner Bano,
              <br />
              <span className="text-blue-600">Aaj Hi Shuru Karo</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 sm:mb-8">
              Form fill karo — hamari team{" "}
              <strong className="text-gray-700">24 ghante ke andar</strong>{" "}
              aapse contact karegi.
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {PERKS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  {p}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {MINI_STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-blue-50 rounded-xl p-3 sm:p-4 text-center"
                >
                  <div className="text-lg sm:text-xl font-extrabold text-blue-700">
                    {s.num}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — react-hook-form */}
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl mx-auto mb-4 sm:mb-5">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 sm:mb-3">
                  Registration Ho Gaya!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Shukriya! Hamari team <strong>24 ghante mein</strong> aapse
                  contact karegi. Apna phone ready rakhein.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-5 sm:mb-6">
                  Partner Registration Form
                </h3>

                {serverError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-4">
                    {serverError}
                  </div>
                )}

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Field label="Poora Naam *" error={errors.fullName?.message}>
                    <input
                      {...register("fullName", {
                        required: "Naam required hai",
                        minLength: {
                          value: 3,
                          message: "Kam se kam 3 characters",
                        },
                      })}
                      placeholder="Ramesh Kumar"
                      className={inputCls(errors.fullName)}
                    />
                  </Field>
                  <Field
                    label="Shop / Business Naam"
                    error={errors.shopName?.message}
                  >
                    <input
                      {...register("shopName")}
                      placeholder="Ramesh Cyber Cafe"
                      className={inputCls(errors.shopName)}
                    />
                  </Field>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Field label="Mobile Number *" error={errors.phone?.message}>
                    <input
                      {...register("phone", {
                        required: "Phone number required hai",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Valid 10-digit number daalo",
                        },
                      })}
                      placeholder="98XXXXXXXX"
                      maxLength={10}
                      className={inputCls(errors.phone)}
                    />
                  </Field>
                  <Field label="City / Shahar *" error={errors.city?.message}>
                    <input
                      {...register("city", {
                        required: "City required hai",
                      })}
                      placeholder="Patna, Ranchi..."
                      className={inputCls(errors.city)}
                    />
                  </Field>
                </div>

                {/* Business Type */}
                <div className="mb-5 sm:mb-6">
                  <Field
                    label="Business Type *"
                    error={errors.businessType?.message}
                  >
                    <select
                      {...register("businessType", {
                        required: "Business type select karo",
                      })}
                      className={inputCls(errors.businessType)}
                    >
                      <option value="">-- Select karo --</option>
                      <option value="Cyber Cafe / CSC Center">
                        Cyber Cafe / CSC Center
                      </option>
                      <option value="Mobile & Recharge Shop">
                        Mobile &amp; Recharge Shop
                      </option>
                      <option value="Insurance Agent">Insurance Agent</option>
                      <option value="Individual Business Consultant">
                        Individual Business Consultant
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Register as Partner — Free →"}
                </button>

                <p className="text-center text-xs text-gray-400 mt-3">
                  🔒 Your data is safe. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="bg-gray-900 py-6 sm:py-8 px-4 sm:px-6 text-center border-t border-gray-800">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md">
            <img className="overflow-hidden rounded-sm" src={logo} alternate="ArthFinance Logo" />
          </div>
          <span className="text-white font-semibold text-sm">
            Arth Finance Service
          </span>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm">
          © {year} Arth Finance. Bihar & Jharkhand ka Apna Fintech Network.
        </p>
        <p className="text-gray-600 text-xs mt-1">
          RBI Compliant · 150+ Bank Partners · Free Advisory
        </p>
      </footer>
    </div>
  );
};

export default PartnerPage;
