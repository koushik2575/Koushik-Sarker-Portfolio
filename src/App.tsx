/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll } from 'motion/react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import AdminPanel from './components/AdminPanel';

function LandingPage() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="w-full min-h-screen bg-[#0C0C0C] font-sans flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 z-[100]"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
          background: "linear-gradient(90deg, #646973 0%, #BBCCD7 100%)"
        }}
      />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
