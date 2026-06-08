"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'skills',   label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact' },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection,    setActiveSection]    = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const current = NAV_ITEMS.map(({ id }) => id).find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-200/60 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="group flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
              &lt;/&gt;
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Hassan
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === id
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeSection === id && (
                  <span className="absolute inset-0 rounded-lg bg-purple-100 dark:bg-purple-500/15" />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-gray-300 dark:bg-gray-700 mx-2" />

            {/* Theme toggle */}
            <ThemeToggle theme={theme} toggle={toggleTheme} />
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/5">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeSection === id
                  ? 'bg-purple-100 dark:bg-purple-500/15 text-purple-700 dark:text-purple-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function ThemeToggle({ theme, toggle }: { theme: string; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
