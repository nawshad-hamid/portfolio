import React, { useState } from "react";
import {
  Smartphone,
  Monitor,
  Tv,
  ExternalLink,
  Layers,
  CheckCircle2,
  Apple,
} from "lucide-react";
import { projectsData } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const filterTabs = [
    { label: "All Projects", value: "All" },
    { label: "Android Native", value: "Android" },
    { label: "Flutter & Cross-Platform", value: "Flutter" },
    { label: "Android TV", value: "Android TV" },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === "All") return true;
    if (filter === "Android") return proj.platform === "Android";
    if (filter === "Flutter")
      return proj.platform.includes("Windows") || proj.platform.includes("iOS");
    if (filter === "Android TV") return proj.platform === "Android TV";
    return true;
  });

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Android":
        return (
          <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        );
      case "Windows Desktop":
        return <Monitor className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case "Android TV":
        return <Tv className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case "Android & iOS":
        return (
          <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        );
      default:
        return (
          <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        );
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-slate-100/40 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Production Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Production Applications
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Real-world applications engineered and maintained across Google
            Play, Microsoft Store, and Apple App Store.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.value
                  ? "bg-emerald-600 dark:bg-emerald-400 text-white dark:text-slate-950 shadow-md shadow-emerald-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-6 bg-white dark:bg-slate-900/85 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-md dark:shadow-xl hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                {/* Platform Badge & Title Header */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    {getPlatformIcon(project.platform)}
                    <span className="text-slate-800 dark:text-slate-200">
                      {project.platform}
                    </span>
                  </div>

                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/20">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* WHAT I WORKED ON Checklist */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    What I Worked On:
                  </span>
                  <ul className="space-y-2">
                    {project.whatIWorkedOn.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-snug"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-2">
                {/* Google Play */}
                {project.googlePlay && (
                  <a
                    href={project.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 transition-colors shadow-sm"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Google Play</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>
                )}

                {/* Microsoft Store */}
                {project.microsoftStore && (
                  <a
                    href={project.microsoftStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-sky-50 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-500/30 transition-colors shadow-sm"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Microsoft Store</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>
                )}

                {/* iOS App Store */}
                {project.appStore && (
                  <a
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/30 transition-colors shadow-sm"
                  >
                    <Apple className="w-3.5 h-3.5" />
                    <span>App Store</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>
                )}

                {/* Website */}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 transition-colors"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
