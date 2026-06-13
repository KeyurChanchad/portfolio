import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Code, ExternalLink, Github, Filter, Terminal, X, Play, Loader2, MonitorSmartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'frontend' | 'backend' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [emulatorState, setEmulatorState] = useState<'idle' | 'installing' | 'running' | 'done'>('idle');
  const [emulatorLogs, setEmulatorLogs] = useState<string[]>([]);

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'all' || p.category === filter
  );

  const startEmulator = (project: Project) => {
    setSelectedProject(project);
    setEmulatorState('installing');
    setEmulatorLogs([
      `$ cd workspace/${project.title.toLowerCase().replace(/\s+/g, '-')}`,
      `$ npm install --silent`,
      `[deps] Fetching dependencies from package.json...`,
      `[deps] Resolving 12 packages...`,
      `[deps] Completed peer-dependency validation checks.`
    ]);

    setTimeout(() => {
      setEmulatorLogs((prev) => [
        ...prev,
        `[deps] Resolved in 1.4s. Added 342 physical packages.`,
        `$ npm run dev`,
        `[vite] Ingesting environment schema variables...`,
        `[vite] Optimizing bundler artifacts...`,
      ]);
      setEmulatorState('running');
    }, 1200);

    setTimeout(() => {
      setEmulatorLogs((prev) => [
        ...prev,
        `[vite] ✔ Server running on http://localhost:3000`,
        `[db] Instantiating schema connector parameters...`,
        `[db] Hydrated local persistence cache. Status: ACTIVE`
      ]);
      setEmulatorState('done');
    }, 2500);
  };

  const closeEmulator = () => {
    setSelectedProject(null);
    setEmulatorState('idle');
    setEmulatorLogs([]);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-[#0a0a0a] transition-colors relative border-b dark:border-[#262626]">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold mb-3">
            <Code size={12} />
            <span>Project Showcases</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Selected Repositories & Creations
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 mt-3 text-base font-light">
            Curated list of production applications. Click the "Sandbox Run" button to interactively launch and test that project inside our fully simulated local workspace!
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1">
            <Filter size={12} /> Sort:
          </span>
          {(['all', 'fullstack', 'frontend', 'backend', 'mobile'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? 'accent-gradient text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-[#121212]/80 text-slate-600 dark:text-neutral-300 border border-slate-200/50 dark:border-[#262626] hover:bg-slate-50 dark:hover:bg-neutral-900'
              }`}
            >
              {cat === 'all' ? 'All projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group bg-white dark:bg-[#121212]/40 border border-slate-105 dark:border-[#262626]/80 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-neutral-700 shadow-2xs hover:shadow-md transition-all flex flex-col h-[380px]"
            >
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Category badging */}
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="text-[10px] font-medium text-slate-400 dark:text-neutral-500 font-mono">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="font-sans font-bold text-lg text-slate-800 dark:text-white leading-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed line-clamp-3 font-light">
                    {project.description}
                  </p>

                  {/* Render Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-300 font-mono font-medium border dark:border-[#262626]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom actions */}
                <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-100 dark:border-[#262626]/60 font-sans">
                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 hover:bg-slate-100 dark:bg-[#121212] dark:hover:bg-neutral-900 rounded-lg text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  </div>

                  <button
                    onClick={() => startEmulator(project)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-xl border border-blue-200/50 dark:border-blue-500/30 transition-colors cursor-pointer"
                  >
                    <Terminal size={14} />
                    <span>Launch Sandbox</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emulator Modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div
            id="emulator-modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/75 backdrop-blur-xs"
          >
            <motion.div
              id="emulator-modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl w-full max-w-4xl h-[520px] overflow-hidden flex flex-col font-mono text-xs text-slate-300"
            >
              {/* Header Title bar */}
              <div className="bg-[#0a0a0a] px-4 h-11 border-b border-[#262626] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[11px] text-slate-500 font-sans ml-2">Workspace Sandbox Emulator</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] text-slate-500 select-none mr-2">{selectedProject.title}</span>
                  <button
                    onClick={closeEmulator}
                    className="p-1 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Console logs body */}
              <div className="flex-1 overflow-y-auto p-5 bg-[#0a0a0a]/80 space-y-2.5 select-text text-slate-300 border-b border-[#262626]">
                {emulatorLogs.map((log, idx) => (
                  <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                    {log.startsWith('$') ? (
                      <span className="text-emerald-400">{log}</span>
                    ) : log.includes('✔') ? (
                      <span className="text-blue-400 font-semibold">{log}</span>
                    ) : log.startsWith('[deps]') ? (
                      <span className="text-slate-500">{log}</span>
                    ) : (
                      <span className="text-slate-300">{log}</span>
                    )}
                  </div>
                ))}

                {/* Processing Spinner */}
                {emulatorState === 'installing' && (
                  <div className="flex items-center space-x-2 text-slate-400 italic pt-1">
                    <Loader2 size={13} className="animate-spin text-blue-400" />
                    <span>Resolving dependency structures...</span>
                  </div>
                )}
                {emulatorState === 'running' && (
                  <div className="flex items-center space-x-2 text-slate-400 italic pt-1">
                    <Loader2 size={13} className="animate-spin text-purple-400" />
                    <span>Starting Vite local Hot development environment...</span>
                  </div>
                )}
              </div>

              {/* Live result simulation pane */}
              <div className="h-[210px] bg-[#121212] p-4 border-t border-[#262626] flex flex-col justify-between">
                {emulatorState !== 'done' ? (
                  <div className="flex-1 flex flex-col items-center justify-center space-y-2 text-slate-500 select-none">
                    <MonitorSmartphone size={24} className="animate-pulse animate-duration-1000" />
                    <span className="text-xs">Awaiting sandbox compilation workflow completion...</span>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col justify-between animate-fade-in text-slate-200">
                    <div className="space-y-2 bg-[#0a0a0a]/40 p-3 sm:p-4 rounded-xl border border-[#262626] relative">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-[#262626] pb-1.5 mb-1.5">
                        <span className="flex items-center gap-1.5 font-sans font-semibold text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          {selectedProject.title} Workspace Browser Preview
                        </span>
                        <span className="text-[10px] text-slate-500">PORT: 3000</span>
                      </div>
                      <p className="text-slate-300 text-xs font-sans font-medium line-clamp-2">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 font-sans">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
                        <span>Metrics:</span>
                        <span className="text-emerald-500 font-semibold">{selectedProject.metrics || 'Optimal'}</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
export default Projects;
