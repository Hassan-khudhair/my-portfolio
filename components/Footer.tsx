"use client";

import React from 'react';
import { personalInfo } from '../data/portfolioData';

const NAV_LINKS = ['Home', 'Skills', 'Projects', 'Contact'];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-gray-950 dark:bg-black text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-purple-500/30">
                &lt;/&gt;
              </div>
              <span className="text-lg font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {personalInfo.title} — crafting fast, accessible, and beautiful digital experiences.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 pt-1">
              {personalInfo.github && (
                <FooterSocialLink href={personalInfo.github} label="GitHub">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </FooterSocialLink>
              )}
              {personalInfo.linkedin && (
                <FooterSocialLink href={personalInfo.linkedin} label="LinkedIn">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </FooterSocialLink>
              )}
              {personalInfo.twitter && (
                <FooterSocialLink href={personalInfo.twitter} label="Twitter">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </FooterSocialLink>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Available worldwide · Remote
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-xs text-green-400 bg-green-950/50 border border-green-900 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {year} {personalInfo.name}. Built with Next.js & Tailwind CSS.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors duration-200 group"
          >
            Back to top
            <span className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-purple-500 group-hover:text-purple-400 transition-all duration-200">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterSocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{children}</svg>
    </a>
  );
}
