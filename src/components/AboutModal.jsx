import React from 'react';
import { Info, X, Users, BookOpen, ShieldCheck } from 'lucide-react';
import { aboutContent } from '../data/aboutContent';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] border border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 rounded-t-3xl">
          <h2 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <Info className="text-blue-600" size={22} /> About ClinicalAssist
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Mission Section */}
          <section className="space-y-2">
            <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px]">Our Mission</p>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">{aboutContent.mission.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-blue-500 pl-4">
              "{aboutContent.mission.text}"
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <span className="font-bold">Objective:</span> {aboutContent.mission.objective}
            </p>
          </section>

          {/* Creators Section */}
          <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-800 dark:text-white font-bold">
              <Users size={18} className="text-purple-500" /> Development Team
            </div>
            <div className="grid grid-cols-1 gap-2">
              {aboutContent.team.map((member) => (
                <div key={member.name} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <p className="font-black text-slate-900 dark:text-white">{member.name}</p>
                  <p className="text-xs text-slate-500">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sourcing Section */}
          <section className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-800 dark:text-white font-bold">
              <BookOpen size={18} className="text-emerald-500" /> Data Integrity
            </div>
            <p className="text-slate-500 text-xs">{aboutContent.sourcing.text}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {aboutContent.sourcing.platforms.map(p => (
                <span key={p} className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-md border border-emerald-100 dark:border-emerald-800">
                  {p}
                </span>
              ))}
            </div>
          </section>

          {/* Copyright Note */}
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-900/40 flex gap-3">
            <ShieldCheck size={20} className="text-amber-600 shrink-0" />
            <p className="text-[10px] text-amber-800 dark:text-amber-300 font-medium">
              {aboutContent.copyright}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-3xl text-center">
          <button onClick={onClose} className="px-8 py-2 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-sm transition-transform active:scale-95">
            Dismiss
          </button>
        </div>

      </div>
    </div>
  );
}