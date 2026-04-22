import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Compare from "../components/Compare";
import WhyUs from "../components/WhyUs";
import InfoStrip from "../components/InfoStrip";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import BankPartners from "../components/BankPartners";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";

const HomePage = () => {
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
};

export default HomePage;
