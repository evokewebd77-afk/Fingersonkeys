import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';

import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
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
    <div className="min-h-screen text-white relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <BenefitsSection />
        <ExamRecognition />
        <TestimonialsSection />
        <StatsSection />
        <PriceSection />
        <FAQSection />
        <BlogSection />
        <EbooksSection />

      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
