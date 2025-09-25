'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Box, Instagram } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Kolapalli Aditya Sai";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aditya-Sai-19', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/aditya-sai-3317702a6', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:workingprofessional19@outlook.com', label: 'Email' },
    { icon: Box, href: 'https://huggingface.co/Aditya-Sai-19', label: 'Hugging Face' },
    { icon: Instagram, href: 'https://www.instagram.com/magnum_opus_prolix/', label: 'Instagram' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="text-electric-cyan text-lg mb-4 font-mono" data-macaly="hero-greeting">
            &gt; System.out.println("Hello, Universe!");
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-electric-cyan via-neon-purple to-cosmic-orange bg-clip-text text-transparent" data-macaly="hero-name">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" data-macaly="hero-tagline">
            Robotics & Cybersecurity Enthusiast | AI/ML Engineer | Building the Future of Technology
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              className="bg-gradient-to-r from-electric-cyan to-neon-purple px-8 py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-electric-cyan/50 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              data-macaly="hero-cta-projects"
            >
              🚀 Explore My Work
            </button>

            <button className="flex items-center space-x-2 border-2 border-electric-cyan px-8 py-4 rounded-lg font-semibold text-electric-cyan hover:bg-electric-cyan hover:text-space-blue transition-all duration-300" data-macaly="hero-cta-resume">
              <Download className="w-5 h-5" />
              <a href='/resume.pdf' download={"Kolapalli_Aditya_Sai_Resume.pdf"}>Download Resume</a>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-electric-cyan transition-all duration-300 hover:bg-electric-cyan/20"
                data-macaly={`social-${link.label.toLowerCase()}`}
              >
                <link.icon className="w-6 h-6 text-white hover:text-electric-cyan transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute  left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-electric-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-electric-cyan rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
