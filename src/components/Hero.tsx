import React from "react";
import {
  ExternalLink,
  Linkedin,
  Github,
  Mail,
  Sparkles,
  Smartphone,
  Layers,
  Monitor,
  Tv,
  ArrowRight,
  ShieldCheck,
  FileText,
  Briefcase,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Bio } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden android-mesh-bg transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 android-grid-pattern opacity-30 dark:opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>
                Available for Senior Android & Mobile Engineering Roles
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400">
                  {Bio.name}
                </span>
              </h1>

              {/* Role Line */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-slate-900/90 border border-emerald-200 dark:border-slate-800 text-emerald-700 dark:text-emerald-400 shadow-sm">
                  Senior Android Developer
                </span>
                <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">
                  •
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-slate-900/90 border border-teal-200 dark:border-slate-800 text-teal-700 dark:text-teal-300 shadow-sm">
                  Senior Mobile Application Engineer
                </span>
                <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">
                  •
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-slate-900/90 border border-indigo-200 dark:border-slate-800 text-indigo-700 dark:text-indigo-300 shadow-sm">
                  AI-Assisted Software Engineer
                </span>
              </div>

              {/* Bold Headline */}
              <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 leading-snug pt-2">
                "{Bio.headline}"
              </p>
            </div>

            {/* Intro Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {Bio.intro}
            </p>

            {/* Platform Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-100/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                <Smartphone className="w-3.5 h-3.5" />
                Native Android (Kotlin & Compose)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-sky-100/70 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800/50">
                <Layers className="w-3.5 h-3.5" />
                Flutter (Android & iOS)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-indigo-100/70 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50">
                <Monitor className="w-3.5 h-3.5" />
                Windows Desktop
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-purple-100/70 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
                <Tv className="w-3.5 h-3.5" />
                Android TV (24/7 Signage)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Resume Link Button */}
              <a
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white dark:text-slate-950 bg-emerald-600 dark:bg-emerald-400 hover:bg-emerald-700 dark:hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-600/20 dark:shadow-emerald-500/25 active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 transition-all hover:border-emerald-500/40 active:scale-95 shadow-sm cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-800 transition-all shadow-sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Contact</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-1">
                {Bio.linkedin && (
                  <a
                    href={Bio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/40 transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {Bio.github && (
                  <a
                    href={Bio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Engineering Guarantee Pill */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>
                Clean Architecture • Zero-Regression Guarantee • Claude
                AI-Assisted Precision
              </span>
            </div>
          </div>

          {/* Right Column: Professional Portrait & Engineering Highlights */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Ambient Glow */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-indigo-500/30 blur-2xl opacity-70" />

              {/* Portrait Container Card */}
              <div className="relative rounded-[2.2rem] p-3.5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xl">
                {/* Photo Frame */}
                <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={Bio.image}
                    alt={Bio.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://lh3.googleusercontent.com/d/1fWvnyLPRQ5tKbu-IcRcI0yhr0PBdhBHH";
                    }}
                  />

                  {/* Gradient Overlay at Bottom of Photo */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="font-extrabold text-base">{Bio.name}</p>
                      <p className="text-xs text-emerald-400 font-mono">
                        Senior Android Developer • TopOfStack
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Experience Badge Top Left */}
                <div className="absolute -top-3 -left-3 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      11–12 Years
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      Experience
                    </p>
                  </div>
                </div>

                {/* Floating Kotlin Badge Bottom Right */}
                <div className="absolute -bottom-3 -right-3 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      Kotlin & Compose
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      Core Native Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
