/**
 * COMPONENT: AboutModal
 * DESCRIPTION: High-impact organizational identity and clinical mission.
 * PSYCHOLOGY: Uses "Authority" and "Ownership" framing to establish professional trust.
 */

import React from 'react';
import { X, Stethoscope, Target, Users, Lock, Cpu, Database, ShieldCheck } from 'lucide-react';
// Import your centralized version config
import { APP_VERSION, BUILD_NUMBER, LAST_REVIEW_DATE } from '../config/version';
import { aboutContent } from '../data/aboutContent';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* BRAND IDENTITY HEADER: UPDATED BRAND LOGO */}
        <div className="p-10 text-center border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 shrink-0">
          <div className="bg-[#2563EB] p-5 rounded-[2rem] w-fit mx-auto mb-5 shadow-2xl shadow-blue-500/30 transform -rotate-3 transition-transform hover:rotate-0">
            <Stethoscope className="text-white" size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter leading-none">
            Clinical<span className="text-[#2563EB]">Assist</span>
          </h2>
        </div>

        <div className="p-8 overflow-y-auto no-scrollbar space-y-10">
          
          {/* SECTION 1: THE MISSION (FULL TEXT PRESERVED) */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} className="text-blue-600" />
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Our Strategic Objective</h3>
            </div>
            <p className="text-base font-bold text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "{aboutContent.mission.text}"
            </p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              ClinicalAssist was engineered to eliminate cognitive load at the point of care. By synthesizing vast medical compendia into actionable intelligence, we empower clinicians to focus on what matters: <span className="text-slate-900 dark:text-white font-black uppercase tracking-tight">patient safety and clinical precision</span>.
            </p>
          </section>

          {/* SECTION 2: THE ARCHITECTS (FULL TEAM LIST PRESERVED) */}
          <section className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <Users size={18} className="text-purple-500" />
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">The Development Team</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutContent.team.map((member) => (
                <div key={member.name} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 group hover:border-blue-500 transition-all">
                  <p className="font-black text-slate-900 dark:text-white text-base tracking-tight">{member.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: PROPRIETARY OWNERSHIP (FULL LEGAL NOTICE PRESERVED) */}
          <section className="p-6 bg-slate-950 rounded-[2.5rem] border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Lock size={16} className="text-rose-500" />
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Intellectual Property Notice</h3>
            </div>
            <p className="text-xs font-bold text-slate-400 leading-relaxed">
              The proprietary architecture, clinical logic, and UI frameworks within this tool are the <span className="text-white uppercase underline">Sole Intellectual Property of the ClinicalAssist Team</span>. Unauthorized distribution or reverse engineering is a direct violation of our clinical mission and legal standards.
            </p>
          </section>

          {/* SECTION 4: SYSTEM BUILD DATA */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <Cpu size={14} className="text-blue-500" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Build Version</span>
              </div>
              <p className="text-sm font-black text-slate-900 dark:text-white">v{APP_VERSION}</p>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <Database size={14} className="text-emerald-500" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Identifier</span>
              </div>
              <p className="text-sm font-black text-slate-900 dark:text-white">{BUILD_NUMBER}</p>
            </div>
          </div>

          {/* FOOTER VERIFICATION */}
          <div className="flex items-center justify-between p-5 bg-blue-50 dark:bg-blue-900/20 rounded-[2rem] border border-blue-100 dark:border-blue-800">
             <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-blue-600" />
                <p className="text-[10px] font-black text-blue-800 dark:text-blue-300 uppercase tracking-widest">Evidence Status</p>
             </div>
             <span className="text-xs font-black text-blue-600 uppercase">Verified {LAST_REVIEW_DATE}</span>
          </div>
        </div>

        {/* BINDING DISMISS ACTION */}
        <div className="p-8 pt-0 mt-auto shrink-0">
          <button 
            onClick={onClose} 
            className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-black transition-all active:scale-95"
          >
            Acknowledge Mission
          </button>
        </div>
      </div>
    </div>
  );
}