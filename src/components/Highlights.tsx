import React from "react";
import { Briefcase, Layers, Laptop, Smartphone, Sparkles } from "lucide-react";

export const Highlights: React.FC = () => {
  const cards = [
    {
      stat: "11–12",
      unit: "Years",
      title: "Professional Experience",
      subtitle: "TopOfStack Software (2014 – Present)",
      description:
        "Over a decade delivering native Android and production mobile apps with deep backward compatibility and reliability.",
      icon: Briefcase,
      color: "emerald",
      gradient:
        "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/20 dark:to-teal-500/5",
      border: "border-emerald-300 dark:border-emerald-500/30",
      textAccent: "text-emerald-600 dark:text-emerald-400",
      pillBg:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300",
    },
    {
      stat: "1.5",
      unit: "Years",
      title: "Flutter Development",
      subtitle: "Multiplatform Dart & BLoC",
      description:
        "Cross-platform mobile and desktop application development across Android, iOS, and Windows desktop.",
      icon: Layers,
      color: "sky",
      gradient:
        "from-sky-500/10 to-blue-500/5 dark:from-sky-500/20 dark:to-blue-500/5",
      border: "border-sky-300 dark:border-sky-500/30",
      textAccent: "text-sky-600 dark:text-sky-400",
      pillBg: "bg-sky-100 text-sky-800 dark:bg-sky-500/10 dark:text-sky-300",
    },
    {
      stat: "4",
      unit: "Platforms",
      title: "Platforms Engineered",
      subtitle: "Android, iOS, Windows, Android TV",
      description:
        "Architected systems running from handheld phones and tablets to desktop PCs and 24/7 unattended TV digital signage.",
      icon: Laptop,
      color: "indigo",
      gradient:
        "from-indigo-500/10 to-purple-500/5 dark:from-indigo-500/20 dark:to-purple-500/5",
      border: "border-indigo-300 dark:border-indigo-500/30",
      textAccent: "text-indigo-600 dark:text-indigo-400",
      pillBg:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/10 dark:text-indigo-300",
    },
    {
      stat: "5",
      unit: "Projects",
      title: "Selected Production Apps",
      subtitle: "Core Production Applications",
      description:
        "Flagship deployments spanning Islamic lifestyle, IoT vehicle tracking, European driver training, and 24h signage.",
      icon: Smartphone,
      color: "amber",
      gradient:
        "from-amber-500/10 to-orange-500/5 dark:from-amber-500/20 dark:to-orange-500/5",
      border: "border-amber-300 dark:border-amber-500/30",
      textAccent: "text-amber-600 dark:text-amber-400",
      pillBg:
        "bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-300",
    },
  ];

  return (
    <section
      id="highlights"
      className="py-14 bg-slate-100/70 dark:bg-slate-950/90 relative border-y border-slate-200 dark:border-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Tag */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key Engineering Metrics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Proven Senior Engineering Impact
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            11–12 years of hands-on production engineering, building scalable
            applications and maintaining stability across millions of device
            interactions.
          </p>
        </div>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-6 bg-gradient-to-br ${item.gradient} bg-white dark:bg-slate-900/80 border ${item.border} shadow-md dark:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
              >
                {/* Header with Icon and Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 ${item.textAccent}`}
                  >
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${item.pillBg}`}
                  >
                    {item.unit}
                  </span>
                </div>

                {/* Stat Display */}
                <div className="mb-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                      {item.stat}
                    </span>
                    <span className={`text-base font-bold ${item.textAccent}`}>
                      {item.unit}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800/60 mt-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
