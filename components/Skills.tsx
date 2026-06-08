"use client";

import React from 'react';
import { skills } from '../data/portfolioData';
import Image from 'next/image';

export default function Skills() {
  const tripled = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gray-50/80 dark:bg-zinc-950/50 -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Modern tools and frameworks I use to build fast, accessible, and beautiful web experiences.
          </p>
        </div>

        {/* Scrolling track */}
        <div className="skill-scroll-mask skill-scroll-container overflow-hidden py-4">
          <div className="flex animate-scroll-infinite">
            {tripled.map((skill, i) => (
              <SkillCard key={`${skill.name}-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Second row — reverse direction */}
        <div className="skill-scroll-mask skill-scroll-container overflow-hidden py-4 mt-2">
          <div className="flex animate-scroll-infinite [animation-direction:reverse] [animation-duration:65s]">
            {[...tripled].reverse().map((skill, i) => (
              <SkillCard key={`rev-${skill.name}-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 dark:text-gray-600 mt-10">
          Hover to pause · Always learning and expanding my toolkit
        </p>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: { name: string; icon: string } }) {
  return (
    <div className="shrink-0 mx-3 group cursor-default">
      <div className="w-28 h-28 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 group-hover:border-purple-400 dark:group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/15 group-hover:-translate-y-1">
        <div className="w-12 h-12 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={skill.icon}
            alt={skill.name}
            width={48}
            height={48}
            className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 text-center px-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
          {skill.name}
        </span>
      </div>
    </div>
  );
}
