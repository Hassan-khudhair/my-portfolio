"use client";

import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await new Promise((r) => setTimeout(r, 900));
      const link = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = link;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3500);
    }
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm';

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50/80 dark:bg-zinc-950/60 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-500/5 dark:bg-purple-500/8 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">

          {/* ── Left: info ─────────────────────────────── */}
          <div className="md:col-span-2 space-y-6 animate-fade-in-up animation-delay-100">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contact Information</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just a friendly chat.
              </p>
            </div>

            <div className="space-y-3">
              <ContactCard
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                iconBg="from-purple-500 to-pink-500"
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
              {personalInfo.github && (
                <ContactCard
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  }
                  iconBg="from-gray-700 to-gray-900"
                  label="GitHub"
                  value="View my profile"
                  href={personalInfo.github}
                  external
                />
              )}
              {personalInfo.linkedin && (
                <ContactCard
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  }
                  iconBg="from-blue-600 to-blue-700"
                  label="LinkedIn"
                  value="Connect with me"
                  href={personalInfo.linkedin}
                  external
                />
              )}
            </div>

            {/* Availability pill */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
              <div>
                <p className="text-sm font-semibold text-green-800 dark:text-green-400">Currently available</p>
                <p className="text-xs text-green-600 dark:text-green-500">Open to freelance & full-time roles</p>
              </div>
            </div>
          </div>

          {/* ── Right: form ────────────────────────────── */}
          <div className="md:col-span-3 animate-fade-in-up animation-delay-200">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm p-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={form.name} onChange={handleChange}
                      required placeholder="John Doe"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={form.email} onChange={handleChange}
                      required placeholder="john@example.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text" id="subject" name="subject"
                    value={form.subject} onChange={handleChange}
                    required placeholder="Project inquiry"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message" name="message"
                    value={form.message} onChange={handleChange}
                    required rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 ${
                    status === 'success'
                      ? 'bg-green-500 text-white'
                      : status === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none'
                  }`}
                >
                  {status === 'sending' && (
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  {status === 'sending' ? 'Sending…' : status === 'success' ? '✓ Message Sent!' : status === 'error' ? '✕ Error – Try Again' : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon, iconBg, label, value, href, external,
}: {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300 group"
    >
      <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${iconBg} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{label}</p>
        <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{value}</p>
      </div>
    </a>
  );
}
