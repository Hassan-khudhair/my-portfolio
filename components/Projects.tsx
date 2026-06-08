"use client";

import React, { useState } from 'react';
import { projects, personalInfo } from '../data/portfolioData';
import Image from 'next/image';

export default function Projects() {
  const [activeImage, setActiveImage] = useState<Record<number, number>>({});

  const nextImage = (id: number, total: number) =>
    setActiveImage((p) => ({ ...p, [id]: ((p[id] || 0) + 1) % total }));

  const prevImage = (id: number, total: number) =>
    setActiveImage((p) => ({ ...p, [id]: ((p[id] || 0) - 1 + total) % total }));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">
            What I've built
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            A selection of projects that showcase my skills in building real-world web applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => {
            const currentIdx = activeImage[project.id] || 0;
            return (
              <div
                key={project.id}
                className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Image carousel */}
                <div className="relative h-56 bg-gray-100 dark:bg-zinc-800 overflow-hidden">
                  {project.images.map((src, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        i === currentIdx ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${project.name} screenshot ${i + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Carousel controls */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(project.id, project.images.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur text-gray-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-white dark:hover:bg-zinc-800"
                        aria-label="Previous image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => nextImage(project.id, project.images.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur text-gray-800 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-white dark:hover:bg-zinc-800"
                        aria-label="Next image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {project.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImage((p) => ({ ...p, [project.id]: i }))}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              i === currentIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Project number badge */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-white/90 dark:bg-zinc-900/90 backdrop-blur flex items-center justify-center text-xs font-bold text-purple-600 dark:text-purple-400 shadow-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 mb-1.5">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-1">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.demoLink ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 hover:-translate-y-0.5 transition-all duration-300`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More projects CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm">
            These are just a few highlights — there's more on GitHub.
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold text-sm hover:bg-purple-600 dark:hover:bg-purple-400 dark:hover:text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
