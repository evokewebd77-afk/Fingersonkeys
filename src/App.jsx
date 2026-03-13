import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';

import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MeetFounderSection from './components/MeetFounderSection';
import PianoIntroSection from './components/PianoIntroSection';
import PianoExperienceSection from './components/PianoExperienceSection';
import AdmissionProcess from './components/AdmissionProcess';
import GallerySection from './components/GallerySection';
import PriceSection from './components/PriceSection';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import EbooksSection from './components/EbooksSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import StatsSection from './components/StatsSection';

import Footer from './components/Footer';

import ExamRecognition from './components/ExamRecognition';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden w-full">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MeetFounderSection />
        <PianoIntroSection />
        <PianoExperienceSection />
        <ServicesSection />
        <GallerySection />
        <BenefitsSection />
        <ExamRecognition />
        <StatsSection />
        <PriceSection />
        <AdmissionProcess />
        <FAQSection />
        <TestimonialsSection />
        <BlogSection />
        <EbooksSection />

      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
