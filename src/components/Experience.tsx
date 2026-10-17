import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Clock,
} from "lucide-react";
import { experienceData } from "../data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-slate-50/50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Blur */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Over a decade of continuous engineering contributions, building and
            maintaining production apps at TopOfStack Software.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-3xl p-8 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl space-y-6"
            >
              {/* Header with Company & Role */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <Building2 className="w-5 h-5" />
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-base font-bold text-emerald-700 dark:text-emerald-400 pl-1">
                    {exp.role}
                  </p>
                </div>

                {/* Duration & Location Badges */}
                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-500/20">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Company Summary Description */}
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic bg-slate-50 dark:bg-slate-950/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/60">
                {exp.description}
              </p>

              {/* Responsibilities & Achievements */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Technical Responsibilities & Deliverables:
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/70 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
