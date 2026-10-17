import React, { useState } from "react";
import {
  Smartphone,
  Layers,
  LayoutGrid,
  Radio,
  ShieldCheck,
  Cpu,
  Wrench,
  Search,
  Sparkles,
} from "lucide-react";
import { skillsData } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const iconMap: Record<string, React.ElementType> = {
    Smartphone,
    Layers,
    LayoutGrid,
    Radio,
    ShieldCheck,
    Cpu,
    Wrench,
  };

  const categories = ["All", ...skillsData.map((c) => c.title)];

  const filteredCategories = skillsData
    .filter((cat) => {
      if (selectedCategory !== "All" && cat.title !== selectedCategory) {
        return false;
      }
      return true;
    })
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      return {
        ...cat,
        skills: filteredSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50/50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Mobile & Android Tech Stack
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            A comprehensive overview of native Android toolsets, multiplatform
            Flutter frameworks, and resilient architectural patterns.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-600 dark:bg-emerald-400 text-white dark:text-slate-950 shadow-md shadow-emerald-500/20"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Compose, BLoC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Smartphone;
            return (
              <div
                key={idx}
                className="rounded-3xl p-6 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-lg"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {cat.title}
                      </h3>
                      {cat.description && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {cat.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Skills Pills List */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          skill.featured
                            ? "bg-emerald-50 dark:bg-slate-950 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 shadow-xs"
                            : "bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        {skill.featured && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                    Production Tested
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
