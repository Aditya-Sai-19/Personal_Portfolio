'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import StarField from '@/components/StarField';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-space-blue flex  w-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full md:h-32 md:w-32 h-20 md:ml-0 ml-[20vw] w-20 border-t-2 border-electric-cyan mb-4"></div>
          <p className="text-electric-cyan text-xl font-mono">Initializing System...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-blue text-white overflow-x-hidden">
      <StarField />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}