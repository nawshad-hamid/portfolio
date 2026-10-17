import React, { useState } from "react";
import {
  Wifi,
  Battery,
  Signal,
  PhoneCall,
  DownloadCloud,
  CheckCircle,
  Play,
  Pause,
  MapPin,
  Car,
  Calendar,
  Tv,
  Monitor,
  Sparkles,
  BookOpen,
} from "lucide-react";

interface PhonePreviewProps {
  initialApp?: string;
}

export const PhonePreview: React.FC<PhonePreviewProps> = ({
  initialApp = "muslim-bangla",
}) => {
  const [activeApp, setActiveApp] = useState(initialApp);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[370px]">
      {/* Ambient Android Glow */}
      <div className="absolute -inset-1 rounded-[3.2rem] bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 opacity-30 blur-xl animate-pulse-glow" />

      {/* Phone Hardware Frame */}
      <div className="relative rounded-[3rem] p-3 bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-slate-700/80 shadow-2xl shadow-emerald-950/40">
        {/* Outer Bezel Rim */}
        <div className="relative rounded-[2.4rem] overflow-hidden bg-slate-950 border border-slate-800 flex flex-col h-[620px] text-slate-100 select-none">
          {/* Status Bar */}
          <div className="bg-slate-900/90 backdrop-blur-md px-6 pt-3 pb-2 flex items-center justify-between text-xs z-20 border-b border-slate-800/60">
            <span className="font-semibold tracking-tight text-slate-200">
              12:30
            </span>

            {/* Camera Punch Hole */}
            <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-700 shadow-inner" />

            <div className="flex items-center gap-1.5 text-slate-300">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              <div className="flex items-center gap-0.5 text-emerald-400 font-medium">
                <span>100%</span>
                <Battery className="w-3.5 h-3.5 fill-emerald-400" />
              </div>
            </div>
          </div>

          {/* Screen Body */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-none">
            {/* APP 1: Muslim Bangla */}
            {activeApp === "muslim-bangla" && (
              <div className="space-y-3 animate-fade-in">
                {/* App Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-emerald-500/20">
                      MB
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100">
                        Muslim Bangla
                      </h4>
                      <p className="text-[10px] text-emerald-400">
                        Android • Kotlin & Compose
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live
                  </span>
                </div>

                {/* Prayer Time Card */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-950/70 to-slate-900 border border-emerald-800/40 shadow-sm">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                    <span>Dhaka, Bangladesh</span>
                    <span className="text-emerald-400 font-medium">
                      Next: Maghrib
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-lg font-extrabold text-white">17:42</p>
                      <p className="text-[10px] text-slate-300">
                        Countdown: in 24 mins
                      </p>
                    </div>
                    <div className="grid grid-cols-5 gap-1 text-[9px] text-center">
                      <div className="p-1 rounded bg-slate-800/60">
                        <p className="text-slate-400">Fajr</p>
                        <p className="font-bold text-white">4:48</p>
                      </div>
                      <div className="p-1 rounded bg-slate-800/60">
                        <p className="text-slate-400">Dhuhr</p>
                        <p className="font-bold text-white">12:02</p>
                      </div>
                      <div className="p-1 rounded bg-slate-800/60">
                        <p className="text-slate-400">Asr</p>
                        <p className="font-bold text-white">15:28</p>
                      </div>
                      <div className="p-1 rounded bg-emerald-700/80 text-white font-bold">
                        <p className="text-emerald-200">Magh</p>
                        <p>17:42</p>
                      </div>
                      <div className="p-1 rounded bg-slate-800/60">
                        <p className="text-slate-400">Isha</p>
                        <p className="font-bold text-white">18:58</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quran Audio Player with Offline Cache */}
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] font-semibold text-slate-200">
                        Surah Al-Fatiha
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md border border-emerald-500/20">
                      <DownloadCloud className="w-2.5 h-2.5" />
                      Offline Cached
                    </span>
                  </div>
                  <p className="text-[11px] text-right font-serif text-amber-200/90 leading-relaxed">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </p>

                  {/* Waveform & Play button */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-7 h-7 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-slate-950 font-bold transition-transform active:scale-95 shadow-md"
                    >
                      {isPlayingAudio ? (
                        <Pause className="w-3.5 h-3.5" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      )}
                    </button>
                    <div className="flex-1 flex items-center gap-0.5 h-5 px-1 bg-slate-950 rounded-lg border border-slate-800">
                      {[
                        12, 18, 8, 22, 14, 26, 16, 20, 10, 24, 18, 12, 22, 16,
                        14, 20, 10, 16,
                      ].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-full transition-all duration-300 ${
                            isPlayingAudio
                              ? "bg-emerald-400 animate-pulse"
                              : "bg-slate-700"
                          }`}
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                    <span className="text-[9px] text-slate-400 font-mono">
                      01:42
                    </span>
                  </div>
                </div>

                {/* WebRTC Voice Calling Card */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                        <PhoneCall className="w-3.5 h-3.5" />
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-100">
                        WebRTC Voice Call
                      </p>
                      <p className="text-[9px] text-slate-400">
                        Low-latency Socket.IO link
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Connected
                  </span>
                </div>
              </div>
            )}

            {/* APP 2: EasyTrax Standard */}
            {activeApp === "easytrax-standard" && (
              <div className="space-y-3 animate-fade-in">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white font-bold text-xs shadow-md">
                      ET
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100">
                        EasyTrax Standard
                      </h4>
                      <p className="text-[10px] text-amber-400">
                        IoT Telemetry & Fleet
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Tracking
                  </span>
                </div>

                {/* Simulated GPS Map */}
                <div className="relative h-36 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden p-2 flex flex-col justify-between">
                  {/* Map Grid Lines */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Active Vehicle Marker */}
                  <div className="relative z-10 flex items-center gap-2 bg-slate-950/80 backdrop-blur-sm p-1.5 rounded-lg border border-slate-700/60 w-fit">
                    <Car className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] font-mono font-bold text-slate-200">
                      DHAKA-GA-11-2034
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center justify-center py-4">
                    <div className="relative flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 animate-ping absolute" />
                      <div className="w-5 h-5 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center shadow-lg">
                        <MapPin className="w-3 h-3 text-slate-950" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex justify-between items-center text-[9px] text-slate-300 bg-slate-950/80 backdrop-blur-sm p-1.5 rounded-lg border border-slate-800">
                    <span>Gulshan-2 → Banani Route</span>
                    <span className="text-emerald-400 font-bold">64 km/h</span>
                  </div>
                </div>

                {/* Telemetry Stats */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[9px] text-slate-400">Ignition</p>
                    <p className="text-[11px] font-bold text-emerald-400">
                      RUNNING
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[9px] text-slate-400">Fuel Level</p>
                    <p className="text-[11px] font-bold text-slate-200">76%</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[9px] text-slate-400">Satellites</p>
                    <p className="text-[11px] font-bold text-sky-400">
                      14 Fixed
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400">Foreground Service:</span>
                  <span className="text-emerald-400 font-mono font-medium">
                    Active (Battery Optimized)
                  </span>
                </div>
              </div>
            )}

            {/* APP 3: Permis Go */}
            {activeApp === "permis-go" && (
              <div className="space-y-3 animate-fade-in">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-bold text-xs shadow-md">
                      PG
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100">
                        Permis Go
                      </h4>
                      <p className="text-[10px] text-blue-400">
                        Flutter • iOS & Android
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    France
                  </span>
                </div>

                {/* Progress Card */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-950/70 to-slate-900 border border-blue-800/40 space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-300">Formation Conduite</span>
                    <span className="text-blue-300 font-bold">
                      18 / 20 Heures
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <p className="text-[9px] text-slate-400">
                    Prochaine étape: Examen blanc pratique
                  </p>
                </div>

                {/* Next Lesson Card */}
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-200">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>Leçon Confirmée</span>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-mono">
                      Demain 10:00
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-white">
                        Moniteur: Laurent M.
                      </p>
                      <p className="text-[9px] text-slate-400">
                        Point de rendez-vous: Gare de Lyon
                      </p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                {/* Action button */}
                <button className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] transition-colors shadow-md">
                  Réserver un créneau d'entraînement
                </button>
              </div>
            )}

            {/* APP 4: Muslim Bangla Signage (TV) */}
            {activeApp === "muslim-bangla-signage" && (
              <div className="space-y-3 animate-fade-in">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center text-white font-bold text-xs shadow-md">
                      <Tv className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100">
                        Android TV Signage
                      </h4>
                      <p className="text-[10px] text-purple-400">
                        24/7 Unattended System
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    24h High Availability
                  </span>
                </div>

                {/* Digital Signage Screen Simulation */}
                <div className="p-3 rounded-2xl bg-slate-900 border border-purple-900/40 space-y-2">
                  <div className="flex justify-between items-center text-[10px] border-b border-slate-800 pb-1.5">
                    <span className="text-purple-300 font-bold">
                      Mosque Central Display
                    </span>
                    <span className="font-mono text-emerald-400 text-[9px]">
                      Uptime: 2,418 hrs
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center pt-1">
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      <p className="text-[9px] text-slate-400">Current Azan</p>
                      <p className="text-base font-extrabold text-purple-300">
                        Asr 15:28
                      </p>
                      <p className="text-[8px] text-slate-500">
                        Iqamah in 15 mins
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      <p className="text-[9px] text-slate-400">Next Prayer</p>
                      <p className="text-base font-extrabold text-emerald-400">
                        Maghrib
                      </p>
                      <p className="text-[8px] text-slate-500">Time: 17:42</p>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-purple-950/40 border border-purple-800/30 text-[9px] space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>OTA Remote Config:</span>
                      <span className="text-emerald-400">SYNCED (v4.8)</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Watchdog Auto-Restart:</span>
                      <span className="text-purple-300">ENABLED</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Offline Multi-tier Cache:</span>
                      <span className="text-emerald-400">100% READY</span>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[9px] text-slate-400 text-center">
                  Engineered for continuous zero-crash operation on Android TV
                  hardware
                </div>
              </div>
            )}

            {/* APP 5: Muslim Bangla Windows Desktop */}
            {activeApp === "muslim-bangla-windows" && (
              <div className="space-y-3 animate-fade-in">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white font-bold text-xs shadow-md">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100">
                        Muslim Bangla PC
                      </h4>
                      <p className="text-[10px] text-sky-400">
                        Flutter • Windows Desktop
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    MS Store
                  </span>
                </div>

                {/* Windows Window frame */}
                <div className="rounded-xl bg-slate-900 border border-sky-900/50 overflow-hidden">
                  <div className="bg-slate-950 px-2 py-1 flex items-center justify-between border-b border-slate-800 text-[9px] text-slate-400">
                    <span className="flex items-center gap-1 font-mono">
                      <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
                      Muslim Bangla Desktop v2.4
                    </span>
                    <div className="flex items-center gap-1 font-mono">
                      <span>—</span>
                      <span>□</span>
                      <span className="text-red-400">✕</span>
                    </div>
                  </div>

                  <div className="p-3 space-y-2">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[10px] flex justify-between items-center">
                      <div>
                        <p className="font-bold text-white">
                          System Tray Integration
                        </p>
                        <p className="text-[8px] text-slate-400">
                          Minimizes to Windows Notification Area
                        </p>
                      </div>
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[10px]">
                      <p className="text-slate-300 font-semibold mb-1">
                        Desktop Multi-Window Engine
                      </p>
                      <p className="text-[8px] text-slate-400 leading-relaxed">
                        High-DPI font rendering, Windows registry audio hooks,
                        and low memory footprint (~48MB RAM).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-center text-[10px] text-sky-300">
                  Certified & Published on Microsoft Store
                </div>
              </div>
            )}
          </div>

          {/* Interactive Phone Bottom App Switcher */}
          <div className="bg-slate-900/95 backdrop-blur-md px-2 py-2 border-t border-slate-800 flex items-center justify-around z-20">
            <button
              onClick={() => setActiveApp("muslim-bangla")}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
                activeApp === "muslim-bangla"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              title="Muslim Bangla (Android)"
            >
              <div className="w-4 h-4 rounded-md bg-emerald-500 flex items-center justify-center text-[8px] text-slate-950 font-bold">
                MB
              </div>
              <span className="text-[8px] font-medium">Android</span>
            </button>

            <button
              onClick={() => setActiveApp("easytrax-standard")}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
                activeApp === "easytrax-standard"
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              title="EasyTrax Standard"
            >
              <Car className="w-4 h-4" />
              <span className="text-[8px] font-medium">GPS</span>
            </button>

            <button
              onClick={() => setActiveApp("permis-go")}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
                activeApp === "permis-go"
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              title="Permis Go (Flutter)"
            >
              <div className="w-4 h-4 rounded-md bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">
                PG
              </div>
              <span className="text-[8px] font-medium">Flutter</span>
            </button>

            <button
              onClick={() => setActiveApp("muslim-bangla-signage")}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
                activeApp === "muslim-bangla-signage"
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              title="Muslim Bangla Signage (Android TV)"
            >
              <Tv className="w-4 h-4" />
              <span className="text-[8px] font-medium">TV</span>
            </button>

            <button
              onClick={() => setActiveApp("muslim-bangla-windows")}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
                activeApp === "muslim-bangla-windows"
                  ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              title="Muslim Bangla Windows Desktop"
            >
              <Monitor className="w-4 h-4" />
              <span className="text-[8px] font-medium">Desktop</span>
            </button>
          </div>

          {/* Android Home Navigation Gesture Bar */}
          <div className="bg-slate-950 py-1.5 flex justify-center items-center">
            <div className="w-24 h-1 bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div className="mt-3 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          Tap any app icon on the bottom bar to switch preview
        </span>
      </div>
    </div>
  );
};
