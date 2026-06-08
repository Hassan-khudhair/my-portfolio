"use client";

import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
