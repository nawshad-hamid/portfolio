import React from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { educationData } from "../data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-900 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Computer Science Foundation
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Formal undergraduate engineering curriculum in computer systems,
            algorithms, and software development.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-8 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {educationData.degree}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    {educationData.institution}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-500/20">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Graduated {educationData.passingYear}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{educationData.location}</span>
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Curriculum & Foundations:
              </h4>
              <ul className="space-y-2">
                {educationData.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
