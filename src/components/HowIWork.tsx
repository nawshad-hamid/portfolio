import React from "react";
import {
  Compass,
  FileCheck,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { principlesData } from "../data/portfolioData";

export const HowIWork: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    FileCheck,
    CheckCircle2,
    ShieldAlert,
    Sparkles,
  };

  const steps = [
    { num: "01", label: "Analyze Architecture & Lifecycle" },
    { num: "02", label: "Structured Task Planning & Edge-Cases" },
    { num: "03", label: "Disciplined Implementation" },
    { num: "04", label: "Rigorous Human Verification" },
    { num: "05", label: "Protected Zero-Regression Production" },
  ];

  return (
    <section
      id="how-i-work"
      className="py-20 bg-white dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 android-grid-pattern opacity-20 dark:opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Work & Build Resilient Systems
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            A disciplined, safety-first methodology refined over 11–12 years in
            production mobile engineering.
          </p>
        </div>

        {/* 5 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principlesData.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="relative rounded-3xl p-6 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 group shadow-sm dark:shadow-lg"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-all shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-emerald-500/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-1 mb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* Principle 6 Summary Card */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-br from-emerald-100/70 via-slate-50 to-indigo-100/60 dark:from-emerald-950/60 dark:via-slate-900 dark:to-indigo-950/50 border border-emerald-300 dark:border-emerald-500/30 flex flex-col justify-between shadow-md dark:shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                  The AI-Assisted Advantage
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Speed of Modern AI, Rigor of a Senior Engineer
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Claude acts as a high-velocity sounding board for regression
                mapping, edge-case generation, and test scaffolding—while
                architectural accountability and final verification always stay
                in my hands.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 mt-4 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
              <span>Zero Blind Edits</span>
              <span>100% Verified Production</span>
            </div>
          </div>
        </div>

        {/* Workflow Lifecycle Pipeline Bar */}
        <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
              Engineering Delivery Lifecycle
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between text-center group hover:border-emerald-500/40 transition-colors shadow-xs"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md">
                    {step.num}
                  </span>
                  {idx < 4 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 hidden sm:block -mr-1" />
                  )}
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
