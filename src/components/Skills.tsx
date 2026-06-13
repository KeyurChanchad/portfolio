import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data';
import { Sliders, Check, Code2, Database, Library } from 'lucide-react';

interface TechStory {
  name: string;
  category: string;
  experience: string;
  whyIUseIt: string;
}

const TECH_STORIES: Record<string, TechStory> = {
  'React / Next.js': {
    name: 'React / Next.js',
    category: 'frontend',
    experience: '3+ years of building full-scale dashboards and SaaS web clients.',
    whyIUseIt: 'The declarative programming model, component encapsulation, and vibrant community utilities make it the perfect framework to deliver scalable, complex layouts with rich micro-interactions.'
  },
  'TypeScript': {
    name: 'TypeScript',
    category: 'frontend',
    experience: 'Used on all enterprise-scale commercial modules.',
    whyIUseIt: 'Type safety is not a luxury, it is an absolute blueprint for engineering reliability. Catching static syntax anomalies before committing builds guarantees smooth deployments and simple onboarding.'
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    category: 'frontend',
    experience: 'Integrated across 18+ different websites and modules.',
    whyIUseIt: 'Sprints are fast; custom CSS files block agility. Utility composition speeds up styling by 10x, preserving perfect pixel responsiveness and custom configurations within standard structural guidelines.'
  },
  'Node.js / Express': {
    name: 'Node.js / Express',
    category: 'backend',
    experience: 'Formulated robust API backends, authorization systems, and file ingress streams.',
    whyIUseIt: 'A single, unified backend ecosystem powered entirely by JavaScript reduces developer context-switching costs, allowing rapid model deployment and high efficiency server runtimes.'
  },
  'RESTful API Architecture': {
    name: 'RESTful API Architecture',
    category: 'backend',
    experience: 'Crafted production ready routes with controllers, rate limit controllers, and request-body schemas.',
    whyIUseIt: 'Great APIs act as invisible contracts. Strictly modeling routing hierarchies, standardizing error formats, and implementing route guards is essential to system dependability.'
  }
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedTechStory, setSelectedTechStory] = useState<TechStory | null>(TECH_STORIES['React / Next.js']);

  const handleTechClick = (techName: string) => {
    if (TECH_STORIES[techName]) {
      setSelectedTechStory(TECH_STORIES[techName]);
    } else {
      setSelectedTechStory({
        name: techName,
        category: 'general',
        experience: 'Extensive hands-on training and utilization in various custom projects.',
        whyIUseIt: `Part of my standard collection of tools designed to ensure versatile full-stack capabilities, resolving production performance blockages efficiently.`
      });
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-[#0a0a0a] border-b border-slate-100 dark:border-[#262626] transition-colors relative">
      {/* Background shape */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold mb-3">
            <Sliders size={12} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Skills Inventory & Experience Depth
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 mt-3 text-base font-light">
            Categorized overview of my technical stack. Click on any individual skill keyword to view a personalized story detailing my experience.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block: General Categories & Bars */}
          <div className="lg:col-span-7 space-y-8">
            {/* Category tabs */}
            <div className="flex bg-slate-200/50 dark:bg-[#121212] rounded-xl p-1 gap-1 border dark:border-[#262626]">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex-1 text-center py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === idx
                      ? 'bg-white dark:bg-[#262626] text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {idx === 0 ? 'Frontend' : idx === 1 ? 'Backend' : 'Soft & Core'}
                </button>
              ))}
            </div>

            {/* Selected category skill lines */}
            <div className="bg-white dark:bg-[#121212]/40 border border-slate-100 dark:border-[#262626]/80 p-6 rounded-2xl shadow-xs space-y-5">
              <h3 className="font-sans font-bold text-base text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-100 dark:border-[#262626]/50 flex items-center space-x-2">
                {activeCategory === 0 ? <Code2 size={16} className="text-blue-500" /> : activeCategory === 1 ? <Database size={16} className="text-purple-555" /> : <Library size={16} className="text-blue-400" />}
                <span>{SKILL_CATEGORIES[activeCategory].name}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
                  <button
                    key={skill.name}
                    id={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleTechClick(skill.name)}
                    className="group space-y-1.5 text-left w-full hover:bg-slate-50 dark:hover:bg-neutral-900/30 p-2 -m-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-bold text-slate-400 dark:text-neutral-500 group-hover:text-slate-900 dark:group-hover:text-slate-300">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Deep Technical Story Commentary */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#0a0a0a] text-neutral-200 border border-slate-200 dark:border-[#262626] p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col space-y-6 relative overflow-hidden h-full">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-500 dark:text-blue-400 uppercase block mb-1 font-mono">
                  Stack Insights
                </span>
                <h3 className="font-sans font-bold text-lg text-slate-800 dark:text-white">
                  Developer Stack Chronicles
                </h3>
              </div>

              {selectedTechStory ? (
                <div className="flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold font-mono">
                      <Check size={12} className="text-blue-500 dark:text-blue-400" />
                      <span>{selectedTechStory.name}</span>
                    </div>

                    {/* Exp scope */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-wider block">
                        Experience Scale
                      </span>
                      <p className="text-sm text-slate-700 dark:text-slate-200 font-medium">
                        {selectedTechStory.experience}
                      </p>
                    </div>

                    {/* Philosophy */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-wider block">
                        Why it resides in my core stack
                      </span>
                      <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed font-mono">
                        {selectedTechStory.whyIUseIt}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-[#262626] text-[11px] text-slate-400 dark:text-neutral-500 flex items-center justify-between font-sans">
                    <span>Developer Creed: Verified Profile</span>
                    <span className="font-mono">keyur_chanchad.sh</span>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center text-center py-12 text-sm text-blue-400 italic">
                  Select any technical skill bar to read the integration chronicle.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
