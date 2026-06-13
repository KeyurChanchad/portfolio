import { useState } from 'react';
import { EXPERIENCES } from '../data';
import { Briefcase, Calendar, Building2, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0a0a0a] border-y border-slate-100 dark:border-[#262626] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold mb-3">
            <Briefcase size={12} />
            <span>Professional Career Pathway</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Work Experience Timeline
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 mt-3 text-base font-light">
            Detailed breakdown of my developer roles, milestone deliveries, and technical toolings integrated during corporate tenures.
          </p>
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-[#262626] space-y-12 py-2">
          {/* Loop over experiences */}
          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative group">
                {/* Visual Timeline Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 bg-white dark:bg-[#0a0a0a] flex items-center justify-center transition-all ${
                    isExpanded
                      ? 'border-blue-500 dark:border-blue-400 scale-110 shadow-sm shadow-blue-500/20'
                      : 'border-slate-200 dark:border-[#262626] group-hover:border-slate-400'
                  }`}
                >
                  <Clock size={10} className={`transition-colors ${isExpanded ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400'}`} />
                </div>

                {/* Main Experience box */}
                <div className="bg-slate-50 dark:bg-[#121212]/30 border border-slate-200/65 dark:border-[#262626] rounded-2xl p-5 sm:p-6 transition-all shadow-2xs hover:shadow-xs">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="space-y-1">
                      <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-neutral-400 font-medium">
                        <span className="inline-flex items-center gap-1">
                          <Building2 size={13} />
                          {exp.company}
                        </span>
                        <span className="text-slate-300 dark:text-neutral-700">•</span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(exp.id)}
                      id={`exp-btn-${exp.id}`}
                      className="inline-flex max-w-fit items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200/60 dark:border-[#262626] bg-white dark:bg-[#121212]/80 text-slate-600 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-50 cursor-pointer shadow-2xs transition-colors self-start sm:self-center"
                    >
                      <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                      {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    </button>
                  </div>

                  {/* Expandable details container */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`exp-details-${exp.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 border-t border-slate-200/50 dark:border-[#262626]/60 mt-4 space-y-4">
                          {/* Rich list details */}
                          <ul className="space-y-2.5 list-disc pl-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                            {exp.description.map((bullet, idxB) => (
                              <li key={idxB} className="text-slate-600 dark:text-neutral-400">
                                {bullet}
                              </li>
                            ))}
                          </ul>

                          {/* Render skills keywords used */}
                          <div className="pt-3">
                            <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest block mb-2 font-mono">
                              Technologies Engaged
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 py-1 rounded-md text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 dark:border dark:border-blue-500/20"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
