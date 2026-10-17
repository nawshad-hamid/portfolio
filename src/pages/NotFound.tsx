import React from "react";
import { ArrowLeft, Smartphone } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
        <Smartphone className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-black text-white mb-2">404</h1>
      <h2 className="text-xl font-bold text-slate-300 mb-4">
        Activity Not Found
      </h2>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        The requested Intent or route does not exist in this Android lifecycle
        stack.
      </p>
      <a
        href="./"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-400 text-slate-950 font-bold text-sm hover:bg-emerald-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Main Activity</span>
      </a>
    </div>
  );
};

export default NotFound;
