'use client';

import React, { useEffect } from 'react';
import '@/styles/app.css';
import Header from '@/components/layout/header/Header.jsx';
import Home from '@/components/sections/home/Home.jsx';
import About from '@/components/sections/about/About.jsx';
import Skills from '@/components/sections/skills/Skills.jsx';
import Services from '@/components/sections/services/Services.jsx';
import Qualification from '@/components/sections/qualification/Qualification.jsx';
import Projects from '@/components/sections/projects/Projects.jsx';
import Testimonials from '@/components/sections/testimonials/Testimonials.jsx';
import Contact from '@/components/sections/contact/Contact.jsx';
import Footer from '@/components/layout/footer/Footer.jsx';
import ScrollUp from '@/components/layout/scrollup/ScrollUp.jsx';
import { ThemeProvider } from '@/components/context/theme/Theme.jsx';
import { TranslationProvider } from '@/components/context/translation/Translation.jsx';

export default function App() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('data');
    };
  }, []);

  return (
    <>
      <ThemeProvider>
        <TranslationProvider>
          <Header />
          <main className='main'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </TranslationProvider>
      </ThemeProvider>
    </>
  );
};
