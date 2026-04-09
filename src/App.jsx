import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Compare from './components/Compare';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import React from 'react';
import InfoStrip from './components/InfoStrip';
import BankPartners from './components/BankPartners';

export default function App() {
  return (
    <div className="font-body bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Compare />
      <WhyUs />
      <InfoStrip />
      <HowItWorks />
      <Testimonials />
      <BankPartners />
      <LeadForm />
      <Footer />
    </div>
  );
}