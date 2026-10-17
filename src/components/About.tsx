import React from "react";
import {
  User,
  CheckCircle2,
  Smartphone,
  Tv,
  Radio,
  Cpu,
  MapPin,
  Calendar,
  Briefcase,
  Terminal,
  ShieldCheck,
  Zap,
  Award,
} from "lucide-react";
import { Bio } from "../data/portfolioData";

export const About: React.FC = () => {
  const capabilities = [
    {
      title: "Jetpack Compose & Native Android",
      description:
        "Fast, declarative UI development utilizing Single-Activity Architecture, Coroutines, Flow, and Material 3 design systems.",
      icon: Smartphone,
      color: "emerald",
      badge: "Native Core",
    },
    {
      title: "Multiplatform & 24/7 Android TV",
      description:
        "High-uptime production applications across Android TV (unattended digital signage), Flutter (iOS & Android), and Windows desktop.",
      icon: Tv,
      color: "purple",
      badge: "High Availability",
    },
    {
      title: "Real-Time WebRTC & Media Engines",
      description:
        "P2P voice calling, Socket.IO real-time channels, foreground audio download services, and rock-solid offline caching.",
      icon: Radio,
      color: "sky",
      badge: "Real-Time",
    },
    {
      title: "Claude AI-Assisted Engineering",
      description:
        "Leveraging Claude for deep codebase exploration, edge-case simulation, and test planning—verified with 11+ years of human judgment.",
      icon: Cpu,
      color: "indigo",
      badge: "AI-Augmented",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <User className="w-3.5 h-3.5" />
            <span>About Nawshad Hamid</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Senior Mobile Application Engineer with 11–12 Years Experience
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Specializing in high-performance native Android, multiplatform
            Flutter systems, and mission-critical production maintenance at
            TopOfStack Software.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Full About Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-5">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Engineering Background
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    TopOfStack Software • 2014 – Present
                  </p>
                </div>
              </div>

              {/* Confirmed Text from User Prompt */}
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a senior mobile application developer based in Dhaka,
                  Bangladesh, with approximately{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    11–12 years of professional experience
                  </strong>{" "}
                  at TopOfStack Software. My core specialization is native
                  Android development using{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    Kotlin, Java, XML, and Jetpack Compose
                  </span>
                  , complemented by 1.5 years of Flutter development.
                </p>
                <p>
                  I enjoy building complete, polished Android applications
                  quickly with{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Jetpack Compose and Single-Activity Architecture
                  </strong>
                  , and I am equally comfortable maintaining established
                  production apps across Android, iOS, Windows desktop, and
                  Android TV. My work spans{" "}
                  <span className="text-slate-900 dark:text-slate-100 font-medium">
                    MVVM and Clean Architecture, modularization, background
                    processing, audio downloading and offline functionality,
                    WebRTC-based voice calling, and Android TV apps built for
                    continuous operation
                  </span>
                  .
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/80 border border-emerald-300/60 dark:border-emerald-900/30 text-slate-700 dark:text-slate-300 text-sm shadow-sm">
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    How I Approach Codebase Changes:
                  </span>
                  "Before changing any code, I study the existing project: its
                  architecture, dependencies, lifecycle behavior, and regression
                  risks. I use Claude as a productivity multiplier for planning,
                  codebase analysis, review, edge-case identification, and test
                  scenarios, while applying my own engineering judgment and
                  verifying every change before delivery."
                </div>
              </div>

              {/* Quick Details Chips */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>TopOfStack Software</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>11–12 Yrs Tenure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Capability Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Core Specializations</span>
            </h3>

            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:bg-white dark:hover:bg-slate-900 duration-200 group shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </h4>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
