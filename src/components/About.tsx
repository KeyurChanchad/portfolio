import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { User, Shield, Compass, Zap, Flame, Terminal, Code2 } from 'lucide-react';

interface Archetype {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  focusMetrics: { name: string; score: number }[];
}

const ARCHETYPES: Archetype[] = [
  {
    id: 'architect',
    name: 'The Code Architect',
    icon: <Shield className="text-emerald-500" size={18} />,
    tagline: 'Prioritizes clean modular patterns, robust typescript structures, and optimal database layouts.',
    description: 'I view software as a city plan rather than single cottages. My systems feature deep loose-coupling, strict separation of concerns, and clean declarative interface files that grow gracefully over years, not weeks.',
    focusMetrics: [
      { name: 'Scalability / Modularity', score: 96 },
      { name: 'Data Schema Integrity', score: 92 },
      { name: 'API Security Protocols', score: 88 },
    ],
  },
  {
    id: 'pixel',
    name: 'The Pixel Perfectionist',
    icon: <Compass className="text-rose-500" size={18} />,
    tagline: 'Devoted to immaculate margin rhythms, responsive layouts, and user micro-transitions.',
    description: 'I believe the distance between a mediocre app and an exceptional one resides in 4px of padding. I build rich layouts with elegant, cohesive typography, utilizing micro-interaction layouts to direct user eyes exactly where they should belong.',
    focusMetrics: [
      { name: 'Layout Precision', score: 98 },
      { name: 'Dynamic Interactions', score: 95 },
      { name: 'Accessibility Standards', score: 90 },
    ],
  },
  {
    id: 'pragmatic',
    name: 'The Pragmatic Delivery Catalyst',
    icon: <Zap className="text-amber-500" size={18} />,
    tagline: 'Driven by high deployment cadence, lean MVPs, and business integration velocities.',
    description: 'I balance theoretical design elegance with shipping real features that customers love. I run robust lint tools, implement lightweight solutions first, and iterate rapidly based on actual user testing analytics.',
    focusMetrics: [
      { name: 'Deployment Cadence', score: 95 },
      { name: 'Problem Diagnostics', score: 94 },
      { name: 'Feature Weighting', score: 86 },
    ],
  },
];

export function About() {
  const [activeArch, setActiveArch] = useState(ARCHETYPES[0]);

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0a0a0a] border-y border-slate-100 dark:border-[#262626] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold mb-3">
            <User size={12} />
            <span>Profile Overview</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            About Me & Working Philosophy
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 mt-3 text-base">
            Who I am, what I prioritize during development, and the unique builder personalities I deploy during project lifecycles.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-sans font-bold text-xl text-slate-800 dark:text-slate-100">
              Passionate about turning design concepts into active production engines.
            </h3>
            <p className="text-slate-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-slate-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
              Over the last 3.5+ years (progressing to 4 years), I have successfully crafted a variety of production-grade systems, spanning enterprise railway platforms, IoT batch manufacturing controls, and cross-platform mobile services. I prioritize type safety with TypeScript, fast styled layouts with Tailwind CSS, and streamlined backend architectures.
            </p>

            {/* Quick stats board */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#121212]/50 border border-slate-100 dark:border-[#262626]">
                <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-blue-500 dark:text-blue-400">
                  3.5+
                </span>
                <span className="block text-[11px] font-semibold text-slate-500 dark:text-neutral-400 mt-1 uppercase tracking-wider">
                  Years Exp
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#121212]/50 border border-slate-100 dark:border-[#262626]">
                <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-purple-500 dark:text-purple-400">
                  20+
                </span>
                <span className="block text-[11px] font-semibold text-slate-500 dark:text-neutral-400 mt-1 uppercase tracking-wider">
                  Repositories
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#121212]/50 border border-slate-100 dark:border-[#262626]">
                <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-blue-400 dark:text-blue-400">
                  100%
                </span>
                <span className="block text-[11px] font-semibold text-slate-500 dark:text-neutral-400 mt-1 uppercase tracking-wider">
                  Delivery Rate
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Personality Analyzer */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-[#121212]/30 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-[#262626]/80 shadow-xs flex flex-col space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Builder Personality Analyzer
              </span>
              <h4 className="font-sans font-bold text-lg text-slate-800 dark:text-slate-100 mt-1">
                Select an engineering archetype to view focus levels:
              </h4>
            </div>

            {/* Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ARCHETYPES.map((arch) => (
                <button
                  key={arch.id}
                  onClick={() => setActiveArch(arch)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                    activeArch.id === arch.id
                      ? 'bg-white dark:bg-[#121212] text-slate-900 dark:text-white border-blue-500/50 dark:border-blue-500/70 shadow-sm'
                      : 'bg-transparent text-slate-500 dark:text-neutral-400 border-slate-200/60 dark:border-[#262626] hover:bg-white/50 dark:hover:bg-[#121212]/50'
                  }`}
                >
                  {arch.icon}
                  <span className="truncate">{arch.name.split(' ').slice(1).join(' ')}</span>
                </button>
              ))}
            </div>

            {/* Archetype details segment */}
            <div className="flex-1 p-5 rounded-xl bg-white dark:bg-[#121212]/80 border border-slate-100 dark:border-[#262626]/50 flex flex-col space-y-4">
              <div className="flex items-center space-x-2.5">
                <span className="p-1.5 rounded-lg bg-blue-100/10 dark:bg-blue-500/10">
                  {activeArch.icon}
                </span>
                <span className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200">
                  {activeArch.name}
                </span>
              </div>

              <p className="text-xs text-blue-500 dark:text-blue-400 font-medium italic">
                "{activeArch.tagline}"
              </p>

              <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                {activeArch.description}
              </p>

              {/* Focus Metrics chart representation */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-wider block">
                  Skill Focus Allocations
                </span>

                {activeArch.focusMetrics.map((met) => (
                  <div key={met.name} className="space-y-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-600 dark:text-neutral-300 font-medium">{met.name}</span>
                      <span className="text-slate-705 dark:text-slate-200 font-bold">{met.score}%</span>
                    </div>
                    {/* Visual Bar */}
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-neutral-805 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${met.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
