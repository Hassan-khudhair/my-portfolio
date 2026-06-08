"use client";

import React from 'react';
import { personalInfo } from '../data/portfolioData';
import Image from 'next/image';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/20 dark:bg-purple-600/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-500/20 dark:bg-pink-600/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/15 dark:bg-cyan-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(147,51,234,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147,51,234,.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* ── Text ─────────────────────────────────────────── */}
        <div className="space-y-7 text-center md:text-left order-2 md:order-1">

          {/* Badge */}
          <div className="animate-fade-in-down inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 text-sm font-medium mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Available for hire
          </div>

          {/* Heading */}
          <div className="animate-fade-in-up">
            <p className="text-base font-semibold text-gray-500 dark:text-gray-400 mb-2 tracking-wide uppercase">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-3">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300">
              {personalInfo.title}
            </h2>
          </div>

          {/* Description */}
          <p className="animate-fade-in-up animation-delay-200 text-gray-500 dark:text-gray-400 leading-relaxed text-base max-w-md mx-auto md:mx-0">
            {personalInfo.description}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-3 justify-center md:justify-start">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-outline">
              Let's Talk
            </button>
          </div>

          {/* Social links */}
          <div className="animate-fade-in-up animation-delay-600 flex items-center gap-3 justify-center md:justify-start">
            <span className="text-sm text-gray-400 dark:text-gray-500">Find me on</span>
            <div className="flex gap-2">
              {personalInfo.github && (
                <SocialLink href={personalInfo.github} label="GitHub">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </SocialLink>
              )}
              {personalInfo.linkedin && (
                <SocialLink href={personalInfo.linkedin} label="LinkedIn">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </SocialLink>
              )}
              {personalInfo.twitter && (
                <SocialLink href={personalInfo.twitter} label="Twitter">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </SocialLink>
              )}
            </div>
          </div>
        </div>

        {/* ── Image ────────────────────────────────────────── */}
        <div className="order-1 md:order-2 flex justify-center animate-scale-in animation-delay-200">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-linear-to-br from-purple-600 via-pink-600 to-cyan-600 opacity-20 blur-2xl animate-pulse" />

            {/* Rotating ring */}
            <div className="absolute -inset-1.5 rounded-full bg-linear-to-br from-purple-600 via-pink-600 to-cyan-600 opacity-70 animate-spin [animation-duration:8s]" />

            {/* Image */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl z-10">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Floating badge – top right */}
            <div className="absolute -top-2 -right-2 z-20 w-14 h-14 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-float">
              <span className="text-2xl">👨‍💻</span>
            </div>

            {/* Floating badge – bottom left */}
            <div className="absolute -bottom-2 -left-2 z-20 bg-white dark:bg-zinc-800 rounded-2xl px-3 py-2 shadow-xl border border-gray-100 dark:border-zinc-700 animate-float animation-delay-1000">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('skills')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-600 hover:text-purple-500 dark:hover:text-purple-400 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-current animate-scroll" />
        </div>
      </button>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  );
}
