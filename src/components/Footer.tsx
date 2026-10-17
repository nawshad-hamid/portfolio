import React from "react";
import { Smartphone, Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { Bio } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 relative text-slate-600 dark:text-slate-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 p-[1.5px]">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div>
              <p className="text-base font-extrabold text-slate-900 dark:text-white">
                Nawshad Hamid
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Senior Android Developer • Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Platform Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              Kotlin & Jetpack Compose
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              Flutter (iOS & Android)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              Windows Desktop
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              Android TV Signage
            </span>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            {Bio.linkedin && (
              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/30 transition-all shadow-xs"
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
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700 transition-all shadow-xs"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            <a
              href={`mailto:${Bio.email}`}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all shadow-xs"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/20 hover:bg-emerald-200 dark:hover:bg-emerald-500/20 transition-all ml-2"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 dark:text-slate-500">
          <p>© Nawshad Hamid. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript & Android Material 3 Aesthetics
          </p>
        </div>
      </div>
    </footer>
  );
};
