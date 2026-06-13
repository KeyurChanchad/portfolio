import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { FileCode, Sparkles, Github, Linkedin, Mail, CheckCircle, Download, Braces, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TabFile {
  name: string;
  icon: React.ReactNode;
  lang: string;
  content: string;
}

const TAB_FILES: TabFile[] = [
  {
    name: 'developer.ts',
    icon: <FileCode size={14} className="text-blue-400" />,
    lang: 'typescript',
    content: `interface SoftwareEngineer {
  name: string;
  role: string;
  coreStack: string[];
  philosophy: string;
}

const keyur: SoftwareEngineer = {
  name: "Keyur Chanchad",
  role: "Full-Stack Developer",
  coreStack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
  philosophy: "Clean architecture + intuitive user interface"
};

export default keyur;`
  },
  {
    name: 'skills.json',
    icon: <Braces size={14} className="text-yellow-500" />,
    lang: 'json',
    content: `{
  "frontend": {
    "frameworks": ["React", "Next.js"],
    "styling": ["Tailwind CSS", "SASS", "Responsive layouts"]
  },
  "backend": {
    "runtime": "Node.js",
    "frameworks": ["Express", "NestJS"],
    "databases": ["PostgreSQL", "NoSQL / MongoDB"]
  }
}`
  },
  {
    name: 'workflow.sh',
    icon: <Terminal size={14} className="text-green-400" />,
    lang: 'bash',
    content: `#!/bin/bash
while true; do
  git_pull_latest
  write_clean_code
  implement_beautiful_ux
  run_linter_and_compile
  push_to_production && celebrate_success
  drink_coffee && rest_repeat
done`
  }
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-[#0a0a0a]">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/15 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex self-start items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 border border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 shadow-inner">
              <Sparkles size={12} className="animate-pulse text-blue-500 dark:text-blue-400" />
              <span>Available for Full-Time Roles & Freelance</span>
            </div>

            {/* Main Greeting */}
            <h1 className="font-sans font-bold text-4xl sm:text-5xl xl:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Hi, I am{' '}
              <span className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold">
                Keyur Chanchad
              </span>
              <br />
              <span className="text-slate-700/90 dark:text-neutral-405 text-3xl sm:text-4xl xl:text-5xl font-semibold mt-1 inline-block">
                Full-Stack Engineer
              </span>
            </h1>

            {/* Description Tagline */}
            <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-neutral-400 max-w-xl leading-relaxed font-light">
              I specialize in craft-focused engineering: building highly-responsive frontend architectures
              with <span className="font-semibold text-slate-940 dark:text-white">React & TypeScript</span>,
              backed by secure and optimal NodeJS API servers.
            </p>

            {/* Social Buttons & Contact Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl accent-gradient text-white font-semibold text-sm hover:opacity-95 transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              >
                View Selected Work
              </a>

              <a
                href="#guestbook"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#guestbook')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 dark:border-[#262626] bg-white dark:bg-[#121212]/50 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-neutral-900 transition-all cursor-pointer"
              >
                Let's Connect
              </a>
            </div>

            {/* Network Connections */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Network:
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all shadow-2xs hover:scale-105"
                title="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-705 dark:text-slate-300 transition-all shadow-2xs hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all text-xs font-medium cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle size={14} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* IDE Emulator Panel / Code Illustration */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md h-[360px] bg-slate-900 dark:bg-[#121212] border border-slate-200 dark:border-[#262626] rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs text-slate-300">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 h-10 bg-slate-950 dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-[#262626] select-none shrink-0">
                {/* Dots */}
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
                {/* Window title */}
                <span className="text-slate-500 text-[11px] font-sans">dev - workspace - Keyur</span>
                <span className="w-10"></span>
              </div>

              {/* IDE Tabs */}
              <div className="flex bg-slate-950/50 dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-[#262626] overflow-x-auto shrink-0 scrollbar-none">
                {TAB_FILES.map((file, idx) => (
                  <button
                    key={file.name}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center space-x-1.5 px-4 py-2.5 border-r border-[#262626] transition-colors cursor-pointer select-none ${
                      activeTab === idx
                        ? 'bg-slate-905 dark:bg-[#121212] text-slate-100 dark:text-white border-t-2 border-blue-500 font-semibold'
                        : 'text-slate-500 hover:text-slate-300 dark:text-neutral-400 dark:hover:text-white bg-slate-950/20'
                    }`}
                  >
                    {file.icon}
                    <span>{file.name}</span>
                  </button>
                ))}
              </div>

              {/* Code display Container */}
              <div className="flex-1 p-4 bg-slate-900 overflow-y-auto leading-relaxed select-text font-mono relative">
                <span className="absolute bottom-2 right-3 text-[10px] text-slate-600 pointer-events-none select-none">
                  UTF-8 • {TAB_FILES[activeTab].lang}
                </span>
                <pre id={`code-block-${TAB_FILES[activeTab].name}`} className="whitespace-pre-wrap overflow-x-auto text-left text-indigo-200/90 [tab-size:2]">
                  <code>
                    {TAB_FILES[activeTab].content}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
